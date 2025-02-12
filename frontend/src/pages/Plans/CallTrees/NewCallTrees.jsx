import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiMiniWrench } from "react-icons/hi2";
import { BiSolidEdit } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import { LuTableOfContents, LuClock9 } from "react-icons/lu";
import { FaPrint, FaRegFilePdf } from "react-icons/fa";
import { Input, Label, Form } from "reactstrap";
import { BiSearchAlt2 } from "react-icons/bi";  

function NewCallTrees() {
  const [isToolOpen, setIsToolOpen] = useState(false);
  const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false); // Time Zone dropdown
  const [isStatusOpen, setIsStatusOpen] = useState(false); // Employee Status dropdown

  const [isHostelOpen, setIsHostelOpen] = useState(false); // Employee Status dropdown

  const [selectedStatus, setSelectedStatus] = useState("-- Please select --");
  const statusOptions = ["-- Please select --", "No", "Yes"];

  const [selectedHostel, setSelectedHostel] = useState("-- Please select --");
  const hostelOptions = ["-- Please select --", "No", "No"];
  const toggleStatusDropdown = () => setIsStatusOpen((prev) => !prev);
  const toggleHostelDropdown = () => setIsHostelOpen((prev) => !prev);

  const toggleToolDropDown = () => setIsToolOpen(!isToolOpen);
  const handleSelectStatus = (option) => {
    setSelectedStatus(option);
    setIsStatusOpen(false);
  };
  const handleSelecthostel = (option) => {
    setSelectedHostel(option);
    setIsHostelOpen(false);
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>New Call Tree Page | TRST</title>
        <meta name="description" content="This is the home page description" />
        <meta name="keywords" content="home, react, meta tags" />
      </Helmet>
      <div className="page-content">
        <div className="main-content1">
          <div className="d-flex align-items-center justify-content-between">
            <div className="header-text">Call Tree: New Call Tree</div>
            <div className="d-flex align-items-center justify-content-end">
              <div>
                <NavLink
                  className="button3 border-1 button3-changes me-1"
                  to="#"
                  title="Cancel"
                >
                  <RxCross2
                    className="me-1"
                    style={{ width: "15px", height: "15px" }}
                  />
                  Cancel
                </NavLink>
                <NavLink
                  className="button3 border-1 button3-changes me-1"
                  to="#"
                  title="Save & New"
                >
                  Save & New
                </NavLink>
                <NavLink className="button3 border-1 me-3" to="#" title="Save">
                  <FaCheck
                    className="me-1"
                    style={{ width: "15px", height: "15px" }}
                    title="Save"
                  />
                  Save
                </NavLink>
              </div>
              <div
                className="map-action k-widget k-button-group order-1"
                id="map-action-toggle"
                role="group"
              >
                <span className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle border-radius-2 ms-1"
                    type="button"
                    id="TollFropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded={isToolOpen}
                    onClick={toggleToolDropDown}
                  >
                    <HiMiniWrench className="hw-16" />
                  </button>
                  <ul
                    className={`right-auto dropdown-menu  ${
                      isToolOpen ? "show" : ""
                    }`}
                    aria-labelledby="TollFropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <BiSolidEdit className="hw-15" /> Design this page
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FcSettings className="hw-15" /> Object Definition
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <LuTableOfContents className="hw-15" /> Tab Definition
                      </a>
                    </li>
                    <div className="border-1"></div>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FaPrint className="hw-15" /> Print
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FaRegFilePdf className="hw-15" /> PDF
                      </a>
                    </li>
                    <div className="border-1"></div>
                    <li>
                      <a className="dropdown-item" href="#">
                        <LuClock9 className="hw-15" /> Page Load Time
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
        <h5 className="mt-3 mb-3">
          Add the Call Tree name and assign call tree members in the sections
          below. Once the call tree is saved, you will be able to arrange the
          call tree and change the order of callers.
        </h5>
        <div className="form-content">
          <Form>
            <div className="row pt-4">
              <div className="col-8">
                {["Call Tree"].map((label, index) => (
                  <div className="mb-3 d-flex align-items-center" key={index}>
                    <Label
                      htmlFor={label}
                      className="form-label me-2 fs-15 w-40"
                    >
                      {label} <span class="text-danger">*</span>
                    </Label>
                    <Input
                      name="number"
                      className="form-control"
                      type="number"
                    />
                  </div>
                ))}
                {["Description"].map((label, index) => (
                  <div className="mb-3 d-flex align-items-center" key={index}>
                    <Label
                      htmlFor={label}
                      className="form-label me-2 fs-15 w-40"
                    >
                      {label}
                      <span class="text-danger">*</span>
                    </Label>
                    <textarea
                      name="text"
                      className="form-control"
                      type="text"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Form>
        </div>
        <div className="form-content">
          <div className="form-heading">Select Callers</div>
          <div className="border-1"></div>
          <Form>
            <div className="row pt-4">
              <div className="col-8">
                <div className="mb-3 d-flex">
                  <label
                    htmlFor="general manager"
                    className="form-label fs-15 w-20 me-2"
                  >
                   Employees
                  </label>
                  <div
                    className="form-control1 d-flex flex-wrap gap-2"
                    style={{
                      minHeight: "38px",
                      border: "1px solid #ced4da",
                      borderRadius: "4px",
                      padding: "6px 12px",
                      backgroundColor: "#fff",
                    }}
                  ></div>

                  <button
                    type="button"
                    className="btn btn-secondary border-radius-2"
                  >
                    <BiSearchAlt2 className="fs-15" />
                  </button>
                </div>
                <div className="mb-3 d-flex">
                  <label
                    htmlFor="bcm champion"
                    className="form-label fs-15 w-20 me-2"
                  >
                    Client Contacts
                  </label>
                  <div
                    className="form-control1 d-flex flex-wrap gap-2"
                    style={{
                      minHeight: "38px",
                      border: "1px solid #ced4da",
                      borderRadius: "4px",
                      padding: "6px 12px",
                      backgroundColor: "#fff",
                    }}
                  ></div>
                  <button
                    type="button"
                    className="btn btn-secondary border-radius-2"
                  >
                    <BiSearchAlt2 className="fs-15" />
                  </button>
                </div>
                <div className="mb-3 d-flex">
                  <label
                    htmlFor="bcm champion"
                    className="form-label fs-15 w-20 me-2"
                  >
                    Vendor Contacts
                  </label>
                  <div
                    className="form-control1 d-flex flex-wrap gap-2"
                    style={{
                      minHeight: "38px",
                      border: "1px solid #ced4da",
                      borderRadius: "4px",
                      padding: "6px 12px",
                      backgroundColor: "#fff",
                    }}
                  ></div>
                  <button
                    type="button"
                    className="btn btn-secondary border-radius-2"
                  >
                    <BiSearchAlt2 className="fs-15" />
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewCallTrees;
