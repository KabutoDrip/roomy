import {writable} from 'svelte/store';

export const userStore = writable({isLoggedIn: false, user: null})

export const calendarInfo = writable({show: false, month: 0, day: 0})