// components/PhoneInput.tsx
"use client"

import { FC, InputHTMLAttributes, useEffect, useRef } from "react"
import Inputmask from "inputmask"
import Field from "./Field"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  isValid?: boolean
}

const PhoneInput: FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  isValid = true,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      Inputmask("+7 (999) 999-99-99").mask(inputRef.current)
    }
  }, [])

  return (
    <Field
      type="tel"
      placeholder="+7 (___) ___-__-__"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      isValid={isValid}
      ref={inputRef}
      className="placeholder:text-currentColor"
    />
  )
}

export default PhoneInput
