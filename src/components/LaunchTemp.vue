<template>
    <div class="contact-container">
        <top-bar />
        <div id="launch-page">
        	<div class="launch amsterdam">
        		<h2>Launch Amsterdam</h2>
        		<p>26 & 27 november</p>
        		<p>Window exhibition walking tour Amsterdam Centre</p>

        		<p>Info will come soon!</p>
        	</div>
        	<div class="launch berlin">
        		<h2>Launch Berlin</h2>
        		<p><img src="/images/assets/launch-berlin-2022.jpg" alt="poster Berlin launch party" /></p>
        	</div>
        </div>
    </div>
</template>

<script>
    import TopBar from "@/components/TopBar";

    export default {
        name: 'Launch',
        components: {
            TopBar,
        },
    };
</script>

<style lang="scss" scoped>
    #launch-page{
        max-width: 1200px;
        margin: 2em 22px;
        @media (max-width: 1020px){
        	margin: 2em 10px;
        }
        color: #aa443c;
        display: flex;
        @media screen and (max-width:  1024px){
        	flex-wrap: wrap;
        }
        .launch{
        	flex: 45% 0 0;
        	max-width: 600px;
        	@media screen and (max-width:  1024px){
        		flex:  100% 0 0;
        		margin:  0 0 3em;
        		max-width: none;
        	}
        }
        img{
        	max-width: 100%;
        	display: block;
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