
import React, { useEffect, useState } from 'react';

const GridPattern = () => {

    const [capsuleData,setCapsuleData] = useState([])
    const [currentPage,setCurrentPage] = useState(1)

    
    const fetchData = async() => {
        const res = await fetch('https://api.spacexdata.com/v3/capsules')
        const data = await res.json()
        console.log(data) 
        setCapsuleData(data)
    }
    useEffect( () => {fetchData()},[])
    
    const recordPerPage=6
    const lastIndex = currentPage*recordPerPage
    const firstIndex = lastIndex-recordPerPage
    const records = capsuleData.slice(firstIndex,lastIndex)
    const npage = Math.ceil(capsuleData.length/recordPerPage)
    const numbers = [...Array(npage+1).keys()].slice(1)

    const changeCPage = (n)=>{
        setCurrentPage(n)
    }

    const prevPage = ()=>{
      if(currentPage!==1){
        setCurrentPage(currentPage-1)
      }
    }

    const nextPage = ()=>{
      if(currentPage!==npage){
        setCurrentPage(currentPage+1)
      }
    }

  return (
    <>
    <div className="grid  lg:grid-cols-3 gap-4 mt-4 sm:grid-cols-1 md:grid-cols-2 h-screen bg-yellow-100 p-8">
        {records.map((capsule,index)=>{
            const {capsule_id,status,original_launch,type,details} = capsule
           return <div className="drop-shadow-md border-1 bg-green-300 p-4" key={index}>
                <h2>id: {capsule_id}</h2>
                <p>status: {status}</p>
                <p>original launch: {original_launch}</p>
                <p>type: {type}</p>
                <p>Details: {details}</p>
            </div>
        })}
    </div>

      <nav className='bg-grey-700 w-full text-center'>  
        <ul className='inline-flex -space-x-px text-sm'>
        <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={prevPage}>Previous</a>
    </li>
            {numbers.map((n,i)=>{
                return(
                <li key={i}>
                 <a 
                 href="#" 
                 class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" 
                 onClick={()=>changeCPage(n)}>
                    {n}
                    </a>
                </li>
                )
            })}
            <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white h-full" onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>


    </>
  );
};

export default GridPattern;
