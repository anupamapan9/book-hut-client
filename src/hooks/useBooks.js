import axios from "axios"
import { useEffect, useState } from "react"

const useBooks = () => {
    const [books, setBooks] = useState([])
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true)
        axios.get('https://floating-everglades-56290.herokuapp.com/books')
            .then(res => {
                setSpinner(false)
                setBooks(res.data)

            }).then(err => {
                // console.log(err)
            })
    }, [])
    return [books, spinner]
}
export default useBooks