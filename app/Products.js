import ImageSlider from "./ImageSlider"





export const Products = ({images}) => {


    return (
        <div className="h-screen w-screen p-4 bg-primary overflow-hidden">
            <h2 className="text-9xl text-contrast">Products</h2>

           
            <div className=" h-full w-full flex flex-col justify-end items-center ">
            <ImageSlider images={images} />
            </div>
            
        </div>
    )
}