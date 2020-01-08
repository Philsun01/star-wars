const api = "http://star-cors.herokuapp.com/";
const apiPeople = axios.get(`${api}people`);
const apiFilms = axios.get(`${api}films`);
const apiVehicles = axios.get(`${api}vehicles`);
const apiStarships = axios.get(`${api}starships`);

const root = document.querySelector("#root");

const renderHTML = (list, category) => {


    const htmlText = 
        `<div class = "list">
            <h2> ${category} </h2>
                <ul>` 
                +list.data.results.map(bio => {
                    const key1 = Object.keys(bio)[0];
                    console.log(key1);
                    return `<li>${bio[key1]}</li>`
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
    renderHTML(films, "Films") +
    renderHTML(people, "Characters") +
    renderHTML(vehicles, "Vehicles") +
    renderHTML(starships, "Starships");
    

}

loadData();