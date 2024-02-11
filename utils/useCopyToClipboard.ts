import { useState } from "react";
import copy from "copy-to-clipboard";
import { SuccessHandler } from "./handlers";

const useCopyToClipboard = () => {
  const [value, setValue] = useState<string | number>("");

  const copyToClipboard = (text: string) => {
    const result = copy(text);
    if (result) setValue(text);
    SuccessHandler({
      message: "Text Copied To Clipboard",
    });
  };

  return { copyToClipboard, value };
};

export default useCopyToClipboard;
