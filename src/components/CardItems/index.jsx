import { Table } from '../index.js';
import { useCart } from '../../hooks/CartContext.jsx';
import { formatPrice } from '../../utils/formatprice.js';
import { ProductImage, ButtonGroup, EmptyCart, TrashImagem } from './style.js';
import trash from '../../assets/trash.svg';

export function CardItems() {

    const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } = useCart();

    console.log(cartProducts)
    return (

        <Table.Root>
            <Table.Header>
                <Table.Tr>

                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>


            <Table.Body>{cartProducts?.length ? (

                cartProducts.map((product) => (

                    <Table.Tr key={product.id}>
                        <Table.Td>
                            <ProductImage src={product.url} alt={product.name} />
                        </Table.Td>
                        <Table.Td>{product.name}</Table.Td>
                        <Table.Td>{product.currencyValue}</Table.Td>


                        <Table.Td isAlignCenter>
                            {/* ButtonGroup estruturado e fechado corretamente */}
                            <ButtonGroup>
                                <button type="button" onClick={() => decreaseProduct(product.id)}>-</button>
                                <span>{product.quantity}</span>
                                <button type="button" onClick={() => increaseProduct(product.id)}>+</button>
                            </ButtonGroup>

                        </Table.Td>
                        <Table.Td>{formatPrice(product.quantity * product.price)}</Table.Td>
                        <Table.Td>
                            <TrashImagem src={trash} alt="icone-lixeira" onClick={() => deleteProduct(product.id)} />
                        </Table.Td>
                    </Table.Tr>
                ))

            ) : (<EmptyCart></EmptyCart>

            )}</Table.Body>
        </Table.Root >



    )

}