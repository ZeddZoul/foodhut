import "./globals.css"
export const metadata = {
  title: 'FoodHut',
  description: 'Savor the flavor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
