import React from 'react'
import styled from 'styled-components'

const FooterBox = styled.footer`
  width: 65%;
  height: 150px;
  min-height: 35%;
  background-color: #ffebad;
  color: black;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = () => {
  return (
    <FooterBox>
      <ul>
        <li>Address: 인천 서구</li>
        <li>TEL: 010-3309-1918 Email: rngnlah@naver.com</li>
        <li>COPYRIGHT (C) DevHero9 ALL RIGHTS RESERVED</li>
        <li>Github: https://github.com/9hero</li>
      </ul>
    </FooterBox>
  )
}
