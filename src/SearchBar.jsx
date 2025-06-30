import { FaSearch } from "react-icons/fa";
import "./searchbar.css";

export default function SearchBar() {
    
    return(
        <form action="POST">
            <input type="text" placeholder="Bangalore" required/>
            <button type="submit">
                <FaSearch />
            </button>
        </form>
    )
}