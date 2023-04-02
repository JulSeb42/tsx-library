/*=============================================== ButtonIconPage ===============================================*/

import React, { useState } from "react"

import { Page } from "../../components"
import { ButtonIcon, Flexbox } from "../../lib"

const ButtonIconPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Page title="ButtonIcon">
            <ButtonIcon
                icon="mail"
                variant="transparent"
                color="secondary"
                // position={{
                //     position: "fixed",
                //     bottom: "l",
                //     right: "l",
                // }}
                // shadow={{
                //     default: "s",
                //     hover: "l",
                //     active: "m",
                // }}
                label="email"
                showLabel
                // labelBottom="0px"
                // size={24}
            />

            <Flexbox gap="xs">
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="primary"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="secondary"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="success"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="danger"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="warning"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="white"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="font"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="background"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="primary"
                    disabled
                    label="email"
                />
            </Flexbox>

            <Flexbox gap="xs">
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="primary"
                    href="/"
                    label="email"
                    isRouterLink
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="secondary"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="success"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="danger"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="warning"
                    href="#"
                    label="email"
                />

                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="white"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="font"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="plain"
                    color="background"
                    href="#"
                    label="email"
                />
            </Flexbox>

            <Flexbox gap="xs">
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="primary"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="secondary"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="success"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="danger"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="warning"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="white"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="font"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="background"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="primary"
                    disabled
                    label="email"
                />
            </Flexbox>

            <Flexbox gap="xs">
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="primary"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="secondary"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="success"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="danger"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="warning"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="white"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="font"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="background"
                    href="#"
                    label="email"
                />
            </Flexbox>

            <Flexbox gap="xs">
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="primary"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="secondary"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="success"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="danger"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="warning"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="white"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="font"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="background"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="primary"
                    disabled
                    hoverBackground
                    label="email"
                />
            </Flexbox>

            <Flexbox gap="xs">
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="primary"
                    href="#"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="secondary"
                    href="#"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="success"
                    href="#"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="danger"
                    href="#"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="warning"
                    href="#"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="white"
                    href="#"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="font"
                    href="#"
                    hoverBackground
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="transparent"
                    color="background"
                    href="#"
                    hoverBackground
                    label="email"
                />
            </Flexbox>

            <Flexbox gap="xs">
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="primary"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="secondary"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="success"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="danger"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="warning"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="white"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="font"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="background"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="primary"
                    disabled
                    label="email"
                />
            </Flexbox>

            <Flexbox gap="xs">
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="primary"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="secondary"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="success"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="danger"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="warning"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="white"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="font"
                    href="#"
                    label="email"
                />
                <ButtonIcon
                    icon="mail"
                    variant="ghost"
                    color="background"
                    href="#"
                    label="email"
                />
            </Flexbox>

            <ButtonIcon
                isLoading
                icon="mail"
                variant="transparent"
                hoverBackground
                label="email"
            />

            <ButtonIcon
                burger
                isBurgerOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                label="email"
            />

            <ButtonIcon
                avatar="/images/pic-avatar.jpg"
                label="Avatar"
                showLabel
            />
        </Page>
    )
}

export default ButtonIconPage