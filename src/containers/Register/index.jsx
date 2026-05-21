import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/Api.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import {
    RegisterContainer,
    LeftContainer,
    RightContainer,
    Title,
    Link,
    Form,
    InputLogin,
} from './styles.js';

import { Button } from '../../components/Button/index.jsx';

export function Register() {

    const navigate = useNavigate();

    // Validação do formulário usando Yup //
    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup
                .string()
                .email('Digite um e-mail válido')
                .required('O e-mail é obrigatório'),
            password: yup
                .string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('Digite uma senha'),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password'), null], 'As senhas não coincidem')
                .required('Confirme sua senha'),
        })
        .required();

    // Configuração do React Hook Form com o resolver do Yup //
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    console.log(errors);

    // Função para lidar com o envio do formulário & Aqui você pode fazer a chamada para a API de login //
    const onSubmit = async (data) => {

        try {
            const { status } = await api.post('/users',
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },

                {
                    validateStatus: () => true, // Permite que o Axios trate todos os status como válidos para que possamos lidar com eles manualmente //
                },
            );

            if (status === 200 || status === 201) {

                setTimeout(() => {

                    navigate('/login');

                }, 2000);

                toast.success('Conta criada com sucesso!')

            } else if (status === 409) {
                toast.error('Email já cadastrado')

            } else {
                throw new Error();

            }

            console.log(status)

        } catch (error) {

            toast.error('Falha no sistema! Tente novamente.')
        }
    };

    return (
        <RegisterContainer>
            <LeftContainer />

            <RightContainer>
                <Title>Criar conta</Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputLogin>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" {...register('name')} />
                        <p>{errors?.name?.message}</p>
                    </InputLogin>
                    <InputLogin>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputLogin>
                    <InputLogin>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputLogin>
                    <InputLogin>
                        <label htmlFor="confirmPassword">Confirmar senha</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            {...register('confirmPassword')}
                        />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputLogin>

                    <Button type="submit">CONFIRMAR CADASTRO</Button>
                </Form>

                <p>
                    Já possui conta? <Link to="/login">Clique aqui.</Link>
                </p>
            </RightContainer>
        </RegisterContainer>
    );
}
