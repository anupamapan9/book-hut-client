import axios from "axios"
import { useEffect, useState } from "react"

const useBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('https://floating-everglades-56290.herokuapp.com/books')
            .then(res => {
                setBooks(res.data)
            }).then(err => {
                // console.log(err)
            })
    }, [])
    return [books, useBooks]
}
export default useBooks