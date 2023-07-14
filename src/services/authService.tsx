import axios from 'axios';
import jwt_decode from 'jwt-decode';

interface DecodedToken {
  email: string;
  exp: number;
  iat: number;
  id: number;
  name: string;
  password: string;
  roleId: number;
  status: string;
}

const url = 'https://ecommercepredators.onrender.com/api/login';

const login = async (usr: any) => {
  const response = await axios.post(url, usr);
  if (response.data) {
    const { token } = response.data.data;
    localStorage.setItem('token', token);
    const decoded: DecodedToken = jwt_decode(token);
    return decoded.roleId;
  }
  return response.data;
};
// Predators123
const authService = {
  login,
};

export default authService;
