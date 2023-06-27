// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //todo we will not hardcore server url
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchProductsByID(id) {
  return new Promise(async (resolve) => {
    //todo we will not hardcore server url
    const response = await fetch('http://localhost:8080/products/'+id);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchproductsByFilter(filter,sort,pagination) {
//filter={"categories":"     "}
   // filter:laptops,smartphone,and category
  //Todo: on the server we will have tosupport multi values
  // sort : _sort:price _order:order.option
  //pagination pr kaam krne ke liye sbse phle page dekhe ki kitne pagehai api aur waha se ?_pages
  //&_limit=10 krke check kr lo to wo aip apko 1 se lekar 10 result degi...
  //aur object ke form me api ko bhejna padega const pagination= {page=1, _linit=10} kuch iss trh se..
let quearyString = " ";
  for(let key in filter){
    const categories=filter[key]
    if(categories.length){
      const lastCaterioesvalue=categories[categories.length-1]
      quearyString += `${key}=${lastCaterioesvalue}&`
    }
 
  }
  for(let key in sort){
    console.log(sort[key])
    quearyString += `${key}=${sort[key]}&`//sort,order = rating,dsc and asc
  }
  for(let key in pagination){
    quearyString += `${key}=${pagination[key]}&`
  }

  return new Promise(async (resolve) => {
    //todo we will not hardcore server url
    const response = await fetch('http://localhost:8080/products?'+quearyString);
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count")
    resolve({data:{products:data, totalItems:+totalItems}});
  });
}

export function fetchCategories() {
  return new Promise(async (resolve) => {
    //todo we will not hardcore server url
    const response = await fetch('http://localhost:8080/categories');
    const data = await response.json();
  
    resolve({ data });
  });
}
export function fetchBrands() {
  return new Promise(async (resolve) => {
    //todo we will not hardcore server url
    const response = await fetch('http://localhost:8080/brands');
    const data = await response.json();
    resolve({ data });
  });
}