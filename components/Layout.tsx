import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Search />
            { children }
            <Footer />
        </div>
    )
};

export default Layout;