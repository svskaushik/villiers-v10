import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ImgProps = {
  size?: number;
  src: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
};