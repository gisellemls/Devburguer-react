import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row.jsx';
import { api } from '../../../services/api.js';
import { useEffect, useState } from 'react';
import { Filter, FilterOptions } from './style.js';
import { orderStatusOptions } from './orderstatuSelect.js';

// função para criar os dados da tabela //
function createData(orders) {
    return {
        name: orders.user.name,
        orderId: orders._id,
        date: orders.createdAt,
        status: orders.status,
        products: orders.products,


    };
}

// Componente principal para exibir os pedidos e permitir a alteração do status //
export function Orders() {

    // estados para armazenar os pedidos, os pedidos filtrados, as linhas da tabela e o status ativo //
    const [orders, setOrders] = useState([]);
    const [filterOrders, setFilterOrders] = useState([]);
    const [rows, setRows] = useState([])
    const [activeStatus, setActiveStatus] = useState(0)

    // função para carregar os pedidos //
    useEffect(() => {

        async function loadOrders() {
            const { data } = await api.get('/orders');
            setFilterOrders(data)
            setOrders(data)
            console.log(data)
        }

        loadOrders()
    }, []);

    // função para criar as linhas da tabela //
    useEffect(() => {

        // cria um novo array de linhas a partir dos pedidos filtrados //
        const newRows = filterOrders.map(order => createData(order))

        // atualiza o estado das linhas da tabela //
        setRows(newRows)
    }, [filterOrders])

    // função para filtrar os pedidos por status //
    function handleStatus(status) {

        if (status.id === 0) {
            // se o status for "Todos", exibe todos os pedidos //
            setFilterOrders(orders)

        } else {

            // filtra os pedidos com base no status selecionado //
            const newOrders = orders.filter(order => order.status === status.value);

            // atualiza o estado dos pedidos filtrados //
            setFilterOrders(newOrders)
        }
        // atualiza o estado do status ativo para destacar a opção selecionada //
        setActiveStatus(status.id)

    }


    useEffect(() => {

        if (activeStatus === 0) {

            setFilterOrders(orders);

        } else {

            const statusIndex = orderStatusOptions.findIndex(
                (item) => item.id === activeStatus,

            );

            const newFilteredOrders = orders.filter((order) => order.status === orderStatusOptions[statusIndex].value);

            setFilterOrders(newFilteredOrders)

        }


    }, [orders, activeStatus])

    return (
        <>
            <Filter>
                {orderStatusOptions.map((status) => (
                    <FilterOptions
                        key={status.id}
                        onClick={() => handleStatus(status)}
                        $isActiveStatus={activeStatus === status.id}

                    >
                        {status.label}
                    </FilterOptions>
                ))}

            </Filter>


            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Pedidos</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Data do pedido</TableCell>
                            <TableCell>Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.orderId} row={row}
                                row={row}
                                orders={orders}
                                setOrders={setOrders}

                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
