/*=============================================== useForm ===============================================*/

import { useState } from "react"
import type { ChangeEvent } from "react"

export const useForm = (initialState = {}, onSubmit?: any) => {
    const [formData, setFormData] = useState(initialState)

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.target.id]: e.target.value })

    const resetForm = () => setFormData(initialState)

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit?.(formData)
    }

    return { formData, handleInputs, resetForm, handleSubmit }
}
