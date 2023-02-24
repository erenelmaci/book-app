import BookCard from "./BookCard"
import "../styles/CardContainer.css"
import { Col, Container, Form, FormControl, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"

const CardContainer = () => {
  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  const dataExtraction = async () => {
    const BOOK_APP_URL =
      "https://book-a-9034f-default-rtdb.firebaseio.com/data.json"
    try {
      const response = await axios.get(BOOK_APP_URL)
      const books = response.data

      // Dizideki kitapların id özelliklerini number türüne dönüştürüyoruz
      const booksWithIdsAsNumber = Object.entries(books).map(
        ([key, value]) => ({
          ...value,
          id: parseInt(key),
        })
      )

      setBooks(booksWithIdsAsNumber)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dataExtraction()
  }, [])

  return (
    <div className="card-container">
      <Form className="w-25 m-auto pt-5">
        <FormControl
          type="search"
          placeholder="Search..."
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <Container>
        <Row className="g-1">
          {books &&
            books
              .filter(
                (book) =>
                  book.title &&
                  book.title.toLowerCase().includes(search.trim().toLowerCase())
              )
              .map((book) => (
                <Col md={6} lg={4} xl={3} key={book.id}>
                  <BookCard {...book} />
                </Col>
              ))}
        </Row>
      </Container>
    </div>
  )
}

export default CardContainer
