import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

const Header = (props) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const showResult = (e) => {
        e.preventDefault();
        navigate({
            pathname: '/search',
            search: `?query=${search}`,
        });
        window.location.reload();
    }
    let [dataSearch, setDataSearch] = useState({data: {order: []}});
    useEffect(() => requestCards(search, setDataSearch), [search])

    const requestCards = (search, setDataSearch) => {
        const getData = setTimeout(() => {
            if (search.length < 3) return;
            fetch(`https://pets.сделай.site/api/search?query=${search}`)
                .then(response => response.json())
                .then(result => {
                    setDataSearch(result);
                })
                .catch(error => console.log('error', error));
        }, 1000)
        return () => clearTimeout(getData)
    }
    const descriptions = dataSearch.data.order.map((pet) => {
        return <option value={pet.description}/>;
    })
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link className="navbar-brand me-0" to={'/'}><img src='/images/logo.jpg'
                                                                  className="w-25 rounded-3"
                                                                  alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item fs-6">
                            <Link className="nav-link" to={'/'}><span
                                className="small">Главная</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" hidden={!props.token} to={'/profile'}><span
                                className="small">Профиль</span></Link>
                        </li>
                        <li className="nav-item" hidden={props.token}>
                            <Link className="nav-link" to={'/login'}><span className="small">Авторизация</span></Link>
                        </li>
                        <li className="nav-item" hidden={!props.token}>
                            <a className="nav-link" onClick={() => props.setToken("")}><span
                                className="small">Выйти</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/new_pet'}><span
                                className="small">Добавить объявление</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/search/order'}><span
                                className="small">Поиск по объявлениям</span></Link>
                        </li>
                    </ul>
                    <form method="GET" onSubmit={showResult} className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"
                               onChange={(e) => {
                                   setSearch(e.target.value);
                               }}
                               list="datalistOptions"/>
                        <datalist id="datalistOptions">
                            {descriptions}
                        </datalist>

                        <button className="btn btn-primary me-3"
                                type="submit">Поиск
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
};


export default Header;