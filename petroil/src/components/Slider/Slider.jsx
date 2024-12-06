import Silder1 from "../../assets/Slider-1.png"
import Silder2 from "../../assets/Slider-2.png"
import Silder3 from "../../assets/Slider-3.png"
import Silder4 from "../../assets/Slider-4.png"






const Slider = () => {
  return (
    <div className="flex justify-between">
        <img className="w-[458px]" src={Silder1} alt="loading........" />
        <img className="w-[458px]" src={Silder2} alt="loading........" />
        <img className="w-[458px]" src={Silder3} alt="loading........" />
        <img className="w-[458px]" src={Silder4} alt="loading........" />
    </div>
  )
}

export default Slider