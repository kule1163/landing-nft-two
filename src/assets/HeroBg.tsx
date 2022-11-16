import * as React from "react";
const SvgComponent = (props: any) => (
  <svg
    width="100%"
    height="100%"
    viewBox="200 200 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      fill="url(#a)"
      fillOpacity={1}
      d="M-1 0h1441v784H-1z"
      style={{ mixBlendMode: "multiply" }}
    />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width="100%"
        height="100%"
      >
        <use xlinkHref="#b" transform="matrix(.00033 0 0 .0006 0 -.725)" />
      </pattern>
      <image
        id="b"
        width={3024}
        height={4032}
      />
    </defs>
  </svg>
);
export default SvgComponent;