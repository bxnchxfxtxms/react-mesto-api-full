import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

class Card extends React.Component {

  static contextType = CurrentUserContext

  constructor(props) {
    super(props)
  }

  isOwn = () => {
    return this.props.card.owner === this.context._id
  }

  isLiked = () => {
    return this.props.card.likes.some(i => i === this.context._id)
  }

  handleLikeClick = () => {
    this.props.onCardLike(this.props.card)
    console.log(`Данные выбранной карточки ${this.props.card}`)
    console.log(`Пользователи лайкнувшие выбранную карточку`)
    console.log(this.props.card.likes)
    console.log(`Владелец выбранной карточки ${this.props.card.owner}`)
    console.log(`ID Владельца выбранной карточки ${this.props.card.owner._id}`)
    console.log(`Текущий пользователь ${this.context}`)
    console.log(`ID Текущего пользователя ${this.context._id}`)
  }

  handleDeleteClick = () => {
    this.props.onCardDelete(this.props.card)
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card)
  }
  
  render() {
    return(
      <li className="element">
        <img className="element__image" src={this.props.card.link} alt={this.props.card.name} onClick={this.handleClick}/>
        <button className={`element__delete-button ${this.isOwn() ? 'element__delete-button_visible' : ''}`} type="button" onClick={this.handleDeleteClick}></button>
        <div className="element__bottom-bar">
          <h2 className="element__title">{this.props.card.name}</h2>
          <button className={`element__like-button ${this.isLiked() ? 'element__like-button_active' : ''}`} type="button" onClick={this.handleLikeClick}></button>
          <span className="element__like-counter">{this.props.card.likes.length}</span>
        </div>
      </li>
    )
  }
}

export default Card