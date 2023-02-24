import "../styles/BookCard.css"

const BookCard = ({
  title,
  author,
  publisher,
  publication_date,
  image_url,
}) => {
  return (
    <>
      <div className="container">
        <article className="card">
          <div className="temporary_text">
            <img className="images" src={image_url} alt="img" />
          </div>
          <div className="card_content">
            <span className="card_title">Title: {title}</span>
            <span className="card_subtitle">Author: {author}</span>
            <span className="card_subtitle">
              Publication Date: {publication_date}
            </span>
            <p className="card_description">Publisher: {publisher}</p>
          </div>
        </article>
      </div>
    </>
  )
}

export default BookCard
