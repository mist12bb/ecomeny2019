export let url = "http://localhost:1998";

export const onPutInit = (act, init, id, category) =>{
  Axios.put(`${url}/${category}/${id}`, {...act, init: init});
}