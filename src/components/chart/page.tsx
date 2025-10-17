'use client'

import { useQuery } from "@tanstack/react-query"

export default function JsonPlaceholderPosts() {
  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) throw new Error('Failed to fetch posts')
      const data = await res.json()
      // ✅ Return only first 3 posts
      return data.slice(0, 3)
    },
    refetchInterval: 1000 * 60 * 3, // optional: auto refresh every 3 mins
  })

  // ✅ Loading UI
  if (isLoading)
    return <p className="text-gray-500 text-lg animate-pulse">Loading posts...</p>

  // ✅ Error UI
  if (isError)
    return (
      <div className="text-red-600">
        <p>⚠️ Error: {(error as Error).message}</p>
        <button
          onClick={() => refetch()}
          className="mt-2 px-3 py-1 bg-red-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    )

  // ✅ Success UI
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">
        📰 Latest Posts (Showing 3)
      </h2>

      {isFetching && (
        <p className="text-blue-500 text-sm animate-pulse">
          Refreshing posts...
        </p>
      )}

      <ul className="space-y-4 mt-3">
        {posts?.map((post: any) => (
          <li
            key={post.id}
            className="p-3 border rounded-md bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-800 mb-1">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>

      <button
        onClick={() => refetch()}
        disabled={isFetching}
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {isFetching ? 'Refreshing...' : 'Refresh'}
      </button>
    </div>
  )
}
