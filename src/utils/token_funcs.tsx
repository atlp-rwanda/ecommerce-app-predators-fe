import jwt_decode from 'jwt-decode';
export interface DecodedToken {
  email: string;
  exp: number;
  iat: number;
  id: number;
  name: string;
  password: string;
  roleId: number;
  status: string;
}
export function getTokenFromLS(targetName: string): string | null {
  const token = localStorage.getItem(targetName);
  return token ? token : null;
}
export function decryptToken(getToken: (tokenName: string) => string | null, tokenName: string): DecodedToken | null {
  const token = getToken(tokenName);
  if (token) {
    try {
      const decoded: DecodedToken = jwt_decode(token);
      return decoded ? decoded : null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  return null;
}
