import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../services/Api.js';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext.jsx";



import {
    LoginContainer,
    LeftContainer,
    RightContainer,
    Title,
    Link,
    Form,
    InputLogin,

} from './styles.js';


import { Button } from '../../components/Button/index.jsx';


export function Login() {

    const navigate = useNavigate();
    const { putUserData } = useUser()

    // Validação do formulário usando Yup //
    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
        })
        .required()


    // Configuração do React Hook Form com o resolver do Yup //
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    console.log(errors)

    // Função para lidar com o envio do formulário & Aqui você pode fazer a chamada para a API de login //
    const onSubmit = async (data) => {
        const { data: userData } = await toast.promise(api.post('/sessions', {

            email: data.email,
            password: data.password,

        }),
            {
                pending: 'Verificando suas credenciais...',
                success: {
                    render() {
                        setTimeout(() => {
                            if (userData?.admin) {
                                navigate('/admin/pedidos');
                            } else {
                                navigate('/')
                            }


                        }, 2000);
                        return 'Login bem sucedido! Redirecionando...';
                    },
                },
                error: 'E-mail ou Senha Incorretos',
            },

        );
        putUserData(userData)

    }



    return (

        <LoginContainer>
            <LeftContainer />

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>House Burguer !</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputLogin>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputLogin>
                    <InputLogin>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputLogin>

                    <Button type="submit">ENTRAR</Button>
                </Form>

                <p>
                    Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
                </p>
            </RightContainer>
        </LoginContainer>
    );
}
