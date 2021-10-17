import * as React from "react";
import { Dimensions } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

function HomeTopBar({ children, ...props }) {
  return (
    <Svg
      preserveAspectRatio="none"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1441 965.14"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.5}
          y1={482.5}
          x2={1600.5}
          y2={482.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0} stopColor="#0B76D2" />
          <Stop offset={1} stopColor="#03B1E1" />
        </LinearGradient>
      </Defs>
      <Path d="M1440.5 709.5L.5 934.5V.5h1440z" fill="url(#prefix__a)" />
    </Svg>
  );
}

export default HomeTopBar;
