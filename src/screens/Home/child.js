import React, { memo } from "react";

const child = () => {
  return <div>Hello Child</div>;
};

export default memo(child);
