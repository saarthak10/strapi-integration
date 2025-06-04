import React from 'react'
import arrowNextIcon from '../../assets/next_arrow_icon.svg'

const MainSection = ({programs, blogs}) => {
  return (
    <>
    <div class="bg-gray-100 py-22 px-8">
        <div class="border-t-4 border-red-500 w-[80px]">
        </div>
        <h2 class="font-bold text-5xl mt-4">
           Featured Programs 
        </h2>

        <div class=" grid grid-rows-2 grid-cols-4 text-center gap-7 gap-y-8 py-8">
          {programs?.data?.map((program)=>(
            <div class="rounded-sm bg-blue-300 cursor-pointer  hover:bg-green-500">
              <img class="rounded-sm hover:bg-black-shadow " src={`http://localhost:1337${program?.image?.url}`} />
              <div class="flex  py-4 px-6  justify-between">
                <p class=" font-semibold text-base">{program.title}</p>
                <img src={arrowNextIcon} />
              </div>
            </div>

          ))

          }
        </div>


    </div>
    <div class="bg-gray-50 py-22 px-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs?.data?.map((blog)=>(
              <div class="bg-white rounded-sm">
              <img class="rounded-sm hover:bg-black-shadow " src={`http://localhost:1337${blog?.image?.url}`} />
              <div class="px-8 py-8">

              <h2 class="font-semibold text-4xl py-4">{blog.title }</h2>
              <p class="text-base  py-4">{blog.description}</p>
              <a class="text-xl text-black-shadow py-4 hover:underline underline-offset-2 hover:decoration-green-500">{blog.anchor}</a>

              </div>
              </div>

          ))}  
          </div>

    </div>
    
    </>
  )
}

export default MainSection