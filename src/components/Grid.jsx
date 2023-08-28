import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapsules } from "../redux/slice/capsuleSlice";
import { Audio } from "react-loader-spinner";

const GridPattern = () => {
  const [currentPage, setCurrentPage] = useState(1);
  

  const capsules = useSelector((state) => state.capsule);

  const capsuleData = capsules.capsules;

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchCapsules());
  },[]);


  if (capsules.isLoading === true || capsuleData === null || capsuleData.length===0) {
    if(capsuleData.length===0){
    return(  <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 grid h-1/2 place-items-center" role="alert">
  <p class="font-bold">Something went wrong</p>
  <p>invalid search.</p>
</div>)
    }
    return (
      <div className="grid h-1/2 place-items-center">
        <Audio type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  const recordPerPage = 6;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = capsuleData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(capsuleData.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const changeCPage = (n) => {
    setCurrentPage(n);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
    <div className="flex flex-col justify-between h-screen">

      <div className="grid lg:grid-cols-3 gap-4  md:grid-cols-2 max-sm:grid-rows-1 bg-yellow-100 p-8">
        {records.map((capsule, index) => {
          const { capsule_id, status, original_launch, type, details } =
            capsule;
          return (
            <div
              className="drop-shadow-md border-1 bg-green-300 p-4"
              key={index}
            >
              <h2 className="">id: {capsule_id}</h2>
              <p className="">status: {status}</p>
              <p className="">original launch: {original_launch}</p>
              <p className="">type: {type}</p>
              <p className="">Details: {details}</p>
            </div>
          );
        })}
      </div>

      <nav className="bg-grey-700 w-full text-center">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={prevPage}
            >
              Previous
            </a>
          </li>
          {numbers.map((n, i) => {
            return (
              <li key={i}>
                <a
                  href="#"
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage===n ? 'bg-gray-700' : ''}`}
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white h-full"
              onClick={nextPage}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
};

export default GridPattern;
