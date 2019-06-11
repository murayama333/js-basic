var students = [
  {"name": "Andy", "age": 20},
  {"name": "Betty", "age": 19},
  {"name": "Carol", "age": 21}
];

for (var i = 0; i < 3; i++) {
  if (students[i]["age"] >= 20) {
    console.log("Hello");
    console.log(students[i]["name"]);
  }
}