import * as React from 'react';
import Paragraph from './Blocks/Paragraph';
import Quote from './Blocks/Quote';

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'quote':
      return (
        <Quote {...attributes}>{children}</Quote>
      )

    default:
      return (
        <Paragraph {...attributes}>{children}</Paragraph>
      );
  }
};

export default Element;