<template>
    <div class="container">
        <select name="category" id="cat" placeholder="select category">
            <option value="" disabled selected >select an option</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
        <div class="content_box">
            <div class="result_section">Found X characters</div>
            <CharactersList/>
        </div>
    </div>

</template>

<script>
import CharactersList from "./CharactersList.vue";

export default {
    components: {CharactersList},
    data(){
        return{
            
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