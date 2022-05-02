<template>
    <div class="contact-container">
        <top-bar />
        <div id="contactPage">
            <h1>Contact</h1>
            <h2>Lara Verheijden</h2>
            <p>laartjeverheijden@gmail.com <small>(Not for inquiries about orders)</small><br />
                +31630291951<br />
                Amsterdam, The Netherlands</p>

            <h3>FOR INQUIRIES ABOUT ORDERS </h3>
			<p>thenudecalendarproject.orders@gmail.com</p>
            <p>&rarr; <a href="https://www.instagram.com/laraverheijden/" target="_blank">Follow me on Instagram</a><br />
                &rarr; <a href="https://vimeo.com/laraverheijden/" target="_blank">Follow me on Vimeo</a><br />
                visit my website &rarr;  <a href="http://www.laraverheijden.com" target="_blank">www.laraverheijden.com</a></p>
            <p>&rarr; <a href="/#biography">Read a short biography and project information</a></p>
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
        margin: 2em 22px;
        @media (max-width: 1020px){
            margin: 2em 10px;
        }
        color: #aa443c;
        h2{
            margin: 1em 0;
        }
        h3{
            margin-bottom: -0.667em;
        }
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