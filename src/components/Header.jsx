import SearchForm from './SearchForm'
import '../../dist/Header.css'
import { Link } from 'react-router-dom'


export default function Header(){
    return (
        <header>
            <div className="top-header">
            <Link to={'/'}>
                <div className="main-logo"><img src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="TV Maze" /></div>
            </Link>
            <SearchForm />
            <div className="auth-links">
                <a href="">Login</a>
                <a href="">Register</a>
            </div>
            </div>
            <nav>
            <ul>
                <li><a href="">Shows</a></li>
                <li><a href="">Peaple</a></li>
                <li><a href="">Network</a></li>
                <li><a href="">Web Channels</a></li>
                <li><a href="">Articles</a></li>
                <li><a href="">Schedule</a></li>
                <li><a href="">Calender</a></li>
                <li><a href="">Countdown</a></li>
                <li><a href="">Forums</a></li>
            </ul>
            </nav>
            <div className="breadcrumb">
                <a href="">HOME</a>
                <span> / </span>
                <a href="">SHOWS</a>
                </div>
                <div className="ads">
                    ads
                </div>
        </header>
    )
}