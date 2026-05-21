import { createContext, useContext, useState, useEffect } from 'react';

const UseContext = createContext();

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);

        localStorage.setItem('houserburguer:userData', JSON.stringify(userInfo));
    };

    const logout = () => {
        setUserInfo([]);
        localStorage.removeItem('houserburguer:userData');
    };

    useEffect(() => {
        const userInfoStorage = localStorage.getItem('houserburguer:userData');

        if (userInfoStorage) {
            setUserInfo(JSON.parse(userInfoStorage));
        }
    }, []);

    return (
        <UseContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UseContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UseContext);

    if (!context) {
        throw new Error('useUser must be a valid context');
    }
    return context;
};
