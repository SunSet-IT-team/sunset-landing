import { ServicesPagination } from "@/src/feature/ServicesPagination"
import ToggleGridContent from "@/src/feature/ToggleGridContent"

export const revalidate = 86400 // 24 часа

/**
 * Страница всех услуг
 */
const Page = () => {
  return (
    <ServicesPagination>
      <ToggleGridContent className="w-full pt-8" />
    </ServicesPagination>
  )
}

export default Page
