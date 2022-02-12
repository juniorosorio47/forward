import { useEffect, useRef, InputHTMLAttributes } from 'react'

import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    containerStyles?:object;
}

export const Checkbox: React.FC<CheckBoxProps> = ({ name, value, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  value = defaultValue || value;
  const defaultChecked = defaultValue === value
  


  console.log(defaultValue, value)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.checked
      },
      clearValue: ref => {

        ref.current.checked = defaultValue
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
    })
  }, [defaultValue, fieldName, registerField, defaultChecked])

  return (
    <div>
      <input
        defaultChecked={defaultChecked}
        ref={inputRef}
        value={value}
        type="checkbox"
        id={fieldName}
        {...rest}
      />

      {error && <span>{error}</span>}
    </div>
  )
}