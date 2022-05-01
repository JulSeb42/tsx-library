import React from "react";
interface props {
    title: string;
    favicon?: string;
    description?: string;
    keywords?: any;
    author?: string;
    type?: string;
    cover?: string;
    siteName?: string;
    language?: string;
    children?: any;
}
declare const Helmet: React.FC<props>;
export default Helmet;
