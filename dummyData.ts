export const barData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mar",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Jul",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Sep",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Nov",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const chartData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 500,
    amt: 2400,
  },
  {
    name: "Mar",
    uv: 3000,
    pv: 600,
    amt: 2210,
  },
  {
    name: "May",
    uv: 2000,
    pv: 570,
    amt: 2290,
  },
  {
    name: "Jul",
    uv: 2000,
    pv: 200,
    amt: 2290,
  },
  {
    name: "Sep",
    uv: 2780,
    pv: 650,
    amt: 2000,
  },
  {
    name: "Nov",
    uv: 1890,
    pv: 540,
    amt: 2181,
  },
  {
    name: "Dec",
    uv: 2390,
    pv: 900,
    amt: 2500,
  },
];
const image = require("./public/initial.png");
export const apps = [
  {
    price: "$32.0",
    platforms: "Mac,Mobile",

    name: "Notion",
    image: image,
  },
  {
    price: "$32.0",
    platforms: "Mac,Mobile",

    name: "Notion",
    image: image,
  },
  {
    price: "$32.0",
    platforms: "Mac,Mobile",

    name: "Notion",
    image: image,
  },
];

function createData(
  name: string,
  calories: number,
  fat: string,
  carbs: string,
  protein: number,
  order: number,
  color: string
) {
  return { order, name, calories, fat, carbs, protein, color };
}

export const rows = [
  createData("PAID", 159, "5 / 30 / 23", "Credit Card", 4.0, 1, "#D7F5DD"),
  createData("PAID", 237, "5 / 30 / 23", "Credit Card", 4.3, 2, "#D7F5DD"),
  createData("REFUNDED", 262, "5 / 30 / 23", "Credit Card", 6.0, 3, "#D7F5DD"),
  createData("ERROR", 305, "5 / 30 / 23", "Credit Card", 4.3, 4, "#D7F5DD"),
  createData("PAID", 356, "5 / 30 / 23", "Credit Card", 3.9, 5, "#D7F5DD"),
  createData("ERROR", 305, "5 / 30 / 23", "Credit Card", 4.3, 4, "#D7F5DD"),

  createData("ERROR", 305, "5 / 30 / 23", "Credit Card", 4.3, 4, "#D7F5DD"),
];
