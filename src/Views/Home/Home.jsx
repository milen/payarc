import { useState } from "react";
import Card from "../../Components/Card/Card";
import PayarcLogo from "../../assets/svg/payarc-logo.svg";

function Home() {
  return (
    <>
      <div id="content-wrapper" className="row">
        <div className="col-12 mb-5">
          <Card className="h-auto mb-5">
            <div className="row">
              <div className="d-none d-lg-block col-md-4 offset-md-1">
                <img className="w-100" src={PayarcLogo} alt="Payarc" />
              </div>
              <div className="col col-lg-6 offset-lg-1">
                <h1 className="d-flex">
                  <img
                    src={PayarcLogo}
                    className="d-lg-none"
                    style={{ height: 60, marginRight: 20 }}
                    alt="Payarc"
                  />
                  <span className="d-none d-lg-inline">Payarc&nbsp;</span>
                  Overview
                </h1>
                <p>
                  We are a technology-driven company built for businesses. We
                  know the challenges of starting and managing a business, so we
                  embarked on a journey to provide smart and simple payment
                  processing tools and products. Backed by a team of world-class
                  experts and innovative technology, we are committed to helping
                  businesses of all sizes get started, optimize revenue streams,
                  and bridge the gap between online merchants and payment
                  solutions.
                </p>
                <p>
                  We are dedicated to empowering businesses to improve their
                  organization – one payment at a time. For more information,
                  visit{" "}
                  <a href="#" className="">
                    https://payarc.com/
                  </a>
                  .
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-2">
        <div className="col pb-4">
          <Card>
            <h3 className="mb-1">Payarc Terminals</h3>
            <p className="card-text">
              Ever wondered about those mysterious NABU fees on your statement?
            </p>
            <p className="mt-auto">
              <a className="btn btn-primary" href="/" role="button">
                Enter
              </a>
            </p>
          </Card>
        </div>
        <div className="col pb-4">
          <Card>
            <h3 className="mb-1">Payarc + Curv</h3>
            <p className="card-text">
              Ever wondered about those mysterious NABU fees on your statement?
            </p>
            <p className="mt-auto">
              <a className="btn btn-primary" href="/" role="button">
                Enter
              </a>
            </p>
          </Card>
        </div>
        <div className="col pb-4">
          <Card>
            <h3 className="mb-1">Payarc Banks</h3>
            <p className="card-text">
              Ever wondered about those mysterious NABU fees on your statement?
            </p>
            <p className="mt-auto">
              <a className="btn btn-primary" href="/" role="button">
                Enter
              </a>
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
