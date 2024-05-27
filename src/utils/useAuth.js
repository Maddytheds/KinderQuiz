export const useAuth= ()=>{
    const userToken = localStorage.getItem('token')
    if(userToken){
        return true;
    }else {
        return false;
    }
}