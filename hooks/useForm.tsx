/*=============================================== useForm ===============================================*/

import React, { useState } from "react"

const useForm = (initialState = {}, onSubmit?: any) => {
    const [formData, setFormData] = useState(initialState)

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formData, [e.target.id]: e.target.value })

    const resetForm = () => setFormData(initialState)

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit?.(formData)
    }

    return { formData, handleInputs, resetForm, handleSubmit }
}

export default useForm
