<template>
    <div class="my_card">
        <div class="character_img">
            <img class="" :src="character.image" alt="">
        </div>
        <div class="name">{{character.name}}</div>
       
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

.my_card{
    border-radius: 15px;
    box-shadow: 5px 5px 8px black ;
    height: 100%;
    background-color: antiquewhite;
}
.character_img{
    width: 100%;
    height: 100px;
    max-width: 200px;
    background-color: black;
    border-radius: 10px;
    display: block;
    margin: auto;
    box-shadow: 3px 3px 5px gray;
   img{
    width: 100%;
    height: 100%;
    object-fit: contain;
   }
}
.name{
    text-align: center;
    margin: .5rem 0;
    font-weight: 600;
}

</style>