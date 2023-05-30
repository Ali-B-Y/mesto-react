function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup_type_view-photo ${card && 'popup_opened'}`}>
            <div className="popup__photo-container">
                <button className="popup__close-button hover" type="button"
                        aria-label="Закрыть всплывающее окно"
                        onClick={onClose}
                ></button>
                <img className="popup__photo" src={card?.link} alt={card?.name}/>
                <h2 className="popup__photo-caption">{card?.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup;