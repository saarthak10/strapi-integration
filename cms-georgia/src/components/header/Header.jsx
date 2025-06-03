import React, { useState } from "react";
import arrowDown from "../../assets/arrow_down.svg";
import languageIcon from "../../assets/language_icon.svg";
import menuIcon from "../../assets/menu_icon.svg";
import brandingIcon from "../../assets/branding_icon.svg";
import brandingSecondIcon from "../../assets/branding_second_icon.svg";

const Header = () => {
  const [showGovHeader, setShowGovHeader] = useState(false);

  const handleOpenClick = () => {
    setShowGovHeader(!showGovHeader);
  };
  const menu = [
    {id:1, title:'About '},
    {id:2, title:'Community Assistance '},
    {id:3, title:'Financing tools '},
    {id:4, title:'Affordable Housing '},
  ]
  return (
    <div>
      <div class="bg-blue-dark">
        <div class="py-3 px-6 flex justify-end  items-center gap-12">
          <div class="flex justify-end items-center gap-2.5">
            <p class="text-white font-semibold">
              {" "}
              An official site of State Of Georgia.
            </p>
            <a class="text-white flex items-center hover:underline cursor-pointer">
              {" "}
              How you know{" "}
              <img
                class="w-10 cursor-pointer"
                src={showGovHeader ? arrowDown : arrowDown}
                onClick={handleOpenClick}
              />
            </a>
          </div>
          <div class="flex gap-2.5 invisible md:visible">
            <a class="text-white hover:underline flex gap-2  items-center font-semibold">
              <img class="w-4" src={languageIcon} /> English
            </a>
            <a class="text-white hover:underline flex gap-2  items-center font-semibold">
              <img class="w-4" src={menuIcon} /> Organizations
            </a>
          </div>
        </div>
      </div>
      <div
        class={`bg-black ${
          showGovHeader ? "flex" : "hidden"
        } flex-col justify-center items-center text-white px-4 py-4`}
      >
        <div class="flex justify-center gap-4">
          <p class="font-semibold text-2xl">The .gov means it's official.</p>
          <p class="justify-center text-left w-xs text-[13px] border-l-2 border-black-light px-4">
            Local, state, and federal government websites often end in .gov.
            State of Georgia government websites and email systems use
            “georgia.gov” or “ga.gov” at the end of the address. Before sharing
            sensitive or personal information, make sure you’re on an official
            state website.
          </p>
        </div>
        <div class="flex justify-center gap-4">
          <p class="font-semibold text-2xl">Still not sure?</p>
          <p class="justify-center text-left w-xs text-[13px] border-l-2 border-black-light px-4">
            Call 1-800-GEORGIA to verify that a website is an official website of the State of Georgia.
          </p>
        </div>
      </div>
      <div class="py-3 px-6 flex">
        <img  width={'90px'} height={'90px'} class=" -mt-8 bg-white rounded-t-full px-3 py-3" src={brandingIcon} />
        <img src={brandingSecondIcon} width={'150px'} height={'50px'} class="border-l-2 border-yellow-icon pl-3" />
        <p class="m-3 w-xs text-xl font-semibold"> GEORGIA DEPARTMENT <em>of</em> COMMUNITY AFFAIRS</p>
      </div>
      <div class="py-3 px-6 flex bg-gray-50">
       {menu.map((item)=>(
          <div class="flex mr-9" key={item.id}>
            <p>{item.title}</p>  
            <img />
          </div>
       ))}
      </div>
    </div>
  );
};

export default Header;
