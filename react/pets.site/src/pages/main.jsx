import AnimalsSlider from "../components/animals_slider";
import AnimalCard from "../components/animal_card";
import SubscribeForm from "../components/forms/subscribe_news";

const Main = () => {
    return (
        <div>
            <AnimalsSlider/>
            <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
            <AnimalCard edit_hidden="hidden"/>
            <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
            <SubscribeForm/>
        </div>
    );
};

export default Main;