import Axios from 'axios';

const commitionsGrap = (list, type) => {
  let comm = 0;
  list.forEach(act => {
      switch(type) {
        case "expenses":
            comm += 0.69;
            break;
        case "debts":
            comm += 0.75;
            break;
        case "loans":
            comm += 0.45;
            
            break;
            case "enterings":
            comm += 0.56;
          break;
        default:
            comm += 0;
            break 
      }
  })
  return comm
}
const initList = (list) => {
  let sumList = 0
  list.forEach((act)=>{
     
    if (act.init === true) {
      
      sumList += act.amount;
    }
 
})
    return sumList;
}
let url = "http://localhost:1998";

export const fetchActions = async () => {
  let sum = 0;
  let comm = 0;
  const enterings = await Axios.get(`${url}/enterings`);
  const loans = await Axios.get(`${url}/loans`);
  const debts = await Axios.get(`${url}/debts`);
  const expenses = await Axios.get(`${url}/expenses`);
  const enteringsList = (enterings.data);
  const debtsList = (debts.data);
  const loansList = (loans.data);
  const expensesList = (expenses.data);
  let sumEntrs =  initList(enteringsList);
  let sumDebts =  initList(debtsList);
  let sumloans =  initList(loansList);
  let sumExps =  initList(expensesList);
  let commDebts= commitionsGrap(debtsList,"debts")
  let commExpes = commitionsGrap(expensesList, "expenses")
  let commLoans = commitionsGrap(loansList,"loans")
  let commEntrs = commitionsGrap(enteringsList, "enterings");
  comm = (commDebts + commEntrs + commExpes + commLoans);
  sum = (sumEntrs  -  sumExps -sumDebts );
  
  
  console.table({comm, sum});

  
  return {sum, comm, sumExps} ;

}