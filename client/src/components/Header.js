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
              <div class="input-group">
  <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-5'/></span>
</div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap10 text-white'>
                  <img src='images/compare.svg' alt='compare'/>
                  <p className='mb-0'>Compare <br/> Products</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap10 text-white'>
                  <img src='images/wishlist.svg' alt='wishlist'/>
                  <p className='mb-0'>Favourite <br/> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap10 text-white'>
                  <img src='images/user.svg' alt='user'/>
                  <p className='mb-0'>Log in <br/> My Account</p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap10 text-white'>
                    <img src='images/cart.svg' alt='cart' />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                    <p className='mb-0'>N 0.00</p>
                    </div>
                  <p></p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap30">
                <div>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src='images/menu.svg' alt='menu'/><span className='me-5 d-inline-block'>Shop Categories</span>
                      </button>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item text-white" to=''>Action</Link></li>
                        <li><Link className="dropdown-item text-white" to=''>Another action</Link></li>
                        <li><Link className="dropdown-item text-white" to=''>Something else here</Link></li>
                      </ul>
                    </div>
                </div>
                <div className='menu-links'>
                  <div className="d-flex align-items-center gap15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
