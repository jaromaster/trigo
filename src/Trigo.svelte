<script>
    import SineCanvas from "./SineCanvas.svelte";

    let a = 1;
    let b = 1;
    let c = 0;
    let d = 0;

    let funcString = "";

    // create string for displaying the function using parameters
    function compileFuncString(a,b,c,d) {
        let result = "f(x) = "
        if (a != 1) {
            result += `${a} * `;
        }
        result += "sin(";
        if (b != 1) {
            result += `${b} * x`;
        }
        else {
            result += "x";
        }
        if (c < 0) {
            result += ` - ${-1*c}`;
        } else if (c > 0) {
            result += ` + ${c}`;
        }
        result += ") ";
        if (d < 0) {
            result += `- ${d*-1}`;
        } else if (d > 0) {
            result += `+ ${d}`;
        }

        return result;
    }


    $: {
        funcString = compileFuncString(a,b,c,d);
    }

</script>


<div id="trigo">
    <div id="userInput">
        <label for="aInput">a =</label>
        <input type="number" bind:value={a} id="aInput" max="10" min="-10">
        <label for="bInput">b =</label>
        <input type="number" bind:value={b} id="bInput" step="0.05">
        <label for="cInput">c =</label>
        <input type="number" bind:value={c} id="cInput" step="10">
        <label for="dInput">d =</label>
        <input type="number" bind:value={d} id="dInput" max="10" min="-10">

        <p id="displayFunc">f(x) = a * sin(b * x + c) + d</p>
        <p id="displayFunc">{funcString}</p>
    </div>

    <SineCanvas a={a} b={b} c={c} d={d}/>
</div>

<style>
    #trigo {
        padding: 1rem;
        height: 60vh;
        display: grid;
        grid-template-columns: auto 85%;
        column-gap: 1rem;
        justify-content: center;
    }
    #userInput {
        width: fit-content;
        height: fit-content;
        display: grid;
        grid-template-columns: auto auto;
        row-gap: 2px;
        column-gap: 5px;
    }
    #userInput input {
        width: 5em;
        height: fit-content;
        font-size: large;
    }
    #userInput label {
        font-size: large;
        font-weight: bold;
    }
    #displayFunc {
        font-size: large;
        font-weight: bold;
        grid-column: span 2;
        margin-bottom: 0;
    }
</style>