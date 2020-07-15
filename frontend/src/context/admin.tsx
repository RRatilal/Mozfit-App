import React, { createContext, useState, useContext } from 'react';
import api from '../Services/api';

import { useAuth } from './auth';

interface WorkoutDetails {
    id: string;
    description: string,
    duration: number,
    image: {
        name: string,
        url: string
    },
    level: string,
    target: string,
    workoutType: string,
    weeksList: [],
}

interface AdminContextData {
    getAllUserWorkouts(): Promise<void>;
    workouts: WorkoutDetails[] | null;
    workoutDetails: WorkoutDetails | null;
    passingPropsToDatailsPage(details: WorkoutDetails): void
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export const AdminProvider: React.FC = ({ children }) => {
    const { user } = useAuth()
    const [workouts, setWorkouts] = useState<[] | null>(null);
    const [workoutDetails, setWorkoutDetails] = useState<WorkoutDetails | null>(null);



    async function getAllUserWorkouts() {
        try {
            const response = await api.get(`/workout/${user?._id}`);

            setWorkouts(response.data);
        } catch (error) {
            alert('falha ao buscar dados')
        }
    }

    function passingPropsToDatailsPage(details: WorkoutDetails) {
        setWorkoutDetails(details);
    }

    return (
        <AdminContext.Provider value={{ workouts, getAllUserWorkouts, workoutDetails, passingPropsToDatailsPage }}>
            {children}
        </AdminContext.Provider>
    )
}

export function useAdmin() {
    const context = useContext(AdminContext)

    return context
}