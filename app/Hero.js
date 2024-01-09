import Image from "next/image";



const Hero = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-[url('/hero.png')]">
          
           <button className="bg-primary mt-96 py-4 px-8 rounded-2xl text-contrast">Contact Us</button>
        </div>
    )
}



export default Hero;