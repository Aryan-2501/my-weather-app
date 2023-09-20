import axios from "axios";
// import process from "process";

export async function fetchWeather(city, setError) {
  const apiKey = "85f6b9cf598935b90ec5ad5bcfe66064";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  console.log(url);

  try {
    const response = await axios.get(url);
    // console.log(response);
    setError("");
    return response.data;
  } catch (error) {
    setError("City Not Found!");
    return error;
  }
}
