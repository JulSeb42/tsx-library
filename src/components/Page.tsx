/*=============================================== Page ===============================================*/

import React from "react"
import type { FC } from "react"
import styled from "styled-components"

import { NavDemo } from "./NavDemo"
import { DefaultLayout } from "./"

import { Spacers, Mixins, Text } from "../lib"

export const Page: FC<PageProps> = ({ children, title }) => {
    return (
        <DefaultLayout title={title}>
            <NavDemo />

            <Container>
                <Text tag="h1">{title}</Text>

                {children}
            </Container>
        </DefaultLayout>
    )
}

interface PageProps {
    children?: any
    title: string
}

const Container = styled.main`
    width: calc(100% - 200px);
    left: 200px;
    position: relative;
    padding: ${Spacers.XXL};
    ${Mixins.Grid({
        $gap: "l",
    })};
`
