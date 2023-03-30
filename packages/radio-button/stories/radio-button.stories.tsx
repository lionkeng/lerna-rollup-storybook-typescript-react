// Button.stories.ts|tsx

import React, { useState } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import RadioButton from '../src'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>

export const Primary: ComponentStory<typeof RadioButton> = () => {
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div>
      <RadioButton
        name="options"
        value="option1"
        checked={selectedOption === 'option1'}
        label="Option 1"
        onChange={handleOptionChange}
      />
      <RadioButton
        name="options"
        value="option2"
        checked={selectedOption === 'option2'}
        label="Option 2"
        onChange={handleOptionChange}
      />
    </div>
  )
}
