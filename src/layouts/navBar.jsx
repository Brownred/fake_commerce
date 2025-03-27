export default function NavBar() {

    return (
        <div className="navBar">

            <div>
                <img className="nav-logo" src="/logo.png" alt="This is the logo" />
            </div>

            <div className="nav-links">
                <a href="/">Home Page</a>
                <a href="/users">Users Page</a>
                <a href="/about">About page</a>
            </div>

            <div>
                <button className="nav-btn">signup</button>
            </div>

            
        </div>
    )
}


// Logo right side 
// middle links 
// Signup btn