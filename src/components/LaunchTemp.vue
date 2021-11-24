<template>
    <div class="contact-container">
        <top-bar />
        <div id="launch-page">

        	<div class="launch amsterdam">
        		<h2>Launch Amsterdam</h2>
        		<p>27 & 28 november</p>
        		<p>Window exhibition walking tour Amsterdam Centre</p>
        		<div class="launch-amsterdam-images">
        			<p><img src="/images/launch/lara2klein.jpg" alt="Window exhibition der Berliner Nacktkalender '22" /></p>
        			<p><a href="/images/launch/Route--sticker-and-discount.pdf" class="download" download>&#x261E; &nbsp; Download the route (PDF)</a> <img src="/images/launch/Lara-Verheijden---kaartje-wandelroute.jpg" alt="Route map" /></p>
        		</div>
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
        	@media screen and (min-width:  1024px){
	        	&.berlin{
	        		margin-left: 5%;
	        	}
	        }
        	@media screen and (max-width:  1024px){
        		flex:  100% 0 0;
        		margin:  0 0 3em;
        		max-width: none;
        	}
        }

        .launch.amsterdam .launch-amsterdam-images{
        	display: flex;
        	justify-content: space-between;
        	@media screen and (max-width:  1024px){
        		display: block;
        	}
        	p{
        		flex: 45% 0 0;
        		img{
        			width:  100%;
        		}
        	}
        	a.download{
        		display: block;
        		margin: 0 0 .5em;
        		font-size: 3em;
        		@media screen and (max-width:  1024px){
        			font-size: 2em;
        		}
        		text-decoration: none;
        		font-weight: 900;
        		color: #00a850;
        		padding: 0 0 0.3em;
        		font-family: "HelveticaNeue-75";
        		text-shadow:
				    0 1px 0px #000,
				    1px 0 0px #000,
				    1px 2px 1px #000,
				    2px 1px 1px #000,
				    2px 3px 2px #000,
				    3px 2px 2px #000,
				    3px 4px 2px #000,
				    4px 3px 3px #000,
				    4px 5px 3px #000,
				    5px 4px 2px #000,
				    5px 6px 2px #000,
				    6px 5px 2px #000,
				    6px 7px 1px #000,
				    7px 6px 1px #000,
				    7px 8px 0px #000,
				    8px 7px 0px #000;
				&:hover{
					background-color: #00a850;
				}
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