import React from 'react'
import { useRouter } from 'next/navigation';
import { catValue } from './types';
import Link from "next/link";
import Image from 'next/image';

const CatCard = ({ url, id }: catValue) => {
  const router = useRouter();

  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <Image 
            src={url}
            alt="cat!"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto" />
        </figure>
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