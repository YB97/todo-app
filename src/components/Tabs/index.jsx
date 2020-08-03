import React from "react";

import "./Tabs.css";

export const Tabs = ({ tabs = [], currentTab, onTabChange }) => {
  const createTabClickHandler = (tab) => () => {
    onTabChange(tab);
  };

  const renderTabs = () =>
    tabs.map((tab) => {
      const clsTab = currentTab === tab ? "tab--active" : "";

      return (
        <div
          style={{ width: `${100 / tabs.length}%` }}
          key={tab}
          onClick={createTabClickHandler(tab)}
          className={`tab ${clsTab}`}
        >
          {tab}
        </div>
      );
    });

  return <div className="tabs">{renderTabs()}</div>;
};
