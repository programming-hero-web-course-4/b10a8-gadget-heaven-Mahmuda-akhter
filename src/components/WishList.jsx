import { useEffect, useState } from "react";
import { addToCart, getFavProducts, removeFavorite } from "../utilites/utils";
import { NavLink, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";



const WishList = () => {
    const { pathname } = useLocation();
    const [items, setItems] = useState([]);
    const [addCart, setAddCart] = useState([]);

    useEffect(() => {
        const favorites = getFavProducts();
        setItems(favorites);
    }, []);

    const handleRemove = (product_id) => {
        removeFavorite(product_id);
        const updatedWishList = getFavProducts();
        setItems(updatedWishList);
    };

    const handleAddCard = (product) => {
        const item=addToCart(product)
        if(item){
            const items=[...addCart,item]
        setAddCart(items)
      
        }
    };

    return (
        <div className="bg-[#f7f7f7]">
            <div className="w-8/12 mx-auto flex justify-between items-center my-11">
                <h1 className="text-xl font-bold">Wishlist</h1>
            </div>

            {items.map((item) => (
                <div key={item.product_id}
                className="bg-white flex justify-between w-8/12 mx-auto items-center px-5 py-2 rounded-2xl mb-4">
                     {/* Product Details */}
                     <div className="flex items-center gap-4">
                      <img
                        src={item.product_image}
                        alt=""
                        className="w-[250px] rounded-2xl"
                      />
                         <div>
                        <h3 className="text-xl font-bold mb-3">{item.product_title}</h3>
                        <p className="text-md font-medium text-gray-500 mb-4"><span className="font-medium text-black">Description</span> :{item.description}</p>
                        <p className="text-md font-medium  mb-7">Price: $ {item.price}</p>
                        <NavLink 
                        onClick={() => handleAddCard(item)}
                         className="px-4 py-2 border bg-white text-[#9538e2] border-[#9538e2] rounded-full " 
                        >Add to Cart
                        </NavLink>


                        </div>
                      </div>

                      

                   

                    {/* delete button */}
                    {pathname === "/dashboard/wishlist" && (
                       <button
                       onClick={() => handleRemove(item.product_id)}
                       className="rounded-full text-2xl text-red-500 hover:text-red-700 border border-red-500 p-1"
                       title="Remove item"
                     >
                       <RxCross1 />
                     </button>
                    )}

                   
                </div>
            ))}
        </div>
    );
};

export default WishList;
