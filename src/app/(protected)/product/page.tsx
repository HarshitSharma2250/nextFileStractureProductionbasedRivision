import Link from "next/link";

export default function productList(){




    
  const products = [
    { id: "1", name: "Product 1" },
    { id: "2", name: "Product 2" },
    { id: "3", name: "Product 3" },
  ];

    return(
 
           <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      {products.map((product) => (
        <h2 key={product.id} className="text-lg text-blue-600 hover:underline">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h2>
      ))}
    </div>
      
    )
}