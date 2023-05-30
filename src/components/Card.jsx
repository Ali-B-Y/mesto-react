function Card({ card, onCardClick }) {
    function handleCardClick() {
        onCardClick(card);
    }

    return (
        <article className="card">
            <img className="card__photo"
                 src={card.link}
                 alt={card.name}
                 onClick={handleCardClick}/>
            <button className="card__remove-button"
                    type="button"
                    aria-label="Удалить карточку"></button>
            <div className="card__caption">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button className="card__like-button" type="button"
                            aria-label="Отметить как понравившуюся"></button>
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;