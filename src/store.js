import {reactive} from "vue";
import axios from "axios";

export const store = reactive({
    characterList: [],
    loading: false,
})

export function fetchDataCharacters(){
    store.loading = true;
    axios.get("https://swapi.dev/api/people/")
        .then((resp) =>{
            console.log(resp.data.results)
            store.characterList = resp.data.results;
            store.loading = false;
        })
}