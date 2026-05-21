import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Image } from '@phosphor-icons/react';
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, ContainerCheckbox } from "./styles";
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const schema = yup
    .object({
        name: yup.string().required("Nome é obrigatório"),
        price: yup.number().positive().required("Preço é obrigatório").typeError("Preço é obrigatório"),
        category: yup.object().required("Categoria é obrigatória"),
        offer: yup.bool(),
        file: yup.mixed().test('required', 'Imagem é obrigatória', (value) => {
            return value && value.length > 0;
        }).test('filesize', 'A imagem deve ser menor que 3MB', (value) => {
            return value && value.length > 0 && value[0].size <= 3000000
        }).test('type', 'A imagem deve ser do tip PNG ou JPEG', (value) => {
            return value && value.length > 0 && (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
        })
    });




export function NewProducts() {

    const navigate = useNavigate();

    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function loadCategories() {

            const { data } = await api.get('/categories')

            setCategories(data);

        }

        loadCategories();

    }, []);



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
        productFormData.append('offer', data.offer)
        productFormData.append('file', data.file[0])

        await toast.promise(api.post('/products', productFormData), {

            pending: 'Adicionando Produto',
            success: 'Produto criado com sucesso',
            error: 'Falha ao adicionar o produto, tente novamente',

        })

        setTimeout(() => {
            navigate('/admin/produtos')
        }, 2000);

    }


    return (

        <Container>

            <Form onSubmit={handleSubmit(onSubmit)}>


                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} />
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
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"

                            />
                        )}
                    />
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>

                </InputGroup>

                <InputGroup>

                    <ContainerCheckbox>
                        <input type="checkbox" {...register("offer")} />
                        <Label>Produto em Oferta?</Label>
                    </ContainerCheckbox>
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>

            </Form>













        </Container>


    )




}