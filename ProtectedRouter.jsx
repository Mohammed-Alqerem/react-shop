import { useAuthStore } from './src/store/useAuthStore'
import { Navigate } from 'react-router-dom';

export default function ProtectedRouter({ children }) {


    const token = useAuthStore((state) => state.token);
    return (
        <>
            {token ? children : <Navigate to={'/login'} />}
        </>
    )
}
