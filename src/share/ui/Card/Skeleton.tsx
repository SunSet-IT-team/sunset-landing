import { twMerge } from "tailwind-merge"

/**
 * Скелетон карточки услуг
 */
export const CardSkeleton = ({ type = "row" }: { type?: "row" | "col" }) => {
  const skeletonImage =
    type === "row" ? (
      <div className="rounded-[6px] aspect-[3/2] w-[35%] skeleton" />
    ) : (
      <div className="rounded-[6px] aspect-square w-full skeleton" />
    )

  const skeletonText = (
    <div className={type === "row" ? "w-[60%]" : "w-full"}>
      <span className="block h-6 w-3/4 mb-3 rounded skeleton" />
      <span className="block h-4 w-full mb-2 rounded skeleton" />
      <span className="block h-4 w-5/6 rounded skeleton" />
    </div>
  )

  return (
    <article
      className={twMerge(
        type === "row"
          ? "flex flex-row gap-4 justify-between"
          : "flex flex-col gap-4"
      )}
    >
      {skeletonImage}
      {skeletonText}
    </article>
  )
}
