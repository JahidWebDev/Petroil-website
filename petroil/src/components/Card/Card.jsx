import { Container } from "../Container/Container"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Card = () => {
  return (
    <div className="py-[110px] bg-[#F0F0F0] font-Poppins">
        <Container>
          <div className="flex justify-between">
          <div className=" w-[339px] bg-Cardimg bg-no-repeat
           bg-cover bg-center">
            <div className="bg-[rgba(0,0,0,0.60)] px-[45px] py-[75px] text-white">
            <h3 className="text-[24px] font-medium w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</h3>
            <button className="hover:bg-transparent hover:border cursor-pointer duration-700
                  hover:border-black bg-[rgba(255,255,255,0.50)] text-white py-[10px] px-[22px] mt-[52px]">Learn More</button>
            </div>
            
           </div>
          <div className=" w-[339px] bg-Cardimg1 bg-no-repeat
           bg-cover bg-center">
            <div className="bg-[rgba(0,0,0,0.60)] px-[45px] py-[75px] text-white">
            <h3 className="text-[24px] font-medium w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</h3>
            <button className="hover:bg-transparent hover:border cursor-pointer duration-700
                  hover:border-black bg-[rgba(255,255,255,0.50)] text-white py-[10px] px-[22px] mt-[52px]">Learn More</button>
            </div>
            
           </div>
          <div className=" w-[339px] bg-Cardimg2 bg-no-repeat
           bg-cover bg-center">
            <div className="bg-[rgba(0,0,0,0.60)] px-[45px] py-[75px] text-white">
            <h3 className="text-[24px] font-medium w-[249px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod</h3>
            <button className="hover:bg-transparent hover:border cursor-pointer duration-700
                  hover:border-black bg-[rgba(255,255,255,0.50)] text-white py-[10px] px-[22px] mt-[52px]">Learn More</button>
            </div>
            
           </div>
           
          </div>
          <div className="flex items-center justify-end mt-[39px] font-bold text-black text-[1rem]">
            <h3>MORE FROM THE BLLOG</h3>
           <MdOutlineKeyboardArrowRight className="text-bold text-black text-base w-[25px]"/>
           </div>
        </Container>
    </div>
  )
}

export default Card