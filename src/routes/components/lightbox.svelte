<script>
  // @ts-nocheck
  export let images;
  export let selectedImage;
  import { createEventDispatcher, onMount } from 'svelte';

  const dispatch = createEventDispatcher();

  function closeLightbox() {
    dispatch('close');
  }

  function nextImage() {
    selectedImage = (selectedImage + 1) % images.length;
  }

  function prevImage() {
    selectedImage = (selectedImage - 1 + images.length) % images.length;
  }

  function selectImage(index) {
    selectedImage = index;
  }

  function handleKeydown(event) {
    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === 'Escape') closeLightbox();
  }

  onMount(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });
  </script>
  
  <style>
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
  
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="lightbox" on:click={closeLightbox} role="dialog" aria-modal="true">
    <div class="controls" role="group" aria-label="Image navigation controls">
      <button type="button" on:click|stopPropagation={prevImage} aria-label="Previous image">❮</button>
      <button type="button" on:click|stopPropagation={nextImage} aria-label="Next image">❯</button>
    </div>
  
    <!-- svelte-ignore a11y-no-redundant-roles -->
    <img src={images[selectedImage]} alt={`Selected Image ${selectedImage + 1}`} role="img" />
  
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="thumbnails" on:click|stopPropagation role="group" aria-label="Thumbnail navigation">
      {#each images as image, index}
        <button type="button" on:click={() => selectImage(index)} aria-label={`Select image ${index + 1}`}>
          <img src={image} class:selected={selectedImage === index} alt={`Thumbnail ${index + 1}`} />
        </button>
      {/each}
    </div>
  </div>