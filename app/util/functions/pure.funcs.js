import { url } from "../api/index";


export const onSaveActionApi = (category, id, action) => {
  Axios.post(url+"/"+category);
}
export const onDelActionApi = (category, id) => {
  Axios.delete(`${url}/${category}/${id}`);
}
export const onSaveActionFront = (category, id, action) => {
  Axios.post(url+"/"+category);
}

export const onPutInit = (act, init, id, category) =>{
  Axios.put(`${url}/${category}/${id}`, {...act, init: init});
};
