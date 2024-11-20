import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const MainLayout = () => {
    return (
        <div >
            {/* nav bar */}
           <div className="h-16">
                <NavBar></NavBar>
           </div>
            {/* dynamic things */}
            <div className="min-h-[calc(100vh-268px)] pb-24 ">
                <Outlet></Outlet>
            </div>
            {/* footer */}
      
            <Footer></Footer>
       
        </div>
    );
};

export default MainLayout;