import { useQuery } from '@tanstack/react-query';
import { employeeService } from '../services/employee-service';

export function useEmployees() {
  return useQuery({
    queryKey: ['employees'],
    queryFn: employeeService.getAll
  });
}

export function useEmployeeById(id: string | undefined) {
  return useQuery({
    queryKey: ['employee', id],
    queryFn: () => employeeService.getById(id!),
    enabled: !!id
  });
}
