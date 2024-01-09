import Hero from "./Hero"
import About from "./About"
import Navbar from "./Navbar"
import { Services } from "./Services"
import ImageSlider from "./ImageSlider"
import { Products } from "./Products"
import Footer from "./Footer"

export default function Home() {

  const images = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg','image9.jpg']
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Products  images={images}/>
      <Footer />
    </div>
  )
}
