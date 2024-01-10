
// ? 1) Создайте любые переменные с такими типами как number, string и boolean;
// type info = {
//   num: number;
//   str: string;
//   bool: boolean;
// };
// let num1: number = 435;
// let str1: string = "435";
// let bool1: boolean = true;

// ? 2)

// type Info = {
//   radius: number;
//   area: number;
// };

// type FunctionArea = (radius: number) => Info;
// function findArea(radius: number): Info {
//   let area = Math.PI * Math.pow(radius, 2);
//   return { radius, area };
// }
// let result = findArea(23);
// console.log(result);

// ? 3)


// type Num = number;
// type FunctionDensity = (weight: number, volume: number) => Num;

// const result: FunctionDensity = (weight, volume) => {
//   let density = weight / volume;
//   return density;
// };
// console.log(result(23, 232));

// todo =========================================
// ? 4)
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};
let obj: Product = {
  id: 21,
  title: "string",
  description: "string",
  price: 12,
  colors: ["string"],
};
// 
type arrReturn = {}[];
// let product: {}[];
type arrProduct = (product: {}) => arrReturn;

const funcCreateArr: arrProduct = (obj) => {
  return [obj];
};
console.log(funcCreateArr(obj));