import { writable } from 'svelte/store';

export const themeStore = writable("light");
export const langStore = writable("pl");
export const webStore = writable("https://pl.pattern.monster");
