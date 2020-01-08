const api = "http://star-cors.herokuapp.com/";
const apiPeople = axios.get(`${api}people`);
const apiFilms = axios.get(`${api}films`);
const apiVehicles = axios.get(`${api}vehicles`);
const apiStarships = axios.get(`${api}starships`);

const root = document.querySelector("#root");

const renderHTML = (list, category, key, description, array) => {
    const htmlText = 
        `<div class = "list">
            <h2> ${category} </h2>
                <ul>` 
                + list.data.results.map(result => {
                    const key1 = Object.keys(result)[0];
                    return `<div class = "card">
                                <h3>${result[key1].toUpperCase()}</h3>
                                <p> ${description} ${array ? result[key].length : result[key]} </p>
                            </div>`
                    }).join('') 
                + `</ul>
        </div>`;
    return htmlText
}

const loadData = async() => {

    const [people, films, vehicles, starships] = await axios.all([apiPeople, apiFilms, apiVehicles, apiStarships]);

    console.log(people);
    console.log(films);
    console.log(vehicles);
    console.log(starships);

    root.innerHTML = 
        renderHTML(films, "Films", "release_date", "Released on:") +
        renderHTML(people, "Characters", "films", "Number of Star Wars films:", true) +
        renderHTML(vehicles, "Vehicles", "model", "Vehicle Type:") +
        renderHTML(starships, "Starships", "model", "Starship Type:");

}

loadData();