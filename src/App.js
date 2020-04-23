import React, { useMemo, useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import {Element, Leaf} from './components/Formats';
import Toolbar from './components/Toolbar';
import BlockTool from './components/BlockTool';
import MarkTool from './components/MarkTool';
import './App.css';
import { ic_code } from 'react-icons-kit/md/ic_code';
import { ic_format_bold } from 'react-icons-kit/md/ic_format_bold';
import { ic_format_italic } from 'react-icons-kit/md/ic_format_italic';

function App() {

  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{text: ''}]
    }
  ])

  const renderElement = useCallback(props => <Element {...props}/>, []);
  const renderLeaf = useCallback(props => <Leaf {...props}/>, []);


  return (
    <div className="editor">

      <Slate editor={editor} value={value} onChange={val => setValue(val)} >

        <Toolbar className="editor__header" editor={editor}>
          <BlockTool format="code" icon={ic_code}/>
          <MarkTool format="bold" icon={ic_format_bold}/>
          <MarkTool format="italic" icon={ic_format_italic}/>
        </Toolbar>

        <Editable
          spellCheck
          placeholder="Type in some text..."
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          className="editor__content"/>
      </Slate>
    </div>
  );
}

export default App;
