import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: <Profile />,
    },
    {
      name: "Interests",
      component: <Interests />,
    },
    {
      name: "Settings",
      component: <Settings />,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            className="heading"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">{ActiveTabComponent}</div>
    </div>
  );
};

export default TabForm;
