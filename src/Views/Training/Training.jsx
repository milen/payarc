import Card from "../../Components/Card/Card";
import visual from "../../assets/images/office-work.png";
import visual2x from "../../assets/images/office-work@2x.png";

function Training() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-9">
          <Card className="h-auto mb-5">
            <div className="row">
              <div className="d-none d-lg-block col-md-5">
                <img
                  className="w-100"
                  style={{ marginTop: "-6rem" }}
                  src={visual}
                  srcSet={`${visual2x} 2x`}
                />
              </div>
              <div className="col col-lg-7">
                <h1>Payarc Training</h1>
                <p>
                  In tiered pricing, each credit card transaction falls into a
                  pricing category: qualified, mid-qualified, and non-qualified.
                  Qualified rates are the lowest, and you might think that most
                  of your credit card transactions fall into the qualified
                  category. Not so! Downgrades can occur for several reasons,
                  including, but not limited to:
                </p>
              </div>
            </div>
          </Card>

          <Card className="h-auto d-block d-lg-none mb-5">
            <ul className="list-group list-group-horizontal list-group-flush list-group-numbered">
              <li className="list-group-item active">Apply app</li>
              <li className="list-group-item active">Admin Portal</li>
              <li className="list-group-item">Merchant Portal</li>
              <li className="list-group-item disabled">Curv POS</li>
            </ul>
          </Card>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Apply app
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The Apply app is an online application tool that allows
                  merchants to fill out and submit their onboarding application
                  and documentation.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Admin Portal
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Merchant Portal
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The merchant portal is an online platform for merchants that
                  allows them to manage all aspects of their business, such as
                  account information, run payments, and set-up subscriptions
                  and recurring payments.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Curv POS
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The Curv POS system is our all-in-one online ordering platform
                  with all the digital tools restaurant owners need to manage
                  orders, process payments, customize menus, organize employees,
                  and improve customer engagement.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-3 mb-5">
          <Card>
            <ul className="list-group list-group-flush list-group-numbered">
              <li className="list-group-item active">Apply app</li>
              <li className="list-group-item active">Admin Portal</li>
              <li className="list-group-item">Merchant Portal</li>
              <li className="list-group-item disabled">Curv POS</li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Training;
