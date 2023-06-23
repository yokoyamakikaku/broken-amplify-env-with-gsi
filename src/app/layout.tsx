import Providers from "./Providers"

export const metadata = {
  title: '再デプロイできない問題の検証',
  description: '再デプロイできない問題の検証用のアプリケーション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
