import React from 'react'
import styled from 'styled-components'

const HeaderBox = styled.header`
  width: 65%;
  height: 100px;
  /* min-height: 35%; */
  background-color: #a5f1e9;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 90%;
    min-height: 20%;
    /* Other styles for smaller screens */
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    min-height: 10%;
    /* Other styles for even smaller screens */
  }
`

export const Header = () => {
  return <HeaderBox>header</HeaderBox>
}
