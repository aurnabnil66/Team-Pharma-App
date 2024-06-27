import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const TextIconOutline = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={81}
    height={63}
    fill="none"
    {...props}>
    <Path
      stroke="#045A6C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m5.5 50.57 18.75-38.947L43 50.571m-6.563-13.632H12.064m39.374-7.79c1.905-3.491 6.407-5.841 11.563-5.841 7.188 0 12.5 3.894 12.5 9.736v17.527"
    />
    <Path
      stroke="#045A6C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M50.5 43.633c0 4.382 4.197 7.06 9.375 7.06 8.438 0 15.625-3.287 15.625-12.902v-1.825c-3.125 0-9.063.121-14.375.608-5.12.47-10.625 2.313-10.625 7.06Z"
    />
  </Svg>
);
export default TextIconOutline;
