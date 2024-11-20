import banner from '../../public/image/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div className="bg-[#9538e2] pt-12 w-11/12 mx-auto text-white relative">
                <h1 className="text-6xl w-7/12 mx-auto text-center leading-snug">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="w-5/12 mx-auto text-center mt-6">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex justify-center mt-7">
                    <button className="bg-white rounded-full px-8 py-4 text-[#9237de] font-bold">
                        Shop Now
                    </button>
                </div>
                <div className="border-4 w-6/12 mx-auto py-28 mt-12 rounded-t-3xl bg-[#b574eb]"></div>
            </div>
            <div className="flex justify-center">
                <img
                    className="w-[830px] h-[500px] absolute top-[505px] rounded-3xl"
                    src={banner} 
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default Banner;
