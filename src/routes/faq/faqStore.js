// W komponencie Svelte

import { onMount } from 'svelte';
import { writable } from 'svelte/store';

// Utwórz zmienną przechowującą pytania i odpowiedzi
const faq = writable([]);

onMount(async () => {
    // Wykonaj zapytanie do serwera Node.js
    const response = await fetch('/faq');
    if (response.ok) {
        const faqData = await response.json();
        // Zapisz pobrane dane w zmiennej
        faq.set(faqData);
    } else {
        console.error('Failed to fetch FAQ data:', response.statusText);
    }
});
