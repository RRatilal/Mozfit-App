import React from 'react';
import { useAuth } from '../context/auth';

import AuthRoutes from './auth.routes';
import { AppRoutes } from './app.routes';

import GifLoading from '../assets/loading.gif'

const MainRoutes: React.FC = () => {
    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <img src={GifLoading} alt="Loading" />
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default MainRoutes;