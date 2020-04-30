import * as React from 'react'
import { Editor } from 'slate'
import { useSlate } from 'slate-react'
import { Icon } from '@material-ui/core'
import StyledButton from './StyledButton';

const isMarkActiveWith = (editor, type) => {
  const [match] = Editor.nodes(editor, {
    match: n => n[type] === true,
    universal: true,
  })

  return !!match
}

const toggleMark = (editor, format) => {
  const isFormatActive = isMarkActiveWith(editor, format);

  if (isFormatActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const MarkTool = ({ iconName, format }) => {
  const editor = useSlate();

  return (
    <StyledButton onClick={() => toggleMark(editor, format)}>
      <Icon>{iconName}</Icon>
    </StyledButton>
      )
};

export default MarkTool;