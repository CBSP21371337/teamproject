<script lang="ts">
  import { onMount } from 'svelte';
  import Lightbox from './lightbox.svelte';

  let selectedImage: number | undefined = undefined;
  let isLightboxOpen: boolean = false;
  let images: string[] = [];

  onMount(() => {
    images = [
      '/jadalnia/stolowka.webp',
      '/pokoje/pokojemain/pokojstudio22.webp',
      // '/pokoje/pokojemain/domrodzinny.webp',
      '/pokoje/pokojemain/domkiletniskowe.webp',
      '/pokoje/pokojemain/domkidrewniane.webp',
      '/pokoje/pokojemain/pokoj2osobowytaras.webp',
      '/pokoje/pokojemain/apartament2poziomowy.webp',
      'https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano.jpg'
    ];
  });

  function openLightbox(index: number) {
    if (index >= 0) {
      selectedImage = index;
    } else {
      console.error("Invalid image index:", index);
    }
    isLightboxOpen = true;
  }
  function closeLightbox() {
    isLightboxOpen = false;
    selectedImage = undefined;
  }
</script>

<div class="gallery">
  {#each images as image, index}
    <button type="button" on:click={() => openLightbox(index)}>
      <img src={image} alt={`Gallery Image ${index + 1}`} />
    </button>
  {/each}
</div>

{#if isLightboxOpen}
  <Lightbox {images} {selectedImage} on:close={closeLightbox} />
{/if}

<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: 100px auto;
  }
  .gallery button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: block;
    width: 100%;
  }
  .gallery img {
    width: 100%;
    height: 12em;
    object-fit: cover;
  }
</style>