import icon1 from "/images/icons/1.png";
import icon2 from "/images/icons/2.png";
import icon3 from "/images/icons/3.png";
import icon4 from "/images/icons/4.png";


const Qualities = () => {
    return (
        <section className="bg-[#ECEAE3] py-14">
            <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-10">
                <div className="mb-5 md:mb-0 lg:mb-0">
                    <img src={icon1} className="mb-4" alt="" />
                    <h3 className="font-rancho text-4xl text-[#331A15] mb-2">Awesome Aroma</h3>
                    <p className="text-base text-[#1B1A1A]">
                        You will definitely be a fan of the design & aroma of your coffee
                    </p>
                </div>
                <div className="mb-5 md:mb-0 lg:mb-0">
                    <img src={icon2} className="mb-4" alt="" />
                    <h3 className="font-rancho text-4xl text-[#331A15] mb-2">High Quality</h3>
                    <p className="text-base text-[#1B1A1A]">
                        We served the coffee to you maintaining the best quality
                    </p>
                </div>
                <div className="mb-5 md:mb-0 lg:mb-0">
                    <img src={icon3} className="mb-4" alt="" />
                    <h3 className="font-rancho text-4xl text-[#331A15] mb-2">Pure Grades</h3>
                    <p className="text-base text-[#1B1A1A]">
                        The coffee is made of the green coffee beans which you will love
                    </p>
                </div>
                <div className="mb-5 md:mb-0 lg:mb-0">
                    <img src={icon4} className="mb-4" alt="" />
                    <h3 className="font-rancho text-4xl text-[#331A15] mb-2">Proper Roasting</h3>
                    <p className="text-base text-[#1B1A1A]">
                        Your coffee is brewed by first roasting the green coffee beans
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Qualities