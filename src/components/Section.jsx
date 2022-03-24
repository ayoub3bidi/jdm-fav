import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://i.ibb.co/NjyqSpg/nissan-skyline-gtr-r34.jpg')
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const DownArrow = styled.h1`
  padding-top: 70vh;
  text-align: center;
  height: 40px;
  color: white;
  animation: animateDown infinite 1.5s;
`

const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1 style={{ color: "white" }}>Nissan Skyline GT-R R34</h1>
      </ItemText>
      <DownArrow>▼</DownArrow>
    </Wrap>
  )
}

export default Section