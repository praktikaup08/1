import React, {useEffect, useState} from "react";
import {getUser} from "./getUser";


const PersonalAccount = (props) => {
    let [user, setUser] = useState({});
    useEffect(() => getUser(props.token, setUser), [])

    return (
        <div>
            <div className="p-3">
                <div className="animal-width300 d-flex flex-row flex-wrap border m-auto p-3 w-50">

                    <p className="animal-width250 w-50 text-primary">id:</p>
                    <p className="animal-width250 w-50">{user.id}</p>

                    <p className="animal-width250 w-50 text-primary">Телефон:</p>
                    <p className="animal-width250 w-50">{user.phone}</p>

                    <p className="animal-width300 w-50 text-primary">email:</p>
                    <p className="animal-width300 w-50">{user.email}</p>

                    <p className="animal-width300 w-50 text-primary">Имя:</p>
                    <p className="animal-width300 w-50">{user.name}</p>

                    <p className="animal-width300 w-50 text-primary">Дата регистрации:</p>
                    <p className="animal-width300 w-50">{user.registrationDate}</p>

                    <p className="animal-width300 w-50 text-primary">Количество найденных животных:</p>
                    <p className="animal-width300 w-50">{user.countPets}</p>

                    <p className="animal-width300 w-50 text-primary">Количество объявлений:</p>
                    <p className="animal-width300 w-50">{user.countOrder}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalAccount;