import '../../dist/SearchForm.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchShows } from '../store/shows';

export default function SearchForm(){
    const history = useHistory();
    const dispatch = useDispatch();

    function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('query');
        dispatch(fetchShows(query));
        query !== '' ? history.push(`/?q=${query}`) : history.push("/")
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