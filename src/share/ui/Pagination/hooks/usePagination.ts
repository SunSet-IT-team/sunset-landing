import { useContext } from "react"
import { PaginationContext } from "../ui/PaginationProvider"
import { GetPaginationContext } from "../model/types"

/**
 * Получение контекста пагинации. Он включает в себя:
 * ```ts
 * page: number
   totalPages: number | null
   itemsPerPage: number
   setPage: (page: number) => void
   setTotalPages: (total: number) => void
   goNextPage: () => void
   goPrevPage: () => void
   setItemsPerPage?: React.Dispatch<SetStateAction<number>>
 * ```
 */
export function usePagination<WithSetItemsPerPage extends boolean = false>() {
  const ctx = useContext(PaginationContext)
  if (!ctx) {
    throw new Error(
      "usePaginationContext должен использоваться внутри PaginationProvider"
    )
  }

  return ctx as GetPaginationContext<WithSetItemsPerPage>
}