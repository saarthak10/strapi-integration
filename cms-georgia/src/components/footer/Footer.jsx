import React from 'react'
import brandingIcon from "../../assets/branding_icon.svg";
import facebookIcon from "../../assets/facebook_icon.svg";
import twitterIcon from "../../assets/twitter_icon.svg";
import linkdIcon from "../../assets/linkdin_icon.svg";



const Footer = () => {
  return (
    <div>
        <div class="bg-blue-dark flex justify-between px-8 py-4">
            <div>
                <div class=" flex gap-2.5 items-center">
                    <div class="pr-4 border-r-2 border-r-white">
                        <img src={brandingIcon} width={'43px'} />

                    </div>
                    <p class="text-white text-xl font-semibold">GEORGIA DEPARTMENT OF COMMUNITY AFFAIRS</p>
                </div>

            </div>
            <div class="flex gap-4 items-center" >
                <a class="bg-blue-light p-2 rounded-full  hover:bg-green-500 cursor-pointer duration-400 ease-in-out">
                    <img src={facebookIcon} />

                </a>
                 <a class="bg-blue-light p-2 rounded-full  hover:bg-green-500 cursor-pointer duration-400 ease-in-out">
                    <img src={twitterIcon} />

                </a>
                 <a class="bg-blue-light p-2 rounded-full  hover:bg-green-500 cursor-pointer duration-400 ease-in-out ">
                    <img src={linkdIcon} />

                </a>

            </div>
        </div>

    </div>
  )
}

export default Footer