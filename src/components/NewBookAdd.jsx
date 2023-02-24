import { useState } from "react"
import "../styles/NewBookAdd.css"
import AddBookForm from "./AddBookForm"

const NewBookAdd = () => {
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  const handleAddBookClick = () => {
    setShowAddBookForm(!showAddBookForm);
  };
  const closeButton = () => {
    setShowAddBookForm(false)
  }
  return (
    <>
      <div className="parent-element">
        <div className="add-book-button">
          <button className="icon-btn add-btn" onClick={handleAddBookClick}>
            <div className="add-icon" />
            <div className="btn-txt">Add Book</div>
          </button>
        </div>
      </div>
      {showAddBookForm && <AddBookForm closeButton={closeButton} />}
    </>
  );
}

export default NewBookAdd;
