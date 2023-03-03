import {Link} from "react-router-dom";
import React from "react";

const Animal = (props) => {
    const data = props.data
    const deletePet = async () => {
        let hs = new Headers();
        hs.append('Content-Type', 'application/json')
        hs.append('Authorization', `Bearer ${props.token}`)
        const requestOptions = {
            method: 'DELETE',
            headers: hs
        };
        await fetch(`https://pets.сделай.site/api/users/orders/${data.id}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    window.location.reload();
                } else {
                    alert('Не получилось удалить :(')
                }
            }).catch(error => console.log('error', error));
    }

    return (
        <div
            className="animal-d-flex-300 d-flex justify-content-center flex-row flex-wrap border m-3 p-3">
            <Link className='text-center' to={`/pet/${data.id}`}><img src={'https://pets.сделай.site' + props.photos}
                                                                      className="w-75"
                                                                      alt="рисунок животного"/></Link>
            <p className="animal-width250 mt-2 text-center w-50 text-primary">id:</p>
            <p className="animal-width250 mt-2 text-center w-50">{data.id}</p>

            <p className="animal-width250 text-center w-50 text-primary">Вид животного:</p>
            <p className="animal-width250 text-center w-50">{data.kind}</p>

            <p className="animal-width300 text-center w-50 text-primary">Описание:</p>
            <p className="animal-width300 text-center w-50">{data.description}</p>

            <p className="animal-width300 text-center w-50 text-primary">Номер чипа:</p>
            <p className="animal-width300 text-center w-50">{data.mark}</p>

            <p className="animal-width300 text-center w-50 text-primary">Район:</p>
            <p className="animal-width300 text-center w-50">{data.district}</p>

            <p className="animal-width300 text-center w-50 text-primary">Дата:</p>
            <p className="animal-width300 text-center w-50">{data.date}</p>
            <div className="btn-group animal-width300" role="group">
                <div className="btn-group animal-width300" role="group">
                    <button onClick={deletePet} className="btn btn-danger"
                            hidden={props.edit_hidden}>Удалить
                    </button>
                    <Link to={`/edit_pet/${data.id}`} className="btn btn-primary"
                          hidden={props.edit_hidden}>Редактировать
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Animal;