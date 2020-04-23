import * as React from 'react';
import './Toolbar.css';

export default class Toolbar extends React.Component {
  render() {

    return (
      <div style={{display:'flex',justifyContent:'center'}} className="toolbar">
        {React.Children.map(this.props.children, child => React.cloneElement(child, {editor: this.props.editor}))}
      </div>
    );
  }
}