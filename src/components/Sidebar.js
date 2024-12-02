import React from 'react'

function Sidebar() {
  return (
    <div>
          <aside className="left-sidebar">
            {/* Sidebar scroll*/}
            <div>
              <div className="brand-logo d-flex align-items-center justify-content-between">
                <a href="/user/dashboard/" className="text-nowrap logo-img">
                  <img src="/assets_inside/img/logo/light-logo.png" style={{height: '30px'}} alt="Metro Trade" />
                </a>
                <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                  <i className="ti ti-x fs-8" />
                </div>
              </div>
              {/* Sidebar navigation*/}
              <nav className="sidebar-nav scroll-sidebar" data-simplebar="init">
                <div className="simplebar-wrapper" style={{margin: '0px -24px'}}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer" />
                  </div>
                  <div className="simplebar-mask">
                    <div className="simplebar-offset" style={{right: '0px', bottom: '0px'}}>
                      <div className="simplebar-content-wrapper" tabIndex={0} role="region" aria-label="scrollable content" style={{height: '100%', overflow: 'hidden scroll'}}>
                        <div className="simplebar-content" style={{padding: '0px 24px'}}>
                          <ul id="sidebarnav">
                            {/* ============================= */}
                            {/* Home */}
                            {/* ============================= */}
                            <li className="nav-small-cap">
                              <i className="ti ti-dots nav-small-cap-icon fs-4" />
                              <span className="hide-menu">Home</span>
                            </li>
                            {/* =================== */}
                            {/* Dashboard */}
                            {/* =================== */}
                            <li className="sidebar-item active">
                              <a className="sidebar-link" href="/user/dashboard/" aria-expanded="false">
                                <span>
                                  <i className="ti ti-home-2" />
                                </span>
                                <span className="hide-menu">Dashboard</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/user/deposit" aria-expanded="false">
                                <span>
                                  <i className="ti ti-currency-dollar" />
                                </span>
                                <span className="hide-menu">My Plans</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/user/investment-pricing/" aria-expanded="false">
                                <span>
                                  <i className="ti ti-activity-heartbeat" />
                                </span>
                                <span className="hide-menu">Pricing</span>
                              </a>
                            </li>
                            {/*<li class="sidebar-item">*/}
                            {/*  <a*/}
                            {/*    class="sidebar-link"*/}
                            {/*    href="/user/invest/"*/}
                            {/*    aria-expanded="false"*/}
                            {/*  >*/}
                            {/*    <span>*/}
                            {/*      <i class="ti ti-file-text"></i>*/}
                            {/*    </span>*/}
                            {/*    <span class="hide-menu">Create Investment</span>*/}
                            {/*  </a>*/}
                            {/*</li>*/}
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/user/earnings/" aria-expanded="false">
                                <span>
                                  <i className="ti ti-shopping-cart" />
                            
                                </span>
                                <span className="hide-menu">Earnings</span>
                              </a>
                            </li>

                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/user/statistics/" aria-expanded="false">
                                <span>
                                 
                                  <i className="ti ti-layout" />
                                </span>
                                <span className="hide-menu">Statistics</span>
                              </a>
                            </li>
                     
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/user/referral/" aria-expanded="false">
                                <span>
                                  <i className="ti ti-users" />
                                </span>
                                <span className="hide-menu">Referral</span>
                              </a>
                            </li>
                            {/* ============================= */}
                            {/* Apps */}
                            {/* ============================= */}
                            <li className="nav-small-cap">
                              <i className="ti ti-dots nav-small-cap-icon fs-4" />
                              <span className="hide-menu">User</span>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/user/profile-setting/" aria-expanded="false">
                                <span>
                                  <i className="ti ti-user-circle" />
                                </span>
                                <span className="hide-menu">Profile</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/user/twofactor/" aria-expanded="false">
                                <span>
                                  <i className="ti ti-shield" />
                                </span>
                                <span className="hide-menu">Security</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/ticket/open" aria-expanded="false">
                                <span>
                                  <i className="ti ti-mail" />
                                </span>
                                <span className="hide-menu">Support</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="/user/logout/" aria-expanded="false">
                                <span>
                                  <i className="ti ti-logout" />
                                </span>
                                <span className="hide-menu">Logout</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="simplebar-placeholder" style={{width: 'auto', height: '688px'}} />
                </div>
                <div className="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}>
                  <div className="simplebar-scrollbar" style={{width: '0px', display: 'none'}} />
                </div>
                <div className="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}>
                  <div className="simplebar-scrollbar" style={{height: '323px', transform: 'translate3d(0px, 0px, 0px)', display: 'block'}} />
                </div>
              </nav>
              {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
          </aside> 
    </div>
  )
}

export default Sidebar
