import jwt from 'jwt-decode';

const getTokenUser = (() => {
    const getTokenUserObj = () => {
        const token = localStorage.token;//.getItem(token);
        const user = jwt(token);
    
        return user;
    }
    const getLoggedInUserId = () => {
        return getTokenUserObj().role[0];
    };
    
    const getLoggedInUserEmail = () => {
        return getTokenUserObj().sub;
    };
 
    return {
        getLoggedInUserId: getLoggedInUserId,
        getLoggedInUserEmail: getLoggedInUserEmail
    };
 })();

 export default getTokenUser;