import { Socket, io } from 'socket.io-client';
import jwt_decode from 'jwt-decode';

export type User = 'user' | 'public' | 'customer_support';

export const UserEvent = {
  SUCCESSFULL_CONNECTION: 'server-message',
  GENERAL_MESSAGE: 'public-message',
  TARGETED_MESSAGE: 'room-message',
  ROOM_MESSAGE: 'private-message',
  JOIN_EVENT: 'join',
  JOINED_NOTIFICATION: 'joined',
};

export interface Message {
  text: string;
  dateTime: string;
  src: User;
}

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

export interface UserCredentials {
  userName: string | null;
  dbId: string | number | null;
}

function getRandomName(): string {
  const randomNumber = Math.floor(Math.random() * 100); // Generate a random integer between 0 and 99
  return 'random' + randomNumber;
}

function getTokenFromLocalStorage(targetName: string): string | null {
  const token = localStorage.getItem(targetName);
  return token ? token : null;
}

function decodeToken(
  getToken: (tokenName: string) => string | null,
  tokenName: string
): DecodedToken | null {
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

export function getUserCredentials(): UserCredentials {
  const JWT_NAME = 'token';
  const decodedToken: DecodedToken | null = decodeToken(
    getTokenFromLocalStorage,
    JWT_NAME
  );

  const userName: string | null = decodedToken?.name || getRandomName();
  const dbId: string | number | null = decodedToken?.id || 1;

  return { userName, dbId };
}

const { userName, dbId }: UserCredentials = getUserCredentials();

const CHAT_SERVER = 'https://ecommercepredators.onrender.com';

export const socket: Socket = io(CHAT_SERVER, {
  autoConnect: false,
  transports: ['websocket'],
  query: {
    user: userName,
    id: dbId,
  },
});
