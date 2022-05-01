import React from "react";
import { propsImg } from "./style";
interface propsComponent extends propsImg {
    width?: string | number;
    height?: string | number;
    className?: string;
    src: string;
    alt: string;
    fit?: string;
    caption?: string;
}
declare const Image: React.FC<propsComponent>;
export default Image;
