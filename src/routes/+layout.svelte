<script>
    import Header from "../lib/components/Header.svelte";
    import Nav from "../lib/components/Nav.svelte";
    import Footer from "../lib/components/Footer.svelte";
    import "$lib/global.scss";
</script>

<div>
    <Header />
    <Nav />
    <slot />
    <Footer />
</div>

<style lang="scss">
    div {
        background-color: white;
        display: inline-block;
        padding: 30px;
        margin-top: 1rem;
        max-width: 100%;
        width: 900px;
    }
</style>
