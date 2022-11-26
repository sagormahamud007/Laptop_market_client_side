import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/ContextProvider';


const BookingModal = ({ modalInfo, setModalInfo }) => {
    const { user } = useContext(AuthContext)
    const { product_name, product_price, brand_name } = modalInfo;

    const handleBooking = (event) => {
        event.preventDefault();
        setModalInfo(null)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const product_name = form.product_name.value;
        const product_price = form.product_price.value;
        const location = form.location.value;

        const productBooking = {
            product_name,
            product_price,
            location,
            name,
            email,
            phone,
            brand_name
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${product_name} is booked`)
                }

            })
    }

    return (
        <>
            <input type="checkbox" id="productModalOpen" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="productModalOpen"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold text-center">Confirm Booking </h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 mt-10"
                    >
                        <input
                            name="product_name"
                            defaultValue={product_name}
                            type="text"
                            disabled
                            className="input w-full input-bordered"
                        />
                        <input
                            name="product_price"
                            defaultValue={product_price}
                            type="text"
                            disabled
                            className="input w-full input-bordered"
                        />
                        <input
                            name="name"
                            defaultValue={user?.displayName}
                            type="text"
                            disabled
                            className="input w-full input-bordered"
                        />
                        <input
                            name="email"
                            defaultValue={user?.email}
                            type="email"
                            disabled
                            className="input w-full input-bordered"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Your Phone "
                            className="input w-full input-bordered"
                            required
                        />
                        <input
                            name="location"
                            type="text"
                            placeholder="Location ?"
                            className="input w-full input-bordered"
                            required
                        />
                        <br />
                        <input
                            className="btn btn-accent w-full"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;