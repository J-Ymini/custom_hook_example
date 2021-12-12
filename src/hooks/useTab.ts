import { useState } from "react";

interface ITab {
  tab: string;
  content: string;
}

const useTabs = (initialTab: number, allTabs: ITab[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialTab);
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

export default useTabs;
