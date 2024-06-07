<script>
    import Offer from '$lib/main/offer.svelte'
    import Header from '$lib/main/header.svelte'
    import Rooms from '$lib/main/rooms.svelte';
	import Form from '$lib/main/form.svelte';
	import Discover from '$lib/main/discover.svelte';
	import Feedback from '$lib/main/feedback.svelte';
	import Opinions from '$lib/main/opinions.svelte';
</script>

<Header />
<!-- <Opinions /> -->
<Discover />
<!-- <Offer /> -->
<Rooms />
<Feedback />
<Form />