import { Container } from "../Container/Container"


const Area = () => {
  return (
    <div className="bg-[red] py-[46px] font-Poppins border-b-[5px] border-b-[#FFB800]">
        <Container>
            <div className="flex items-center justify-between after:absolute after:content-[''] after:w-[2px] after:h-[20px]">
                <h3 className="text-[36px] font-bold text-white">Want to join as member branch in your area?</h3>
                
                <button className=" hover:bg-transparent border cursor-pointer duration-700
                 border-white  text-[#ffffff] py-[14px] px-[30px] ">CONTACT</button>
            </div>
        </Container>
    </div>
  )
}

export default Area