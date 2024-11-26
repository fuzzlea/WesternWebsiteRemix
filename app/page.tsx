import HomePageHero from "@/components/HomePageHero";
import Carousel from "@/components/Carousel";

const AthleticSlideshowInfo = {
      Interval: 5000,
      Images: [
            "/LogoLong.png",
            "/LogoSquare.png",
            "/LogoSquare.png",
            "/LogoSquare.png"
      ]
}

export default function Home() {
      return (
            <>
                  <HomePageHero />

                  <div className="flex justify-between items-center w-full pl-10 pr-10 pt-32 pb-32">

                        <div className="flex flex-col justify-center items-start size-96 ml-20 glass scale-125 rounded-md shadow-md">

                              <div className="w-full h-auto p-8">
                                    <span className="text-4xl text-primary font-bold drop-shadow-md">Athletics</span>
                              </div>

                              <div className="w-full h-auto pl-8 text-white drop-shadow-md">
                                    <span className="font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non saepe? Fuga tempore delectus quidem reprehenderit quis corrupti perspiciatis odio harum eius ad maiores quas, impedit inventore aperiam non explicabo?</span>
                              </div>

                              <div className="w-full h-full flex justify-center items-center">
                                    <a href="#" className="btn btn-primary">Learn More</a>
                              </div>

                        </div>

                        <div className="pr-40">
                              <Carousel images={AthleticSlideshowInfo.Images} autoSlideInterval={AthleticSlideshowInfo.Interval} />
                        </div>

                  </div>
            </>
            // Hero (maybe a slideshow)
      );
}
