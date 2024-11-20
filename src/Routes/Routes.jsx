import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layouts/MainLayout"
import Statistics from "../Pages/Statistics"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"
import AllProduct from "../components/AllProduct"
import ProductDetails from "../Pages/ProductDetails"
import Cart from "../components/Cart"
import WishList from "../components/WishList"
import ErrorPage from "../components/ErrorPage"
import FAQ from "../components/FAQ"

const routes = createBrowserRouter([
    {
      path : '/',
      element : <MainLayout></MainLayout>,
      errorElement: <ErrorPage/>,
      children :[
          {
            path : '/',
            element : <Home></Home>,
            loader :()=>fetch('../Categories.json'),
            children :[
              {
                path :'/',
                element :<AllProduct></AllProduct>,
                loader :()=>fetch('../allProducts.json'),
              },
              {
                path :'/allProduct/:category',
                element :<AllProduct></AllProduct>,
                loader :()=>fetch('../allProducts.json'),
              },
             
            ]
          },
          {
            path : '/statistics',
            element : <Statistics></Statistics>,
            loader : ()=>fetch('../allProducts.json'),
          },
          {
            path : '/dashboard',
            element : <Dashboard></Dashboard>,
            children :[
              {
                path :'/dashboard',
                element :<Cart></Cart>,
               
              },
              {
                path :'/dashboard/cart',
                element :<Cart></Cart>,
               
              },
              {
                path :'/dashboard/wishlist',
                element :<WishList></WishList>,
              
              },
              
             
            ]
          },
          {
            path : '/FAQ',
            element : <FAQ></FAQ>,
            loader : ()=>fetch('../Question.json'),
          },
          {
            path : '/product/:product_id',
            element : <ProductDetails></ProductDetails>,
            loader :()=>fetch('../allProducts.json'),

          },
        
      ],
      
    }
  ])
  export default routes