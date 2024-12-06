import { Container } from "../Container/Container"
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram,  FaLinkedin } from "react-icons/fa";


const Header = () => {
  return (
    <div className=" py-[16px]  bg-Fill text-white border-b-[5px] border-b-[#FFB800]">
     <Container>
      <div className="flex justify-between">
        <div className="relative flex  after:absolute after:content-[''] after:w-[2px] after:h-[20px] after:bg-[gray] after:top-[20%] after:right-[-27px]">
        <MdMarkEmailUnread fontSize={'1.7rem'}/>
        <p className="text-[16px] align-middle ml-[5px]">mail@yourcompany.com</p>
        </div>
         <div className="w-1/2 mr-[150px] flex">
         <FaPhoneAlt fontSize={'1.4rem'}/>
         <p className="text-[15px] align-middle ml-[5px]">+896 120 5889 (Toll free)</p>
         </div>
        <div className="flex justify-end align-baseline gap-x-[16px] mt-[5px]">
        <FaFacebookSquare className="text-base  hover:bg-[#4267B2] rounded "/>
        <FaTwitterSquare className="text-base  hover:bg-[#1DA1F2] rounded "/>
        <FaInstagram className="text-base hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded "/>
        <FaLinkedin className="text-base  hover:bg-[#0077B5] rounded "/>
        </div>
      </div>
       
     </Container>
    </div>
    
  )
}

export default Header 