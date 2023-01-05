import { onDestroy } from "svelte";

export const onInterval = (cb: () => void, timer: number) => {
  const interval = setInterval(cb, timer);

  onDestroy(() => clearInterval(interval));
};
