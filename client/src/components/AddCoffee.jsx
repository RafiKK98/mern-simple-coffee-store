import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Swal from "sweetalert2";
import addCoffeeBg from "/images/more/11.png";


const AddCoffee = () => {

    const navigate = useNavigate();

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo }

        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/');
                }
            })
    }


    return (
        <div style={{backgroundImage: `url(${addCoffeeBg})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="mb-28">
            <div className="max-w-[1320px] mx-auto py-12">
                <Link to="/" className="flex gap-4 items-center">
                    <AiOutlineArrowLeft className="font-rancho text-3xl text-[#331A15]" />
                    <h2 className="font-rancho text-3xl text-[#374151]">Back to home</h2>
                </Link>
            </div>
            <div className="max-w-[1320px] mx-auto bg-[#F4F3F0] p-24">
                <h2 className="font-rancho text-[45px] text-[#374151] text-center mb-8">Add new Coffee</h2>
                <p className="max-w-4xl mx-auto text-center text-lg mb-8">
                    It is a long established fact that a reader will be distracted by 
                    the readable content of a page when looking at its layout. The 
                    point of using Lorem Ipsum is that it has a more-or-less normal 
                    distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleAddCoffee}>
                    {/* form name and chef row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Enter coffee Name" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="chef" placeholder="Enter chef name" className="input w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier and taste row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="taste" placeholder="Enter coffee taste" className="input w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Enter coffee category" className="input w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Enter coffee details" className="input w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Enter photo URL" className="input w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Coffee" className="btn-block py-3 font-rancho text-[#331A15] text-2xl bg-[#E3B577] border-2 rounded-[5px] border-[#331A15] hover:brightness-75 hover:cursor-pointer" />
                </form>
            </div>
        </div>
    );
}

export default AddCoffee;