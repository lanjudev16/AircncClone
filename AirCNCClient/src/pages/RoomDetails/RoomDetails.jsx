import React from 'react';
import Container from '../../Components/Shared/Container';
import Headers from './Headers';
import RoomInfo from './RoomInfo';
import RoomReservation from './RoomReservation';

const RoomDetails = () => {
    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <Headers></Headers>
                    <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                        <img className='object-cover w-full' src="https://i.pinimg.com/originals/77/5f/72/775f728223029d20ad63a3a731552d74.jpg" alt="Hotel image" />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <RoomInfo></RoomInfo>
                        <div className='mb-5 md:col-span-3 order-first md:order-last'>
                            <RoomReservation></RoomReservation>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomDetails;