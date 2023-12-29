import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Gallery from '../components/HomeComps/Photo-gallery/Gallery'
import Profile from '../components/Profile/Profile'

import './Doctors.css'


const doctors = () => {
  return (
    <>
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text header-text">
                <h6>Over 36,500+ Active Listings</h6>
                <h2>Find Nearby Places &amp; Things</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <form id="search-form" name="gs" method="submit" role="search" action="#">
                <div className="row align-items-start">
                  <div className="col align-self-center">
                      <fieldset>
                          <input type="address" name="address" className="searchText" placeholder="Enter a location" autocomplete="on" required />
                      </fieldset>
                  </div>
                  <div className="col align-self-center">
                      <fieldset>
                          <select name="price" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                              <option selected>Select Category</option>
                              <option value="$100 - $250">$100 - $250</option>
                              <option value="$250 - $500">$250 - $500</option>
                              <option value="$500 - $1000">$500 - $1,000</option>
                              <option value="$1000+">$1,000 or more</option>
                          </select>
                      </fieldset>
                  </div>
                  <div className="col">                        
                      <fieldset>
                          <button className="main-button"><i className="fa fa-search"></i> Search Now</button>
                      </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <ul className="categories">
                <li><a href="category.html"><span className="icon"><img src="assets/images/search-icon-01.png" alt="Home" /></span> Apartments</a></li>
                <li><a href="listing.html"><span className="icon"><img src="assets/images/search-icon-02.png" alt="Food" /></span> Food &amp; Life</a></li>
                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-03.png" alt="Vehicle" /></span> Cars</a></li>
                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-04.png" alt="Shopping" /></span> Shopping</a></li>
                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-05.png" alt="Travel" /></span> Traveling</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <Container fluid="md" style={{marginTop:"3rem", color:"#8bb4bd"}}>
        <h1>Health, a click away!</h1>
        <p>Search for doctors by specialty, hospital, service or disease</p>
      </Container>

      <Gallery />
    </>
  )
}

export default doctors