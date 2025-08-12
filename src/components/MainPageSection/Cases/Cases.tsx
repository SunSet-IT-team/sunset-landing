"use client"

import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import Case, { CasePreview } from "./Case"
import { data } from "./data"
import OrangeNotification from "../../ui/Notifications/OrangeNotification"
import { useNavStore } from "@/src/store/navStore"

/**
 * Секция с примерами проектов
 */
export default function Cases() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeId, setActiveId] = useState(0)
  const { activeId: sectionActiveId } = useNavStore()

  // Скрывать уведомление вместе со стрелочкой
  const isNotificationHidden = sectionActiveId !== 2
  
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false)
  const [displayedNotificationCard, setDisplayedNotificationCard] =
    useState<CasePreview>(data[activeId])

  // Если секция не активная - закрываем уведомление, иначе - показываем
  useEffect(() => {
    if (isNotificationHidden) setIsNotificationOpen(false)
    else setIsNotificationOpen(true)
  }, [sectionActiveId])

  /**
   * Переключить на следующий или предыдущий слайд
   */
  const handleSlideChange = (direction: "prev" | "next") => {
    if (!swiperRef.current) return
    direction === "prev"
      ? swiperRef.current.slidePrev()
      : swiperRef.current.slideNext()
  }

  const onRealIndexChange = (s: SwiperType) => {
    setIsNotificationOpen(false)
    setActiveId(s.realIndex)

    setTimeout(() => {
      setDisplayedNotificationCard(data[s.realIndex])
      setIsNotificationOpen(true)
    }, 800)
  }

  return (
    <div className="mt-16 md:mt-6 text-center">
      <Swiper
        effect="coverflow"
        modules={[EffectCoverflow]}
        centeredSlides
        slidesPerView={1.5}
        loop
        loopAdditionalSlides={2}
        spaceBetween={0}
        onRealIndexChange={onRealIndexChange}
        coverflowEffect={{
          rotate: 20,
          depth: 350,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
        }}
        onSwiper={(s) => (swiperRef.current = s)}
        className="mx-auto max-w-[830px] py-10 overflow-hidden swiper-cards"
      >
        {data.map((card, i) => {
          const total = data.length
          const prevIndex = (activeId - 1 + total) % total
          const nextIndex = (activeId + 1) % total

          return (
            <SwiperSlide
              key={card.id}
              className="flex justify-center items-center"
            >
              <Case
                id={card.id}
                isActive={activeId === i}
                isPrev={i === prevIndex}
                isNext={i === nextIndex}
                activeId={activeId}
                changeSlide={handleSlideChange}
                total={total}
                caseData={card}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      {displayedNotificationCard && (
        <OrangeNotification
          title={displayedNotificationCard.title}
          body={displayedNotificationCard.description}
          isOpen={isNotificationOpen}
          setIsOpen={setIsNotificationOpen}
          align="right"
          style={
            isNotificationHidden
              ? {
                  transform: "translateX(calc(100% + 25px))",
                }
              : {}
          }
        />
      )}

      {/* <Link href="#" className="mt-10 md:mt-24 block heading-h3">
                Посмотреть все
            </Link> */}
    </div>
  )
}
