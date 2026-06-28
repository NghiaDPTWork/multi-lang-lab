import { useMutation, useQueryClient } from "@tanstack/react-query"
import { EmployeeFormField } from "../schema/employee-schema"
import { createEmployee } from "../services/employee-service"
import { useNavigate } from "react-router-dom"
import { Employee } from "../types"
import { toast } from "sonner"

export const useCreateEmployeeMutation = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: EmployeeFormField) => createEmployee(data),

    // If success do something
    onSuccess: (employee: Employee) => {
      queryClient.invalidateQueries({ queryKey: ["employees"] })
      navigate(`/admin/employees/${employee.id}`)
      toast.success("Thêm nhân viên thành công")
    },

    // If error do something
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Thêm nhân viên thất bại")
    },

    // Final
    onSettled: () => {
      console.log("onSettled")
    },
  })
}
