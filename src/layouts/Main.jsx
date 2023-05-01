
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div style={{ height: '500px' }}>
                <Outlet />
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;