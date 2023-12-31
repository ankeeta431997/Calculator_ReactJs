import axios  from "axios";


const API_URL = "http://localhost:8080/SpringSecurityWithJwt/api/auth/";
//const API_URL = "http://localhost:8080/SpringSecurityJwt/api/auth/";



const register = (username, email,role, password) => {
    return axios.post(API_URL + "signup", {
      username,
      email,
      role,
      password,
    });
  };

  const login = (username, password) => {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  const logout = () => {
    
    localStorage.removeItem("user");
  };

  const AuthorizationService={
    register,
    login,
    logout,
  }
  export default AuthorizationService;