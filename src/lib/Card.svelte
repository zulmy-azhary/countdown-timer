<script lang="ts">
  import { onInterval } from "../utils/onInterval";

  export let callback: () => void;
  export let number: number;
  export let name: string;
  
  $: numbers = calculateLength(number);

  const calculateLength = (number: number) => {
    let arr = number.toString().split("");
    let res = arr.length === 1 ? ["0", ...arr] : arr;

    return res;
  }
  
  onInterval(callback, 1000);
</script>

<div class="container">
  {#key number}
  <div class="wrapper">
    <div class="top-front">
      {#each numbers as num}
        <span>{num}</span>
      {/each}
    </div>
    <div class="top-flip">
      {#each numbers as num}
        <span>{num}</span>
      {/each}
    </div>
    <div class="bottom-front">
      {#each numbers as num}
      <span>{num}</span>
      {/each}
    </div>
    <div class="bottom-flip">
      {#each numbers as num}
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
    row-gap: 2rem;
  }
  
  p {
    color: var(--grayishBlue);
    font-size: 1rem;
    letter-spacing: 6px;
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
    padding: 2.5em 1.75em;
    height: .875em;
    line-height: 1;
    overflow: hidden;
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
    transform: rotateX(0);
  }

  @keyframes flip-top {
    100% {
      transform: perspective(300px) rotateX(270deg);
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
    min-width: 3.5rem;
    color: var(--softRed);
    font-size: 5em;
    height: 1em;
  }

  /* For corner card */
  :is(.top-front, .top-flip, .bottom-front, .bottom-flip)::before,
  :is(.top-front, .top-flip, .bottom-front, .bottom-flip)::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
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
  
</style>