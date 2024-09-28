import axios from 'axios';
import { defineStore } from 'pinia';

export const useStore = defineStore('myStore', {
  state: () => ({
    token: '',
    card_number : 0,
    api: 'http://localhost:6700',
    data: []
  }),
  actions:
  {
    async GET(endP) {
      try {
        const res = await axios.get(this.api + endP)
        this.data = res.data
      }
      catch (error) {
        console.log(error)
      }
    },
    setToken(newToken)
    {
      this.token = newToken
      localStorage.setItem("token", this.token);
    },
    setCardNumber()
    {
      this.card_number = this.card_number + 1;
    }
  },
  getters: {
    getCardNumber: (state)=>{
      return state.card_number;
    }
  },
  //persist: true,
});