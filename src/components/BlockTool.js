import * as React from 'react';
import { Icon } from 'react-icons-kit';
import { Editor, Transforms } from 'slate';

export default class BlockTool extends React.Component {

  isBlockActiveWith(editor, type) {

    const [match] = Editor.nodes(editor, {
      match: n => n.type === type
    })

    return !!match
  }

  toggleBlock(editor, format) {
    const isFormatActive = this.isBlockActiveWith(editor, format)


    Transforms.setNodes(
      editor,
      { type: isFormatActive ? 'paragraph' : format },
      { match: n => Editor.isBlock(editor, n) }
    )
  }


  render() {
    console.log(this.isBlockActiveWith(this.props.editor, this.props.format));
    console.log(this.props.editor)
    return (
      <button
        onClick={() => { this.toggleBlock(this.props.editor, this.props.format) }}
        style={{ color: '#5c89a5' }}
        className="button">

        <Icon
          size={26}
          icon={this.props.icon}/>
      </button>
    );
  }
}