import React from 'react'
import Radio from './index'

const stories = {
  component: 'Radio',
  props: [
    {
      name: 'checked',
      type: 'boolean',
      default: 'false',
      description: 'Enables the checked option of the radio'
    },
    {
      name: 'color',
      type: 'StatusColor',
      default: 'primary',
      description: 'The color of the radio'
    }
  ],
  stories: [
    {
      name: 'Radio',
      description: 'Simple Radio',
      render: <Radio> </Radio>,
      prop: '',
      code: `
        <Radio>
        </Radio>
      `
    },
    {
      name: 'Radio Checked',
      description: 'Radio with checked prop',
      render: <Radio checked> </Radio>,
      prop: 'checked',
      code: `
        <Radio checked>
        </Radio>
      `
    },
    {
      name: 'Radio with color',
      description: 'Radio with color status',
      render: (
        <>
          <Radio color="primary"> </Radio>
          <Radio color="success"> </Radio>
          <Radio color="warning"> </Radio>
          <Radio color="info"> </Radio>
          <Radio color="danger"> </Radio>
        </>
      ),
      prop: 'color',
      code: `
      <>
      <Radio color="primary"> </Radio>
      <Radio color="success"> </Radio>
      <Radio color="warning"> </Radio>
      <Radio color="info"> </Radio>
      <Radio color="danger"> </Radio>
    </>
      `
    }
  ]
}

export default stories
