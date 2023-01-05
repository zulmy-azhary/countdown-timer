<script lang="ts">
  import { onMount } from 'svelte';
  import Card from './lib/Card.svelte';

  let time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  // Set the target 9 days from the current time
  const target = new Date(new Date().setDate(new Date().getDate() + 9));

  const handleTick = () => {
    const currentDate = new Date();
    const res = target.getTime() - currentDate.getTime();

    const getDays = Math.floor((res / (1000 * 60 * 60 * 24)));
    const getHours = Math.floor((res / (1000 * 60 * 60)) % 24);
    const getMinutes = Math.floor((res / 1000 / 60) % 60);
    const getSeconds = Math.floor((res / 1000) % 60);
    
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
  <h2>We're Launching Soon</h2>
  <div class="countdown">
    <Card cb={handleTick} name="Days" number={time.days} />
    <Card cb={handleTick} name="Hours" number={time.hours} />
    <Card cb={handleTick} name="Minutes" number={time.minutes} />
    <Card cb={handleTick} name="Seconds" number={time.seconds} />
  </div>
</main>

<style>
  h2 {
    color: white;
    letter-spacing: 9px;
  }
  .countdown {
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
  }
</style>