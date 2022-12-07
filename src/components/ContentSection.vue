<template>
    <div class="container">
        <select name="category" id="cat" v-model="selectedFilter.gender" @change="changefilter">
            <option value="" disabled selected >select a filter</option>
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
            <option value="unknown">unknown</option>
        </select>
        <button @click="resetFilter">Reset filter</button>
        <div class="content_box">
            <div class="result_section">Found {{store.dataInfo.count}} characters</div>
            <CharactersList/>
        </div>
    </div>

</template>

<script>
import CharactersList from "./CharactersList.vue";
import { store,fetchDataCharacters } from "../store.js";

export default {
    components: {CharactersList},
    data(){
        return{
            store,
            selectedFilter: {
                gender: "",
            }
        }
    },
    methods:{
        changefilter(){
            this.store.filter = this.selectedFilter.gender;
            fetchDataCharacters();
        },
        resetFilter(){
            this.selectedFilter.gender = "";
            this.changefilter();
        }

    }
}
</script>

<style scoped lang="scss">
select{
    
    border: .5px solid;
    border-radius: 10px;
    padding: .5rem;
    margin-left: 1rem;
}

button{
    background-color: transparent;
    margin-left: 1rem;
    border-radius: 5px;
    border: 1px solid black;
        &:active{
            background-color: rgb(223, 199, 167);
        }

}
.content_box{
    background-color: white;
    padding: 2rem;
    margin-top: 1rem;
    border-radius: 10px;

        .result_section{
            padding: 1rem;
            background-color: rgb(222, 181, 129);
            border-radius: 10px;
        }
}
</style>