import React, {useEffect, useState} from "react";


const Slide = (props) => {
    return (
        <div className={props.css_class}>
            <img src={'https://pets.сделай.site' + props.data.image} className="d-block m-auto mt-3" alt="photo_pets"
                 style={{width: '300px', height: '250px'}}/>
            <h2 className="text-center">{props.data.kind}</h2>
            <p className="text-center">{props.data.description}</p>
        </div>
    )
}


const AnimalsSlider = () => {
    let [slide, setSlide] = useState({data: {pets: []}});
    useEffect(() => requestSlide(slide, setSlide), []);

    const requestSlide = (slide, setSlide) => {
        const requestOptions = {
            method: 'GET',
        };

        fetch("https://pets.сделай.site/api/pets/slider", requestOptions)
            .then(response => response.json())
            .then(result => {
                setSlide(result)
            })
            .catch(error => console.log('error', error));

    };

    let slides = slide.data.pets.map((pet, index) => {
        if (index === 0) {
            return <Slide data={pet} key={index} css_class='carousel-item active'/>;
        } else {
            return <Slide data={pet} key={index} css_class='carousel-item'/>;

        }
    })


    let indicators = slide.data.pets.map((pet, index) => {
        if (index === 0) {
            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                           className="active" aria-current="true" aria-label="Slide 1" key={index + 'btn'}></button>;
        } else {
            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index}
                           aria-label={"Slide " + (Number(index) + 1)} key={index + 'btn'}></button>;

        }
    })

    if (slides.length < 1) return (<div></div>);

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
            <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-100 p-2"
                 data-bs-ride="carousel" style={{'minHeight': '400px'}}>
                <div className="carousel-indicators">
                    {indicators}
                </div>
                <div className="carousel-inner">
                    {slides}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
    );
};

export default AnimalsSlider;