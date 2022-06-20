import Explorer from '../explorer/explorer.component';
import Menu from '../menu/menu.component';
import Sidebar from './../sidebar/sidebar.component';
import Footer from './../footer/footer.component';
import './layout.styles.scss'


const Layout = () => {
    return (
        <>
            <div className="layout">
                <Menu />
                <div className="main">
                    <Sidebar />
                    <Explorer />
                </div>
                <Footer/>
            </div>
        </>
    );
};


export default Layout
