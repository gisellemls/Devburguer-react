import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext';

const AppProviver = ({ children }) => {
    return (
        <UserProvider>
            <CartProvider>{children}</CartProvider>
        </UserProvider>
    );
};

export default AppProviver;
