import { Link } from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { AiOutlineArrowLeft } from "react-icons/ai";
import Error404 from "/images/404/404.gif";

const ErrorPage = () => {
    return (
        <main>
            <Navbar></Navbar>
            <div>
                <div className="max-w-[1320px] mx-auto py-6 text-center">
                    <Link to="/" className="flex gap-4 items-center">
                        <AiOutlineArrowLeft className="font-rancho text-3xl text-[#331A15]" />
                        <h2 className="font-rancho text-3xl text-[#374151]">Back to home</h2>
                    </Link>
                </div>
                <figure className="max-w-[1320px] mx-auto">
                    <img src={Error404} className="w-full h-full" alt="" />
                </figure>
            </div>
            <Footer></Footer>
        </main>
    )
}

export default ErrorPage