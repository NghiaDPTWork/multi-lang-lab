import axios from 'axios';
import { AuthResponse } from '../types';
import { LoginFormValues } from '../schemas/auth-schema';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export const authService = {
  login: async (credentials: LoginFormValues): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  }
};
