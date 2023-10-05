import React from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

export const editorOptions = {
  defaultTag: "",
  textTags: {
    bold: "b",
    underline: "u",
    italic: "i",
    strike: "s",
  },
  mode: "classic",
  rtl: false,
  katex: "window.katex",
  font: ["Arial", "tahoma", "Courier New,Courier"],
  fontSize: [8, 10, 14, 18, 24, 36],
  formats: ["p", "blockquote", "h1", "h2", "h3"],
  colorList: [
    ["#ff0000", "#ff5e00", "#ffe400", "#abf200"],
    ["#00d8ff", "#0055ff", "#6600ff", "#ff00dd"],
  ],
  imageGalleryUrl: "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
  videoFileInput: false,
  audioFileInput: true,
  tabDisable: false,
  linkTargetNewWindow: true,
  linkProtocol: "",
  linkRelDefault: {
    default: "nofollow",
    check_new_window: "noreferrer noopener",
    check_bookmark: "bookmark",
  },
  lineHeights: [
    {
      text: "Single",
      value: 1,
    },
    {
      text: "Double",
      value: 2,
    },
  ],
  paragraphStyles: [
    "spaced",
    {
      name: "Box",
      class: "__se__customClass",
    },
  ],
  textStyles: [
    "translucent",
    {
      name: "Emphasis",
      style: "-webkit-text-emphasis: filled;",
      tag: "span",
    },
  ],
  buttonList: [
    [
      "undo",
      "redo",
      "font",
      "fontSize",
      "formatBlock",
      "paragraphStyle",
      "blockquote",
      "bold",
      "underline",
      "italic",
      "strike",
      "subscript",
      "superscript",
      "fontColor",
      "hiliteColor",
      "textStyle",
      "removeFormat",
      "outdent",
      "indent",
      "align",
      "horizontalRule",
      "list",
      "lineHeight",
      "table",
      "link",
      "image",
      "video",
      "audio",
      "math",
      "imageGallery",
      "fullScreen",
      "showBlocks",
      "codeView",
      "preview",
      "print",
      "save",
      "template",
    ],
  ],
  // lang: SUNEDITOR_LANG.en,
  // "lang(In nodejs)": "en",
};

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default SunEditor;
