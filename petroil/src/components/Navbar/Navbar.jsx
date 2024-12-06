import { Container } from "../Container/Container"
import logo from "../../assets/Logo.png"

const Navbar = () => {
  return (
    <div className="bg-[red] py-[27px]">
      <Container>
        <div className="flex justify-between ">
            <div className="w-[192px]">
                <img src={logo} alt="loading......" />
            </div>
           <div className="flex">
           <ul className='flex gap-x-[4rem] ml-[10px] text-[16px] font-Poppins items-center text-white ' >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Blog</li>
         </ul>
         <button className='border-[2px] py-[13px] px-[31px] ml-[72px] font-Poppins text-white '>CONTACT</button>
           </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar