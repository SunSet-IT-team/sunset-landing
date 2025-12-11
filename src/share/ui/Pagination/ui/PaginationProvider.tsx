"use client"

import {
  createContext,
  useCallback,
  useEffect,
  useState,
  ReactNode,
  FC,
  SetStateAction,
} from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import {
  PaginationContext as PaginationContextType,
  PaginationOptions,
} from "../model/types"

export const PaginationContext = createContext<PaginationContextType | null>(
  null
)

interface BaseProps {
  children: ReactNode
  options?: PaginationOptions
}

interface DefaultProps extends BaseProps {
  itemsPerPage: number
  setItemsPerPage?: never
}

interface PerPageLikeStateProps extends BaseProps {
  itemsPerPage: number
  setItemsPerPage: React.Dispatch<SetStateAction<number>>
}

type Props = DefaultProps | PerPageLikeStateProps

/**
 * Провайдер контекста для пагинации. Содержит все необходимые значения и callback для удобной
 * ее реализации. Требует уточнения totalPages при помощи setTotalPages для корректной работы (изначально = null)
 */
export const PaginationProvider: FC<Props> = ({
  children,
  itemsPerPage,
  setItemsPerPage,
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [page, setPage] = useState(() => {
    const p = Number(searchParams.get("page")) || 1
    return p >= 1 ? p : 1
  })

  const [totalPages, setTotalPages] = useState<number | null>(null)

  // синхронизация URL params
  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set("page", String(page))
    newSearchParams.set("perPage", String(itemsPerPage))

    router.replace(`${pathname}?${newSearchParams.toString()}`, {
      scroll: false,
    })
  }, [page, itemsPerPage, router, pathname])

  // Корректируем максимальную возможную открытую страницу
  useEffect(() => {
    if (totalPages !== null && page > totalPages) {
      setPage(totalPages)
    }
  }, [itemsPerPage, totalPages])

  const goNextPage = useCallback(() => {
    setPage((p) => (totalPages !== null && p < totalPages ? p + 1 : p))
  }, [totalPages])

  const goPrevPage = useCallback(() => {
    setPage((p) => (p > 1 ? p - 1 : p))
  }, [])

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        totalPages,
        setTotalPages,
        itemsPerPage,
        setItemsPerPage,
        goNextPage,
        goPrevPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}
