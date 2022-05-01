import React from "react";
import * as Font from "./Font";
import { pProps } from "./Font";
interface styleProps extends pProps {
    icon?: string;
}
interface itemProps extends styleProps {
    to?: string;
}
declare const Breadcrumbs: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & Font.pProps & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & {
    theme?: import("@emotion/react").Theme | undefined;
} & styleProps, {}, {}>;
declare const BreadcrumbsItem: React.FC<itemProps>;
export { Breadcrumbs, BreadcrumbsItem };
