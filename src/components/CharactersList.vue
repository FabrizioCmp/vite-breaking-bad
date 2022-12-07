<template>
    <div class="row p-3 justify-content-center align-items-stretch">
        <div class="col-xs-12 col-md-4 col-lg-3 gy-3" v-for="character,i in store.characterList" :key="i">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>

<script>
import CharacterCard from "./CharacterCard.vue";
import { fetchDataCharacters, store } from "../store.js";

export default {
    components: { CharacterCard },
    data() {
        return {
            store,
        }
    },
    created() {
        fetchDataCharacters();
    }
}
</script>

<style scoped lang="scss">

</style>