import * as React from 'react'
import { Editor, Transforms } from 'slate'
import { useSlate } from 'slate-react'
import { Icon } from '@material-ui/core'
import { WRAPPABLES } from '../../utils/constants'
import StyledButton from './StyledButton'

const isBlockActiveWith = (editor, type) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === type
  })

  return !!match
}

const toggleBlock = (editor, format) => {
  const isFormatActive = isBlockActiveWith(editor, format)
  const isWrappable = WRAPPABLES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => WRAPPABLES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, { type: isFormatActive ? 'paragraph' : format })

  if (!isFormatActive && isWrappable) {
    const block = {type: format, children: []}
    Transforms.wrapNodes(editor, block)
  }

}

const BlockTool = ({ format, iconName }) => {
  const editor = useSlate();
  return (
    <StyledButton onClick={() => toggleBlock(editor, format)}>
      <Icon> {iconName}</Icon>
    </StyledButton>
  )
}

export default BlockTool;