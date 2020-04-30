import * as React from 'react'
import { Editor, Transforms } from 'slate'
import { useSlate } from 'slate-react'
import { Icon } from '@material-ui/core'
import StyledButton from './StyledButton'

const isBlockActiveWith = (editor, type) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === type
  })

  return !!match
}

const toggleBlock = (editor, format) => {
  const isFormatActive = isBlockActiveWith(editor, format);

  Transforms.setNodes(
    editor,
    { type: isFormatActive ? 'paragraph' : format },
    { match: n => Editor.isBlock(editor, n) }
  )
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