export const metadata = {
  title: 'Twara Store',
  description: 'Professional Marketplace',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
