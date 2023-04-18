/*=============================================== SlideshowPage ===============================================*/

import React from "react"

import { Page } from "../../components"
import { Slideshow, Image, uuid } from "../../lib"

const SlideshowPage = () => {
    const images = [
        "https://images.unsplash.com/photo-1636390785258-f59cd6883a03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1636390785299-b4df455163dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1634705146926-b8fbca28f431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1928&q=80",
        "https://images.unsplash.com/photo-1636207543865-acf3ad382295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ]

    return (
        <Page title="Slideshow">
            <Slideshow
                controls={{
                    type: "small",
                    iconPrev: "arrow-left",
                    iconNext: "arrow-right",
                    color: "secondary",
                    hideTouchScreens: false,
                }}
                height="30vw"
                pagination={{
                    variant: "bars",
                    color: "secondary",
                    hideTouchScreens: false,
                    position: "inside",
                }}
                activeSlide={1}
            >
                {images.map(image => (
                    <Image
                        src={image}
                        alt="Image slideshow"
                        fit="cover"
                        key={uuid()}
                    />
                ))}
            </Slideshow>
        </Page>
    )
}

export default SlideshowPage
