import { Container } from "../Container/Container"


function Bannar() {
  return (
   
        <div className='relative bg-hero-bannar bg-cover bg-no-repeat bg-center py-[457px]'>
        <div className="bg-[rgba(0,0,0,0.60)] w-full h-full absolute top-0 left-0"></div>
        <Container>
        <div className="flex-col absolute z-10 text-white font-Poppins ">
          <h1 className=" w-[842px] font-medium text-6xl mb-[20px]">We exist since 1975 on the oil and gas industry.</h1>
          <button className="hover:bg-transparent hover:border cursor-pointer duration-700 
           hover:border-white bg-[red] text-white py-[14px] px-[30px] ">Learn More</button>
        </div>
    </Container>
    </div>
    
    
  )
}

export default Bannar