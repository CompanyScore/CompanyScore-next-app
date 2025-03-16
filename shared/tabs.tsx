import React, { useState, ReactElement } from "react";
import classNames from "classnames";

type TabProps = {
  label: string;
  children: React.ReactNode;
};

type TabsProps = {
  children: React.ReactNode;
};

export function Tabs({ children }: TabsProps) {
  // Преобразуем детей в массив
  const tabsArray = React.Children.toArray(
    children,
  ) as ReactElement<TabProps>[];
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabsArray.length === 0) return <div>Нет данных для отображения.</div>;

  return (
    <div className="tabs-container w-full">
      <div className="tabs flex gap-4 border-b pb-2">
        {tabsArray.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={classNames("tab tab-bordered", {
              "text-primary": activeIndex === index,
            })}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tab-panel mt-4 w-full flex flex-col gap-4">
        {tabsArray[activeIndex].props.children}
      </div>
    </div>
  );
}
