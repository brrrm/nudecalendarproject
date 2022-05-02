<template>
    <div>
        <div class="headline-container">
            <h1 id="headline">THE NUDE CALENDAR PROJECT</h1>
            <div class="image-container">
                <img src="/images/assets/kalender-logo.png" />
            </div>
        </div>

        <div class="sub-text">Shot by <a href="https://www.instagram.com/laraverheijden" target="_blank">Lara Verheijden</a></div>

       <ul class="nav">
            <li><a href="/">Home</a></li>
            <li><a href="/calendars">Calendars</a></li>
            <li><a href="/prints">Buy art & prints</a></li>
            <li><a href="/launch">Launch & event</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style lang="scss" scoped>
    svg {
        max-width: 20px;
        margin-top: 4px;
    }
    .headline-container {
        width          : 100%;
        height         : 80px;
        display        : flex;
        flex-direction : row;

        @media (max-width : 1230px) {
            height : auto;
        }

        img {
            width : 41px;
        }

        #headline {
            font-size   : 4em;
            margin      : 12px;
            padding     : 0;
            text-align  : left;
            color       : #aa443c;
            font-weight : 400;

            @media (max-width : 500px) {
                font-size   : 3em;
                margin-left : 6px;
            }
        }

        .image-container {
            margin-top : 10px;

            @media (max-width : 500px) {
                margin-top   : 16px;
                margin-right : 16px;
            }
        }
    }

    .sub-text {
        font-size   : 18px;
        color       : #aa443c;
        text-align  : left;
        margin-left : 22px;

        &.ideal {
            margin-left: 4px;
            margin-top:-8px;
            font-size: 14px;
        }

        @media (max-width : 1020px) {
            margin-left : 10px;
        }

        @media (max-width : 500px) {
            font-size : 14px;
        }

        a:link,
        a:visited{
            color: inherit;
            text-decoration: underline;
        }
    }

    ul.nav{
        display: flex;
        list-style: none;
        padding: 0;
        margin: 1em calc(22px - 0.5em);
        @media (max-width: 1020px){
            margin: 1em calc(10px - 0.5em);
        }
        justify-content: flex-start;
        max-width: 1200px;
        font-size: 1.5em;
        @media (max-width: 768px){
            font-size: 1em;
            flex-wrap: wrap;
            li{
                margin: 0 1em 0.5em 0;
            }
        }
        li a:link,
        li a:visited{
            color: #aa443c;
            text-decoration: none;
            padding: 0.3em 0.5em;
            &:hover,
            &:focus{
                color: #fff;
                background: #aa443c;
            }
        }
    }

    
</style>
