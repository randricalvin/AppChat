import React from 'react'
import attach from '../assets/attach.svg'
import photo from '../assets/photo.svg'

const Input = () => {
  return (
    <div>
      <div className="flex justify-between">
          <textarea 
            className="lg:w-3/4 md:w-5/6 sm:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 "
            type="text"
            placeholder="Type your message here..."
          >
          </textarea>

          <div className='flex w-1/4 items-center justify-around'>
              <label htmlFor="file" className='cursor-pointer'>
                <img src={attach} alt="attach"/>
              </label>
              <input type="file" id="file" style={{display:"none"}}/>
              <label htmlFor="file" className='cursor-pointer'>
                <img src={photo} alt="adding" />
              </label>
            <button className='bg-sky-600 text-white font-bold px-4 py-2 hover:bg-sky-700'>Send</button>
          </div>
      </div>
    </div>
  )
}

export default Input