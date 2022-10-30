import { GiRunningShoe, Gi3DGlasses } from "react-icons/gi";
import { BsHandbagFill } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { RiCoupon2Fill } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";

export default function Nav() {
      return (
            <div className="container mx-auto">
                  <nav className="py-10">
                        <ul className="grid grid-cols-6 gap-5">
                              <li className="flex items-center justify-center">
                                    <div className="text-4xl text-red-500 border rounded-xl p-2 drop-shadow-2xl hover:bg-red-500 hover:text-white cursor-pointer duration-500 hover:transition"><GiRunningShoe /></div>
                              </li>
                              <li className="flex items-center justify-center">
                                    <div className="text-4xl text-red-500 border rounded-xl p-2 drop-shadow-2xl hover:bg-red-500 hover:text-white cursor-pointer duration-500 hover:transition"><Gi3DGlasses /></div>
                              </li>
                              <li className="flex items-center justify-center">
                                    <div className="text-4xl text-red-500 border rounded-xl p-2 drop-shadow-2xl hover:bg-red-500 hover:text-white cursor-pointer duration-500 hover:transition"><BsHandbagFill /></div>
                              </li>
                              <li className="flex items-center justify-center">
                                    <div className="text-4xl text-red-500 border rounded-xl p-2 drop-shadow-2xl hover:bg-red-500 hover:text-white cursor-pointer duration-500 hover:transition"><IoShirtOutline /></div>
                              </li>
                              <li className="flex items-center justify-center">
                                    <div className="text-4xl text-red-500 border rounded-xl p-2 drop-shadow-2xl hover:bg-red-500 hover:text-white cursor-pointer duration-500 hover:transition"><RiCoupon2Fill /></div>
                              </li>
                              <li className="flex items-center justify-center">
                                    <div className="text-4xl text-red-500 border rounded-xl p-2 drop-shadow-2xl hover:bg-red-500 hover:text-white cursor-pointer duration-500 hover:transition"><AiFillCar /></div>
                              </li>
                        </ul>
                  </nav>
            </div>
      )
}