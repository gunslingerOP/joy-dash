import React from "react";

const CapsuleBar = (vals?: {
  fill: any;
  x: any;
  y: any;
  width: any;
  height: any;
  color: string;
  endCapColor?: string;
  capsule: boolean;
}) => {
  if (!vals) {
    return null;
  }
  const { color, x, y, width, height, endCapColor, capsule } = vals;
  const markerStartId = `url(#${color})`;
  const markerEndId = `url(#${endCapColor})`;

  return (
    <>
      <defs>
        <marker id={color} viewBox="-1 -1 2 2" markerWidth="1" orient="auto">
          <circle r="1" fill={color} />
        </marker>
      </defs>
      <defs>
        <marker
          id={endCapColor}
          viewBox="-1 -1 2 2"
          markerWidth="1"
          orient="auto"
        >
          <circle r="1" fill={color} />
        </marker>
      </defs>
      <line
        markerStart={markerStartId}
        strokeLinecap="butt"
        markerEnd={capsule ? markerEndId : undefined}
        strokeWidth={width / 3}
        height={height}
        x1={x + width / 2}
        y1={y}
        x2={x + width / 2}
        y2={height + y}
        stroke={color}
      />
    </>
  );
};

export default CapsuleBar;
