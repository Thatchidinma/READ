import { useContext } from 'react'
import image1 from '../images/img1.jpg'
import { ReadContext } from '../context/ReadContext'
import SeeMore from "./SeeMore"
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Card = () => {
  const {bookData, setBook, setShow, formatter, loading} = useContext(ReadContext)
  

  return loading ? (<div className='text-5xl m-auto col-span-5 animate-spin'><AiOutlineLoading3Quarters /></div>): (bookData ? (
   <>
    {bookData.map((item,index)=>{
      const img = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
      const authors = item.volumeInfo.authors

      return(
        <>
        <div key={index} className='border flex flex-col flex-nowrap p-4 bg-slate-200 rounded-lg cursor-pointer hover '>
        <img src={img ? img : image1} alt="" className="w-[200px] h-[200px] m-auto" />
        <div className='mt-4 flex flex-col text-center m-auto'>
          <h3 className='font-semibold'>{item.volumeInfo.title}</h3>
          <h3 className='sm:text-xs'>{formatter.format(authors)}</h3>
          <p onClick={()=>{setBook(item), setShow(true)}} className="text-sm text-center p-4 bg-gray-800 text-white px-6 mt-2 mx-auto rounded-lg hover:scale-110 transition ease-in-out ">See more </p>
        </div>
        </div>
        <SeeMore/>
        </>
      )
    }
    )}
   </>
  ) : (<div className='font-extrabold text-2xl col-span-5 mx-auto'>----- SEARCH NOT FOUND -----</div>))
}

export default Card
