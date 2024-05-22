<script>
    import { page } from "$app/stores";
</script>

<nav>
    <ul>
        <li>
            <a href="/" class:active={$page.url.pathname === "/"}>Home</a>
        </li>
        <li>
            <a href="/tours" class:active={$page.url.pathname === "/tours"}>Tournaments</a>
        </li>
        <li>
            <a href="/players" class:active={$page.url.pathname === "/players"}>Players</a>
        </li>
        <li>
            <a href="/about" class:active={$page.url.pathname === "/about"}>About</a>
        </li>
    </ul>
</nav>

<style lang="scss">
    nav {
        background-color: lightsteelblue;
        ul {
            li {
                list-style-type: none;
                display: inline-block;
                padding: 0;
                border: solid 0.2rem black;
                margin: 0.5rem;
                font-weight: bold;
                background-color: white;
                a:hover {
                    background-color: grey;
                }
                a {
                    display: inline-block;
                    text-decoration: none;
                    color: black;
                    padding: 0.5rem;
                    &.active {
                        background-color: grey;
                    }
                }
            }
        }
    }
</style>
