import * as React from 'react'
import {Editable} from 'slate-react'
import StyledMyEditable from './MyEditable/MyEditable.style'

const MyEditable = (props) => (
  <StyledMyEditable>
    <Editable {...props} />
  </StyledMyEditable>)

export default MyEditable