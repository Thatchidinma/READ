import { useContext } from "react"
import { ReadContext } from "../context/ReadContext"
import image1 from '../images/img1.jpg'
import { FaRegWindowClose } from "react-icons/fa";

const SeeMore = () => {
    const{book, show, setShow, formatter} = useContext(ReadContext)

    if(!show){
        return null
    }

    const img = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
    const authors = book.volumeInfo.authors
    
  return  (
    <div className="box-border min-h-svh w-svw fixed top-0 left-0 right-0 bottom-0 bg-black/10 flex justify-center items-center">
        <div className="bg-white w-[90%] lg:w-[50%] p-4 relative">
        <button onClick={()=>setShow(false)} className='absolute top-4 right-4 text-2xl hover:scale-110'><FaRegWindowClose /></button>
        <div className="mt-8 flex justify-start">
            <img src={img ? img : image1} alt="" className="border w-[150px] h-[200px] mr-4" />
            <div className="">
                <h1 className='text-xl lg:text-4xl font-semibold'>{book.volumeInfo.title}</h1>
                <h3 className='mt-2 text-lg lg:text-xl'>{formatter.format(authors)}</h3>
                <h4 className='text-blue-600'>{book.volumeInfo.publisher} {book.volumeInfo.publishedDate}</h4>
                <a href={book.volumeInfo.previewLink} target="_blank"><button className="text-sm text-center p-4 px-4 lg:px-6 bg-blue-900 text-white  mt-2 mx-auto rounded-lg hover:scale-110 transition ease-in-out ">view on google books</button>
                </a>
            </div>
        </div>

        <p className="mt-2 text-justify text-sm">{book.volumeInfo.description}</p>

        </div>
    </div>
  )
}

export default SeeMore
