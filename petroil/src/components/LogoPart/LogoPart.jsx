import { Container } from "../Container/Container"
import logo1 from "../../assets/Logo1.png"
import logo2 from "../../assets/Logo2.png"
import logo3 from "../../assets/Logo3.png"
import logo4 from "../../assets/Logo4.png"

const LogoPart = () => {
  return (
    <Container>
        <div className="flex justify-between py-[134px] ">
            <img src={logo1} alt="loading......." />
            <img src={logo2} alt="loading......." />
            <img src={logo3} alt="loading......." />
            <img src={logo4} alt="loading......." />
        </div>
    </Container>
  )
}

export default LogoPart