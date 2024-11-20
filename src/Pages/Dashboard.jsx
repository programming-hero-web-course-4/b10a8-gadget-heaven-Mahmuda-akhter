import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import { getFavProducts } from "../utilites/utils";


const Dashboard = () => {

    const [productItem ,setProductItem]=useState([])
    useEffect(()=>{
        const getFavoriteItem=getFavProducts()
        setProductItem(getFavoriteItem)
    },[])

 

    return (
        <>

            <div className="bg-[#9538e2]  pt-9 pb-6 w-11/12 mx-auto">
                <Heading title="Product Details" subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"></Heading>
                
                <div className="flex gap-7 justify-center mt-7">
                    <NavLink to='/dashboard/cart'
                    className={({isActive})=>
                    `border rounded-full px-10 py-2 ${
                        isActive?
                        ' bg-white font-bold text-[#9538e2]':' bg-[#9538e2] font-bold text-white'
                    }`}
                    >
                        Cart
                    </NavLink>

                    <NavLink
                        to="/dashboard/wishlist"
                       className={({isActive})=>
                    `border rounded-full px-10 py-2 ${
                        isActive?
                        'bg-white font-bold text-[#9538e2]':'bg-[#9538e2] font-bold text-white'
                    }`}
                        >
                        Wishlist
                    </NavLink>
                </div>

            </div>

            <Outlet />
        </>
    );
};

export default Dashboard;
