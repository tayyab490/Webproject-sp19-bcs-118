import React from 'react'

import './Services.css'

const Services = () => {
  return (
    <>
      <section className="section services-section" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-title">
                        <h2>What I Do</h2>
                        <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p>
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-sm-6 col-lg-4">
                    <div className="feature-box-1">
                        <div className="icon">
                            <i className="fa fa-desktop"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Unique design</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="feature-box-1">
                        <div className="icon">
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Different Layout</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="feature-box-1">
                        <div className="icon">
                            <i className="fa fa-comment"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Make it Simple</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="feature-box-1">
                        <div className="icon">
                            <i className="fa fa-image"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Responsiveness</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="feature-box-1">
                        <div className="icon">
                            <i className="fa fa-th"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Testing for Perfection</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4">
                    <div className="feature-box-1">
                        <div className="icon">
                            <i className="fa fa-cog"></i>
                        </div>
                        <div className="feature-content">
                            <h5>Advanced Options</h5>
                            <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section>
    <div className="container">
        <div class="section-heading wow fadeIn">
            <h2>Our Workshop History</h2>
            <div className="heading-separator"></div>
        </div>
        <div className="row" >
            <div className="history-wrapper">
                <div className="title-wrap text-center one-of-two">
                    <h2 className="h1 text-secondary mb-0 text-uppercase">Bootdey.com</h2>
                    <p className="fs-3 font-weight-500">Bootstrap snippet</p>
                </div>
                <div className="timeline-box one-of-two">
                    <img className="mb-1-6 rounded" src="https://via.placeholder.com/280x280/87CEFA/000000" alt="..." />
                    <div className="content">
                        <h3 className="h4 mb-2 mb-md-3">Start with small space</h3>
                        <p className="mb-0">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum</p>
                    </div>
                    <div className="year">1995</div>
                </div>
                <div className="timeline-box one-of-two">
                    <img className="mb-1-6 rounded" src="https://via.placeholder.com/280x280/FF7F50/000000" alt="..." />
                    <div className="content">
                        <h3 className="h4 mb-2 mb-md-3">Increase employee by 6 members</h3>
                        <p className="mb-0">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum</p>
                    </div>
                    <div className="year">2003</div>
                </div>
                <div className="timeline-box one-of-two">
                    <img className="mb-1-6 rounded" src="https://via.placeholder.com/280x280/008B8B/000000" alt="..." />
                    <div className="content">
                        <h3 className="h4 mb-2 mb-md-3">We win the national awards</h3>
                        <p className="mb-0">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum</p>
                    </div>
                    <div className="year">2018</div>
                </div>
                <div className="timeline-box one-of-two">
                    <img className="mb-1-6 rounded" src="https://via.placeholder.com/280x280/00CED1/000000" alt="..." />
                    <div className="content">
                        <h3 className="h4 mb-2 mb-md-3">Branches open in International</h3>
                        <p className="mb-0">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum</p>
                    </div>
                    <div className="year">2021</div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Services