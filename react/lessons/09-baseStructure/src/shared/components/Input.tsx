/**
 * FILE: src/shared/components/Input.tsx
 * VAI TRÒ: Shared Input UI Component tái sử dụng toàn bộ hệ thống.
 * 
 * PHƯƠNG PHÁP CẤU HÌNH:
 * * Sử dụng `React.forwardRef` để hỗ trợ liên kết chặt chẽ với thư viện `react-hook-form` (sử dụng phương thức register).
 * * Hỗ trợ hiển thị thông báo lỗi Validation (`error`).
 */

import React, { forwardRef } from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        <input
          ref={ref}
          className={`w-full px-3 py-2 border rounded-lg text-sm transition outline-hidden focus:ring-2 focus:ring-blue-500/20 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : "border-slate-200 focus:border-blue-500"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = "Input"
