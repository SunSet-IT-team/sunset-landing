"use client"

import { FC, useMemo } from "react"
import { usePagination } from "../hooks/usePagination"

interface Props {
  className?: string
}

export const Pagination: FC<Props> = ({ className }) => {
  const { page, totalPages, setPage, goNextPage, goPrevPage } = usePagination()

  // Генерация массива "1 ... 5 6 7 ... 20"
  const pages = useMemo(() => {
    if (!totalPages) return []

    const items: (number | "...")[] = []

    const showLeftDots = page > 3
    const showRightDots = page < totalPages - 2

    // 1
    items.push(1)

    // ...
    if (showLeftDots) items.push("...")

    // Текущая -1, текущая, текущая +1
    const start = Math.max(2, page - 1)
    const end = Math.min(totalPages - 1, page + 1)

    for (let i = start; i <= end; i++) {
      items.push(i)
    }

    // ...
    if (showRightDots) items.push("...")

    // Последняя
    if (totalPages > 1) items.push(totalPages)

    return items
  }, [page, totalPages])

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Стрелка назад */}
      <button
        disabled={page === 1}
        onClick={goPrevPage}
        className="px-3 py-1 text-md disabled:text-gray-400"
      >
        {"<"}
      </button>

      {/* Цифры и троеточия */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={i}
            onClick={() => setPage(p)}
            className={`px-3 py-1 text-md rounded 
              ${page === p ? "bg-[#0045c4] text-white" : "hover:bg-gray-800"}
            `}
          >
            {p}
          </button>
        )
      )}

      {/* Стрелка вперёд */}
      <button
        disabled={page === totalPages}
        onClick={goNextPage}
        className="px-3 py-1 text-md disabled:text-gray-400"
      >
        {">"}
      </button>
    </div>
  )
}
