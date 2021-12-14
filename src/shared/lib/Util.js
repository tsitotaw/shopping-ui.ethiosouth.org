import jwt from 'jwt-decode';
import _ from 'lodash';

/**
 * authorities
 *  A => loggedInUserId
 *  B => role
 *  C => Permissions
 *  D => isSeller
 *  E => isSellerApprovedByAdmin
 */
const getTokenUser = (() => {
    const getTokenUserObj = () => {
        const token = localStorage.token;//.getItem(token);
        if(!token) { return false;}
        const user = jwt(token);
    
        return user;
    }
    const getLoggedInUserId = () => {
        return _.replace(getTokenUserObj().role[0], "A:", "") ;
    };

    const hasPermission = (route) => {
        let loggedInUserPermissions = getLoggedInUserPermissions();
        if(!loggedInUserPermissions) return false;
        let routes = loggedInUserPermissions.split(",");
        
        return (_.indexOf(routes, route) >= 0) ? true : false;
    };
    
    const getLoggedInUserEmail = () => {
        return getTokenUserObj().sub;
    };
    const getLoggedInUserPermissions = () => {
        if(!getTokenUserObj()) {
            return false;
        }
        return _.replace(getTokenUserObj().role[2], "C:", "");
    };
    const isLoggedInSellerApproved = () => {
        if(!getTokenUserObj()) {
            return false;
        }
        let isSeller = _.replace(getTokenUserObj().role[3], "D:", "");
        let isApproved = _.replace(getTokenUserObj().role[4], "E:", "");
        return (isSeller === "true" && isApproved === "true") ? true : false;
    };
 
    return {
        getLoggedInUserId: getLoggedInUserId,
        getLoggedInUserEmail: getLoggedInUserEmail,
        getLoggedInUserPermissions: getLoggedInUserPermissions,
        hasPermission: hasPermission,
        isLoggedInSellerApproved: isLoggedInSellerApproved
    };
 })();

 export default getTokenUser;