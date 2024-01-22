import React, { useState } from 'react'
import { Panel } from './Panel';
import {Tab} from "./Tab"
import"./TabStyle.css"
export const Tabs = ({ tabs, panels }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleClick = (tabId) => {
      setActiveTab(tabId);
    };
    return (
        <>
        <div className="tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              id={tab.id}
              label={tab.label}
              isActive={tab.id === activeTab}
              onClick={handleClick}
            />
          ))}
        </div>
  
        <div className="panels">
          {panels.map((panel) => (
            <Panel
              key={panel.id}
              id={panel.id}
              title={panel.title}
              desc={panel.desc}
              list={panel.list}
              img={panel.img}
              isActive={panel.id === activeTab}
            />
          ))}
        </div>
      </>
  )
}
