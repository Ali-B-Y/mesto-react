function PopupWithForm({name, title, children, onClose, isOpen, buttonText}) {
    return(
        <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`} >
            <div className="popup__container">
                <button className="popup__close-button hover"
                        type="button"
                        aria-label="Закрыть всплывающее окно"
                        onClick={onClose}
                />
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form"
                      name={name}>
                    {children}
                    <button className="popup__save-button"
                            type="submit">{buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;