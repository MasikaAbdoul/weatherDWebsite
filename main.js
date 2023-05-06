const weather = document.querySelector("#weather");
const search = document.querySelector("#search");
const $name = document.querySelector(".name");
const $countryName = document.querySelector(".country-name");
const text = document.querySelector(".text");
const icon = document.querySelector(".icon");
const feelslike = document.querySelector(".feelslike");
const humidity = document.querySelector(".humidity");
const temp = document.querySelector(".temp");
const time = document.querySelector('#time');
const btn = document.querySelector("#btn");

const apiUrl = "https://api.weatherapi.com/v1";

const apiKey = "be609017a7d34d499e294227230605";

search.addEventListener("keydown", (e) => {
    if(e.key === 'Enter'){
        const $location = search.value;

        fetch(`${apiUrl}/current.json?key=${apiKey}&q=${$location}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            $name.innerText = data.location.name;
            $countryName.innerText = data.location.country;
            text.innerText = data.current.condition.text;
            const iconImg = data.current.condition.icon;
            icon.style.backgroundImage = `url(${iconImg})`;
            const feel = data.current.feelslike_c;
            feelslike.innerHTML = `<span style='font-weight: 300; letter-spacing: 1px; font-style: italic; font-size: 10pt;'>feels like</span> ${feel}&#8451`;
            const humiV = data.current.humidity;
            humidity.innerHTML = `<span style='font-weight: 300; letter-spacing: 1px; font-style: italic; font-size: 10pt;'>humidity</span> ${humiV}%`;
            const temV = data.current.temp_c;
            temp.innerHTML = `<span style='font-weight: 300; letter-spacing: 1px; font-style: italic; font-size: 10pt;'>temperature</span> ${temV}&#8451`;
            const c_region = data.location.region;
            function updateTime() {
                time.innerText = data.location.localtime;
            }

            updateTime();
        })
          .catch((error) => console.error(error));
    }
});
