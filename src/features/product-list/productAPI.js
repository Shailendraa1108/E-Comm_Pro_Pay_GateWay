// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //todo we will not hardcore server url
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchproductsByFilter(filter) {
//filter={"categories":"samrtPhone"}
let quearyString = " ";
  for(let key in filter){
    quearyString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) => {
    //todo we will not hardcore server url
    const response = await fetch('http://localhost:8080/products?'+quearyString);
    const data = await response.json();
    resolve({data});
  });
}
