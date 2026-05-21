import { createBrowserRouter } from 'react-router-dom';

import { Register, Cart, Home, Menu, Login, CompletePayment, Checkout } from "../containers/index.js";

import { Routes, Route } from 'react-router-dom';
import { UserLayout } from '../layouts/Userlayout/index.jsx';
import { AdminLayout } from '../layouts/Adminlayouts/index.jsx';
import { Orders } from '../containers/Admin/Orders/index.jsx';
import { NewProducts } from '../containers/Admin/NewProducts/index.jsx';
import { EditProducts } from '../containers/Admin/EditProducts/index.jsx';
import { Products } from '../containers/Admin/Products/index.jsx';




export function Router() {

    return (

        <Routes>

            <Route path="/" element={<UserLayout />}>

                <Route path="/" element={<Home />} />
                <Route path="/cardapio" element={<Menu />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/CompletePayment" element={<CompletePayment />} />

            </Route >


            <Route path="/admin" element={<AdminLayout />}>

                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/novo-pedido" element={<NewProducts />} />
                <Route path="/admin/editar-produto" element={<EditProducts />} />
                <Route path="/admin/produtos" element={<Products />} />
            </Route>




            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />




        </Routes>




    )


}




