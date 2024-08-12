<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
  
    export let images: string[] = []; // Accept images as a prop
    let selectedImage: number | undefined;
    let isLightboxOpen = false;
  
    const dispatch = createEventDispatcher();
  
    function openLightbox(index: number) {
      if (index >= 0 && index < images.length) {
        selectedImage = index;
        isLightboxOpen = true;
      } else {
        console.error("Invalid image index:", index);
      }
    }
  
    function closeLightbox() {
      isLightboxOpen = false;
      selectedImage = undefined;
      dispatch('close');
    }
  
    function nextImage() {
      if (selectedImage !== undefined) {
        selectedImage = (selectedImage + 1) % images.length;
      }
    }
  
    function prevImage() {
      if (selectedImage !== undefined) {
        selectedImage = (selectedImage - 1 + images.length) % images.length;
      }
    }
    
    function selectImage(index: number) {
      selectedImage = index;
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
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="lightbox" on:click={closeLightbox} role="dialog" aria-modal="true">
      <div class="controls" role="group" aria-label="Image navigation controls">
        <button type="button" on:click|stopPropagation={prevImage} aria-label="Previous image">❮</button>
        <button type="button" on:click|stopPropagation={nextImage} aria-label="Next image">❯</button>
      </div>
  
      <!-- svelte-ignore a11y-no-redundant-roles -->
      {#if selectedImage !== undefined}
        <!-- svelte-ignore a11y-no-redundant-roles -->
        <img src={images[selectedImage]} alt={`Selected Image ${selectedImage + 1}`} role="img" />
      {/if}
  
      <div class="thumbnails" on:click|stopPropagation role="group" aria-label="Thumbnail navigation">
        {#each images as image, index}
          <button type="button" on:click={() => selectImage(index)} aria-label={`Select image ${index + 1}`}>
            <img src={image} class:selected={selectedImage === index} alt={`Thumbnail ${index + 1}`} />
          </button>
        {/each}
      </div>
    </div>
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
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .lightbox img {
      max-width: 80%;
      max-height: 80%;
      margin: 20px 0;
    }
    .controls {
      display: flex;
      justify-content: space-between;
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .controls button {
      background: none;
      border: none;
      color: white;
      font-size: 3em;
      cursor: pointer;
      padding: 50px;
    }
    .thumbnails {
      display: flex;
      overflow-x: auto;
      padding: 10px;
    }
    .thumbnails button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }
    .thumbnails img {
      width: 100px;
      margin: 0 5px;
      opacity: 0.6;
      object-fit: cover;
    }
    .thumbnails img.selected {
      border: 2px solid white;
      opacity: 1;
    }
  </style>