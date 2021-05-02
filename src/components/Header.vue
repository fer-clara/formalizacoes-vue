<template>
    <section class="container">
        <div class="content-box">
            <a href="#voltar" class="return">
                <img src="../assets/Back.png" alt="Retornar à página anterior">
            </a>
        </div>
        <div class="content-box">
            <h1 class="title">Formalizações</h1>
            <p class="text">aprovadas - 05/01/2021 - 13:40:32</p>
        </div>
        <button>Gerar CNAB</button>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
$main-color: #666666;
$secondary-color: #FFB600;
$base-color: #fff;
$base-padding: 16px;
$secondary-padding: 24px;

.container{
    max-width: 328px;
    color: $main-color;
    margin: 0 auto;
    background-image: url('../assets/rococo.png');

    @media screen and (min-width: 576px){
        max-width: 508px;
    }

    @media screen and (min-width: 768px){
        max-width: 688px;
        height: 136px;
    }

    @media screen and (min-width: 992px){
        max-width: 928px;
        height: 231px;
    }

    @media screen and (min-width: 1366px){
        max-width: 1108px;
    }

    .content-box{
        text-align: left;
        font-weight: 500;
        max-width: 80%;
        float: left;
        margin-top: 40px;

        &:nth-child(2){
            padding-left: $base-padding;
            width: 100%;
        }

        @media screen and (min-width: 768px){
            &:nth-child(2){
                width: auto;
            }
        }

        @media screen and (min-width: 992px){
            margin-top: 80px;
        }

        .return{
            width: 48px;
            height: 48px;
            display: inline-block;
            padding-top: 5px;
        }

        .title{
            font-size: 32px;
            font-weight: 400;
            margin: 0;
        }

        .text{
            font-size: $base-padding;
            font-weight: 500;
            margin: 0;
            text-transform: uppercase;
        }
    }
    
    button{
        width: 100%;
        height: 40px;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        background-color: $secondary-color;
        border: none;
        border-radius: 4px;
        margin-top: $base-padding;
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #333333;
        text-transform: uppercase;
        margin-bottom: 28px;

        @media screen and (min-width: 525px){
            width: auto;
            padding: 12px $secondary-padding;
            margin-bottom: 46px;
        }

        @media screen and (min-width: 768px){
            margin-bottom: 0px;
            margin-top: 45px;
            float: right;
        }

        @media screen and (min-width: 992px){
            margin-top: 93px;
        }
    }
}

</style>