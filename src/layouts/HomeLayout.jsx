
import { Outlet } from "react-router-dom";
import Header from "../compoents/Header";
import LatestNews from "../compoents/LatestNews";
import LeftNavBar from "../compoents/layout-components/LeftNavBar";
import Main from "../compoents/layout-components/Main";
import RightNavBar from "../compoents/layout-components/RightNavBar";
import Navbar from "../compoents/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
            </header>

            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>

            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>

            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-4">
                <aside className="col-span-3">
                    <LeftNavBar></LeftNavBar>
                </aside>
                <section className="col-span-6">
                    <Main>
                        <Outlet></Outlet>
                    </Main>
                </section>
                <aside className="col-span-3">
                    <RightNavBar></RightNavBar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;