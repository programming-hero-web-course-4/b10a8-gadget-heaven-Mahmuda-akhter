import { useLoaderData } from "react-router-dom";

const FAQ = () => {
    const param = useLoaderData() || []; 
    console.log(param);

    if (!Array.isArray(param)) {
        return (
            <div className="text-center mt-24">
                <p className="text-2xl font-bold text-red-500">Error</p>
                <p className="text-gray-600">FAQs data is not available or invalid.</p>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto flex flex-col mt-24">
            <p className="text-2xl font-bold text-gray-600 mb-9">Help & Support FAQs</p>
            {param.map((line, indx) => (
                <div key={indx} className="join join-vertical bg-white">
                    <div className="collapse collapse-arrow join-item border">
                        <input
                            type="radio"
                            name="my-accordion"
                            id={`accordion-${indx}`}
                            className="hidden"
                        />
                        <label htmlFor={`accordion-${indx}`} className="collapse-title text-xl font-medium">
                            {line.question}
                        </label>
                        <div className="collapse-content">
                            <p>{line.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
