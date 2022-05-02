<template>
    <div class="contact-container">
        <top-bar />
        <div id="launch-page">

            <div class="launch amsterdam">
                <h2>Launch Amsterdam</h2>
                <p>27 & 28 november</p>
                <p>Window exhibition walking tour Amsterdam Centre.</p>
                <p><a href="/images/launch/Route--sticker-and-discount.pdf" class="download" download>&#x261E; &nbsp; Download the route (PDF)</a><br />
                   <a href="#audiotour" class="download">&#x261E; &nbsp; Open the audiotour</a></p>
                <div class="launch-amsterdam-images">
                    <p><img src="/images/launch/lara2klein.jpg" alt="Window exhibition der Berliner Nacktkalender '22" /></p>
                    <p><img src="/images/launch/Lara-Verheijden---kaartje-wandelroute.jpg" alt="Route map" /></p>
                </div>
                <h2 id="audiotour" >Audio tour Amsterdam Launch</h2>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1353280504&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lara-verheijden" title="Audio-tour WINDOW EXHIBITION" target="_blank" style="color: #cccccc; text-decoration: none;">Audio-tour WINDOW EXHIBITION</a> · <a href="https://soundcloud.com/lara-verheijden/sets/audio-tour-window-exhibition" title="AUDIO-TOUR -  Window Exhibition" target="_blank" style="color: #cccccc; text-decoration: none;">AUDIO-TOUR -  Window Exhibition</a></div>
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

        h2#audiotour{
            margin: 2em 0 .5em;
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

        a.download:link,
        a.download:visited{
            display: block;
            margin: 0;
            font-size: 3em;
            line-height: 1em;
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