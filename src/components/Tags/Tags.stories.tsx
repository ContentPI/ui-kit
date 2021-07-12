import React from 'react'
import Tags from './index'

const stories = {
  component: 'Tags',
  props: [
    {
      name: 'Tags',
      type: 'TagsArray',
      default: '[]',
      description: 'The tags of the component'
    }
  ],
  stories: [
    {
      name: 'Tags',
      description: 'simple tags',
      // eslint-disable-next-line no-console
      render: (
        <Tags
          label="Agrega aqui"
          getTags={tags => console.log(tags)}
          tags={[{ option: 'opcion1', value: 'hola' }]}
        />
      ),
      prop: 'tags',
      code: `
       <TextArea />
      `
    }
  ]
}

export default stories
