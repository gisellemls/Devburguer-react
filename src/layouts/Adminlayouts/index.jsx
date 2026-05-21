import { Outlet, Navigate } from "react-router-dom";
import { NavMenu } from "../../components";
import { Container } from "./style.js";

export function AdminLayout() {

    const userData = JSON.parse(localStorage.getItem('houserburguer:userData')) || {};

    // 2. A sua desestruturação genial! Se userData for {}, isAdmin será undefined (o que conta como falso).
    const { admin: isAdmin } = userData;

    return isAdmin ? (

        <Container>
            <NavMenu />
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
        </Container>


    )
        : (<Navigate to="/login" />)


}