import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'

const Document = () => {
  return (
    <div>
      <Header>
          <p className='text-white'></p>
      </Header>
      <Editor/>
    </div>
  )
}

export default Document