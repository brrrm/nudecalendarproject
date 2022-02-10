<template>
    <div class="products">

        <div class="year-label twenty-two">
        </div>

        <product-card
                class="product-card"
                label="The Berlin calendar"
                margin-bottom="50px"
                price="€45,-"
                v-on:click.native="orderProduct('frame-product-6658946007106')"
                :image-title="'/images/products/berlijn-2022.jpg'" />

        <product-card
                class="product-card"
                label="Poster: year calendar Amsterdam 2022"
                bottom-label-two="A2 size | 41 x 71 cm | Numbered | First edition of 50"
                margin-bottom="50px"
                price="€45,-"
                v-on:click.native="orderProduct('frame-product-6683772911682')"
                :image-title="'/images/products/POSTER-amsterdamse-naaktkalender-22.jpg'" />

        <div class="spacer"></div>
        
        <product-card
                class="product-card"
                label="Combi deal: The Berlin calendar 2022 + 2021"
                margin-bottom="50px"
                price="€75,-"
                v-on:click.native="orderProduct('frame-product-6673385160770')"
                :image-title="'/images/products/berlijn-2022-and-2021-combideal2.jpg'" />

        <div class="spacer"></div>


        <div class="year-label twenty-one">
        </div>

        <product-card
                class="product-card"
                label="The Berlin calendar"
                margin-bottom="50px"
                price="€45,-"
                v-on:click.native="orderProduct('frame-product-4701904633922')"
                :image-title="'/images/products/berlin-2021-final.jpeg'" />

        <product-card
                class="product-card"
                label="The Amsterdam calendar"
                margin-bottom="50px"
                price="€45,-"
                v-on:click.native="orderProduct('frame-product-4701905027138')"
                :image-title="'/images/products/calendar-amsterdam-2021-sold-out.jpg'" />

        
        
        <div class="year-label twenty">
        </div>

        <product-card
                class="product-card"
                label="2020 Calendar"
                margin-bottom="20px"
                price="€55,-"
                v-on:click.native="orderProduct('frame-product-4256651706434')"
                :image-title="'/images/products/calendar-amsterdam-2020-sold-out.jpg'" />

        <div class="spacer" ></div>


        <div class="year-label">
        </div>


        <product-card
                class="product-card"
                label="2019 Calendar"
                margin-bottom="20px"
                v-on:click.native="orderProduct('frame-product-4256713769026')"
                :image-title="'/images/products/2019-sold-out.jpg'"
        />
    </div>

</template>

<script>
    import ProductCard from './ProductCard.vue';

    export default {
        name: "ProductGrid",
        components: {
            ProductCard,
        },
        methods: {
            orderProduct(fname) {
                let iframe = document.getElementsByName(fname)[0];
                let button = iframe.contentWindow.document.getElementsByTagName('button')[0];
                button.click();
            }
        }
    }
</script>

<style lang="scss" scoped>
    a{
        @media ('min-width:500px') {
            display: none;
        }
        text-decoration: none;
    }
    .bikeroute {
        margin-top: 20px;
        margin-bottom: -20px;
        max-width: 100vw;
        padding: 10px;
        border: 8px solid #aa443c;
        background: white;
        box-shadow      : 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

        display: flex;
        align-items: center;
        justify-content: center;

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
                max-width : 90%;
            }

            .small {
                max-width: 60%;
            }
        }
        .pointer {
            max-width: 10%;
            font-size: 35px;
            color: black;
        }
    }
    .year-label {
        margin-top        : 4px;
        background-image  : url("/images/assets/2019-label-1.png");
        background-repeat : no-repeat;
        background-size   : 100%;
        width: 150%;
        text-align        : left;
        display           : flex;
        justify-content   : left;
        height            : 130px;
        border-radius     : 16px;

        @media(max-width: 1630px) {
            width: 120%;
        }
        @media (max-width : 1230px) {
            display         : flex;
            justify-content : left;
            padding         : 0;
            margin          : 0;
            margin-top      : 12px;
            margin-left     : -12px;
            box-shadow      : none;
            max-width       : 180px;
            height: 80px;
        }

        h1 {
            font-weight : 400;
            font-size   : 52px;
            color       : #000000;

            @media (max-width : 500px) {
                margin-top : 12px;
            }
        }

        img {
            height        : 55px;
            width         : 45px;
            padding-right : 12px;
            margin-top    : 8px;
            height        : 45px;

            @media (max-width : 500px) {
                max-width  : 45px;
                margin-top : 20px;
                height     : 45px;
            }
        }

        &-2020 {
            background-repeat : no-repeat;
            background-size   : 300px 150px;
            height            : 150px;
            width             : 300px;
            padding           : 50px 25px 0;
            text-align        : left;
            margin            : 0;
        }


        @media (max-width : 1230px) {
            grid-column-start : 1;
            grid-column-end   : 3;
            margin-left       : 10px;
        }

        @media (max-width : 780px) {
            grid-column-end : 2;
            margin-left     : 0;

            img {
                width : 120px;
            }
        }
        @media (max-width : 500px) {
            margin-left : -12px;
        }
    }

    .twenty-two {
        background-image : url("/images/assets/2022-label.png");
    }
    .twenty-one {
        background-image : url("/images/assets/2021-label.png");
    }

    .twenty {
        background-image : url("/images/assets/2020-label.png");

    }
    @media (max-width : 780px) {
    	.spacer{
    		height: 0;
    		margin-bottom: -12vw;
    	}
    }
    .column-fill {
        grid-column-end   : 1;
        grid-column-start : 2;

        @media (max-width : 1230px) {
            grid-column-end : 3;
        }

        @media (max-width : 780px) {
            grid-column-end   : 1;
            grid-column-start : 2;
        }
    }

    .products {
        display               : grid;
        grid-template-columns : 1fr 4fr 4fr;
        width                 : 100%;
        max-width             : 100vw;
        overflow              : hidden;
        padding               : 40px 72px 40px 12px;
        margin-bottom         : 24px;
        grid-gap              : 60px;
        grid-row-gap          : 40px;

        @media (max-width : 1630px) {
            padding  : 40px 12px;
            grid-gap : 30px;
        }

        @media (max-width : 1230px) {
            grid-template-columns : 1fr 1fr;
            padding               : 40px 24px;
        }

        @media (max-width : 780px) {
            grid-template-columns : 1fr;
            grid-gap              : 0;
            padding               : 0;
            overflow              : hidden;
            max-width             : 95%;
            margin-left           : 5px;
            > *:not(:first-child) {
            	margin-top: 12vw;
            }
        }
    }
</style>
