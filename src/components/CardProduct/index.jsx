import PropTypes from "prop-types"
import { CardImage, Container } from "./style"
import { CardButton } from "../CardButton";
import { useCart } from '../../hooks/CartContext'

export function CardProduct({ product }) {

    const { putProduct } = useCart();

    return (

        <Container>

            <CardImage src={product.url} alt={product.name} />

            <div>

                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>


            <CardButton onClick={() => putProduct(product)}></CardButton>
        </Container>



    )

}

CardProduct.propTypes = {

    product: PropTypes.object,


}