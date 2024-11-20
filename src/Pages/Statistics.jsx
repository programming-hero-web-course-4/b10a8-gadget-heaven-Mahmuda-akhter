
import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data  =useLoaderData()
    
    return (
        <div className="w-11/12 mx-auto bg-[#f7f7f7]">
           <div className=" bg-[#9538e2]  pt-9 pb-24">
                
                <Heading title="Statistics" subTitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!" />
           </div>

           <p className="font-bold text-xl mt-10">Statistics</p>
              {
                data && data.length>0 ?(
                    <div className="bg-white py-12  w-10/12 mx-auto rounded-xl mt-11">
                        <ResponsiveContainer width="70%" height={400} className={'mx-auto'}>
                            <ComposedChart
                                
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                                >
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="product_title" scale="band" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                                <Bar dataKey="price" barSize={40} fill="#9538e2" />
                                <Line type="monotone" dataKey="product_title" stroke="#1EBE5C" />
                                <Scatter dataKey="" fill="#1EBE5C" />
                                </ComposedChart>
                        </ResponsiveContainer>


                    </div>
                ): ( <p className="text-center text-3xl text-[#9538e2] font-bold">No Data Found From Statistics</p>)
              }
        </div>
    );
};

export default Statistics;