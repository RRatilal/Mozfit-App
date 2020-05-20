import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../Services/api';

interface User {
    local: {
        name: string,
        email: string,
        photo: {
            url: string
        }
    }
    _id: string
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(
        email: string,
        password: string
    ): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = localStorage.getItem('@Mozfit:user');
            const storegedToken = localStorage.getItem('@Mozfit:token');

            if (storagedUser && storegedToken) {
                api.defaults.headers.Authorization = `Bearer ${storegedToken}`;
                setUser(JSON.parse(storagedUser))
                setLoading(false)
            }
            if (!storagedUser && !storegedToken) {
                setLoading(false)
            }
        }

        loadStorageData();
    }, [])

    async function signIn(email: String, password: String) {
        try {
            const response = await api.post("/signin", {
                email,
                password
            })

            const { user, token } = response.data;

            setUser(user);

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            localStorage.setItem('@Mozfit:user', JSON.stringify(user));
            localStorage.setItem('@Mozfit:token', token);

        } catch (error) {
            alert('Falha no login, tente novament')
        }
    }

    async function signOut() {
        setUser(null);
        await localStorage.clear();
    }



    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }} >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}