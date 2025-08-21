import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = await headers()
  const referer = headersList.get('referer')

  return (
    <main className="flex flex-col gap-8">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      {referer && (
        <Link href={referer}>Go back</Link>
      )}
    </main>
  )
}