let date1 = new Date(2022, 0, 24);
let date2 = new Date(2021, 0, 24);

let epoch1 = date1.getTime();
let epoch2 = date2.getTime();

(epoch1 < epoch2) ? console.log(date1 + " comes first") : console.log(date2 + " comes first");