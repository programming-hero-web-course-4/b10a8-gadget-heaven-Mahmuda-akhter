// Heading.js
const Heading = ({ title = 'Default Title', subTitle = 'Default Subtitle' }) => {
    return (
        <div className="text-center text-white">
            
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg font-extralight w-5/12 mx-auto mt-4">{subTitle} </p>
        </div>
    );
};

export default Heading;
