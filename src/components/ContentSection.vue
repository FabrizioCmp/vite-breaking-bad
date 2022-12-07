<template>
    <div class="container">
        <select name="category" id="cat" v-model="selectedFilter.gender" @change="changefilter">
            <option value="" disabled selected>select a filter</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">unknown</option>
        </select>
        <button class="btn_reset" @click="resetFilter">Reset filter</button>
        <div class="content_box">
            <div class="result_section">Found {{ store.dataInfo.count }} characters</div>
            <div class="box_navigation">
                <button @click="onPrev">Prev</button>
                <span>Page {{ pageIndex }} of {{        store.dataInfo.pages        }}</span>
                <button @click="onNext">Next</button>
            </div>
            <CharactersList />
        </div>
    </div>

</template>

<script>
import CharactersList from "./CharactersList.vue";
import { store, fetchDataCharacters } from "../store.js";

export default {
    components: { CharactersList },
    data() {
        return {
            store,
            selectedFilter: {
                gender: "",
            },
            pageIndex: 1,
        }
    },
    methods: {
        changefilter() {
            this.store.filter = this.selectedFilter.gender;
            this.pageIndex = 1
            store.currentPage = this.pageIndex;
            fetchDataCharacters();
        },
        resetFilter() {
            this.selectedFilter.gender = "";
            this.changefilter();
        },
        onNext() {
            if (this.pageIndex < store.dataInfo.pages) {
                this.pageIndex++;
                store.currentPage = this.pageIndex;
                fetchDataCharacters();
            }
        },
        onPrev() {
            if (this.pageIndex != 1) {
                this.pageIndex--;
                store.currentPage = this.pageIndex;
                fetchDataCharacters();   
            }
        }
    }
}
</script>

<style scoped lang="scss">
select {

    border: .5px solid;
    border-radius: 10px;
    padding: .5rem;
    margin-left: 1rem;
}

.btn_reset {
    background-color: transparent;
    margin-left: 1rem;
    border-radius: 5px;
    border: 1px solid black;

    &:active {
        background-color: rgb(223, 199, 167);
    }

}

.box_navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    column-gap: .5rem;

    button {
        border-radius: 5px;
    }
}

.content_box {
    background-color: white;
    padding: 2rem;
    margin-top: 1rem;
    border-radius: 10px;

    .result_section {
        padding: 1rem;
        background-color: rgb(222, 181, 129);
        border-radius: 10px;
    }
}
</style>