<script>
    import {afterUpdate} from "svelte";
    import draw from "./drawing";
    export let a,b,c,d;

    const width = 600;
    const height = 400;

    afterUpdate(()=>{
        // draw sine wave and axis after a,b,c,d changed
        draw(a,b,c,d,width,height); 
    })
</script>


<div>
    <canvas id="sineCanvas" width={width} height={height}></canvas>
</div>


<style>
    #sineCanvas {
        border: 1px solid black; /* just for debugging */
    }
</style>