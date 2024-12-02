import React from 'react'
import Button from './components/Button'
import Sidebar from './components/Sidebar'
function Dashboard() {
  return (
      <div>
        {/* Preloader */}
        <div className="preloader" style={{display: 'none'}}>
  
         
          <img src="/assets_inside/img/logo/loader.png" alt="loader" className="lds-ripple img-fluid" />
        </div>
        {/* Body Wrapper */}
        <div className="page-wrapper mini-sidebar" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="mini-sidebar" data-sidebar-position="fixed" data-header-position="fixed">
          {/* Sidebar Start */}


          <Sidebar/>
           {/* Sidebar End */}
          {/* Main wrapper */}
          <div className="body-wrapper">
            {/* Header Start */}
            <header className="app-header">
              <nav className="navbar navbar-expand-lg navbar-dark">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link sidebartoggler nav-icon-hover ms-n3" id="headerCollapse" href="javascript:void(0)">
                      <i className="ti ti-menu-2" />
                    </a>
                  </li>
                </ul>
           
                <div className="d-block d-lg-none">
                  <img src="/assets_inside/img/logo/light-logo.png" style={{height: '30px'}} alt="" />
                </div>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="p-2">
                    <i className="ti ti-dots fs-7" />
                  </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <div className="d-flex align-items-center justify-content-between">
                  <Button/>
                  </div>
                </div>
              </nav>
            </header>
            {/* Header End */}
            <div className="dashboard py-100 section-bg">
              <div className="container">
                <div className="row">
                  <div className="dashboard-body">
                    <div className="container-fluid" style={{marginTop: '6rem'}}>
                      <div className="row">
                        <div className="col-lg-8 d-flex align-items-stretch">
                          <div className="card w-100 bg-light-info overflow-hidden shadow-none">
                            <div className="card-body position-relative">
                              <div className="row">
                                <div className="col-sm-7">
                                  <div className="d-flex align-items-center mb-7">
                                    <div className="rounded-circle overflow-hidden me-6">
                                      <img src="https://accounts.ai-trading.klptchain.com/assets2/avatar.jpeg" className="rounded-circle" width={40} height={40} alt="Default Avatar" />
                                    </div>
                                    <h5 className="fw-semibold mb-0 fs-5">
                                      Welcome back Involute!
                                    </h5>
                                  </div>
                                  <div className="d-flex align-items-center">
                                    <div className="border-end pe-4 border-muted border-opacity-10">
                                      <h3 className="mb-1 fw-semibold fs-7 d-flex align-content-center">
                                        $0.00 USD
                                        <i className="ti ti-arrow-up-right fs-5 lh-base text-success" />
                                      </h3>
                                      <p className="mb-0 text-dark">Balance</p>
                                    </div>
                                    {/*<div class="ps-4">*/}
                                    {/*  <h3*/}
                                    {/*    class="mb-1 fw-semibold fs-7 d-flex align-content-center"*/}
                                    {/*  >*/}
                                    {/*    0%</<i*/}
                                    {/*      class="ti ti-arrow-up-right fs-5 lh-base text-success"*/}
                                    {/*    ></i>*/}
                                    {/*  </h3>*/}
                                    {/*  <p class="mb-0 text-dark">ROI</p>*/}
                                    {/*</div>*/}
                                  </div>
                                </div>
                                <div className="col-sm-5">
                                  <div className="welcome-bg-img mb-n7 text-end">
                                    <img src="../assets_inside/img/backgrounds/welcome-bg.svg" alt="" className="img-fluid" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 d-flex align-items-stretch">
                          <div className="card w-100">
                            <div className="card-body p-4">
                              <h4 className="fw-semibold">$0.00</h4>
                              <p className="mb-2 fs-3">Deposit</p>
                           
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-2 d-flex align-items-stretch">
                          <div className="card w-100">
                            <div className="card-body p-4">
                              <h4 className="fw-semibold">$0.00</h4>
                              <p className="mb-1 fs-3">Active Trades</p>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-lg-3 d-flex align-items-stretch">
                          <div className="card w-100 position-relative overflow-hidden">
                            <div className="card-body p-4">
                              <div className="mb-7 pb-8">
                                <h4 className="mb-0 fw-semibold text-success">$0.00</h4>
                                <p className="mb-0">Trades Earnings</p>
                              </div>
                              <div id="widgest-chart-4" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 d-flex align-items-stretch">
                          <div className="card w-100 position-relative overflow-hidden">
                            <div className="card-body p-4">
                              <div className="d-flex align-items-end justify-content-between mb-3">
                                <div>
                                  <h4 className="mb-0 fw-semibold text-success">$0.00 USD</h4>
                                  <p className="mb-0">Affiliate Earnings History</p>
                                </div>
                                <span className="text-danger fw-normal" />
                              </div>
                              <div id="widgest-chart-2" />
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 d-flex align-items-stretch">
                          <div className="card w-100 position-relative overflow-hidden">
                            <div className="card-body">
                              <div className="d-flex align-items-end justify-content-between">
                                <div>
                                  <h4 className="mb-0 fw-semibold">$0.00</h4>
                                  <p className="mb-0">Affiliate Team Deposit</p>
                                </div>
                                <span className="text-success fw-normal" />
                              </div>
                            </div>
                            <div id="widgest-chart-1" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 d-flex align-items-stretch">
                          <div className="card w-100 position-relative overflow-hidden">
                            <div className="card-body">
                              <div className="d-flex align-items-end justify-content-between">
                                <div>
                                  <h4 className="mb-0 fw-semibold text-danger">$0.00</h4>
                                  <p className="mb-0">Withdraw</p>
                                </div>
                                <span className="text-success fw-normal" />
                              </div>
                            </div>
                            <div id="widgest-chart-3" />
                          </div>
                        </div>
                      </div>
                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<footer class="footer bg_img" data-background="assets/images/bg/bg-7.jpg">
      <div class="footer__top">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12 text-center">
              <a href="#0" class="footer-logo"><img src="assets/images/logo.png" alt="image"></a>
              <ul class="footer-short-menu d-flex flex-wrap justify-content-center mt-4">
                <li><a href="/">Home</a></li>
                <li><a href="privacy">Privacy Policy</a></li>
                <li><a href="terms">Terms and Conditions</a></li>
                 <li><a href="assets/erskine%20comp%20(1).pdf" target="_blank">Whitepaper</a></li>
                  <li><a href="assets/Ersikine-Audited-Financial-Statements-2021.pdf" target="_blank">Financial Statement</a></li>
                     <li><a href="https://find-and-update.company-information.service.gov.uk/company/14177611/filing-history" target="_blank">Company ID: 14177611</a></li>
                   <li><a href="https://find-and-update.company-information.service.gov.uk/company/14177611/filing-history" target="_blank">Good Standing Cert</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-md-left text-center">
              <p>© 2024 <a href="/" class="base--color">Erskine group</a>. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>*/}
        <link href="https://accounts.ai-trading.klptchain.com/assets/global/css/iziToast.min.css" rel="stylesheet" />
        {/* Import Js Files */}
        {/* core files */}
        {/* Counter Up */}
        {/*  */}
        {/*end::Javascript*/}
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.css" />
        {/* current page js files */}
     
        <link href="https://accounts.ai-trading.klptchain.com/assets/global/css/iziToast.min.css" rel="stylesheet" />
       
      </div>
  )
}

export default Dashboard
