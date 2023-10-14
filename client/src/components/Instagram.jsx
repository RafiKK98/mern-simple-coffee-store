import cup1 from "/images/cups/Rectangle 9.png";
import cup2 from "/images/cups/Rectangle 10.png";
import cup3 from "/images/cups/Rectangle 11.png";
import cup4 from "/images/cups/Rectangle 12.png";
import cup5 from "/images/cups/Rectangle 13.png";
import cup6 from "/images/cups/Rectangle 14.png";
import cup7 from "/images/cups/Rectangle 15.png";
import cup8 from "/images/cups/Rectangle 16.png";


const Instagram = () => {
    return (
        <section className="max-w-[1320px] mx-auto mb-28">
            <div className="text-center">
                <p className="text-[#1B1A1A] text-xl mb-2">Follow Us Now</p>
                <h2 className="font-rancho text-[#331A15] text-6xl mb-12">Follow on Instagram</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                    <figure>
                        <img src={cup1} alt="" />
                    </figure>
                    <figure>
                        <img src={cup2} alt="" />
                    </figure>
                    <figure>
                        <img src={cup3} alt="" />
                    </figure>
                    <figure>
                        <img src={cup4} alt="" />
                    </figure>
                    <figure>
                        <img src={cup5} alt="" />
                    </figure>
                    <figure>
                        <img src={cup6} alt="" />
                    </figure>
                    <figure>
                        <img src={cup7} alt="" />
                    </figure>
                    <figure>
                        <img src={cup8} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Instagram