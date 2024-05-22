import {API_KEY} from '$env/static/private';
export async function load({ params }) {
    console.log(params.playerID);
    const url = "https://api.snooker.org/?p=" + params.playerID;

    const response = await fetch(url, {
        headers: {
            "X-Requested-By": API_KEY
        }
    });
    const players = await response.json();
    console.log(players);
    return { player: players[0] };
}