const table = document.getElementById("render");
const idName = document.getElementById("idName");
const userName = document.getElementById("userName");
const submit = document.getElementById("btn");
let arr = [];
submit.addEventListener("click", () => {
  let objRender = {
    Id: idName.value,
    Name: userName.value,
  };
  let index = arr.findIndex((e) => e.Id == objRender.Id);
  if (index >= 0) {
    arr.splice(index, 1, objRender);
  } else {
    arr.push(objRender);
  }

  if (idName.value == "" && userName.value == "") {
    alert("Hãy nhập dữ liệu");
    for (let i = 0; i < arr.length; i++) {
      arr.splice(i, 1);
      break;
    }
  } else {
    render();
  }
  clean();
});
function render() {
  tableRender = ` <ul>
    <li>Id</li>
    <li>User Name</li>
    <li>Action</li>
  </ul>`;

  for (let i = 0; i < arr.length; i++) {
    tableRender += ` <ul>
        <li>${arr[i].Id}</li>
        <li>${arr[i].Name}</li>
        <li><button onclick="deleteItem(${arr[i].Id})">Delete</button>
        <button onclick="editItem(${arr[i].Id})">Edit</button></li>
      </ul>`;
  }
  table.innerHTML = tableRender;
}
function clean() {
  idName.value = "";
  userName.value = "";
}
function deleteItem(e) {
   let deleteCheck = confirm('Bạn có thực sự muốn xoá')
   if (deleteCheck) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Id == e) {
          arr.splice(i, 1);
          render();
        }
      }
   }
 
}
function editItem(e) {
  for (let i = 0; i < arr.length; i++) {
    idName.value = arr[i].Id;
    userName.value = arr[i].Name;
  }
}
