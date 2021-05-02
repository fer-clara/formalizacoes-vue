<template>
    <footer class="footer">
        <div class="logo-icon">
            <a href="#">
                <img src="../assets/icone-logo.png" alt="Logo Solfácil">
            </a>
        </div>
        <a href="#" class="link-return">Voltar</a>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
$main-color: #666666;
$secondary-color: #FFB600;
$base-color: #fff;
$base-padding: 16px;
$secondary-padding: 24px;

.footer{
    margin: 40px $base-padding;
    height: 48px;
    @media screen and (min-width: 576px){
        margin: 40px 34px;
    }
    @media screen and (min-width: 1366px){
        max-width: 1108px;
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 80px;
    }
    .logo-icon{
        float: left;
    }
    .link-return{
        float: right;
        color: $main-color;
        font-family: 'Rubik', sans-serif;
        font-weight: normal;
        font-size: 14px;
        text-decoration: none;
        margin-top: 8px;
        &:before{
            content: '';
            background-image: url('./../assets/icon-back.png');
            background-repeat: no-repeat;
            display: inline-block;
            width: 24px;
            height: 24px;
            vertical-align: middle;
            padding-left: 8px;
        }
    }
}
</style>