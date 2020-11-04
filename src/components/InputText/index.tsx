import * as React from 'react'
import { ChangeEvent } from 'react'
import * as s from './styles'

export interface IInputProps {
  label?: string
  width: string
  value: string | number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Basic Input component
 *
 * @export
 * @param {IInputProps} props - { label?: string, width: string, value: string | number}
 * @return {*}
 */
export default function Input(props: IInputProps) {
  const { width, onChange, label, value } = props

  return (
    <s.InputWrapper width={width}>
      {label && <label>{label}</label>}
      <input type="text" onChange={onChange} value={value} />
    </s.InputWrapper>
  )
}
