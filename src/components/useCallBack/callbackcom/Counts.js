import React from "react";

const Count = ({ text, count }) => {
  console.log(`Rendering count ${text}`);
  return(
    <div>{text} - {count}</div>
  )
}

export default React.memo(Count);