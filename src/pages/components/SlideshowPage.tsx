/*=============================================== SlideshowPage ===============================================*/

import { Page } from "../../components"
import { Slideshow, Image, uuid, Spacers } from "../../lib"

const SlideshowPage = () => {
    const images = [
        "https://images.unsplash.com/photo-1636390785258-f59cd6883a03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1636390785299-b4df455163dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1634705146926-b8fbca28f431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1928&q=80",
        "https://images.unsplash.com/photo-1636207543865-acf3ad382295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ]

    const imagesPortrait = [
        "https://images.unsplash.com/photo-1647725280666-bb7f94a15d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647831591495-2f9ce7dd3d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647831570034-51d43eac0694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647464884405-42bbd541bc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647458792028-f9b3599d4208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647599708318-1b267bf44fd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1646330685088-d8a402b0dcc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ]

    return (
        <Page title="Slideshow">
            <Slideshow
                controls={{
                    type: "large",
                    iconPrev: "arrow-left",
                    iconNext: "arrow-right",
                    color: "white",
                    hideTouchScreens: false,
                }}
                height="30vw"
                pagination={{
                    variant: "bars",
                    // color: "secondary",
                    hideTouchScreens: false,
                    position: "outside",
                }}
                // thumbnails={images}
                borderRadius="xl"
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

            <Slideshow height="40vw" options={{ show: 3 }} controls>
                {imagesPortrait.map((image, i) => (
                    <Image
                        src={image}
                        key={i}
                        width="100%"
                        height="100%"
                        fit="cover"
                        style={{ padding: `0 ${Spacers.XS}` }}
                        alt="Img"
                    />
                ))}
            </Slideshow>
        </Page>
    )
}

export default SlideshowPage
