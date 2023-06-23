// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
  const respnse=await fetch("http://localhost:8000")
  const data =await respnse.json()
resolve({data})
  }
  );
}
