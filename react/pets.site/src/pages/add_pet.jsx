import React from "react";
import AddPetForm from "../components/forms/pet_form";


const AddPet = (props) => {
    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Добавление нового объявления</h2>
            <AddPetForm token={props.token}/>
        </div>
    );
}

export default AddPet;