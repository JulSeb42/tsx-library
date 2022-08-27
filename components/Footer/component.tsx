/*=============================================== Footer ===============================================*/

import React from "react"

import Text from "../Text"

import * as Styles from "./styles"
import { FooterProps } from "./types"

const Footer = ({ children, logo, options, ...props }: FooterProps) => (
    <Styles.StyledFooter
        $separator={options?.separator}
        $separatorColor={options?.separatorColor || "gray-200"}
        {...props}
    >
        {logo.img ? (
            <Styles.LogoImg
                src={logo.img}
                alt={logo.alt || "Logo"}
                width={logo?.width || 100}
                height={logo?.height || 30}
                options={{
                    fit: "contain",
                }}
            />
        ) : (
            <Text tag="strong" color="primary">
                {logo.text}
            </Text>
        )}

        <Styles.FooterLinks>{children}</Styles.FooterLinks>
    </Styles.StyledFooter>
)

export default Footer
