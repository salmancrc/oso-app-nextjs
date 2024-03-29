import { SidebarProvider } from '@/context/SidebarContext'
import './globals.css'

export const metadata = {
  title: 'OSO',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  )
}
