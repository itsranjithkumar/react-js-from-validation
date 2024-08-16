import useLocalStorage from "../../hooks/useLocalStorage";
const useToggle = (key,initValue) => {
    const [value,setValue]=useLocalStorage(key,initValue);
    
    const toggle=()=>{
        setValue(prev=>{
            return typeof value === 'boolean' ? !prev : prev;
        })

    }
    return [value,toggle];
}


export default useToggle;