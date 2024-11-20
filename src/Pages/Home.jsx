import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            {/* banner */}
            <Banner>
                
            </Banner>
            
            <div className="">
                <h1 className="text-4xl font-bold text-center mt-96">Explore Cutting-Edge Gadgets</h1>

                <div className="flex  justify-around w-8/12 mx-auto mt-6">
                        {/* categories tab section */}
                    <Categories categories={categories}></Categories>
                    
                    {/* dynamic nested component */}
                    <div className="flex-1">
                
                        <Outlet></Outlet>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Home;
