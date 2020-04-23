import * as React from 'react';

function Element({attributes, children, element}) {
  switch (element.type) {
    case 'code':
      return (
        <pre className="code" {...attributes}>
          <code>{children}</code>
        </pre>
      );

    default:
      return (
        <p  {...attributes} style={{marginTop: 0, marginBottom: '5px'}}>
          {children}
        </p>
      );
  }
}

function Leaf(props) {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? 'bold' : 'normal',
        fontStyle: props.leaf.italic ? 'italic' : 'normal'}}
    >
      {props.children}
    </span>
  )
}


export { Element, Leaf };