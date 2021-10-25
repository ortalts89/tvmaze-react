import ShowsContainer from "../components/ShowsContainer";
import '../../dist/Home.css'
import { useSelector } from 'react-redux'

export default function Home(){
    const query = useSelector((state) => state.searchQuery)
    
    return (
        <div className="layout">
            <main>
                <div className="content">
                    <div className="shows-list">
                        {query}
                        <ShowsContainer />
                    </div>
                    <div className="filters-search">
                        <form action="">
                            <label>
                                Show Status
                                <select name=""></select>
                            </label>
                            <label htmlFor="Show-Type">Show Type</label>
                            <select name="" id="Show-Type"></select>
                            <label htmlFor="Genre">Genre</label>
                            <select name="" id="Genre"></select>
                            <label htmlFor="Language">Language</label>
                            <select name="" id="Language"></select>
                            <label htmlFor="Country">Country</label>
                            <select name="" id="Country"></select>
                            <label htmlFor="Network">Network</label>
                            <select name="" id="Network"></select>
                            <label htmlFor="Web-Channel">Web Channel</label>
                            <select name="" id="Web-Channel"></select>
                            <label htmlFor="Runtime">Runtime</label>
                            <select name="" id="Runtime"></select>
                            <label htmlFor="Rating">Rating</label>
                            <select name="" id="Rating"></select>
                            <label htmlFor="Sort-by">Sort by</label>
                            <select name="" id="Sort-by"></select>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                <aside className="left">
                <div className="social">
                    <span>Follow us on:</span>
                </div>
                <div className="copyright">
                    <a href="">TVmaze.com</a>
                </div>
                </aside>
                <aside className="right">
                <div className="top">
                    <a href="">Features</a>
                    <a href="">API</a>
                    <a href="">Blog</a>
                    <a href="">Request a Show</a>
                </div>
                <div className="bottom">
                    <a href="">Data Plicies</a>
                    <a href="">Privacy Policy</a>
                    <a href="">ToS</a>
                </div>
                </aside>
            </footer>
        </div>
    )
}