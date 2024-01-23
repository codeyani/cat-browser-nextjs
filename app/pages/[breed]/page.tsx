"use client";

import React, { useEffect, useState } from 'react';
import { TCatDetailsProps, TDetails } from './types';
import Link from "next/link";
import { getBreedDetails } from '@/app/utilities/helper';

const CatDetails = ({ params }: TCatDetailsProps) => {
  // State to hold cat details data
  const [result, setResult] = useState<TDetails | null>(null);

  // Fetch cat details data when the component mounts or when breed parameter changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getBreedDetails(params.breed).then(data => setResult(data));
      } catch (error) {
        console.error('Error fetching cat details:', error);
        throw error;
      }
    };
    fetchData();
  }, [params.breed]);

  return (
    <div>
      <div className="container mx-auto">
        {result && (
          <div className="card bg-base-100 shadow-xl my-8">
            <div className="card-body">
              <div className="card-actions">
                {/* Link to navigate back to the main search page */}
                <Link
                  href={`/?breed=${result.breeds[0].id}`}
                  className="btn btn-primary"
                >
                  Back
                </Link>
              </div>
            </div>
            <figure><img src={result.url} alt="Cat" /></figure>
            <div className="card-body">
              {/* Cat details */}
              <h2 className="card-title">{result.breeds[0].name}</h2>
              <p><strong>Origin:</strong> {result.breeds[0].origin}</p>
              <p><strong>Temperament:</strong> {result.breeds[0].temperament}</p>
              <p>{result.breeds[0].description}</p>
            </div>
          </div>
        )}
        {!result && (
          <div className="card bg-base-100 shadow-xl my-8">
            <div className="card-body">
              <div className="card-actions">
                {/* Link to navigate back to the main search page */}
                <Link
                  href="/"
                  className="btn btn-primary"
                >
                  Back
                </Link>
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title">No Cat details found.</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatDetails;