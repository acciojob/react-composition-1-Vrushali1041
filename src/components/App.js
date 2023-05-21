
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
 

  return (
    <div>
        {/* Do not remove the main div */}
       <Tabs tabss = {tabs} />
    </div>
  )
}

export default App;
