import React from 'react'
import { TSelectProps } from './types'

const Select = ({
    label,
    altLabel,
    options,
    onChange,
    defaultValue
}: TSelectProps) => {
  return (
    <div>
      <label className="form-control w-full max-w-xs">
      <div className="label">
          { label && <span className="label-text">{ label }</span> }
          { altLabel && <span className="label-text-alt">{ altLabel }</span> }
      </div>
      <select className="select select-bordered" onChange={onChange} defaultValue={defaultValue}>
          <option value="">Select Breed</option>
          { options && options.map((option, index) => (
              <option value={option.id} key={index}>{option.name}</option>
          ))}
      </select>
      </label>
    </div>
  )
}

export default Select