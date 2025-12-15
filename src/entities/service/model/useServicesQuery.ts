import { useCallback, useEffect, useState } from "react"
import { mapServicesDTO } from "../api/mapping"
import ServiceAPI from "../api"
import { Service, WPError } from "../api/types"

/**
 * Получение услуг с wordpress api
 */
export function useServicesQuery({
  page,
  perPage,
  search,
}: {
  page: number
  perPage: number
  search: string
}) {
  const [data, setData] = useState<Service[]>([])
  const [totalPages, setTotalPages] = useState<null | number>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<WPError | null>(null)

  const fetchData = useCallback(
    async ({
      page,
      perPage,
      search,
    }: {
      page?: number
      perPage?: number
      search?: string
    }) => {
      setIsLoading(true)
      setError(null)
      try {
        setIsLoading(true)
        const { data, totalPages } = await ServiceAPI.getServices({
          search,
          page,
          per_page: perPage,
        })
        setData(mapServicesDTO(data))
        setTotalPages(totalPages)
      } catch (err: any) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    },
    [setIsLoading, ServiceAPI, setData, setTotalPages, setError]
  )

  // Получение новых данных при изменении параметров поиска/пагинации
  useEffect(() => {
    fetchData({ page, perPage, search })
  }, [fetchData, page, perPage, search])

  return { data, totalPages, isLoading, error }
}
