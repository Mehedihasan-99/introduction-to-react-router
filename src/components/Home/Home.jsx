import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();

    return (
        <div className=" text-center bg-blue-100">
            <Header></Header>
            <h2 className="text-3xl font-bold">This is Home components</h2>
            {
                navigation.state === "loading" ? <p className="text-blue-500 text-4xl font-bold bg-red-700 p-20">Loading .......</p> :  <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;