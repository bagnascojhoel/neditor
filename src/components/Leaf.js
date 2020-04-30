import * as React from 'react';
import Code from './Leafs/Code';


const Leaf = ({ attributes, children, leaf }) => {
  const {code, bold, italic, capitalize} = leaf
  const leafStyle = {}

  leafStyle.fontWeight = bold ? '700' : 'normal'
  leafStyle.fontStyle = italic ? 'italic' : 'normal'
  leafStyle.textTransform = capitalize ? 'capitalize' : 'none'

  if (code)
    children = <Code>{children}</Code>

  return (<span {...attributes} style={leafStyle}>{children}</span>)
}

export default Leaf;