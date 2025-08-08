'use client'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const Products = () => {

    const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   const handleAddToCart = async (productId: number) => {
    console.log('Add to cart clicked:', productId); 

   try{
    const res = await fetch('http://localhost:3000/cart',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            productId,
            quantity: 1
        })
    });
    
    if (!res.ok) {
      throw new Error('Failed to add to cart');
    }

    console.log('Added to cart!');

   } catch (error){
    console.error('Error:' ,error)
   }

   }
  
   useEffect(()=> {
    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            console.log('Fetching from API...');

            const response = await fetch('http://localhost:3000/product',{
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                },
            });

            console.log('Response status:', response.status);
            console.log('Response ok', response.ok);

            if(!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Fetched data', data);

            setProducts(data)

           
                if (Array.isArray(data)) {
                    setProducts(data);
                } else {
                    console.error('API response is not an array:', data);
                    setError('Invalid data format received from API');
                }

        } catch(err) {
            console.error('Error fetching products', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch products');
        }
        finally {
            setLoading(false)
        } 
    };
    fetchProducts();

   }, []);

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-64 p-4">
                <div className="text-red-500 text-lg mb-4">❌ Error loading products</div>
                <div className="text-red-600 text-sm mb-4 text-center">{error}</div>
                <div className="text-sm text-gray-600 max-w-md text-center">
                    <p className="mb-2"><strong>Common issues to check:</strong></p>
                    <ul className="text-left space-y-1">
                        <li>• Is your backend server running on port 3000?</li>
                        <li>• Does the /product endpoint exist?</li>
                        <li>• Check browser console for CORS errors</li>
                        <li>• Verify the API response format</li>
                    </ul>
                </div>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Retry
                </button>
            </div>
        );
    }

     if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
                <div className="text-lg">Loading products from API...</div>
                <div className="text-sm text-gray-500 mt-2">Check console for debug info</div>
            </div>
        );
    }

      if (products.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-center">
                    <div className="text-lg mb-2">No products found</div>
                    <div className="text-sm text-gray-500">The API returned an empty array</div>
                </div>
            </div>
        );
    }
  return (
      <div className='flex flex-row'>
            {/* filters space */}
            <div className='w-1/5 h-full '> </div>
            {/* prod page */}
            <div className='w-full h-full space-y-2 p-2'>
            <div className='flex flex-col p-2'>
                <h1 className='font-bold  text-lg'> Results </h1>
                <p>Check each product page for other buying options.</p>
            </div>

            {/*PRODUCTS */}
            { products.map((product)=>(
                 <div key = {product.id} className='flex flex-row gap-4 h-64 w-full border border-gray-200 p-1'>
                <div className='h-full w-1/4 '>
                    <img src={product.image} alt={product.name || "https://via.placeholder.com/150"} className='h-full w-full'/>
                </div>
                <div className='flex flex-col w-full '>
                    {/* sponsored and title */}
                    <div className='flex flex-col w-3/4 h-auto mt-5'>
                        <div className='flex flex-row items-center gap-1' >
                            <p  className='text-gray-600 mb-1 text-xs'> sponsored </p>
                            <img className='h-3 w-3' src='https://img.icons8.com/?size=100&id=77&format=png&color=737373'/>
                        </div>
                           <Link
                                to={`/products/${product.id}`}
                                className="font-semibold text-blue-600 hover:underline"
                                >{product.name}-{product.description}
                            </Link>
                    </div>
                    <div className='w-2/3 '>
                    {/* stars rating */}
                        <div className='flex flex-row items-center'>
                            <img className='h-3 w-3' src='https://img.icons8.com/?size=100&id=104&format=png&color=FAB005'/>
                            <img className='h-3 w-3' src='https://img.icons8.com/?size=100&id=104&format=png&color=FAB005'/>
                            <img className='h-3 w-3' src='https://img.icons8.com/?size=100&id=104&format=png&color=FAB005'/>
                            <img className='h-3 w-3' src='https://img.icons8.com/?size=100&id=104&format=png&color=FAB005'/>
                            <img className='h-3 w-3' src='https://img.icons8.com/?size=100&id=104&format=png&color=FAB005'/>
                            <p className='text-blue-500 ml-1'> 1,250 </p>
                        </div>
                        <p className='text-gray-500'>500+ bought in past month</p>
                        {/* pricing */}
                        <div className='flex flex-row w-full  h-auto'>
                                <img src='https://img.icons8.com/?size=100&id=B5w0V2fjjZ38&format=png&color=1A1A1A' className='h-4 w-4 mt-2' />
                                <h1 className='text-3xl font-semibold'>{product.price}</h1>
                                <div className='flex items-end ml-1'>
                                    <span className="text-gray-500">M.R.P: </span>
                                    <span className="line-through text-gray-600">₹17,000</span>
                                    <span className="text-black ml-1 ">(42% off)</span>     
                                </div>    
                        </div>
                        <p className='w-1/3 text-sm'> FREE delivery as soon as <span className='font-bold'>Thu 12 Jun, 7 am - 10 pm</span> </p>
                        
                        <button className='addToCart-btn' onClick={() => handleAddToCart(product.id)}> Add to Cart</button>
                    </div>

                </div>

            </div>
            )
            )}

            </div>
        </div>
    

  )
}

export default Products