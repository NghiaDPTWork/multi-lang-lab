import axios from 'axios';
import { Employee } from '../types';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export const employeeService = {
  getAll: async (): Promise<Employee[]> => {
    const response = await axios.get(`${API_URL}/employees`);
    return response.data;
  }
};
