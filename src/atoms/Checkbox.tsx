import React from "react"

interface CheckboxProps {
    checked: boolean
    onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => (
    <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox"
    />
)

export default Checkbox
