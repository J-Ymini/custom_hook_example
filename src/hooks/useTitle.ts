import { useState, useEffect } from "react";

const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState<string>(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title") as HTMLTitleElement;
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
};

export default useTitle;
