/*=============================================== FormPage ===============================================*/

import { useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

import { Page } from "../../components"
import { Form, Input } from "../../lib"

const FormPage = () => {
    const [inputs, setInputs] = useState({
        name: "Jul",
        email: "a@b.com",
        password: "pass",
    })

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value,
        })

    const resetForm = () =>
        setInputs({
            name: "",
            email: "",
            password: "",
        })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert(JSON.stringify(inputs))
    }

    return (
        <Page title="Form">
            <Form
                buttonPrimary={{ text: "Submit", iconLeft: "send" }}
                buttonSecondary={{ onClick: resetForm }}
                // buttonSecondary={{ to: "prev" }}
                onSubmit={handleSubmit}
            >
                <Input
                    id="name"
                    label="Name"
                    onChange={handleInputs}
                    value={inputs.name}
                />
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    onChange={handleInputs}
                    value={inputs.email}
                />
                <Input
                    id="password"
                    label="Password"
                    password
                    onChange={handleInputs}
                    value={inputs.password}
                />
            </Form>
        </Page>
    )
}

export default FormPage
