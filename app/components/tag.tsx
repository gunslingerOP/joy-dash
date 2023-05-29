import React from "react";

const Tag = (props: { text: string; color: string }) => {
  const { text, color } = props;
  return (
    <span className={`p-2 text-xs  rounded-2xl bg-[${color}]`}>{text}</span>
  );
};

export default Tag;
