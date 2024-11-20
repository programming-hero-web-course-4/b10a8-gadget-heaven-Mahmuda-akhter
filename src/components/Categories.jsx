import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
    return (
        <div className="flex flex-col  bg-base-100 shadow-lg mt-6 p-8 h-fit">
            {
                categories.map(category => (
                    <NavLink 
                        key={category.category} 
                        to={`/allProduct/${category.category}`}
                        className={({ isActive }) => 
                            `font-bold px-6 py-3 rounded-full  mb-9 ${
                                isActive 
                                    ? 'bg-[#9538e2] text-white' 
                                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                            }`
                        }
                    >
                        {category.category}
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Categories;
