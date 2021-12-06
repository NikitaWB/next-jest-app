import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "./Search";
import HeaderOffer from "./HeaderOffer";

const Layout = ({ children }: any) => {
    return (
        <div>
            <Navbar />
            <Search />
            <HeaderOffer/>
            { children }
            <Footer />
        </div>
    )
};

export default Layout;