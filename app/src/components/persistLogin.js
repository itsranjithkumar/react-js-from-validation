import { Outlet } from 'react-router-dom';  // Correct import for Outlet
import { useState, useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';

function PersistLogin() {  // Renamed to start with an uppercase letter
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        
        // Verify refresh token if there's no access token
        !auth?.accessToken ? setIsLoading(false) : verifyRefreshToken();

    }, [auth?.accessToken, refresh]);  // Add dependencies

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
    }, [isLoading, auth?.accessToken]);  // Add dependencies

    return (
        <>
            {isLoading
                ? <p>Loading...</p>
                : <Outlet />  // Correct usage of Outlet component
            }
        </>
    );
}

export default PersistLogin;
