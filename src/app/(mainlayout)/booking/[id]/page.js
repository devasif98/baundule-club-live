import BookingPackage from '@/components/orderInfo/page';
import axios from 'axios';
import React from 'react';

const Booking = async ({ params }) => {
    const response = await axios.get(
        `https://baundule-club-server.vercel.app/packages/${params.id}`
    );
    return (
        <>
            <BookingPackage bookingData={response.data} />
        </>
    );
};

export default Booking;