import React from 'react'
import arrowDown from '../../assets/arrow_down.svg'
import languageIcon from '../../assets/language_icon.svg'
import menuIcon from '../../assets/menu_icon.svg'

const Header = () => {
  return (
    <div>
        <div class="bg-blue-dark">
            <div class="py-3 flex justify-end  items-center gap-12">
                <div class="flex items-center gap-2.5">

                <p class="text-white font-semibold"> An official site of State Of Georgia.</p>
                <a class="text-white flex items-center hover:underline cursor-pointer"> How you know <img  class="w-1/4 cursor-pointer" src={arrowDown} /></a>
                </div>
                <div class="flex">

                <a class="text-white hover:underline flex gap-2 items-center font-semibold"><img class="w-1/15" src={languageIcon} />  English</a>
                <a class="text-white hover:underline flex gap-2 items-center font-semibold"><img class="w-1/15" src={menuIcon} />  Organizations</a>
                </div>

            </div>
            <div class="bg-black flex-col md:flex justify-center">
                <div class="">
                    The .gov means it's official.
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header