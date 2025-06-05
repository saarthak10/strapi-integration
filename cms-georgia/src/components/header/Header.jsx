import React, { useState } from "react";
import arrowDown from "../../assets/arrow_down.svg";
import languageIcon from "../../assets/language_icon.svg";
import menuIcon from "../../assets/menu_icon.svg";
import brandingIcon from "../../assets/branding_icon.svg";
import brandingSecondIcon from "../../assets/branding_second_icon.svg";

const Header = ({mainContent, handleLanguageClick}) => {
  const [showGovHeader, setShowGovHeader] = useState(false);

  const handleOpenClick = () => {
    setShowGovHeader(!showGovHeader);
  };


  return (
    <div>
      <div class="bg-blue-dark">
        <div class="py-3 px-6 flex justify-end  items-center gap-12">
          <div class="flex justify-end items-center gap-2.5">
            <p class="text-white font-semibold">
              {" "}
              {mainContent[0]?.header_title}
            </p>
            <a class="text-white flex items-center hover:underline cursor-pointer">
              {" "}
              {mainContent[0]?.header_title_ext}{" "}
              <img
                class="w-10 cursor-pointer"
                src={showGovHeader ? arrowDown : arrowDown}
                onClick={handleOpenClick}
              />
            </a>
          </div>
          <div class="flex gap-2.5 invisible md:visible">
            <a class="text-white hover:underline flex gap-2  items-center font-semibold cursor-pointer" onClick={handleLanguageClick}>
              <img class="w-4" src={languageIcon} /> {mainContent[0]?.language}
            </a>
            <a class="text-white hover:underline flex gap-2  items-center font-semibold">
              <img class="w-4" src={menuIcon} /> {mainContent[0]?.organisation}
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
          <p class="font-semibold text-2xl">{mainContent[0]?.header_description}</p>
          <p class="justify-center text-left w-xs text-[13px] border-l-2 border-black-light px-4">
            {mainContent[0]?.description}
          </p>
        </div>
        <div class="flex justify-center gap-4">
          <p class="font-semibold text-2xl">{mainContent[0]?.question}</p>
          <p class="justify-center text-left w-xs text-[13px] border-l-2 border-black-light px-4">
            {mainContent[0]?.question_desc}
          </p>
        </div>
      </div>
      <div class="py-3 px-6 flex">
        <img  width={'90px'} height={'90px'} class=" -mt-8 bg-white rounded-t-full px-3 py-3" src={brandingIcon} />
        <img src={brandingSecondIcon} width={'150px'} height={'50px'} class="border-l-2 border-yellow-icon pl-3" />
        <p class="m-3 w-xs text-xl font-semibold"> {mainContent[0]?.logo_title}</p>
      </div>
      <div class="py-3 px-6 flex bg-gray-50">
       {mainContent[0]?.menu?.content.map((item)=>(
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
