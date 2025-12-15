import { useMediaQuery } from "@/src/share/hooks/useMediaQuery"
import { useState } from "react"

type Options = Record<string, number>

/**
 * Получение кол-ва отображаемых элементов на странице, в зависимости от ширины экрана.
 * Используется в частности для пагинации
 */
export function useGetItemsPerPage(options: Options) {
  const queries = Object.keys(options)
  const matches = queries.map((q) => useMediaQuery(q))
  const index = matches.findIndex(Boolean)
  const mathItemsPerPage =
    index !== -1 ? options[queries[index]] : options[queries[0]]

  const [itemsPerPage, setItemsPerPage] = useState<number>(mathItemsPerPage)

  if (itemsPerPage !== mathItemsPerPage) setItemsPerPage(mathItemsPerPage)
  return itemsPerPage
}
