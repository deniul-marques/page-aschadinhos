import { TfiSearch } from 'react-icons/tfi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { SlBookOpen } from 'react-icons/sl';
import { SlBasket } from 'react-icons/sl';

export default function Header() {
      return (
            <header className="container mx-auto p-5">
                  <div className="flex justify-between items-center">
                        <h1>Logomarca</h1>

                        <div>
                              <nav>
                                    <ul className="flex gap-10 text-sm font-semibold items-center">
                                          <li >Home</li>
                                          <li className='flex gap-2 items-center'>Booking<span>< RiArrowDownSLine /></span></li>
                                          <li className='flex gap-2 items-center'>Shop<span>< RiArrowDownSLine /></span></li>
                                          <li className='flex gap-2 items-center'>Blog<span>< RiArrowDownSLine /></span></li>
                                          <li className='flex gap-2 items-center'>Features<span>< RiArrowDownSLine /></span></li>
                                    </ul>
                              </nav>
                        </div>
                        <div>
                              <ul className='text-lg flex items-center gap-4'>
                                    <li><a href=""><TfiSearch /></a></li>
                                    <li><a href=""><SlBookOpen /></a></li>
                                    <li><a href=""><SlBasket /></a></li>
                              </ul>
                        </div>
                  </div>


            </header>
      )
}