const API_BASE_ADDRESS = 'http://localhost:5000/api/users';
export default class Api {
   static getUsers() {
       const uri = API_BASE_ADDRESS + "/usersList";
       return fetch(uri, {
           method: 'GET'
       });
   }
}