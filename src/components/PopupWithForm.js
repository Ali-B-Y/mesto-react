function PopupWithForm({name, title, children, onClose, isOpen}) {
    return(
        <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`} >
            <div className="popup__container">
                <button className="popup__close-button hover"
                        type="button"
                        aria-label="Закрыть всплывающее окно"
                        onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form"
                      name={name}>
                    {children}
                    <button className="popup__save-button"
                            type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;