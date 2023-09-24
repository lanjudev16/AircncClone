import React from 'react';

const CategoryBox = ({item}) => {
    const {icon:Icon,label} = item;
    return (
        <div className='flex flex-col justify-center gap-2 items-center p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>
            <Icon size={32}></Icon>
            <span className='text-sm'>{label}</span>
        </div>
    );
};

export default CategoryBox;