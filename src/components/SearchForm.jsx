import '../../dist/SearchForm.css'
import { useHistory } from 'react-router-dom'

export default function SearchForm({onSearch}){
    const history = useHistory();
    function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('query');
        query !== '' ? history.push(`/?q=${query}`) : history.push("/")
        onSearch(query)
    }
   
    return (
        <div>
            <form className="search-form" onSubmit={onSubmit}>
                <label>
                    <input name="query" className="search-line" type="text" placeholder="Search Shows and Movies" />
                </label>
                <button className="search-btn" type="submit">
                    <img className="submit-img" src="http://simpleicon.com/wp-content/uploads/magnifier-2.png" alt="" />
                </button>
            </form>
        </div>
    )
}