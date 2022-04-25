import React from "react";
import { useParams, } from "react-router-dom";
import moment from "moment";
import { events } from '../../store/index';
import { useState } from "react";

const AddEvent = () => {


  const sendData = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
    })

    if (!response.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
    }

    return await response.json
  }

  const sendCard = () => {
    const cardForm = document.querySelector('.board__form');
    cardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(cardForm);
      sendData('https://fe-school-api.herokuapp.com/api/events/', formData)
        .then(() => {
          cardForm.reset()
        })
    })
  }



  const [inputValue, setInputValue] = useState({
    theme: '',
    comment: '',
    date: '',
  })

  const handleFieldChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

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

  return (
    <section className="board">
      <form className="board__form" onSubmit={handleSubmit} >
        <h2 className="board__title">{renderTitle()}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            value={inputValue.theme}
            onChange={handleFieldChange}
            required>{renderTheme()}</textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
            value={inputValue.comment}
            onChange={handleFieldChange}
          >{renderComment()}</textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
            defaultValue={renderDate}
            value={inputValue.date}
            onChange={handleFieldChange}
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit" onClick={sendCard} >{renderBtn()}</button>
          <button type="reset" className="btn-reset">Очистить</button>
        </div>
      </form>
    </section>
  )
}

export default AddEvent;
