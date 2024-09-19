import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating hafl.png";
import ImgTemp from "../assets/deapool2.webp";
import IconPlay from "../assets/pngwing.com.png"

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-45"/>
        <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20 ">
            <div className="flex flex-col space-y-4 items-baseline w-[50%] ml-5">
                <p className="text-white bg-gradient-to-l from-red-700 to-gray-700 rounded-md py-1 px-3 text-sm sm:text-md md:text-md">TV Show</p>
            
            <div className="flex flex-col space-y-4">
                <h2 className="text-white text-xl sm:text-2xl md:text-[30px] font-bold leading-tight">Deadpool phim bom tấn đốt cháy mọi loại vé</h2>
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <img src={IconRating} alt="Icon Rating" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    <img src={IconRating} alt="Icon Rating" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    <img src={IconRating} alt="Icon Rating" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    <img src={IconRating} alt="Icon Rating" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                    <img src={IconRatingHalf} alt="Icon Rating" className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6"/>
                </div>
                    <p className="text-white text-sm sm:text-base md:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet odio officiis libero at animi. Illo nisi modi eos adipisci iure voluptate, eaque assumenda harum facere voluptates</p>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-white bg-black font-bold text-sm rounded-md">Chi tiết</button>
                        <button className="p-2 text-white bg-red-700 font-bold text-sm rounded-md">Xem Phim</button>
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
                <div className="w-[250px] h-[350px] sm:w-[275px] sm:h-[375px] md:w-[300px] md:h-[400px] relative group cursor-pointer">
                    <img src={ImgTemp} alt="temp"
                    className="w-full h-full object-cover rounded-2xl"/>
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <img src={IconPlay} alt="icon play" className="w-14 h-14 sm:w-15 sm:h-15 md:w-16 md:h-16 relative z-20"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
