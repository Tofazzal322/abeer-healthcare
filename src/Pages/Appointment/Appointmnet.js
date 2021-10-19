import React from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const {bookId}=useParams()
    return (
        <div>
            <h2>This is appointment page: { bookId}</h2>
        </div>
    );
};

export default Appointment;