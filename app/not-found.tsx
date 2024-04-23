import {headers} from 'next/headers'

export const dynamic = 'force-static'
/**
 * Not Found component.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */
export default async function NotFound() {
  const headersList = headers()
  const referer = headersList.get('referer')

  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-center">404 - Not Found</h1>
      <p className="text-center text-red-500">{referer}</p>
    </main>
  )
}