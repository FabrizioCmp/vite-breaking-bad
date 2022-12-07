import {reactive} from "vue";
import axios from "axios";

export const store = reactive({
    characterList: [],
    currentPage: 1,
    loading: false,
    dataInfo: {},
    filter: "",
})

export function fetchDataCharacters(){
    store.loading = true;
    axios.get("https://rickandmortyapi.com/api/character",{
        params:{
            page: store.currentPage,
            gender: store.filter,
        }
    })
        .then((resp) =>{
            console.log(resp)
            store.characterList = resp.data.results;
            store.dataInfo = resp.data.info
            store.loading = false;
        })
}