import React, { useContext, useState } from 'react';
import { ApiInfo } from '../APIS/Context';

export default function News() {
    const { news, setNews } = useContext(ApiInfo);
    // State to keep track of expanded news items
    const [expandedItems, setExpandedItems] = useState({});

    if (!news || news?.length === 0) {
        return (
          <div className='text-black mt-12 h-64 flex justify-center items-center text-xl'>
            No news today 🤷🏾
          </div>
        );
    }

    // Function to toggle expansion for a specific item
    const toggleExpansion = (index) => {
        setExpandedItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <div className='md:w-full md:flex md:justify-center'>
                    <div className='md:w-3/5 '>
                        <div className='mx-2 my-8 md:w-4/5  text-black text-xl font-bold'>
                            Recent Market News
                        </div>
                        {
                            
                            news.map((item, index) => (
                                <div className="mb-10 mx-3 bg-white hover:bg-slate-100 text-black p-4 md:w-full rounded-2xl" key={index}>
                                    <p className='font-bold'>
                                        {item.headline}
                                    </p>
                                    <p className='mt-3'>Source: {item.source}</p>

                                    <button onClick={() => toggleExpansion(index)} className='text-lime-400 underline my-3 mb-6'>
                                        {expandedItems[index] ? 'Read less' : 'Read more'}
                                    </button>
                                    {expandedItems[index] && (
                                        <div className='flex flex-col justify-center items-center'>
                                            <p  className='mb-11'>
                                                <img src={item.image} alt="" className='rounded-2xl md:h-96 h-48'/>
                                            </p>
                                            <p>{item.summary}</p>
                                        </div>
                                    )}
                                </div>
                            ))
                        }
                    </div>
        </div>
    );
}
