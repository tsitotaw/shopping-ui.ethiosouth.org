import axios from 'axios';
import qs from 'qs';

const axiosApiHelper = (() => {

   const baseUrl = "http://localhost:8081/";
   const apiPrefix = "api/v1/"
   const header = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Authorization": "Bearer " + localStorage.getItem("token") 
   };

   const authenticate = (username, password) => {
      return axios({
         method: 'POST', headers: header, data: qs.stringify({
            username: username,
            password: password
         }),
         url: baseUrl+"login"
      })
         .then((data) => {
            return data;
         })
         .catch((err) => {
            return {
               error: err,
               info: "unable to authenticate user",
               data: false
            }
         });
   };

   const save = (data, resource) => {
      return axios({
         method: 'POST', headers: header, data: qs.stringify(data),
         url: baseUrl.concat(apiPrefix).concat(resource)
      })
         .then((data) => {
            return data;
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const update = (data, resource, id) => {
      return axios({
         method: 'PUT', headers: header, data: qs.stringify(data),
         url: baseUrl.concat(apiPrefix).concat(resource) + `/${id}`
      })
         .then((data) => {
            return true;
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const remove = (resource, id) => {
      return axios({
         method: 'DELETE', headers: header,
         url: baseUrl.concat(apiPrefix).concat(resource) + `/${id}`
      })
         .then((data) => {
            return true;
         })
         .catch((err) => {
            return {
               error: err,
               info: "unable to remove resource",
               data: false
            };
         });
   };

   const findAll = (resource) => {
      return axios({
         method: 'GET',
         headers: header,
         url: baseUrl.concat(apiPrefix).concat(resource)
      })
         .then((res) => {
            return {
               data: res.data
            };
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const findById = (resource, id) => {
      return axios({
         method: 'GET',
         headers: header,
         url: baseUrl.concat(apiPrefix).concat(resource) + `/${id}`
      })
         .then((res) => {
            return {
               data: res.data
            };
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return {
      authenticate: authenticate,
      findAll: findAll,
      findById: findById,
      save: save,
      update: update,
      delete: remove
   };
})();

export default axiosApiHelper;