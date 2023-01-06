<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./lib/Card.svelte";
  import Footer from "./lib/Footer.svelte";

  // Set default values to 9 days
  let time = {
    days: 9,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  // Set the target 9 days from the current time
  const target = new Date(new Date().setDate(new Date().getDate() + 9));

  const handleTick = () => {
    const currentDate = new Date();
    const gap = target.getTime() - currentDate.getTime();

    const getDays = Math.floor((gap / (1000 * 60 * 60 * 24)));
    const getHours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const getMinutes = Math.floor((gap / 1000 / 60) % 60);
    const getSeconds = Math.floor((gap / 1000) % 60);
    
    time.days = getDays;
    time.hours = getHours;
    time.minutes = getMinutes;
    time.seconds = getSeconds;
  };

  onMount(() => {
    handleTick()
  });
</script>

<main>
  <h1>We're Launching Soon</h1>
  <div class="countdown">
    <Card callback={handleTick} name="Days" number={time.days} />
    <Card callback={handleTick} name="Hours" number={time.hours} />
    <Card callback={handleTick} name="Minutes" number={time.minutes} />
    <Card callback={handleTick} name="Seconds" number={time.seconds} />
  </div>
</main>
<Footer />

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0.75;
    row-gap: 7rem;
  }
  h1 {
    font-size: 1.5rem;
    color: white;
    letter-spacing: 5px;
  }
  .countdown {
    display: flex;
    justify-content: center;
    gap: .5rem;
  }

  @media (min-width: 768px) {
    h1 {
      letter-spacing: 9px;
    }
    .countdown {
      gap: 5rem 2.5rem;
      flex-wrap: wrap;
    }
  }
</style>