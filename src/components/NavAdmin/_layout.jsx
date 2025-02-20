import { getServerSession } from "next-auth"
import UserNav from "@/components/user-nav"

export default async function RootLayout({ children }) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body>
        <nav className="flex h-16 items-center justify-between border-b border-gray-200 px-4 md:px-6">
          <div className="flex items-center gap-4">
            {/* Your logo/brand here */}
            <span className="text-xl font-bold">Logo</span>
          </div>

          {session?.user && <UserNav user={session.user} />}
        </nav>
        {children}
      </body>
    </html>
  )
}