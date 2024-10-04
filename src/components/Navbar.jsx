const Navbar = () => {
    return <nav >
        <ul className="nav-bar">
            <li><a href="#">Home</a></li>
            <li> <select name="Dropdown" id="Dropdwon">
                <option value="Dropdown">Dropdown</option>
                <option value="Menu-2">Menu-2</option>
                <option value="Menu-3">Menu-3</option>
            </select></li>
            <li> <a href="#">Our Staff</a></li>
            <li> <a href="#">News</a></li>
            <li> <a href="#">Gallery</a></li>
            <li> <a href="#">About</a></li>
            <li> <a href="#">Contact</a></li>

            <button>ENROLL NOW</button>
        </ul>
    </nav>
};

export default Navbar;



