import { url } from "../api/index";


 const onSaveActionApi = (category, id, action) => {
  Axios.post(url+"/"+category);
}
 const onDelActionApi = (category, id) => {
  Axios.delete(`${url}/${category}/${id}`);
}
 const onSaveActionFront = (category, id, action) => {
  Axios.post(url+"/"+category);
}

 const onPutInit = (act, init, id, category) =>{
  Axios.put(`${url}/${category}/${id}`, {...act, init: init});
};


export default {
  onSaveActionApi,
  onDelActionApi,
  onPutInit,
  onSaveActionFront
}