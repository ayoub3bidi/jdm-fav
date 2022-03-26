import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("${props.bgImage}")`}
`
const ItemText = styled.div`
  padding-top: 15vh;
  padding-right: 40px;
  text-align: right;
  text-shadow: 2px 2px 5px yellow;
`
const DownArrow = styled.h1`
  padding-top: 70vh;
  text-align: center;
  height: 40px;
  color: white;
  animation: animateDown infinite 1.5s;
`

const Section = ({ title, backgroundImg }) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1 style={{ color: "white" }}>{ title }</h1>
      </ItemText>
      <DownArrow>▼</DownArrow>
    </Wrap>
  )
}

export default Section