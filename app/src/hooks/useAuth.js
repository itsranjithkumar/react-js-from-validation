import { useContext} from 'react';
import AuthContext from '../context/AuthProvider';
// import { useAuth } from './useAuth';


const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;