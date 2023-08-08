import { Link } from "react-router-dom";
import "./style.css";


function Routing(){
    return (
        
        <div>
            <h1>Welcome to Vocab Learning</h1>
            <img src="https://www.spl.org/Seattle-Public-Library/images/icons/online-resources/icons_115x115_1-18_dictionary.png" alt="logo" />
            <br />
            <Link to="/mainApp">
                <button>Start learning!</button>
            </Link>
        </div>
        
    )
}
export default Routing;