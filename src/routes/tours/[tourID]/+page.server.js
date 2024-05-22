export async function load({ params }) {
    console.log(params.tourID);
    const url = "https://api.snooker.org/?e=" + params.tourID;

    const response = await fetch(url, {
        headers: {
            "X-Requested-By": "JackSkola"
        }
    });
    const tours = await response.json();
    console.log(tours);
    return { tours };
}