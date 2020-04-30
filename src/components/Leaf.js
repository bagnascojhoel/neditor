import * as React from 'react';


const Leaf = ({ attributes, children, leaf }) => {
  const {bold, italic, capitalize} = leaf;

  const leafStyle = {
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
    textTransform: capitalize ? 'capitalize' : 'none',
  };

  return (
  <span
    {...attributes}
    style={leafStyle}>
      {children}</span>)
}

export default Leaf;