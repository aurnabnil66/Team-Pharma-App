import * as React from 'react';
import Svg, {Path, Mask, Defs, Pattern, Use, Image} from 'react-native-svg';
const TinyQrCodeIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={71}
    height={72}
    fill="none"
    {...props}>
    <Path fill="url(#a)" d="M5.958 5.946h59.34v59.447H5.958z" />
    <Mask id="b" fill="#fff">
      <Path d="M.015 5a5 5 0 0 1 5-5h10.449a5 5 0 0 1 5 5v10.486a5 5 0 0 1-5 5H5.014a5 5 0 0 1-5-5V5Z" />
    </Mask>
    <Path
      fill="#045A6C"
      d="M-4.985 5c0-5.523 4.477-10 10-10h5.449c5.522 0 10 4.477 10 10h-25.45Zm25.449 15.486H.014h20.45Zm-15.45 0c-5.522 0-10-4.477-10-10V5c0-5.523 4.478-10 10-10v25.486ZM20.465 0v20.486V0Z"
      mask="url(#b)"
    />
    <Mask id="c" fill="#fff">
      <Path d="M70.984 5a5 5 0 0 0-5-5H55.535a5 5 0 0 0-5 5v10.486a5 5 0 0 0 5 5h10.45a5 5 0 0 0 5-5V5Z" />
    </Mask>
    <Path
      fill="#045A6C"
      d="M75.984 5c0-5.523-4.477-10-10-10h-5.449c-5.522 0-10 4.477-10 10h25.45ZM50.535 20.486h20.45-20.45Zm15.45 0c5.522 0 10-4.477 10-10V5c0-5.523-4.478-10-10-10v25.486ZM50.534 0v20.486V0Z"
      mask="url(#c)"
    />
    <Mask id="d" fill="#fff">
      <Path d="M.015 66.099a5 5 0 0 0 5 5h10.449a5 5 0 0 0 5-5V55.613a5 5 0 0 0-5-5H5.014a5 5 0 0 0-5 5v10.486Z" />
    </Mask>
    <Path
      fill="#045A6C"
      d="M-4.985 66.099c0 5.523 4.477 10 10 10h5.449c5.522 0 10-4.477 10-10h-25.45Zm25.449-15.486H.014h20.45Zm-15.45 0c-5.522 0-10 4.477-10 10v5.486c0 5.523 4.478 10 10 10V50.613Zm15.45 20.486V50.613v20.486Z"
      mask="url(#d)"
    />
    <Mask id="e" fill="#fff">
      <Path d="M70.984 66.099a5 5 0 0 1-5 5H55.535a5 5 0 0 1-5-5V55.613a5 5 0 0 1 5-5h10.45a5 5 0 0 1 5 5v10.486Z" />
    </Mask>
    <Path
      fill="#045A6C"
      d="M75.984 66.099c0 5.523-4.477 10-10 10h-5.449c-5.522 0-10-4.477-10-10h25.45ZM50.535 50.613h20.45-20.45Zm15.45 0c5.522 0 10 4.477 10 10v5.486c0 5.523-4.478 10-10 10V50.613Zm-15.45 20.486V50.613v20.486Z"
      mask="url(#e)"
    />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox">
        <Use xlinkHref="#f" transform="matrix(.01252 0 0 .0125 0 0)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nO2XQQ7CMAwE/f9PL2c4tIrWdkwyI+UENM5onZoIADgMFa9f3j5f/X53/dsLEAIDgSQw6lrYRWaLZrd4df3bCxACv0GgiUjgsxCZY0r1GPP2eXZ97QUIgYFAEhjntrCKW/z4O1AIDASSwMhr4VU07ErIrn97AULgMwg00e0JzF7dB66uf3sBQmAgkARGXgt3o8UCxx+oGyHQA4Em1wnMHnRVPOZk12uDQBMEmiBw+F85DVvLIDAQKBIY21t37NhSPYd177e9ICEwEEgCC1s4ewMl32nTf7+9ICHwGwSSwFlo8S0+bs7bjRDogUCT4wSqeL2RLWx1PxsEmiDQBIEm2XeCmi/93QFAYCAwSODJLVw9p2nYHVy+oRCIQJHAi1tYzQcs3w+BgcAnSOC/C5z2PJmDcPtLZNrzhMA1EHibwOy1SvoBq/dDYCDQgQSadF8ZAAAQl/IBVaeW6KBN/J8AAAAASUVORK5CYII="
        id="f"
        width={80}
        height={80}
      />
    </Defs>
  </Svg>
);
export default TinyQrCodeIcon;
