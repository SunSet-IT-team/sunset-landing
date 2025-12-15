"use client"
import { ContentMode } from "@/src/share/types/share"
import Card from "@/src/share/ui/Card"
import SearchInput from "@/src/share/ui/Input/SearchInput"
import { ChangeEvent, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import Toggler from "./Toggler"
import { usePagination } from "@/src/share/ui/Pagination/hooks/usePagination"
import { useServicesQuery } from "@/src/entities/service/model/useServicesQuery"
import { useSearchInput } from "@/src/share/hooks/useSearchInput"
import { CardSkeleton } from "@/src/share/ui/Card/Skeleton"

interface ToggleGridContentProps {
  className?: string
}

/**
 * Вывод контента с переключением между листом и таблицей
 */
const ToggleGridContent = ({ className }: ToggleGridContentProps) => {
  const [mode, setMode] = useState<ContentMode>("list")

  const { page, setPage, itemsPerPage, setTotalPages } = usePagination()

  const {
    value: query,
    debouncedValue: deboucedQuery,
    setValue: setQuery,
  } = useSearchInput()

  const {
    data: services,
    totalPages,
    isLoading,
    error,
  } = useServicesQuery({
    page,
    perPage: itemsPerPage,
    search: deboucedQuery,
  })

  // Сброс страницы на 1ю, если пользователь переходит на страницу под номером, превышающее общее кол-во страниц
  useEffect(() => {
    if (error?.wpCode === "rest_post_invalid_page_number") {
      setPage(1)
    }
  }, [error, setPage])

  useEffect(() => {
    if (typeof totalPages === "number") setTotalPages(totalPages)
  }, [totalPages])

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setPage(1)
  }

  let content: React.ReactNode

  if (isLoading) {
    content = Array.from({ length: itemsPerPage }).map((_, i) => (
      <CardSkeleton type={mode === "grid" ? "col" : "row"} key={i} />
    ))
  } else if (!!error) content = "Произошла ошибка при загрузке данных"
  else if (!services.length) {
    content = "Ничего не нашлось"
  } else {
    content = services.map(({ id, ...post }) => (
      <Card {...post} type={mode === "grid" ? "col" : "row"} key={id} />
    ))
  }

  return (
    <>
      <div className="mb-4 flex flex-row items-center justify-between">
        <h1 className="main-heading mr-[15px]">Услуги</h1>
        <div className="flex flex-row">
          <SearchInput value={query} onChange={onSearchChange} />
          <Toggler onChange={(mode) => setMode(mode)} defaultMode={mode} />
        </div>
      </div>
      <div className={twMerge(className)}>
        <div
          className={twMerge(
            mode == "list" ? "flex flex-col gap-5" : "grid grid-cols-3  gap-4"
          )}
        >
          {content}
        </div>
      </div>
    </>
  )
}

export default ToggleGridContent
