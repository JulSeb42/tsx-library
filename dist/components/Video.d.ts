import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLVideoElement> {
    width?: string | number;
    height?: string | number;
    fit?: string;
    aspectRatio?: string;
    youtube?: string;
    allow?: string;
    frameBorder?: string;
    allowFullScreen?: boolean;
}
interface props extends styleProps {
    src?: string;
    controls?: boolean;
    autoPlay?: boolean;
}
declare const Video: React.FC<props>;
export default Video;
