<template>
    <div class="contact-container">
        <top-bar />
        <div id="contactPage">
            <h1>Contact</h1>
            <p>Laartje Verheijden</p>
            <p>laartjeverheijden@gmail.com<br />
                +31630291951<br />
                Amsterdam, The Netherlands</p>
            <p><a href="https://www.instagram.com/laraverheijden/" target="_blank">Follow me on Instagram</a><br />
                <a href="https://vimeo.com/laraverheijden/" target="_blank">Follow me on Vimeo</a><br />
                <a href="https://www.facebook.com/Lara-Verheijden-1968562443358539" target="_blank">Like me on Facebook</a></p>
        </div>
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar";

    export default {
        name: 'Contact',
        components: {
            TopBar,
        },
    };
</script>


<style lang="scss" scoped>
    #contactPage{
        max-width: 800px;
        margin: 2em auto;
        color: #aa443c;
        p{
            margin:  1em 0;
        }
        a:link,
        a:visited{
            color: #aa443c;
            &:hover{
                color:  #fff;
                background: #aa443c;
            }
        }
    }
</style>