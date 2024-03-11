const displayData = document.getElementById("displayData");

const renderHtml = function (data) {
  const html = `
  <div class='mainDiv'>
    <h4>User id: ${data.userId}</h4>
    <h2>Title:</h2>
    <span>
      ${data.title}
    </span>
    <h2>Description:</h2>
    <span>
     ${data.body}
    </span> <br> <br>
    <button id="updateData"> Update Data </button>
    <button id="deleteData"> Delete Data </button>
    <hr />
  </div>`;
  displayData.insertAdjacentHTML("beforebegin", html);
};

// Buttons
let updateData = document.querySelectorAll("#updateData");
// const completedButton = document.querySelectorAll("#completedButton");
let deleteData = document.querySelectorAll("#deleteData");
const mainDiv = document.querySelectorAll(".mainDiv");

const getData = async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.forEach((item) => {
      renderHtml(item);
    });

    let updateData = document.querySelectorAll("#updateData");
    let deleteData = document.querySelectorAll("#deleteData");

    updateData.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        data.forEach((item, id) => {
          if (index + 1 === item.id) {
            console.log(index + 1);
            console.log(item.id);
            console.log(item);
          }
        });
      });
    });

    // deleteData.forEach((item) => {
    //   item.addEventListener("click", (e) => {
    //     console.log(data);
    //   });
    // });

    return data;
  } catch {
    displayData.innerHTML = "";
    const html = `<h1> No Data Found <h1>`;
    displayData.insertAdjacentHTML("afterbegin", html);
  }
};

getData();

// console.log(updateData);
// console.log(deleteData);

// const updateOnClick = function (data) {
//   console.log(data);
// };

// updateData.addEventListener("click", updateOnClick.bind(_, "a", e));
