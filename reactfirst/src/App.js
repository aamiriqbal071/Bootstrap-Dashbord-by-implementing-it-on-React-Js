import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light p-3">
        <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
          <a className="navbar-brand" href="#">
            Admin Dashboard
          </a>
          <button
            className="navbar-toggler d-md-none collapsed mb-3"
            type="button"
            data-toggle="collapse"
            data-target="#sidebar"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="col-12 col-md-4 col-lg-2">
          <input
            className="form-control form-control-dark"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Aamir Iqbal
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Messages
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className="ml-2">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-file"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    <span className="ml-2">Orders</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="ml-2">Products</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-users"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span className="ml-2">Customers</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bar-chart-2"
                    >
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    <span className="ml-2">Reports</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">

            <h1 className="h2">Mobile Distributer</h1>
         
            <div className="row my-4">
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                <div className="card">
                  <h5 className="card-header">Customers</h5>
                  <div className="card-body">
                    <h5 className="card-title">345</h5>
                    <p className="card-text">Feb 1 - Apr 1, India</p>
                    <p className="card-text text-success">18.2% increase since last month</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                <div className="card">
                  <h5 className="card-header">Revenue</h5>
                  <div className="card-body">
                    <h5 className="card-title">Rs 2.4L</h5>
                    <p className="card-text">Feb 1 - Apr 1, India </p>
                    <p className="card-text text-success">4.6% increase since last month</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                <div className="card">
                  <h5 className="card-header">Purchases</h5>
                  <div className="card-body">
                    <h5 className="card-title">43</h5>
                    <p className="card-text">Feb 1 - Apr 1, India</p>
                    <p className="card-text text-danger">2.6% decrease since last month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-xl-8 mb-4 mb-lg-0">
                <div className="card">
                  <h5 className="card-header">Latest transactions</h5>
                  <div className="card-body">
                    <div className="table-responsive ">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Order</th>
                            <th scope="col">Product</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Total</th>
                            <th scope="col">Date</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Redmi Note 11 Pro+</td>
                            <td>aamir@gmail.com</td>
                            <td>Rs 20,000</td>
                            <td>Aug 31 2021</td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>Samsung S22</td>
                            <td>tariq@company.com</td>
                            <td>Rs 32,871</td>
                            <td>Sept 28 2021</td>
                          </tr>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Iphone 15</td>
                            <td>mahendra@gmail.com</td>
                            <td>Rs 89,428</td>
                            <td>Oct 31 2021</td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>1+ 10R</td>
                            <td>amit@company.com</td>
                            <td>Rs 65,428</td>
                            <td>Dec 28 2021</td>
                          </tr>
                          <tr>
                            <th scope="row">17371705</th>
                            <td>Vivo 10+</td>
                            <td>shiraz@gmail.com</td>
                            <td>Rs 98,541</td>
                            <td>Nov 31 2021</td>
                          </tr>
                          <tr>
                            <th scope="row">17370540</th>
                            <td>Oppo NR</td>
                            <td>shahid@company.com</td>
                            <td>Rs 12,485 </td>
                            <td>Nov 28 2,021</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a href="#" className="btn btn-block btn-light">View all</a>
                  </div>
                </div>
              </div>
              <footer className="pt-5 d-flex justify-content-between">
                <span ><a class="nav-link text-secondary"> Aamir's Company </a></span>
                <ul className="nav m-0">
                  <li className="nav-item">
                    <a className="nav-link text-secondary" aria-current="page" href="#">Privacy Policy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">Terms and conditions</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">Contact</a>
                  </li>
                </ul>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

