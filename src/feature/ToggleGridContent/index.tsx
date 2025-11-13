

import { ContentMode } from "@/src/share/types/share"
import Card, { CardProps } from "@/src/share/ui/Card"
import { twMerge } from "tailwind-merge"

interface ToggleGridContentProps {
  contentMode?: ContentMode
  className?: string
  data?: CardProps[]
}

/**
 * Вывод контента с переключением между листом и таблицей
 */
const ToggleGridContent = ({
  contentMode = "list",
  data,
  className,
}: ToggleGridContentProps) => {
  return (
    <div className={twMerge(className)}>
      <div
        className={twMerge(
          contentMode == "list"
            ? "flex flex-col gap-5"
            : "grid grid-cols-3  gap-4"
        )}
      >
        {data.map((post, i) => (
          <Card
            {...post}
            type={contentMode === "grid" ? "col" : "row"}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}

export default ToggleGridContent
