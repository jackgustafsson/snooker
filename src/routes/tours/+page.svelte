<script>
    export let data;
    console.log(data.tours);
</script>

<h2>List of tours</h2>
<ol>
    {#each data.tours as tour}
        <li>
            <a href="/tours/{tour.ID}">{tour.Name}</a>
        </li>
    {/each}
</ol>

<style lang="scss">
    h2 {
        margin-top: 1rem;
    }
    ol {
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: left;
        li {
            margin-left: 5rem;
            margin-right: 25rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            text-align: left;
        }
    }
</style>
