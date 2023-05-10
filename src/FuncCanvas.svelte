<script>
    import {afterUpdate} from "svelte";
    import draw from "./drawing";
    export let a,b,c,d;
    export let func;

    afterUpdate(()=>{
        const canvas = document.getElementById("funcCanvas");
        const div = document.getElementById("canvasDiv");
        const width = canvas.width = div.offsetWidth;
        const height = canvas.height = div.offsetHeight;

        draw(a,b,c,d,width,height,func); 
    })
</script>


<div id="canvasDiv">
    <canvas id="funcCanvas"></canvas>
</div>


<style>
    #canvasDiv {
        height: 60vh;
    }

    #funcCanvas {
        border: 2px solid orange;
        border-radius: 10px;
        margin: 0;
    }
</style>