'use client'

import { useQuery } from "@tanstack/react-query"

export default function FakeStoreMatrix() {
  const {
    data: products,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error('Failed to fetch products')
       const data = await res.json()
    return data.slice(0, 3)
    },
    refetchInterval: 1000 * 60 * 3, 
  })

  // ✅ Loading UI
  if (isLoading) return <p>Loading products...</p>
  if (isError) return <p>Error: {(error as Error).message}</p>
  if (isFetching) return <p>isFetching products...</p>


  
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-3">
        🛍️ Fake Store Products ({products?.length})
      </h2>

      {isFetching && (
        <p className="text-blue-500 text-sm animate-pulse">
          Refreshing product list...
        </p>
      )}

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products?.map((item: any) => (
          <li
            key={item.id}
            className="border rounded-lg p-3 shadow-sm bg-white hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain"
            />
            <h3 className="font-medium text-sm mt-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-green-600 font-semibold mt-1">
              ${item.price.toFixed(2)}
            </p>
            <p className="text-gray-400 text-xs">{item.category}</p>
          </li>
        ))}
      </ul>

      <button
        onClick={() => refetch()}
        disabled={isFetching}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {isFetching ? 'Refreshing...' : 'Refresh'}
      </button>
    </div>
  )
}
