<script>
    import "../app.css";
    import Navbar from "$lib/navbar.svelte";
	import Footer from "$lib/footer.svelte";
</script>

<Navbar />
<slot />
<Footer />