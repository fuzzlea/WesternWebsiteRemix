import HomePageHero from "@/components/mainPage/HomePageHero";
import OurMission from "@/components/mainPage/OurMission";
import Resources from "@/components/mainPage/Resources";
import Academics from "@/components/mainPage/Academics"

export default function Home() {
      return (
            <>
                  {/* Hero */}
                  <HomePageHero />

                  {/* Mission */}
                  <OurMission />

                  {/* Resources */}
                  <Resources />

                  {/* Academics */}
                  <Academics />

            </>
      );
}
