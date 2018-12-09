import Axios from "axios";

export const url = "http://localhost:1998/dailys";
export async function setNewDateEntr(newEntr, amount, geter) {
  let fetch = await Axios.get(url);
  let dates = fetch.data;

  let newDate = {...newEntr};

  let datesList = [];
  dates.forEach(date=>{
    
    console.log(date["date"]);
    datesList.push(new Date(date["date"]).toLocaleDateString());
    
    
  });
  let newDateDate = newDate["date"].toLocaleDateString();
  
  if (geter) {
    console.log(geter);

    return datesList.indexOf(newDateDate) !== -1;

  }else{
    console.log(...datesList,"\nnew", newDate.date.toLocaleDateString());
    
     if (datesList.indexOf(newDateDate) === -1 ) {
      
      console.log("ooo");
      
      Axios.default.post(url, {...newDate, amount: amount});
    }else {
      console.log("ooo");
  
    }
  }
  // axios.default.get().then(({data})=>{});
  // axios.default.post.then();

};