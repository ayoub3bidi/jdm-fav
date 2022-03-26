import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`
const Menu = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  padding-top: 15px;
  flex: 1;

  @media(max-width: 768px) {
    display: none;
  }

  h3 {
    font-weight: 500;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  a {
    text-decoration: none;
    color: white;
    text-shadow: 2px 2px 5px green ;
  }
`

const Header = () => {
  return (
    <Container>
      <a>
        <img style={{ width: "50px" }} src="https://lezebre.lu/images/detailed/26/65575-JDM-Logo-Vert-Jaune.png" alt='logo' />
      </a>
      <Menu>
        <h3>
          <a href="#">Nissan Skyline GT-R R34 | </a>
          <a href="#">Subaru Impreza WRX STI | </a>
          <a href="#">Mitsubishi Lancer EVO 4 | </a>
          <a href="#">Toyota GT-86</a>
        </h3>
      </Menu>
    </Container>
  )
}

export default Header