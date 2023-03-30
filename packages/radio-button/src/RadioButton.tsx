import React from 'react'

interface RadioButtonI {
  name: string
  value: string
  checked: boolean
  label: string
  onChange: (event: any) => void
}

function RadioButton(props: RadioButtonI): JSX.Element {
  return (
    <div className="radio-button">
      <label>
        <input
          type="radio"
          name={props.name}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.label}
      </label>
    </div>
  )
}

export default RadioButton
