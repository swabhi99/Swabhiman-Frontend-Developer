import React, { useState } from "react";

const SearchForm = () => {

  const [option,setOption] = useState('')

  const changeHandler = (e)=>{
    console.log(e.target.value)
    setOption(e.target.value)
  }

  return (
    <div className="flex justify-center items-center mt-4 max-sm:flex-col max-sm:gap-2">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        onChange={changeHandler}
        id="countries"
        class="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/8 mr-2 p-2.5"
      >
        <option selected>Search Filter</option>
        <option value="status">Status</option>
        <option value="ol">Original Launch</option>
        <option value="type">Type</option>
      </select>

      <input
        type="text"
        placeholder="Search capsules"
        className="border-2 border-gray-300 rounded-l px-4 py-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
        Search
      </button>
    </div>
  );
};

export default SearchForm;
