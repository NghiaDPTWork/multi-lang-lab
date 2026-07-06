import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "../service";
import { toast } from "sonner";
import type { ApiErrorResponse, AuthResponse, RegisterRequest } from "../types";
import type { AxiosError } from "axios";

export function useRegister() {
  const navigate = useNavigate();

  return useMutation<
    AuthResponse,
    AxiosError<ApiErrorResponse>,
    RegisterRequest
  >({
    mutationFn: (registerData) => authService.register(registerData),

    onSuccess: () => {
      toast.success("Register successfully !!!", {
        description: "Please sign in to be continue.",
      });

      navigate("/login");
    },

    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Register failure, please try again",
      );
    },

    onSettled: () => {
      console.log("Hook register run now");
    },
  });
}
