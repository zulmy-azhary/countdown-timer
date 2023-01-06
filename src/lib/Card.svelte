<script lang="ts">
  import { onMount } from "svelte";
  import { onInterval } from "../utils/onInterval";

  export let callback: () => void;
  export let number: number;
  export let name: string;
  
  $: numbers = calculateLength(number);

  let topFront: string[] = [];
  let bottomFront: string[] = [];
  let topFlip: string[] = [];
  let bottomFlip: string[] = [];
  
  const calculateLength = (num: number) => {
    let arr = num.toString().split("");
    let res = arr.length === 1 ? ["0", ...arr] : arr;
    
    return res;
  }

  const topFlipStart = () => {
    topFront = numbers;
  }

  const topFlipEnd = () => {
    topFlip = numbers;
  }

  const bottomFlipStart = () => {
    bottomFlip = numbers;
  }

  const bottomFlipEnd = () => {
    bottomFront = numbers;
  }

  onMount(() => {
    topFront = numbers;
    bottomFront = numbers;
    topFlip = numbers;
    bottomFlip = numbers;
  })

  onInterval(callback, 1000);
</script>

<div class="container">
  {#key number}
  <div class="wrapper">
    <div class="top-front">
      {#each topFront as num}
        <span>{num}</span>
      {/each}
    </div>
    <div class="top-flip"
      on:animationstart={topFlipStart}
      on:animationend={topFlipEnd}
    >
      {#each topFlip as num}
        <span>{num}</span>
      {/each}
    </div>
    <div class="bottom-front">
      {#each bottomFront as num}
        <span>{num}</span>
      {/each}
    </div>
    <div class="bottom-flip" 
      on:animationend={bottomFlipEnd}
      on:animationstart={bottomFlipStart}
    >
      {#each bottomFlip as num}
        <span>{num}</span>
      {/each}
    </div>
  </div>
  {/key}
  <p>{name}</p>
</div>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
  
  p {
    color: var(--grayishBlue);
    font-size: .5rem;
    letter-spacing: 3px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    border-radius: 7px;
    position: relative;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.125);
  }
  .top-front, .top-flip, .bottom-front, .bottom-flip {
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 1.25em 1em;
    height: .5em;
    line-height: 1.5;
  }

  .top-front, .top-flip {
    background-color: var(--darkDesaturatedBlue);
    border-bottom: 1px solid var(--veryDarkBlue);
    filter: brightness(85%);
    border-radius: 7px 7px 0 0;
  }

  .top-flip {
    position: absolute;
    width: 100%;
    top: 0;
    animation: flip-top .25s ease-in;
    transform-origin: bottom;
    transform: perspective(200px) rotateX(0);
  }

  @keyframes flip-top {
    100% {
      transform: rotateX(-90deg);
    }
  }

  .bottom-front {
    position: relative;
  }

  .bottom-front, .bottom-flip {
    display: flex;
    align-items: end;
    background-color: var(--darkDesaturatedBlue);
    border-radius: 0 0 7px 7px;
  }

  .bottom-flip {
    position: absolute;
    width: 100%;
    bottom: 0;
    animation: flip-bottom .25s ease-out .25s;
    transform-origin: top;
    transform: perspective(300px) rotateX(90deg);
  }

  @keyframes flip-bottom {
    100% {
      transform: rotateX(0deg);
    }
  }
  
  span {
    display: inline-block;
    color: var(--softRed);
    min-width: 1.75rem;
    font-size: 2.5em;
    line-height: 1;
  }

  /* For center corner rounded card */
  :is(.top-front, .top-flip, .bottom-front, .bottom-flip)::before,
  :is(.top-front, .top-flip, .bottom-front, .bottom-flip)::after {
    --size: 7px;
    content: "";
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-color: var(--veryDarkBlue);
    border-radius: 50%;
    z-index: 1;
  }

  :is(.top-front, .top-flip)::before {
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
  }

  :is(.top-front, .top-flip)::after {
    bottom: 0;
    right: 0;
    transform: translate(50%, 50%);
  }

  :is(.bottom-front, .bottom-flip)::before {
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
  }
  :is(.bottom-front, .bottom-flip)::after {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }

  @media (min-width: 768px) {
    .container {
      row-gap: 2rem;
    }
    .top-front, .top-flip, .bottom-front, .bottom-flip {
      padding: 2.5em 1.75em;
      height: .875em;
      line-height: 1;
    }
    span {
      min-width: 3.5rem;
      font-size: 5em;
      height: 1em;
    }

    p {
      font-size: 1rem;
      letter-spacing: 6px;
    }
    :is(.top-front, .top-flip, .bottom-front, .bottom-flip)::before,
    :is(.top-front, .top-flip, .bottom-front, .bottom-flip)::after {
      --size: 12px;
    }
  }
</style>