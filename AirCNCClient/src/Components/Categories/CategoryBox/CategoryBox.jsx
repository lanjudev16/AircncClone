import React from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'
const CategoryBox = ({item}) => {
    const {icon:Icon,label} = item;
    const [params,setParams]=useSearchParams()
    const navigate=useNavigate()
    const handleCLick=()=>{
        let currentQuery={}
        if(params){
            currentQuery=qs.parse(params.toString())
        }
        const updateQuery={
            ...currentQuery,category:label
        }
        const url=qs.stringifyUrl(
            {
                url:"/",
                query:updateQuery
            },
            {
                skipNull:true
            }

        )
        navigate(url)
    }
    return (
        <div onClick={handleCLick} className='flex flex-col justify-center gap-2 items-center p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>
            <Icon size={32}></Icon>
            <span className='text-sm'>{label}</span>
        </div>
    );
};

export default CategoryBox;