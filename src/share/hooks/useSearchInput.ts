import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useInputDebounce } from "./useInputDebounce"

/**
 * Хук, связывающий input поиска с query параметрами адресной строки
 */
export function useSearchInput() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [value, setValue] = useState(() => searchParams.get("search") ?? "")
  const debouncedValue = useInputDebounce(value)

  // синхронизация value <-> URL
  useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set("search", debouncedValue)
    if (!debouncedValue.trim().length) newSearchParams.delete("search")

    router.replace(`${pathname}?${newSearchParams.toString()}`, {
      scroll: false,
    })
  }, [debouncedValue, pathname])

  return {
    value,
    debouncedValue,
    setValue,
  }
}
