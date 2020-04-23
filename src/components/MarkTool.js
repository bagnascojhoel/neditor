import * as React from 'react';
import { Icon } from 'react-icons-kit';
import { Editor } from 'slate';

export default class MarkTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFormatActive: this.isMarkActiveWith(this.props.editor, this.props.format)
    }
  }

  isMarkActiveWith(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: n => n[type] === true,
      universal: true,
    })

    return !!match
  }

  toggleMark(editor, format) {
    const isFormatActive = this.isMarkActiveWith(editor, format)

    if (isFormatActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
  }


  render() {

    return (
      <button
        style={{ color: '#5c89a5'}}
        onClick={() => {this.toggleMark(this.props.editor, this.props.format)}}
        className="button">

        <Icon
          size={26}
          icon={this.props.icon} />
      </button>
    );
  }
}