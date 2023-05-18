import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navigation.scss";

import PayarcLogo from "../../assets/svg/payarc-logo.svg";
import Icon from "../../Components/Icon/Icon";
import Card from "../Card/Card";

const Navigation = (props) => {
  const [isNotActive, setNotActive] = useState("true");

  return (
    <Card className="sidebar">
      <div className="sidebar-header">

        <button
          type="button"
          onClick={() => setNotActive(!isNotActive)}
          className={`btn p-0 ${isNotActive ? "" : "d-none"}`}
        >
          <img src={PayarcLogo} width={41} height={41} alt="Payarc" />
        </button>

        <Link to="/" className={`btn p-0 ${!isNotActive ? "" : "d-none"}`}>
          <img src={PayarcLogo} width={41} height={41} alt="Payarc" />
        </Link>

        <button
          type="button"
          id="sidebarCollapse"
          onClick={() => setNotActive(!isNotActive)}
          className={`btn ${!isNotActive ? "" : "d-none"}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <nav
        id="sidebarMenu"
        className={`sidebar ${isNotActive ? "active" : ""}`}
      >
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link to="/">
              <Icon width="16" height="16" name="dashboard" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              <Icon width="16" height="16" name="my-payarc" />
              <span>My Payarc</span>
            </Link>
            <div className="collapse" id="home-collapse" style={{}}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <Link to="/">
                    <span>Overview</span>
                  </Link>
                </li>
                <li>
                  <Link
                    data-bs-toggle="collapse"
                    data-bs-target="#apply-app-collapse"
                    aria-expanded="true"
                  >
                    <span>Apply App</span>
                  </Link>
                  <div className="collapse" id="apply-app-collapse" style={{}}>
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                      <li>
                        <Link
                          to="/"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          <span>Applications</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          <span>Pricing Templates</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          <span>Reports</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          <span>User Maintenance</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                          <span>Settings</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    <span>My Residuals</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    <span>My Merchants</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    <span>Resources</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/">
              <Icon width="16" height="16" name="about" />
              <span>About Payarc</span>
            </Link>
          </li>
          <NavLink to="/training">
            <Icon width="16" height="16" name="training" />
            <span>Payarc Training</span>
          </NavLink>
          <li className="nav-item">
            <Link to="/">
              <Icon width="16" height="16" name="industry-training" />
              <span>Industry Training</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <Icon width="16" height="16" name="materials" />
              <span>Marketing Materials</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <Icon width="16" height="16" name="request-form" />
              <span>Marketing Request Forms</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <Icon width="16" height="16" name="tools" />
              <span>Access to tools</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default Navigation;

function NavLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
