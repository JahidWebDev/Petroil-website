import { Container } from "../Container/Container"
import logo from "../../assets/Logo.png"
import Chat1 from "../../assets/Cert1.png"
import Chat2 from "../../assets/Cert2.png"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Fotter = () => {
  return (
    <div className="bg-[#1F1F1F] py-[149px]">
       <Container>
       <div className="flex justify-between">
            <div>
                <img src={logo} alt="loading......." />
                
               <div className="felx flex-col my-[33px]">
               <div className="flex items-center">
                <MdOutlineMarkEmailUnread className="text-white text-[20px] mx-[5px]"/>
                <p className="text-white text-[14px] font-Poppins">mail@yourcompany.com</p>
                </div>
               <div className="flex items-center my-[15px]">
                <FaPhoneAlt  className="text-white text-[20px] mx-[5px]"/>
                <p className="text-white text-[14px] font-Poppins">+896 120 5889 (Toll free)</p>
                </div>
               <div className="flex items-center my-[15px]">
                <IoLocation className="text-white text-[20px] mx-[5px]"/>
                <p className="text-white text-[14px] font-Poppins">101 Baker Street, New York, USA, 12345</p>
                 
                </div>
                <div className="flex ">
                    <FaFacebookF className="text-white text-[16px] bg-[#F40404] 
                    rounded-full mr-[12px] py-[16px] px-[16px]"/>
                    <RiTwitterFill className="text-white text-[16px] bg-[#F40404] rounded-full mr-[12px] py-[16px] px-[16px]"/>
                    <FaLinkedinIn className="text-white text-[16px] bg-[#F40404] rounded-full mr-[12px] py-[16px] px-[16px]"/>
                    <FaInstagram className="text-white text-[16px] bg-[#F40404] rounded-full mr-[12px] py-[16px] px-[16px]"/>
                </div>
               </div>
            </div>
            <div className=" mt-[26px]">
            <h2 className="text-[16px] font-bold text-white">Company</h2>
             <ul className="mt-[21px]">
                <li className="mt-[15px] text-white">Home</li>
                <li className="mt-[15px] text-white">About</li>
                <li className="mt-[15px] text-white">Services</li>
                <li className="mt-[15px] text-white">Gallery</li>
             </ul>
            </div>       
            <div className="mt-[26px]">
            <h2 className="text-[16px] font-bold text-white">Others</h2>
             <ul className="mt-[21px]">
                <li className="mt-[15px] text-white">Blog</li>
                <li className="mt-[15px] text-white">Contact</li>
                <li className="mt-[15px] text-white">Terms & Conditions</li>
                <li className="mt-[15px] text-white">Privacy Policy</li>
             </ul>
            </div>       
            <div className="mt-[26px] ">
            <h2 className="text-[16px] font-bold text-white">Certificate</h2>
             <div className="flex mt-[20px]">
                <img src={Chat1} alt="loading.... " />
                <img className="ml-[10px]" src={Chat2} alt="loading....." />
             </div>
            </div>       
        </div>
       </Container>
    </div>
  )
}

export default Fotter