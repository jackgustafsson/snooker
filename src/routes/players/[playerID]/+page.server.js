export async function load({ params }) {
    console.log(params.playerID);
    const url = "https://api.snooker.org/?p=" + params.playerID;

    const response = await fetch(url, {
        headers: {
            "X-Requested-By": "JackSkola"
        }
    });
    const players = await response.json();
    console.log(players);
    return { player: players[0] };
}