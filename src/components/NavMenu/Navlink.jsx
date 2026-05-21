import { Receipt, Package, ListPlus } from '@phosphor-icons/react';



export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <Receipt weight="bold" />,
    },




    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <Package weight="bold" />,
    },




    {
        id: 3,
        label: 'Cadastrar Produto',
        path: '/admin/novo-pedido',
        icon: <ListPlus weight="bold" />,
    },

]