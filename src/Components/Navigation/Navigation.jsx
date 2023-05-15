import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navigation.scss";

import PayarcLogo from "../../assets/svg/payarc-logo.svg";
import AboutIcon from "../../assets/svg/icon-about.svg";
import DashboardIcon from "../../assets/svg/icon-dashboard.svg";
import IndustryIcon from "../../assets/svg/icon-industry-training.svg";
import MaterialsIcon from "../../assets/svg/icon-materials.svg";
import PayarcIcon from "../../assets/svg/icon-my-payarc.svg";
import FormIcon from "../../assets/svg/icon-request-form.svg";
import ToolsIcon from "../../assets/svg/icon-tools.svg";
import TrainingIcon from "../../assets/svg/icon-training.svg";
import Card from "../Card/Card";

const Navigation = (props) => {
  const [isNotActive, setNotActive] = useState("true");

  return (
    <Card className={`p-0`}>
      <nav
        id="sidebarMenu"
        className={`sidebar ${isNotActive ? "active" : ""}`}
      >
        <div className="pt-3 d-flex">
          <button
            type="button"
            onClick={() => setNotActive(!isNotActive)}
            className={`btn btn-custom ${isNotActive ? "" : "d-none"}`}
          >
            <img src={PayarcLogo} width={41} height={41} alt="Payarc" />
          </button>

          <Link
            to="/"
            className={`btn btn-custom ${!isNotActive ? "" : "d-none"}`}
          >
            <img src={PayarcLogo} width={41} height={41} alt="Payarc" />
          </Link>

          <button
            type="button"
            id="sidebarCollapse"
            onClick={() => setNotActive(!isNotActive)}
            className={`btn btn-custom ms-auto ${!isNotActive ? "" : "d-none"}`}
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

        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link to="/">
              <img src={DashboardIcon} alt="Dashboard" />
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
              <img src={PayarcIcon} alt="My Payarc" />
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
              <img src={AboutIcon} alt="About Payarc" />
              <span>About Payarc</span>
            </Link>
          </li>
          <NavLink to="/training">
            <img src={TrainingIcon} alt="Payarc Training" />
            <span>Payarc Training</span>
          </NavLink>
          <li className="nav-item">
            <Link to="/">
              <img src={IndustryIcon} alt="Industry Training" />
              <span>Industry Training</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <img src={MaterialsIcon} alt="Marketing Materials" />
              <span>Marketing Materials</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <img src={FormIcon} alt="Marketing Request Forms" />
              <span>Marketing Request Forms</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <img src={ToolsIcon} alt="Access to tools" />
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
