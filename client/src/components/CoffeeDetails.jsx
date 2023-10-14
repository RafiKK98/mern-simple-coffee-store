import { Link, useLoaderData } from "react-router-dom"
import addCoffeeBg from "/images/more/11.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CoffeeDetails = () => {

    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div style={{backgroundImage: `url(${addCoffeeBg})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="mb-28">
            <div className="max-w-[1320px] mx-auto py-12">
                <Link to="/" className="flex gap-4 items-center">
                    <AiOutlineArrowLeft className="font-rancho text-3xl text-[#331A15]" />
                    <h2 className="font-rancho text-3xl text-[#374151]">Back to home</h2>
                </Link>
            </div>
            <div className="max-w-[1320px] mx-auto bg-[#F4F3F0] py-12 flex flex-col md:flex-row justify-evenly items-center">
                <figure>
                    <img src={photo} alt="" />
                </figure>
                <div>
                    <h2 className="font-rancho text-4xl text-[#331A15] mb-8">Niceties</h2>
                    <p className="text-[#1B1A1A] text-xl font-semibold">Name: <span className="text-[#5C5B5B] font-normal">{name}</span></p>
                    <p className="text-[#1B1A1A] text-xl font-semibold">Chef: <span className="text-[#5C5B5B] font-normal">{chef}</span></p>
                    <p className="text-[#1B1A1A] text-xl font-semibold">Supplier: <span className="text-[#5C5B5B] font-normal">{supplier}</span></p>
                    <p className="text-[#1B1A1A] text-xl font-semibold">Taste: <span className="text-[#5C5B5B] font-normal">{taste}</span></p>
                    <p className="text-[#1B1A1A] text-xl font-semibold">Category: <span className="text-[#5C5B5B] font-normal">{category}</span></p>
                    <p className="text-[#1B1A1A] text-xl font-semibold">Details: <span className="text-[#5C5B5B] font-normal">{details}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CoffeeDetails