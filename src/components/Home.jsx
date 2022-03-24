import styled from "styled-components"
import Section from "./Section"

const Container = styled.div`
    height: 100vh;
`

const Home = () => {
  return (
    <Container>
        <Section
          title="Nissan Skyline GT-R R34"
          backgroundImg="https://i.ibb.co/NjyqSpg/nissan-skyline-gtr-r34.jpg"
        />
        <Section
          title="Subaru Impreza WRX STI"
          backgroundImg="https://www.sport.kokcar.com/wp-content/uploads/2021/12/Subaru-Impreza-WRX-STI-two-road-rally-specimens-for-sale.jpg"
        />
        <Section
          title="Mitsubishi Lancer EVO 4"
          backgroundImg="https://i.ibb.co/8xjtZmg/mitsubishi-lancer-evolution-4.jpg"
        />
        <Section
          title="Toyota GT-86"
          backgroundImg="https://i.ibb.co/vzz5jNj/gt-86.png"
        />
    </Container>
  )
}

export default Home