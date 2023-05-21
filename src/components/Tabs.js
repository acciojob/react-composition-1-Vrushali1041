import React, { useState } from "react";

const Tabs = ({tabss}) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <div>
            <ul className="tabs">{
                tabss.map((tab, index) => (
                    <li key={index} className={`tab-item ${index === activeTab ? "active" : ""}`}
                        onClick={() => tabClick(index)}>{tab} 
                        {/* {tab.title} */}
                    </li>
                ))}
            </ul>
            <div className="tab-containt">
                <p>This is the content of {tabss[activeTab]}</p>
            </div>
        </div>
    )
}

export default Tabs;