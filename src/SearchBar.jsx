import { FaSearch } from "react-icons/fa";
import "./searchbar.css";

export default function SearchBar() {
    async function fetchData(location) {
        const unitGroup = "metric";
        const apiAccessKey = "8WNWFWY7HUSSVPVG94GKBZ687";
        const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=${unitGroup}&key=${apiAccessKey}&contentType=json`;
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`Couldn't fetch the weather data for ${location}`)
            }
            const weatherData = await response.json();
            console.log(weatherData);
        } catch (error) {
            console.log(error)
        }
    }

    function handleFormSubmit(formData) {
        const location = formData.get("location");
        fetchData(location)
    }
    
    return(
        <form action={handleFormSubmit}>
            <input type="text" name="location" placeholder="Bangalore" required/>
            <button type="submit">
                <FaSearch />
            </button>
        </form>
    )
}