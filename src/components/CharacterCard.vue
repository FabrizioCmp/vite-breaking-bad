<template>
    <div class="my_card">
        <div class="character_img">
            <img src="" alt="">
        </div>
        <div>{{character.name}}</div>
    </div>
</template>

<script>
export default{
    props:{
        character:{
            type: Object,
            required: true,
        }
    },
    data(){
        return{

        }
    }
}

</script>

<style scoped lang="scss">
.character_img{
    width: 100%;
    height: 100px;
    background-color: black;
    border-radius: 10px;
}
div{
    text-align: center;
    margin: .5rem 0;
    font-weight: 600;
}
</style>