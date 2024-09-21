import { useContext } from "react"
import { ReadContext } from "../context/ReadContext"
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const {search, setSearch, searchBook} = useContext(ReadContext)
  return (
    <div className="flex justify-center gap-2 m-8">
  
      <input 
      type="text" 
      placeholder="Search Books" 
      className="border-2 rounded-lg w-3/4 sm:w-1/3 h-10 p-2 focus:outline-none focus:border-black" 
      value={search} 
      onChange={(e)=>setSearch(e.target.value)}
      onKeyDown={searchBook}
      />

      <button onClick={searchBook} className=""><FaSearch className="text-gray-400 hover:text-black text-2xl"/></button>
    </div>
  )
}

export default Search


// work on keydown event