import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
  },
  getters: {
    getData: state => state.data
  },
  mutations: {
    addUser : (state,payload)=>{
      const payloadData = {
        name: payload.name,
        surname: payload.surname,
        phone: payload.phone,
        email: payload.email
      };
      state.data.push(payloadData);
      localStorage.setItem("data",JSON.stringify(state.data))
    },
    deleteUser : (state,payload)=>{
      state.data.splice(payload,1);
      localStorage.setItem("data",JSON.stringify(state.data))
    },
    editUser : (state,payload)=>{
      state.data.splice(payload.index,1,payload.data);

      localStorage.setItem("data",JSON.stringify(state.data))
    },
    adJsonData(state,payload){
      try {
        let newDAta =  JSON.parse(payload);
        if (newDAta.length){
          newDAta.forEach((el)=>{
            let length = 0;
            for (let elKey in el) {
              length++
            }
            if (length === 4 && el.name && el.surname && el.phone && el.email){
              state.data.push(el)
            }

          });
        }else{
          let lenght = 0;
          for (let newDAtaKey in newDAta) {
            lenght++
          }
          if (lenght === 4 && !!newDAta.name && !!newDAta.surname && !!newDAta.phone && !!newDAta.email){
            state.data.push(newDAta)
          }
        }
      }catch (e) {

        alert("Not valid JSON")
      }
      let data = JSON.stringify(state.data);
      localStorage.setItem('data',data)
    }
  },
})
