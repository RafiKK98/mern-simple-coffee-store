import bg3 from "/images/more/3.png"


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-no-repeat" style={{backgroundImage: `url(${bg3})`}}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="font-rancho mb-4 text-6xl text-white">Would you like a Cup of Delicious Coffee?</h1>
                    <p className="mb-8 text-base text-">
                        It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <div className="bg-[#E3B577] font-rancho text-2xl text-[#242222] w-fit mx-auto hover:brightness-75">
                        <button className="py-4 px-6">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner