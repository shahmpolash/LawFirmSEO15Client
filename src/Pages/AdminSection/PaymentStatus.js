import React, { useEffect, useState } from 'react';
import './Admin.css';
import { Link, useParams } from 'react-router-dom';
import AdminMenu from '../../components/AdminMenu';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const PaymentStatus = () => {
    const [order, setOrder] = useState([]);
    const { id } = useParams();



    useEffect(() => {
        fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/order/${id}`)
            .then((res) => res.json())
            .then((info) => setOrder(info));
    }, []);

 

    const handleOrderStatus = (event) => {
        event.preventDefault();

        const orderStatus = event.target.orderStatus.value;



        const orderSec = {

            orderStatus,
        };

        const url = `https://legelserviceseo15-4512b38069b4.herokuapp.com/order-status/${order._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderSec),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('OrderStatus is Updated');
            });
    };

    return (
        <>
            <HeaderBottom></HeaderBottom>
            <div className='container'>
    <section id="services" class="services-area pt-120 pb-90 fix mb-5 mt-5">
        <div class="container">
            <div class="row"></div>
            <div class="row justify-content-center">

                <div className='text-center'> {/* Center-align the content */}
                    <h2>Welcome to Admin Panel</h2>
                    <AdminMenu></AdminMenu>


                    <h2 className='mt-5'>Update Order Status</h2>

                    <form onSubmit={handleOrderStatus} className="text-center"> {/* Center-align the form */}
                        <div class="col-lg-6 mx-auto"> {/* Center-align the select dropdown */}
                            <div class="contact-field p-relative c-name mb-20">
                                <select className='form-control' name="orderStatus" id="cars">
                                    <option value="Pending">Pending</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </div>
                        </div>
                        <div class="slider-btn">
                            <button class="btn btn-primary mb-5 mt-2" data-animation="fadeInRight" data-delay=".8s"> Update Order </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    </section>
</div>
</>
    );
};

export default PaymentStatus;