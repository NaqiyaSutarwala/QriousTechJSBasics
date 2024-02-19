"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    console.log(this);

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}
// Child Classes
class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  // Private fields(Variables)
  #map;
  #latitude;
  #longitude;
  #workouts = [];

  constructor() {
    this._getPosition();
    this._getLocalStorage();

    form.addEventListener("submit", this._newWorkout.bind(this));

    // Input type
    inputType.addEventListener("change", this._toggleElevationField);
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        alert("Could not fetch Position");
      });
  }

  // Loading the Map
  _loadMap(position) {
    console.log(position);
    const latitudeCurr = position.coords.latitude;
    const longituteCurr = position.coords.longitude;
    //   console.log(latitude, longitute);
    //   console.log(`https://www.google.com/maps/@${latitude},${longitute}`);

    const cords = [latitudeCurr, longituteCurr];

    console.log(this);

    this.#map = L.map("map").setView(cords, 15);

    L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));

    console.log(this.#workouts);

    this.#workouts.forEach((work) => {
      console.log(work);
      this._renderWorkoutMarket(work);
    });
  }

  _showForm(mapEvent) {
    this.#latitude = mapEvent.latlng.lat;
    this.#longitude = mapEvent.latlng.lng;

    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _hideForm() {
    // Clearing input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    form.classList.add("hidden");
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);
    e.preventDefault();

    // Get data From the fields
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    //Check the runout type

    // RUNNING
    if (type === "running") {
      const cadence = +inputCadence.value;
      console.log(cadence);
      console.log(distance);
      console.log(duration);
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert("Input should be of Positive Number");

      workout = new Running(
        [this.#latitude, this.#longitude],
        distance,
        duration,
        cadence
      );
    }

    // CYCLING

    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert("Input should be of Positive Number ");

      workout = new Cycling(
        [this.#latitude, this.#longitude],
        distance,
        duration,
        elevation
      );
    }

    this.#workouts.push(workout);
    console.log(this.#workouts);

    this._renderWorkoutMarket(workout);

    this._renderWorkout(workout);

    this._hideForm();

    this._setLocalStorage();

    // Displaying marker on Submit
  }

  _renderWorkoutMarket(workout) {
    L.marker([this.#latitude, this.#longitude])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

    if (workout.type === "running")
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;

    if (workout.type === "cycling")
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;

    form.insertAdjacentHTML("afterend", html);
  }

  _moveToPopup(e) {
    const workoutEL = e.target.closest(".workout");
    if (!workoutEL) return;
    const workout = this.#workouts.find((work) => {
      return work.id === workoutEL.dataset.id;
    });
    console.log(workout);

    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem("workout", JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workout"));

    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach((work) => {
      this._renderWorkout(work);
    });
  }
}

const app = new App();

// On submit
