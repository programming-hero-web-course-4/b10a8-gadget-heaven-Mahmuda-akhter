import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import { addFavProduct, addToCart, getCartProducts, getFavProducts } from "../utilites/utils";
import Heading from "../components/Heading";
import ReactStars from "react-rating-stars-component";

const ProductDetails = () => {
    const data = useLoaderData();
    const { product_id } = useParams();

    const [ProductOfDetail, setProductOfDetail] = useState([]);
    const [isFavorite,setIsFavorite]=useState(false)
    const [IsCartAdd,setIsCartAdd]=useState(false)
    useEffect(() => {

        const product = data.find(item => item.product_id == product_id);
        setProductOfDetail(product);

        //? FOR disable favorite button functionality
        const favorites=getFavProducts()

        const isExist=favorites.find(Item=>Item.product_id == ProductOfDetail.product_id )
        if(isExist){
            setIsFavorite(true)
        }
        //? FOR disable cart button functionality
        const cart = getCartProducts() ;
        const isCartExist=cart.find(Item=>Item.product_id == ProductOfDetail.product_id )
        if(isCartExist){
            setIsCartAdd(true)
        }
       

  
    
    }, [data, product_id,ProductOfDetail]);

    const handleFavorite = (product) => {
        if (product) {
            addFavProduct(product);
            setIsFavorite(true)
        
        }
    };
    
    const handleAddCart = (product) => {
        if (product) {
            addToCart(product); //? Add to cart in storage
            setIsCartAdd(true)
            
        }
      
    };
    return (
        <div className="w-11/12 mx-auto">
            {ProductOfDetail ? (
                <>
                   
                   <div className="  bg-[#9538e2]  pt-9 pb-52">
                       <Heading title="Product Details" subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
                   </div>
                   

                    <div className="absolute top-[250px] left-[500px] ">
                        <div className=" flex  bg-base-100 shadow-xl p-4 rounded-2xl">
                                <figure>
                                    <img
                                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                    alt="Movie" 
                                    className="w-80 rounded-2xl"/>
                                </figure>
                                <div className="pl-6 pr-40 ">
                                    <h2 className="card-title text-2xl mb-3">{ProductOfDetail.product_title}</h2>
                                    <p className="font-medium mb-4">price :${ProductOfDetail.price}</p>
                                    <button className="bg-green-100 border mb-2 border-green-400 text-sm text-green-700 rounded-full px-2 py-1">
                                        {ProductOfDetail.availability? 'In Stock':'Out Of Stock'}
                                    </button>
                                    <p className="text-gray-500 mb-5">{ProductOfDetail.description}</p>
                                    {ProductOfDetail.description &&(
                                       <div>
                                            <h1 className="font-bold mb-2 ">Specifications:</h1>
                                            <ul className="text-gray-400">
                                                {ProductOfDetail.specification.map((line,indx)=>(
                                                    <li key={indx}>{indx+1}.  {line}</li>
                                                ))}
                                            </ul>
                                           
                                       </div>
                                    )}
                                        
                                        <div>
                                            <h1 className="mt-4 font-bold">Rating</h1>
                                            <ReactStars
                                                count={5}
                                                onChange={(newRating) => console.log("Rating:", newRating)}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    {/* buttons */}
                                    <div className="card-actions ">
                                        <div className=" flex gap-4">

                                            <button disabled={IsCartAdd} className='btn btn-primary' onClick={() => handleAddCart   (ProductOfDetail)} >
                                            Add To Card
                                            </button>
                                            <button disabled={isFavorite} className='' onClick={() => handleFavorite(ProductOfDetail)} >
                                              <i className="fa-regular fa-heart text-2xl border rounded-full  h-10 w-10 p-6 flex justify-center items-center"></i>
                                            </button>

                                            
                                        </div>
                                            
                                        </div>
                                    </div>
                                </div>
                    </div>
                    
                </>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default ProductDetails;
