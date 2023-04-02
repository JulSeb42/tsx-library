/*=============================================== InputImagePage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { InputImage } from "../../lib"

const InputImagePage = () => {
    const [image, setImage] = useState("")

    const handleImage = (e: any) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            const reader: any = new FileReader()

            reader.addEventListener("load", () => {
                setImage(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <Page title="InputImage">
            <InputImage
                id="image"
                img={image}
                label="Input image"
                onChange={e => handleImage(e)}
                icons={{ empty: "user" }}
                accentColor="secondary"
                borderRadius="circle"
            />

            <InputImage
                id="image2"
                img={image}
                label="Input image validation"
                onChange={e => handleImage(e)}
                validation="not-passed"
                accentColor="warning"
            />

            <InputImage
                id="image-disabled"
                img={image}
                label="Input image disabled"
                disabled
                accentColor="success"
            />
        </Page>
    )
}

export default InputImagePage
