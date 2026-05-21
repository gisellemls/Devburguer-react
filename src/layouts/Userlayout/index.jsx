import { Header } from '../../components/Headers'
import { Footer } from '../../components/Footer';

import { Outlet } from "react-router-dom";

export function UserLayout() {

    return (

        <>

            <Header />
            <Outlet />
            <Footer />

        </>


    )

}