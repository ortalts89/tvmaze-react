import '../../dist/SearchForm.css'

export default function SearchForm({onSearch}){
    function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        onSearch(formData.get('query'))
    }

    return (
        <form className="search-form" onSubmit={onSubmit}>
            <label>
                <input name="query" className="search-line" type="text" placeholder="Search Shows and Movies" />
            </label>
            <button className="search-btn" type="submit">
                <img className="submit-img" src="http://simpleicon.com/wp-content/uploads/magnifier-2.png" alt="" />
            </button>
        </form>
    )
}