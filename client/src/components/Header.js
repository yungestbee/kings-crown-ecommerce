import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div
            className="row justify-content-center align-items-center g-2"
          >
            <div className="col-6"><p className='text-white mb-0'>Free shipping over $100 & Free Returns</p></div>
            <div className="col-6"><p className='text-end text-white'>Hotline: <a className='text-white' href='tel:+2349053644527'>(234) 9053 6445 27</a></p></div>
          </div>
          
        </div>
        
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2><Link className='text-white'>King's Crown</Link></h2>
            </div>
            <div className="col-5">
              <div class="input-group mb-3">
  <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-5'/></span>
</div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
