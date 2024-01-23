"use client";

import React, { Suspense, useEffect, useState } from 'react';
import Select from '../elements/Select';
import { useSearchParams } from 'next/navigation';
import { catValue } from './types';
import { getBreedLists, searchHandler } from '@/app/utilities/helper';
import CatCard from './CatCard';

const SearchList = () => {
  // State to hold form data
  const [breedList, setBreedList] = useState(null); // Initialize with null
  const [selectedBreed, setSelectedBreed] = useState('');
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<catValue[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const searchParams = useSearchParams();
 
  const breedParams = searchParams.get('breed');

  // Fetch data based on breed parameter when it changes
  useEffect(() => {
    if (breedParams) {
      const fetchData = async () => {
        setSelectedBreed(breedParams);
        const newResult = await searchHandler(breedParams, result, 1);
        setResult(newResult);
      };
      fetchData();
    }
  }, [breedParams]);

  // Fetch breed list on initial component mount
  useEffect(() => {
    const fetchData = async () => {
      await getBreedLists().then(data => setBreedList(data));
    };
    fetchData();
  }, []);

  // Function to load more data on button click
  const loadMoreData = async () => {
    // Fetch new data based on the current page
    const newResult = await searchHandler(selectedBreed, result, page + 1);

    // Update the state by appending the new data to the existing array
    if (newResult.length > 0) {
      setResult((prevResult) => [...prevResult, ...newResult]);

      // Increment the page number for the next load more action
      setPage((prevPage) => prevPage + 1);
    } else {
      // If there is no new data, disable the load more button
      setIsLoadMore(false);
    }
  };

  // Function to handle breed selection change
  const onChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newResult = []
    if (e.target.value) {
      newResult = await searchHandler(e.target.value, result, 1);
    }
    setResult(newResult);
    setSelectedBreed(e.target.value);
    setPage(1);
    setIsLoadMore(true);
  };

  return (
    <div>
      {breedList && <Select
        onChange={onChange}
        label="Breed"
        altLabel=""
        defaultValue={selectedBreed}
        options={breedList} />
      }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {result && result.map((item, index) => (
          <div key={index}>
            <CatCard url={item.url} id={item.id} />
          </div>
        ))}
      </div>
      { result.length === 0 && <div className="p-8 text-center">
        <div>No cats available</div>
      </div> }
      {result.length > 0 && isLoadMore && <div className="p-8 text-center">
        <button onClick={loadMoreData} className="btn btn-primary mb-8 w-52">Load more</button>
      </div>}
    </div>
  );
};

export default SearchList;