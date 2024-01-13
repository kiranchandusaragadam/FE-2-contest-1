/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((e) => {
    if (e.profession === "developer") {
      console.log(e);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((e) => {
    if (e.profession === "developer") {
      console.log(e);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((e) => {
    return e.profession != "admin";
  });
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "Doe", age: "28", profession: "SDE" },
    { id: 6, name: "Kiran", age: "25", profession: "developer" },
    { id: 7, name: "Mahesh", age: "24", profession: "HR" },
  ];

  let wholeArr = arr.concat(arr2);
  console.log(wholeArr);
}
