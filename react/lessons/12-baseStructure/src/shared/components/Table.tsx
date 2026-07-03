/**
 * FILE: src/shared/components/Table.tsx
 * VAI TRÒ: Khung Table Layout dùng chung để vẽ các bảng hiển thị danh sách (như nhân viên, lịch trình...).
 * 
 * PHƯƠNG PHÁP CẤU HÌNH:
 * * Đóng vai trò làm khung lưới layout (CSS grid/table wrapper) thống nhất giao diện toàn dự án.
 */

import React from "react"

interface TableProps {
  headers: string[]
  children: React.ReactNode
}

export function Table({ headers, children }: TableProps) {
  return (
    <div className="w-full overflow-x-auto border border-slate-200 rounded-lg shadow-xs bg-white">
      <table className="w-full text-sm text-left text-slate-500">
        <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} scope="col" className="px-6 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">{children}</tbody>
      </table>
    </div>
  )
}
