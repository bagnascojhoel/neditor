import React, { useMemo, useState, useCallback } from 'react';
import GlobalStyle from './utils/styles/global';
import { createEditor } from 'slate';
import { Slate, withReact } from 'slate-react';
import Leaf from './components/Leaf';
import Element from './components/Element';
import Toolbar from './components/Toolbar';
import MarkTool from './components/Tools/MarkTool';
import Container from './components/Container';
import MyEditable from './components/MyEditable';
import BlockTool from './components/Tools/BlockTool';

const App = () => {

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
    <Container >
      <GlobalStyle/>
      <Slate editor={editor} value={value} onChange={val => setValue(val)}>
        <Toolbar >
          <BlockTool format="code" iconName="code" />
          <BlockTool format="format_quote" iconName="format_quote" />
          <MarkTool format="bold" iconName="format_bold" />
          <MarkTool format="italic" iconName="format_italic" />
          <MarkTool format="capitalize" iconName="text_format" />
      </Toolbar>
        <MyEditable
          spellCheck
          placeholder="Type in some text..."
          renderElement={renderElement}
          renderLeaf={renderLeaf}/>
        </Slate>
    </Container>
  );
}

export default App;
