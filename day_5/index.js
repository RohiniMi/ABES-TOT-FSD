const employee = {
    name: "Rohini Mittal",
    age: 24,
    lang: [
        {
            lang1: "c++",
            lang2: "java",
            lang3: "c"

        },
        {
            database1: "mongodb",
            database2: "mysql"
        }
    ]


}
console.log(employee);
console.log(employee['name']);
console.log(employee['lang']);
console.log(employee['lang'][0].lang1);
employee['name'] = "Sania Mittal";
console.log(employee['name']);