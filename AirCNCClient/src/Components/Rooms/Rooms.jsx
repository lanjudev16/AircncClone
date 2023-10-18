import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';

const Rooms = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    useEffect(() => {
        setLoading(true)
        fetch('../../../public/Rooms.json').then(res => res.json()).then(data => {
            if (category) {
                const filterData = data.filter(item => item.category == category)
                setData(filterData)
                setLoading(false)
            } else {
                setData(data)
                setLoading(false)
            }


        })
    }, [category])
    if (loading) {
        return <Loader />
    } else {
        return (
            <Container>
                {
                    data && data.length > 0 ? <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                        {
                            data.map((item, index) => <Card key={index} item={item} ></Card>)
                        }
                    </div> : <div className='pt-5'><><Heading title="No Rooms Available In Category" subtitle="Please select Other Category" center={true}></Heading></></div>
                }

            </Container>
        );
    }
};

export default Rooms;