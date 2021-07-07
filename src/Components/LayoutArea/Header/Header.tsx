import Logo from "../Logo/Logo";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo/>
            <h1>Leo Messi</h1>
        </div>
    );
}

export default Header;
