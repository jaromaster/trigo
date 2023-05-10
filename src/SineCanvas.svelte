<script>
    import {afterUpdate} from "svelte";
    import draw from "./drawing";
    export let a,b,c,d;

    afterUpdate(()=>{
        // draw sine wave and axis after a,b,c,d changed
        const canvas = document.getElementById("sineCanvas");
        const div = document.getElementById("canvasDiv");
        const width = canvas.width = div.offsetWidth;
        const height = canvas.height = div.offsetHeight;
        console.log(document.getElementById("canvasDiv").innerHTML)

        draw(a,b,c,d,width,height); 
    })
</script>


<div id="canvasDiv">
    <canvas id="sineCanvas"></canvas>
</div>


<style>
    #canvasDiv {
        height: 60vh;
    }

    #sineCanvas {
        border: 2px solid orange;
        border-radius: 10px;
        margin: 0;
    }
</style>