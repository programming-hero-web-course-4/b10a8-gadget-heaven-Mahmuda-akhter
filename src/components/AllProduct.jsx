import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const AllProduct = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (!category || category === "All Product") {
            setItems(data);
        } else {
            const filterItem = data.filter(item => item.category === category);
            setItems(filterItem);
        }
    }, [data, category]);

    return (
        <div>
            {/* Conditional rendering */}
            {items.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12">
                    {items.map(product => (
                        <Product key={product.product_id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-purple-600 text-3xl font-bold py-10">
                    <p>No Data Available </p>
                </div>
            )}
        </div>
    );
};

export default AllProduct;
