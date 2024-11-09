function Footer() {

    return (

    <footer className ="page-footer blue-grey lighten-4">
        <div className ="footer-copyright">
        <div className ="container">
            © 2019 - {new Date().getFullYear()} Copyright 
            <a className ="grey-text text-lighten-4 right" href="#!">Repo</a>
        </div>
        </div>
    </footer>
    );
}

export default Footer;