import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex gap-2 border border-black rounded-full px-3 py-1 max-sm:order-2 max-sm:w-2/3'>
      <label htmlFor="search"><div><img src="search.svg" alt="search bar" /></div></label>
      <input id='search' type="text" placeholder='Search' className='focus:outline-none w-full bg-transparent'/>
    </div>
  )
}

export default SearchBar
