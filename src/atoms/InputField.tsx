import React from "react"

interface InputFieldProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
}

const InputField: React.FC<InputFieldProps> = ({
    value,
    onChange,
    placeholder,
}) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
    />
)

export default InputField
