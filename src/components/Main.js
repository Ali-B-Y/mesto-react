import api from "../utils/Api";
import {useEffect, useState} from "react";
import Card from "./Card";

function Main({onAddPlace, onEditProfile, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setcards] = useState([]);

    useEffect(() => {
        api.getUserInfo().then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
        api.getInitialCards().then(data => {
            setcards(data);
        })
    }, [])

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar-container">
                    <img
                        className="profile__avatar"
                        src={userAvatar}
                        alt="Аватар пользователя"/>
                    <span
                        className="profile__avatar-edit"
                        onClick={onEditAvatar}>
                    </span>
                </div>

                <div className="profile__info">
                    <div className="profile__name">
                        <h1 className="profile__nickname">{userName}</h1>
                        <button
                            className="profile__edit-button hover"
                            type="button"
                            aria-label="Изменить профиль"
                            onClick={onEditProfile}>
                        </button>
                    </div>

                    <p className="profile__desc">{userDescription}</p>
                </div>
                <button
                    className="profile__add-button hover"
                    type="button"
                    aria-label="Добавить карточку"
                    onClick={onAddPlace}>
                </button>
            </section>

            <section className="cards-container">
                {cards.map(card => {
                    return (
                        <Card key={card._id} card={card} onCardClick={onCardClick}/>
                    )
                })}
            </section>

        </main>
    )
}

export default Main;