import logo1 from "/images/more/logo1.png";
import bg15 from "/images/more/15.jpg";


const Navbar = () => {
    return (
        <div className="flex justify-center items-center gap-4 py-4" style={{backgroundImage: `url(${bg15})`, backgroundPosition: 'center'}}>
            <img src={logo1} className="h-[90px] w-[75px]" alt="" />
            <h2 className="font-rancho text-6xl text-white font-normal">Espresso Emporium</h2>
        </div>
    )
}

export default Navbar