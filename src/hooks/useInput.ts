import { useState } from "react";

const useInput = (initialValue: string, validator?: unknown) => {
  const [value, setValue] = useState<string>(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    let willUpdate = true;

    if (typeof validator === "function") {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  console.log(value);
  return { value, onChange };
};

export default useInput;
