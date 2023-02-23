import '../App.css';
import './Home.css'
import { useState } from 'react';

function Home(){


const [query, setQuery] = useState('');

const onChange = event => setQuery(event.target.value);



    return(
        <div>
            <p>Home</p>
            <form>
                <label>Enter number of servings</label>
                <input
                    type="number"
                    value = {query}
                    onChange = {onChange}
                />
                <input
                    type = "submit"
                    value = "Submit"
                />
            </form>
        </div>
    )

}

export default Home