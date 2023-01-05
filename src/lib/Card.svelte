<script lang="ts">
  import { onInterval } from "../utils/onInterval";

  export let cb: () => void;
  export let number: number;
  export let name: string;

  $: numbers = number.toString().split("");

  onInterval(cb, 1000);
</script>
<div class="container">
  <div class="numbers">
    {#each numbers as number}
        {#if numbers.length === 1}
        <span>0</span>
        {/if}
        <span>{number}</span>
    {/each}
  </div>
  <p>{name}</p>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  p {
    color: var(--grayishBlue);
    font-size: 1rem;
    letter-spacing: 6px;
  }
  .numbers {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1.75rem;
    background-color: var(--darkDesaturatedBlue);
    border-radius: 7px;
    position: relative;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.125);
  }
  
  span {
    display: inline-block;
    min-width: 3.5rem;
    color: var(--softRed);
    font-size: 5rem;
  }
</style>