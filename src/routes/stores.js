import { writable } from 'svelte/store';
// import { onMount } from "svelte";

export const themeStore = writable("light");
export const langStore = writable("pl");
export const webStore = writable("https://pl.pattern.monster");

// export let themeStore;
