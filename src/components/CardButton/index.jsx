import Cart from '../../assets/Vector.svg';
import { ContainerButton } from './style';





export function CardButton({ ...props }) {

    return (


        <ContainerButton {...props}>
            <img src={Cart} alt='Carrinho-de-compra' />
        </ContainerButton>


    )



}