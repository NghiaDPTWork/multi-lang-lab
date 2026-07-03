/**
 * FILE: src/shared/components/Button.tsx
 * VAI TRÒ: Shared Button UI Component tái sử dụng toàn bộ hệ thống.
 * 
 * PHƯƠNG PHÁP CẤU HÌNH:
 * * Hỗ trợ trạng thái hiển thị Loading Spinner (`isLoading`).
 * * Cho phép mở rộng (extend) toàn bộ các thuộc tính gốc của nút HTML (`React.ButtonHTMLAttributes`).
 */

import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  variant?: "primary" | "secondary" | "danger"
}

export function Button({
  children,
  isLoading,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  // Định nghĩa styles ứng với từng variant
  const baseStyle = "px-4 py-2 rounded-lg font-medium text-sm transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white",
    secondary: "border border-slate-200 hover:bg-slate-50 text-slate-700",
    danger: "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white",
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading && (
        // Hiển thị vòng xoay loading nhỏ khi đang fetch
        <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  )
}
