<script>
  /**
	 * @type {string | any[]}
	 */
   export let images = [];

  let currentImageIndex = 0;
  let currentImage = images[currentImageIndex];

  // @ts-ignore
  $: currentImage = images[currentImageIndex];

  // @ts-ignore
  function selectImage(index) {
    currentImageIndex = index;
  }

  function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
</script>

<div class="galleery">
  <div class="image-container">
    <button class="arrow arrow-left" on:click={previousImage}>⫷</button>
    {#if currentImage}
      <img class="large-image" src={currentImage} alt="Duże zdjęcie pokoju hotelowego" />
    {:else}
      <p>Brak zdjęcia</p>
    {/if}
    <button class="arrow arrow-right" on:click={nextImage}>⫸</button>
  </div>

  <div class="thumbnail-container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#each images as image, index}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="thumbnail {index === currentImageIndex ? 'selected' : ''}" on:click={() => selectImage(index)}>
        <img src={image} alt="Miniatura pokoju hotelowego" />
      </div>
    {/each}
  </div>
</div>

<style>
  .galleery {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    position: relative;
    max-width: 800px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .large-image {
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #ffffff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 1;
  }

  .arrow:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  .arrow-left {
    left: 10px;
  }

  .arrow-right {
    right: 10px;
  }

  .thumbnail-container {
    display: flex;
    overflow-x: auto;
    margin-top: 10px;
    padding: 10px 0;
    max-width: 800px;
  }

  .thumbnail {
    width: 100px;
    height: 70px;
    margin-right: 10px;
    cursor: pointer;
    flex-shrink: 0;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid transparent;
    transition: border 0.2s ease;
  }

  .thumbnail.selected {
    border: 2px solid #333;
  }

  .thumbnail img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .thumbnail:hover img {
    transform: scale(1.1);
  }

  @media (max-width: 600px) {
    .image-container {
      height: 300px;
    }

    .arrow {
      font-size: 1.5rem;
      padding: 0.3rem;
    }

    .thumbnail {
      width: 80px;
      height: 50px;
    }
  }
</style>