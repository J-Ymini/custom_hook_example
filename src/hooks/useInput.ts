import { useState } from "react";

const useInput = (
  initialValue: string,
  validator: (value: string) => boolean | never
) => {
  const [value, setValue] = useState<string>(initialValue);

  if (typeof validator !== "function") {
    return;
  }

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

  return { value, onChange };
};

export default useInput;
