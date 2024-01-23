import React from 'react'
import { useRouter } from 'next/navigation';
import { catValue } from './types';
import Link from "next/link";

const CatCard = ({ url, id }: catValue) => {
  const router = useRouter();

  return (
    <div>
      <div className="card shadow-xl">
        <figure><img src={url} alt="cat!" /></figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <Link
              href={`/pages/${id}`}
              className="btn btn-primary btn-block"
            >View details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatCard