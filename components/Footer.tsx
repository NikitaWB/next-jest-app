import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <Link href="/kopvillkor">
            <a className="kopvilkor">
                <p>Öppet köp</p>
                <p>Fri frakt</p>
                <p>Mer som medlem</p>
            </a>
            </Link>
            <p>Massa länkknappar till sidor som hjälp och info</p>
            <p>Copyright 2021 Nikitas Åhléns</p>
        </footer>
    )
};

export default Footer;