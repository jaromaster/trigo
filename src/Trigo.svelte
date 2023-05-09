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
    <h1>Sine function</h1>

    <div id="userInput">
        <label for="aInput">a =</label>
        <input type="number" bind:value={a} id="aInput">
        <label for="bInput">b =</label>
        <input type="number" bind:value={b} id="bInput" step="0.05">
        <label for="cInput">c =</label>
        <input type="number" bind:value={c} id="cInput">
        <label for="dInput">d =</label>
        <input type="number" bind:value={d} id="dInput">

        <p id="displayFunc">{funcString}</p>
    </div>

    <SineCanvas a={a} b={b} c={c} d={d}/>
</div>

<style>
    #trigo {
        width: 50%;
        margin: auto;
        padding: 0 5rem;
        border: 1px solid black; /* just for debugging */
    }
    #userInput {
        width: fit-content;
        display: grid;
        grid-template-columns: auto auto;
        row-gap: 2px;
        column-gap: 5px;
    }
    #userInput input {
        width: 5em;
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
    }
</style>