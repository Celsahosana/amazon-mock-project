import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const SingleProduct = () => {

  const {id} = useParams();
  const [product, setProduct] = useState<Product | null>(null) ;
  const [isLoading , setLoading] = useState(true)
  const [ isError , setError] = useState<string | null>(null);

  useEffect(() => {

    const fetchProducts = async() => {
      try{
        setLoading(true);
        setError(null);

        console.log('Fetching from API....');

        const response = await fetch(`http://localhost:3000/product/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
          },
        });
        console.log('Response status', response.status);
        console.log('Resonse ok', response.ok);

        if(!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data', data);

        setProduct(data)
      } catch(err) {
        console.log('Error fetching products', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      }
      finally {
        setLoading(false)
      }
    }
     
  }, [id]);

    if (isError) {
        return (
            <div className="flex flex-col justify-center items-center h-64 p-4">
                <div className="text-red-500 text-lg mb-4">❌ Error loading products</div>
                <div className="text-red-600 text-sm mb-4 text-center">{isError}</div>
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

     if (isLoading) {
        return (
            <div className="flex flex-col justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
                <div className="text-lg">Loading product from API...</div>
                <div className="text-sm text-gray-500 mt-2">Check console for debug info</div>
            </div>
        );
    }

      if (!product) {
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
    //full page
    <div className="flex flex-row w-full h-auto">
      {/* picture */}
      <div className="min-h-screen w-[50%]">
        <img src={product.image} alt={product.name || "https://via.placeholder.com/150"} className="w-full h-full" />
      </div>



      {/* prod desc */}
      <div className="overflow-y-auto w-[50%] gap-3 flex flex-col p-3">
        <h1 className="text-3xl font-semibold"> {product.name} </h1>
        {/* stars rating */}
        <div className="flex flex-row items-center">
          <img
            className="h-3 w-3"
            src="https://img.icons8.com/?size=100&id=104&format=png&color=FAB005"
          />
          <img
            className="h-3 w-3"
            src="https://img.icons8.com/?size=100&id=104&format=png&color=FAB005"
          />
          <img
            className="h-3 w-3"
            src="https://img.icons8.com/?size=100&id=104&format=png&color=FAB005"
          />
          <img
            className="h-3 w-3"
            src="https://img.icons8.com/?size=100&id=104&format=png&color=FAB005"
          />
          <img
            className="h-3 w-3"
            src="https://img.icons8.com/?size=100&id=104&format=png&color=FAB005"
          />
          <p className="text-blue-500 ml-1"> 1,250 </p>
        </div>
        <p>3k+ bought in past month</p>
        <hr></hr>
        {/* pricing */}
        <div className="flex flex-row w-full  h-auto">
          <img
            src="https://img.icons8.com/?size=100&id=B5w0V2fjjZ38&format=png&color=1A1A1A"
            className="h-4 w-4 mt-2"
          />
          <h1 className="text-3xl font-semibold">{product.price}</h1>
          <div className="flex items-end ml-1">
            <span className="text-gray-500">M.R.P: </span>
            <span className="line-through text-gray-600">₹17,000</span>
            <span className="text-black ml-1 ">(42% off)</span>
          </div>
          
        </div>

        {/* about this item */}
          <div className="flex flex-col">
            <p> about this product</p>
            <ol>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
              <li>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life</li>
            </ol>

          </div>
      </div>
    </div>
  );
};

export default SingleProduct;
