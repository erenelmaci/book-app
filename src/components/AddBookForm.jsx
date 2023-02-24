import { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "../styles/BookCard.css"
import "../styles/AddBookForm.css"
import { data } from "../utils/data"
import axios from "axios"

const AddBookForm = (props) => {
  const [bookName, setbookName] = useState("")
  const [bookAuthor, setbookAuthor] = useState("")
  const [bookPublisher, setbookPublisher] = useState("")
  const [imageUrl, setimageUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
  )
  const [bookDate, setbookDate] = useState("")
  const [books, setAddBooks] = useState([])

  const [id, setId] = useState(data.length + 1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newBook = {
      id: id,
      title: bookName,
      author: bookAuthor,
      publisher: bookPublisher,
      publication_date: bookDate,
      image_url: imageUrl,
    }
    const BOOK_APP_URL =
      "https://book-a-9034f-default-rtdb.firebaseio.com/data.json"
    try {
      await axios.post(BOOK_APP_URL, newBook)
      setAddBooks([...books, newBook])
      setId(id + 1)
      console.log(newBook)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center form-container">
        <button onClick={props.closeButton} className="close-button">
          <span className="close-icon" />
          <span className="close-icon" />
        </button>
        <Form className="w-25 book-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setbookName(e.target.value)}
              placeholder="Enter Title"
            />
            <Form.Text className="text-warning">
              please enter the book name
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Author</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setbookAuthor(e.target.value)}
              placeholder="Enter Author"
            />
            <Form.Text className="text-warning">
              please enter the author name
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-white">Publisher</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setbookPublisher(e.target.value)}
              placeholder="Enter Publisher"
            />
            <Form.Text className="text-warning">
              please enter the book name
            </Form.Text>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="text-white">Date</Form.Label>
              <Form.Control
                type="number"
                maxLength={4}
                placeholder="Enter Publication Date"
                onChange={(e) => setbookDate(e.target.value)}
              />
              <Form.Text className="text-warning">
                please enter the publication date
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-white">imageurl</Form.Label>
              <Form.Control
                type="url"
                onChange={(e) => setimageUrl(e.target.value)}
                placeholder="Enter Image URL"
              />
              <Form.Text className="text-warning">
                please enter the Image URL
              </Form.Text>
            </Form.Group>
          </Form.Group>
          <Button
            className="mt-4 bg-danger"
            onClick={handleSubmit}
            variant="info"
            type="submit"
          >
            Book Add
          </Button>
        </Form>

        <div className="container-test">
          <article className="card">
            <div className="temporary_text">
              <img className="images" src={imageUrl} alt="img" />
            </div>
            <div className="card_content">
              <span className="card_title">Title: {bookName}</span>
              <span className="card_subtitle">Author: {bookAuthor}</span>
              <span className="card_subtitle">
                Publication Date: {bookDate}
              </span>
              <p className="card_description">Publisher: {bookPublisher}</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default AddBookForm
