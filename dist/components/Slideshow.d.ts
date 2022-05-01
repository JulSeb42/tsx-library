import React from "react";
interface props extends React.HTMLAttributes<HTMLElement> {
    children: any;
    show?: number;
    auto?: number;
    controls?: boolean;
    controlsLarge?: boolean;
    height?: string | number;
    hideButtonsMobile?: boolean;
    speed?: number;
    pagination?: boolean;
    gapDots?: number | string;
    dotSize?: number;
}
declare const Slideshow: React.FC<props>;
export default Slideshow;
