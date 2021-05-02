<template>
    <main class="container main">
        <div class="main-component">
            <h4 class="title title-secondary">Total formalizações</h4>
            <div class="box-info" >
                <p class="box-title">Valor financiado</p>
                <div class="box-price">
                    <span>PF</span>
                    <span>R$ 140.000,00</span>
                </div>
                <div class="box-price">
                    <span>PJ</span>
                    <span>R$ 140.000,00</span>
                </div>
                <p class="total">Total <span>R$ 190.000,00</span></p>
            </div>
            <div class="box-info" >
                <p class="box-title">Valor bruto</p>
                <div class="box-price">
                    <span>PF</span>
                    <span>R$ 140.000,00</span>
                </div>
                <div class="box-price">
                    <span>PJ</span>
                    <span>R$ 140.000,00</span>
                </div>
                <p class="total">Total <span>R$ 190.000,00</span></p>
            </div>
            <div class="box-info" >
                <p class="box-title">Valor de aquisição</p>
                <div class="box-price">
                    <span>PF</span>
                    <span>R$ 140.000,00</span>
                </div>
                <div class="box-price">
                    <span>PJ</span>
                    <span>R$ 140.000,00</span>
                </div>
                <p class="total">Total <span>R$ 190.000,00</span></p>
            </div>
        </div>
        <section class="main-component table-component">
            <table>
                <thead>
                    <tr>
                        <th>Nome do Cliente</th>
                        <th>Valor financiado</th>
                        <th>Valor bruto</th>
                        <th>Valor de aquisição</th>
                        <th>Prazo</th>
                        <th>N.º CCB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="detalhe of detalhes" :key="detalhe.id">
                        <td>{{detalhe.nomeCompleto}}<span>{{detalhe.cpf}}</span></td>
                        <td>R$ {{detalhe.valorFinanciado}}</td>
                        <td>R$ {{detalhe.valorBruto}}</td>
                        <td>R$ {{detalhe.valorAquisicao}}</td>
                        <td>{{detalhe.parcelas}}x<span class="transform">{{detalhe.cet}}</span></td>
                        <td>{{detalhe.numCcb}}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
</template>

<script>
import Detalhe from '../services/detalhes'

export default {
    data() {
        return{
            detalhes: []
        }
    },
    mounted() {
        Detalhe.listar().then(response => {
            this.detalhes = response.data.detalhes;
            console.log(response.data)
        })
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
$main-color: #666666;
$secondary-color: #FFB600;
$base-color: #fff;
$secondary-base-color: #E0E0E0;
$base-padding: 16px;
$secondary-padding: 24px;

.container{
    &.main{
        background-image: none;
        height: 100%;
    }
    .main-component{
        background-color: $base-color;
        box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        padding: $secondary-padding;
        box-sizing: border-box;
        text-align: left;

        @media screen and (min-width: 768px){
            padding: 32px;
        }

        @media screen and (min-width: 992px){
            padding: 40px;
        }
    }
    .title-secondary{
        font-size: 16px;
        font-weight: 500;
        padding-bottom: $base-padding;
        margin: 0;
    }
    .box-info{
        color: $base-color;
        background-color: $main-color;
        padding: $base-padding;
        border-radius: 4px;
        margin-bottom: 8px;

        @media screen and (min-width: 768px){
            max-width: 31.60%;
            box-sizing: border-box;
            display: inline-block;
            margin-right: $base-padding;
        }

        @media screen and (min-width: 992px){
            max-width: 32%;
        }

        @media screen and (min-width: 1366px){
            min-width: 32.25%;
        }

        &:last-child{
            margin-bottom: 0;
            margin-right: 0;
        }
        p{
            margin: 0;
        }
        .box-price{
            border: 1px solid #999;
            border-radius: 4px;
            padding: 5px 8px;
            margin-bottom: 5px;
            margin-top: 5px;

            @media screen and (min-width: 525px){
                display: inline-block;
                width: 45%;
                margin-right: 3px;
            }

            @media screen and (min-width: 768px){
                width: 100%;
                box-sizing: border-box;
            }

            span{
                padding-right: 8px;
                font-family: 'Lato', sans-serif;
                font-weight: 400;
                font-size: 14px;
            }
        }
        .total{
            color: $secondary-color;
            font-size: 14px;
            margin-top: 8px;
            span{
                font-size: 16px;
            }
        }
    }
    .table-component{
        overflow-y: scroll;
        margin-top: 40px;
        table{
            border-spacing: 0px 8px;
            thead{
                tr{
                    background-color: $secondary-base-color;
                    th{
                        min-width: 169px;
                        border-radius: 4px 0px 0px 4px;
                        padding: $base-padding;
                        font-family: 'Rubik', sans-serif;
                        font-weight: 500;
                        border-right: none;
                        border-bottom: 1px solid $secondary-color;
                        font-size: 14px;

                        @media screen and (min-width: 992px){
                            width: 185px;
                            min-width: auto;
                        }
                    }
                }
            }
            tbody{
                tr{
                    margin: 8px 0px;
                    td{
                        padding: $base-padding;
                        font-family: 'Lato', sans-serif;
                        font-weight: 400;
                        font-size: 14px;
                        border: 1px solid $secondary-base-color;
                        border-right: none;
                        border-left: none;
                        &:first-child{
                            border-left: 1px solid $secondary-base-color;
                        }
                        &:last-child{
                            border-right: 1px solid $secondary-base-color;
                        }
                        span{
                            display: block;
                            &.transform{
                                text-transform:lowercase;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>