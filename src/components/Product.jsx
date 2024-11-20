import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { product_title, price, product_id, product_image } = product || {};

    return (
        <div className="bg-white rounded-lg w-11/12 mx-auto shadow-lg py-7 mt-6 flex flex-col justify-between ">
            {/* Image Section */}
            <figure className="w-9/12 mx-auto">
                <img
                    src={product_image}
                    alt="Product"
                    className="rounded-lg mb-4 bg-green-200 h-[200px] w-full object-cover" 
                />
            </figure>

            {/* Content Section */}
            <div className="text-start px-8 flex flex-col justify-between ">
                <div>
                    <h3 className="font-bold text-lg mb-2 overflow-hidden">
                        {product_title || "Product Name"}
                    </h3>
                    <p className="text-gray-600 mb-4 ">Price: $ {price }</p>
                </div>
                <Link to={`/product/${product_id}`}>
                    <button className="px-6 py-2 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Product;
