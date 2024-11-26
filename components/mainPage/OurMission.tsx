import Carousel from "@/components/Carousel";

const SlideshowInfo = {
      Interval: 10000,
      Images: [
            "https://steamuserimages-a.akamaihd.net/ugc/2074509887587699351/66FF7973966B2F1FEA01A780C4D90586EA80A115/",
            "https://media.tenor.com/mNj1Gs5Kp-kAAAAM/cat-funny.gif",
            "https://preview.redd.it/silly-kitty-3-v0-4grm3kfbym1c1.jpg?width=640&crop=smart&auto=webp&s=b7f70f961e426e137fa716f1f7a717a7e6be61bb",
            "https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t1080x1080.jpg"
      ]
}

export default function OurMission() {

      return (
            <div id="OUR_MISSION_CONTAINER" className="relative flex justify-center items-center w-full pl-10 pr-10 pt-64 pb-64 bg-center bg-no-repeat">

                  <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
                        style={{ backgroundImage: "url('https://cdn.schoolblocks.com/organizations/8dc2a881-35f9-495b-9bc1-7273b773a9f8/d5a5h5-WHS_Image.jpg')" }}
                  ></div>

                  <div className="relative flex flex-row justify-between items-center size-full">

                        <div className="flex flex-col justify-center items-start size-96 ml-20 glass scale-125 rounded-md shadow-md">

                              <div className="w-full h-auto pt-12 pl-8 pb-8">
                                    <span className="text-4xl text-base-100 font-bold drop-shadow-md">Our Mission</span>
                              </div>

                              <div className="w-full h-auto pl-8 text-white drop-shadow-md">
                                    <span className="font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, non saepe? Fuga tempore delectus quidem reprehenderit quis corrupti perspiciatis odio harum eius ad maiores quas, impedit inventore aperiam non explicabo?</span>
                              </div>

                              <div className="w-full h-full flex justify-center items-center">
                                    <a href="#" className="btn btn-primary">Learn More</a>
                              </div>

                        </div>

                        <div className="flex justify-center items-center mr-20 rounded-md aspect-video shadow-md p-10 glass" style={{ height: "30rem" }}>
                              <Carousel images={SlideshowInfo.Images} interval={SlideshowInfo.Interval} />
                        </div>

                  </div>

            </div>
      )

}