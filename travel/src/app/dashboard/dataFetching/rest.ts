import simpleRestProvider from "ra-data-simple-rest";
console.log("Bura rest icerisidir/");
const data = simpleRestProvider("https://dummyjson.com")
console.log("data: ", data)
export default simpleRestProvider("https://dummyjson.com");
