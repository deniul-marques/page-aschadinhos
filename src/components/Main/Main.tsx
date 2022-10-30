import BannerGridA from "../../assets/img/1.png";
import BannerGridB from "../../assets/img/2.png";
import BannerGridC from "../../assets/img/3.png";

export default function Main() {
      return (
            <main className="">
                  <div className="container mx-auto ">
                        <div className="grid grid-rows-2 grid-cols-3 h-60 gap-2">
                              <div className=" col-span-2 row-span-2">
                                    <img className="w-full h-full" src={BannerGridA} alt="" />
                              </div>
                              <div>
                                    <img className="w-full h-full " src={BannerGridB} alt="" />
                              </div>
                              <div>
                                    <img className="w-full h-full " src={BannerGridC} alt="" />
                              </div>
                        </div>
                  </div>
            </main>
      )
}