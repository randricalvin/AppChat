import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center'>
          <input
          className="bg-lightGrey my-4 h-10 lg:w-5/6 md:w-1/2 sm:w-2/3 pl-5 text-m focus:outline-none rounded-lg"
          type="search"
          onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
          }}
          name="search"
          placeholder="Find an user"
          />
      </div>

      <div className="flex py-4 px-2 justify-start items-center hover:bg-sky-600 border-b-2">
        <div>
          <img
            src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
            className="object-cover h-10 w-10 rounded-full"
            alt=""
          />
        </div>
        <div className="mx-4">
          <div className="text-m font-semibold text-white">Luis1994</div>
          <p className="text-white">Pick me at 9:00 Am</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBar