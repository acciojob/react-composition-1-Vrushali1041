import React, { useState } from "react";

const Tabs = (props) => {
    const {tabs} = props;
    const [activeTab, setActiveTab] = useState(tabs[0].content);

    return (
        <div>
           <ul> 
        {tabs.map((item, index)=>{
        return <li key={index} onClick{()=> {setActiveTab(item.content)}}> {item.title}</li>
    })}
</ul>
<p>{content}</p>
        </div>
    );
}

export default Tabs;
