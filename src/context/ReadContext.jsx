import { createContext, useState } from "react";

export const ReadContext = createContext()

const ReadContextProvider = (props) => {

    const [search, setSearch] = useState('')
    const [bookData, setBookData] = useState([])
    const [book, setBook] = useState({})
    const [show, setShow] = useState(false)
    const formatter = new Intl.ListFormat('en', {
        style: 'short',
        type: 'conjunction',
    })
    const [loading, setloading] = useState(false)

    const searchBook = (e) => {
        if(e.type === 'click' || (e.type === 'keydown' && e.key === "Enter")){
            setloading(true)
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&key=${import.meta.env.VITE_API}`+'&maxResults=40')
            .then(response => response.json())
            .then(data =>{
              setBookData(data.items);
              setloading(false)
            })
            .catch (error =>{
                console.log(error)
            })
            }
    }
    const value = {
        search, setSearch, searchBook, bookData, book, setBook, show, setShow, formatter, loading
    }
    return(
        <ReadContext.Provider value={value}>
            {props.children}
        </ReadContext.Provider>
    )
}


export default ReadContextProvider 

