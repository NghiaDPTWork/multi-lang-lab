import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "../service";
import { toast } from "sonner";
import type { ApiErrorResponse, AuthResponse } from "../types";
import type { RegisterFormFields } from "../schema";
import type { AxiosError } from "axios";

export function useRegister() {
  const navigate = useNavigate();

  return useMutation<
    AuthResponse,
    AxiosError<ApiErrorResponse>,
    RegisterFormFields
  >({
    mutationFn: ({ confirmPassword, ...registerData }) =>
      authService.register(registerData),

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
