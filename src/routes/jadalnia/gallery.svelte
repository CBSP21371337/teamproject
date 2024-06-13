<script lang="ts">
  import { onMount } from 'svelte';
  import Lightbox from '../components/lightbox.svelte';

  let selectedImage: number | undefined = undefined;
  let isLightboxOpen: boolean = false;
  let images: string[] = [];

  onMount(() => {
    images = [
      '/jadalnia/stolowka.webp',
      '/jadalnia/54a.jpg',
      '/jadalnia/53.jpg',
      '/jadalnia/54.jpg',
      '/jadalnia/52.jpg',
      '/jadalnia/51.jpg',
      '/jadalnia/55.jpg',
      '/jadalnia/66.jpg',
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
    <div class="room">
      <img src={image} alt={`Gallery Image ${index + 1}`} />
    </div>
  </button>
  {/each}
</div>
{#if isLightboxOpen}
  <Lightbox {images} {selectedImage} on:close={closeLightbox} />
{/if}
  
<style>
  .room {
    height: 300px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
  }
  .room *, .room {
    transition: all 350ms ease-out;
  }
  .room img {
    filter: brightness(80%);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .room:hover img {
    transform: scale(1.10);
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 80%;
    max-width: 1200px;
    margin: 100px auto;
  }
  @media (max-width: 768px) {
    .gallery {
      grid-template-columns: 1fr;
      width: 80%;
    }
    .room {
      height: 300px;
    }
  }
</style>