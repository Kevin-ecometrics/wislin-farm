import React from "react";
import AnimatedCursor from "react-animated-cursor";

function Cursor() {
  return (
    <div>
      <AnimatedCursor
        innerSize={5}
        outerSize={30}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#FF0000",
        }}
        outerStyle={{
          border: "3px solid #FF0000",
        }}
      />
    </div>
  );
}

export default Cursor;
