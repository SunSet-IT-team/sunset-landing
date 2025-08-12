import { Metadata } from "next"
import { CanvasPortal } from "../components/CanvasPortal/CanvasPortal"

import "../assets/globals.css"
import { akony, arodoraPro } from "../assets/fonts/lindex"
import BodyScriptMetrika from "../feature/metrika/BodyScriptMetrika"
import HeadScriptMetrika from "../feature/metrika/HeadScriptMetrika"
import NotificationsBlock from "../components/NotificationsBlock/NotificationBlock"

export const metadata: Metadata = {
  title: "Sunset IT — digital-команда разработчиков",
  description: "Мы создаём современные сайты и приложения для вашего бизнеса",
  keywords: [
    "digital",
    "разработка сайтов",
    "создание приложений",
    "IT-команда",
  ],
  authors: [{ name: "Sunset IT" }],
  creator: "Sunset IT",
  publisher: "Sunset IT",
  applicationName: "Sunset IT",
  // Иконки для сайта (favicon, apple touch icon)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
  // Open Graph — для соцсетей (Facebook, VK, LinkedIn)
  openGraph: {
    title: "Sunset — digital-команда",
    description: "Мы создаём современные сайты и приложения для вашего бизнеса",
    url: "https://sunset-it.agency",
    siteName: "Sunset IT",
    images: [
      {
        url: "https://sunset-it.agency/og.png",
        width: 1200,
        height: 630,
        alt: "Sunset IT — digital-команда",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  // Robots — управление индексацией страниц
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="SunSet IT" />
        <HeadScriptMetrika />
      </head>
      <body
        className={`${akony.variable} ${arodoraPro.variable} 
                    antialiased h-[100vh] 
                    w-[100vw] bg-black-gradient
                    text-white  relative overflow-x-hidden `}
      >
        <BodyScriptMetrika />
        <CanvasPortal>{children}</CanvasPortal>
        <NotificationsBlock />
      </body>
    </html>
  )
}
