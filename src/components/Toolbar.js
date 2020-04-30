import * as React from 'react'
import styled from 'styled-components'

// const Toolbar = styled.div`
//   text-align: center;
//   margin-bottom: 15px;
//   border-bottom: #5c89a5 solid 1px;
//   padding: 1rem 0;
// `

const Toolbar = ({children}) => {
  return (<div>{children}</div>);
};

export default Toolbar;