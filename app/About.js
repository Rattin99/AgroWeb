



const About = () => {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/2 h-screen bg-primary"> 
            <div className="h-full flex flex-col justify-center items-center">
                <p className="text-contrast w-1/2  text-6xl text-start ">Welcome</p>
                <p className="text-contrast w-1/2 p-2 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
            </div>
             </div>
            <div className="w-1/2 h-screen object-fit">
                <img className="w-full h-screen object-cover" src="/about.png"/>
            </div>
        </div>
    )
}

export default About;