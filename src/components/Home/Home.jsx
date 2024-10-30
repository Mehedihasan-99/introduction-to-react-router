import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className=" text-center space-x-4 bg-blue-100">
            <Header></Header>
            <h2 className="text-3xl font-bold">This is Home components</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;