import { useState } from "react";
import Card from "../../Components/Card/Card";

function Home() {
  return (
    <>
      <div id="content-wrapper" className="row">
        <div className="col-12 mb-5">
          <Card>
            <h1>Payarc Overview</h1>
            <p>
              We are a technology-driven company built for businesses. We know
              the challenges of starting and managing a business, so we embarked
              on a journey to provide smart and simple payment processing tools
              and products. Backed by a team of world-class experts and
              innovative technology, we are committed to helping businesses of
              all sizes get started, optimize revenue streams, and bridge the
              gap between online merchants and payment solutions.
            </p>
            <p>
              We are dedicated to empowering businesses to improve their
              organization – one payment at a time. For more information, visit{" "}
              <a href="#" className="">
                https://payarc.com/
              </a>
              .
            </p>
          </Card>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-4 pb-4">
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
        <div className="col-md-4 pb-4">
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
        <div className="col-md-4 pb-4">
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
