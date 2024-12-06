import { Container } from "../Container/Container"


const Company = () => {
  return (
    <div className="bg-[#F0F0F0] py-[100px]">
      <Container>
        <div className="flex">
            <div className="py-[100px] px-[77px] bg-[red]">
                <h3 className="text-white font-Poppins font-medium text-[36px] w-[262px]">Learn more about our company</h3>
            </div>
            <div className="bg-Companyimg bg-cover bg-no-repeat bg-center py-[100px] w-[100%]">
                <button className="mt-[9%] ml-[42%] hover:bg-transparent hover:border cursor-pointer duration-700
                  hover:border-black bg-white text-[red] py-[14px] px-[30px] ">Learn More</button>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Company