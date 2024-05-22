import {API_KEY} from '$env/static/private';
export async function load({ fetch }) {
  let currentdate = new Date();
  let date = currentdate.getFullYear;

  if (currentdate.getMonth < 6) {
    date--;
  }

  console.log(currentdate.getFullYear());

  const url = "https://api.snooker.org/?t=5&s=" + date;

  const response = await fetch(url, {
    headers: {
      "X-Requested-By": API_KEY
    }
  });
  const tours = await response.json();
  console.log(tours);

  return { tours };
}