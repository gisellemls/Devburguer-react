import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, ContainerCheckbox } from "./style.js";
import { useEffect, useState } from 'react';
import { api } from '../../../services/api.js';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const schema = yup
    .object({
        name: yup.string().required("Nome é obrigatório"),
        price: yup.number().positive().required("Preço é obrigatório").typeError("Preço é obrigatório"),
        category: yup.object().required("Categoria é obrigatória"),
        offer: yup.bool(),

    });




export function EditProducts() {

    const navigate = useNavigate()



    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([]);

    // Pegar o produto enviado pela página de produtos para edição //
    // Pega apenas o state (a mochila), sem forçar a abertura do product ainda
    const { state } = useLocation();

    // Tenta pegar o produto de forma segura. O "?" evita o erro vermelho!
    const product = state?.product;



    useEffect(() => {

        // Carregar categorias para o select
        async function loadCategories() {

            const { data } = await api.get('/categories')

            setCategories(data);

        }

        loadCategories();

    }, []);


    // Configuração do formulário com React Hook Form e Yup para validação //
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {

        const productFormData = new FormData()

        productFormData.append('name', data.name)
        productFormData.append('price', data.price * 100)
        productFormData.append('category_id', data.category.id)
        productFormData.append('file', data.file[0])
        productFormData.append('offer', data.offer);

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {

            pending: 'Editando Produto',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar o produto, tente novamente',

        });


        setTimeout(() => {
            navigate('/admin/produtos')

        }, 2000);

    };


    return (

        <Container>

            <Form onSubmit={handleSubmit(onSubmit)}>


                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} defaultValue={product.name} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} defaultValue={product.price / 100} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>


                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input type='file' {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value?.target?.files[0]?.name)
                                register('file').onChange(value)
                            }}
                        />
                        {fileName ? fileName : "Selecione uma imagem"}
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>

                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller

                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                defaultValue={product.category}

                            />
                        )}
                    />
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>

                </InputGroup>

                <InputGroup>

                    <ContainerCheckbox>
                        <input type="checkbox" defaultChecked={product.offer} {...register("offer")} />
                        <Label>Produto em Oferta?</Label>
                    </ContainerCheckbox>
                </InputGroup>


                <SubmitButton >Editar Produto</SubmitButton>

            </Form>













        </Container>


    )




}