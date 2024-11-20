import toast from "react-hot-toast";


//? for favorite button 
// Retrieve items from local storage
const getFavProducts = () => {
    const getFavProducts = localStorage.getItem('favItem');
    return getFavProducts ? JSON.parse(getFavProducts) : [];
};


const addFavProduct = (product) => {
    const favorites = getFavProducts();


    const isExist = favorites.some(item => item.product_id === product.product_id);

    if (isExist) {
        toast.error('This product already exists!');
        return ;
    }

    else{
       
        favorites.push(product);
        localStorage.setItem('favItem', JSON.stringify(favorites));
        toast.success('Successfully added !');
    }
};

//? for cart button 
const getCartProducts = () => {
    const getFavProducts = localStorage.getItem('cart');
    return getFavProducts ? JSON.parse(getFavProducts) : [];
};

 const addToCart = (product) => {
    const cart = getCartProducts() ;

    const isExist = cart.some(item => item.product_id === product.product_id);

    if (isExist) {
        toast.error('This product already exists!');
        return ;
    }
   else{
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Successfully cart added!");

   }

};

// ? remove item from local storage

const removeCart=(product_id)=>{
    const cart = getCartProducts() ;
    const remainingItem=cart.filter(item=>product_id !==item.product_id)
    localStorage.setItem('cart', JSON.stringify(remainingItem));
    toast.success('Successfully remove !');
    
}

const removeFavorite=(product_id)=>{
    const favorites = getFavProducts();
    const remaining=favorites.filter(item=>item.product_id!==product_id)
    localStorage.setItem('favItem', JSON.stringify(remaining));
    toast.success('Successfully remove !');
}

export { addFavProduct, getFavProducts,addToCart,removeCart,getCartProducts ,removeFavorite };
