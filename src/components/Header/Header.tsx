import { TfiSearch } from 'react-icons/tfi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { SlBookOpen } from 'react-icons/sl';
import { SlBasket } from 'react-icons/sl';

import Logo from "../../assets/img/aschadinhos.svg";

export default function Header() {
      return (
            <header className="container mx-auto p-5">
                  <div className="flex justify-between items-center">
                        <img src={Logo} alt="" />

                        <div>
                              <ul className="flex gap-10 text-sm font-medium items-center">
                                    <li >Home</li>
                                    <li className='flex gap-2 items-center'>Booking<span>< RiArrowDownSLine /></span></li>
                                    <li className='flex gap-2 items-center'>Shop<span>< RiArrowDownSLine /></span></li>
                                    <li className='flex gap-2 items-center'>Blog<span>< RiArrowDownSLine /></span></li>
                                    <li className='flex gap-2 items-center'>Features<span>< RiArrowDownSLine /></span></li>
                              </ul>
                        </div>
                        <div>
                              <ul className='text-lg flex items-center gap-5'>
                                    <li><a href=""><TfiSearch /></a></li>
                                    <li><a href=""><SlBookOpen /></a></li>
                                    <li><a href=""><SlBasket /></a></li>
                              </ul>
                        </div>
                  </div>


            </header>
      )
}