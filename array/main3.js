function tomain() {
    window.location.href = 'index.html';
}
let a = [{name:'Престиж', city:'Пинеровка', mark: 2, price: 6200, time: '14:00'}, 
        {name:'Элита+', city:'Литяжевка', mark: 3, price: 8500, time: '16:00'},
        {name:'Козырь', city:'Балашов', mark: 2, price: 7000, time: '13:00'},
        {name:'Премиум', city:'Тростянка', mark: 4, price: 11200, time: '12:00'}];

    document.write(`<table><tbody><tr><td>Название гостиницы</td><td>Город</td>
                        <td>Количество звезд</td>
                        <td>Цена номера в сутки, руб</td>
                        <td>Время заезда</td></tr>`);

        b=a.filter((d)=>{if(d.price > 7000) return d;});

    b.map((c)=>document.write(
    `<tr><td>${c.name}</td><td>${c.city}</td><td>${c.mark}</td><td>${c.price}</td><td>${c.time}</td></tr>`));
    document.write('</tbody></table>');