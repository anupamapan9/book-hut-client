import axios from "axios"
import { useEffect, useState } from "react"

const useBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/books')
            .then(res => {
                setBooks(res.data)
            }).then(err => {
                console.log(err)
            })
    }, [])
    return [books]
}
export default useBooks