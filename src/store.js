import {reactive} from "vue";
import axios from "axios";

export const store = reactive({
    characterList: [],
    loading: false,
})

export function fetchDataCharacters(){
    store.loading = true;
    axios.get("https://rickandmortyapi.com/api/character")
        .then((resp) =>{
            console.log(resp.data.results)
            store.characterList = resp.data.results;
            store.loading = false;
        })
}