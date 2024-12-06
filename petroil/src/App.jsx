import './App.css'
import Bannar from './components/Bannar/Bannar'
import Card from './components/Card/Card'
import Company from './components/Company/Company'
import Header from './components/Header/Header'
import LogoPart from './components/LogoPart/LogoPart'
import Navbar from './components/navbar/Navbar'
import Services from './components/Services/Services'
import Slider from './components/Slider/Slider'
import Supplier from './components/Supplier/Supplier'
import Map from './components/Map/Map'
import Area from './components/Area/Area'
import Fotter from './components/Fotter/Fotter'
import Fotterend from './components/Fotterend/Fotterend'


function App() {
 
  return (
    <>
      <Header/>
      <Navbar/>
      <Bannar/>
      <Supplier/>
      <Slider/>
      <Services/>
      <Company/>
      <LogoPart/>
      <Card/>
      <Map/>
      <Area/>
      <Fotter/>
      <Fotterend/>
    </>
  )
}

export default App
