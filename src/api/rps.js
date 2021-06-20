export async function requestRps() {
  try {
    const res = await fetch("http://localhost:8000/api/rps");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
