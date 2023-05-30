import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useState} from "react";



function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

    function handleEditProfileClick() {
        // декларативный подход вариант 1
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    return (
        <div className="root">

        <Header/>

        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}/>

        <Footer/>

        <PopupWithForm title={"Редактировать профиль"}
                       name={"edit-profile"}
                       isOpen={isEditProfilePopupOpen}
                       onClose={closeAllPopups}>
            <input className="popup__input popup__input_type_nickname"
                   type="text"
                   id="input-nickname"
                   minLength="2"
                   maxLength="40"
                   required
                   name="name"
                   placeholder="Имя"/>
            <span className="popup__error input-nickname-error"></span>
            <input className="popup__input popup__input_type_desc"
                   type="text"
                   id="input-desc"
                   name="about"
                   minLength="2"
                   maxLength="200"
                   required
                   placeholder="Описание"/>
            <span className="popup__error input-desc-error"></span>
        </PopupWithForm>

        <PopupWithForm title={"Новое место"}
                       name={"add-card"}
                       isOpen={isAddPlacePopupOpen}
                       onClose={closeAllPopups}>
            <input className="popup__input popup__input_type_photo-name"
                   type="text"
                   id="input-photo-name"
                   minLength="2"
                   maxLength="30"
                   required
                   name="name"
                   placeholder="Название"/>
            <span className="popup__error input-photo-name-error"></span>
            <input className="popup__input popup__input_type_photo-url"
                   type="url"
                   id="input-photo-url"
                   name="link"
                   required
                   placeholder="Ссылка на картинку"/>
            <span className="popup__error input-photo-url-error"></span>
        </PopupWithForm>

        <PopupWithForm title={"Обновить аватар"}
                       name={"edit-avatar"}
                       isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}>
            <input className="popup__input popup__input_type_avatar"
                   type="url"
                   id="input-avatar"
                   required
                   name="avatar"
                   placeholder="Ссылка на картинку"/>
            <span className="popup__error input-avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm title={"Вы уверены?"}
                       name={"delete-card"}>
        </PopupWithForm>

        <ImagePopup card={selectedCard}
                    onClose={closeAllPopups}/>



        </div>
    );
}

export default App;
