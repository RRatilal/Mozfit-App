import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../Services/api';

interface User {
    email: String;
    photo: {
        url: String
    }
    _id: String
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    workouts: any[] | null;
    loading: boolean;
    signIn(
        email: String,
        password: String
    ): Promise<void>;
    signOut(): void;
    getAllUserWorkouts(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [workouts, setWorkouts] = useState<[] | null>(null)
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

    async function getAllUserWorkouts() {
        try {
            const response = await api.get(`/workout/${user?._id}`);

            setWorkouts(response.data);
        } catch (error) {
            alert('falha ao buscar dados')
        }
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, workouts, loading, signIn, signOut, getAllUserWorkouts }} >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}