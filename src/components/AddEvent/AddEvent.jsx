import React from "react";
import { useParams, } from "react-router-dom";
import moment from "moment";
import { useState } from "react";

const AddEvent = ({ events }) => {


  const { id } = useParams();

  function renderTitle() {
    return id ? <span>Редактирование события</span> : <span>Добавление события</span>;
  }

  function renderBtn() {
    return id ? <span>Редактировать</span> : <span>Добавить</span>;
  }

  function renderTheme() {
    if (id) {
      const card = events.filter(card => card._id === id)[0]
      return card.theme
    } else {
      return ''
    }
  }

  function renderComment() {
    if (id) {
      const card = events.filter(card => card._id === id)[0]
      return card.comment
    } else {
      return ''
    }
  }

  function renderDate() {
    if (id) {
      const card = events.filter(card => card._id === id)[0]
      const formatDate = moment(card.date).format("YYYY-MM-DDThh:mm")
      return formatDate
    } else {
      return ''
    }
  }

  //const [item, setItem] = useState({
  //  'theme': '',
  //  'comment': '',
  //  'date': '',
  //})

  //const handleSubmit = (e) => {
  //  e.preventDefault();
  //  console.log(item)
  //}

  //const handleFieldChange = (e) => {

  //const card = events.filter(card => card._id === id)[0]
  //const formatDate = moment(card.date).format("YYYY-MM-DDThh:mm")
  //  setItem({ [e.target.name]: e.targer.value })

  //}




  return (
    <section className="board">
      <form className="board__form" >
        <h2 className="board__title">{renderTitle()}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            //onChange={handleFieldChange}
            required>{renderTheme()}</textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
          //onChange={handleFieldChange}
          >{renderComment()}</textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
            value={renderDate()}
          //onChange={handleFieldChange}
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">{renderBtn()}</button>
          <button type="reset" className="btn-reset">Очистить</button>
        </div>
      </form>
    </section>

  )
}

export default AddEvent;
