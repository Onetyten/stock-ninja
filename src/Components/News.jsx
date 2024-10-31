import React, { useContext, useState } from 'react';
import { ApiInfo } from '../APIS/Context';

export default function News() {
    const { news, setNews } = useContext(ApiInfo);
    // State to keep track of expanded news items
    const [expandedItems, setExpandedItems] = useState({});

    if (!news || news.length === 0) {
        return (
          <div>
            Loading...
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
        <div>
            {
                news.map((item, index) => (
                    <div className="my-12 ml-3" key={index}>
                        <p>
                            <strong>{item.headline}</strong>
                        </p>
                        <button onClick={() => toggleExpansion(index)}>
                            {expandedItems[index] ? 'Collapse' : 'Expand'}
                        </button>
                        {expandedItems[index] && (
                            <div>
                                <p>{item.source}</p>
                                <p>
                                    <img src={item.image} alt="" />
                                </p>
                                <p>{item.summary}</p>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    );
}
