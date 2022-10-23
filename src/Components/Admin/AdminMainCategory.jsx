import React from 'react'
import pic from '../../assets/images/Glass.jpeg'
import LeftNav from './LeftNav'

export default function AdminMainCategory() {
  return (
    <div className='container-fluid mt-2' >
        <div className='row'>
            <div className=' col-lg-2 col-md-4 col-sm-6 col-12'>
                <LeftNav/>
            </div>
            <div className=' col-lg-10 col-md-8 col-sm-6 col-12'>
                <h5 className='background text-light text-center p-1 '>MainCategory Section</h5>
            </div>
        </div>
    </div>
  )
}
