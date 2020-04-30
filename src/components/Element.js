import * as React from 'react';
import Code from './Blocks/Code';

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'code':
      return (
        <Code>{children}</Code>
      );

    default:
      return (
        <p  {...attributes} style={{ marginTop: 0, marginBottom: '5px' }}>
          {children}
        </p>
      );
  }
};

export default Element;