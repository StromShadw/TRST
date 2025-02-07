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
import { IoIosSearch } from "react-icons/io";
import { FaCircleQuestion } from "react-icons/fa6";
// import "./BIADashboard.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Alert,
  Spinner,
} from "reactstrap";
import { TiPlus } from "react-icons/ti";

function NewBIADashboard() {
      const [isToolOpen, setIsToolOpen] = useState(false);
      const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false);
      const [isStatusOpen, setIsStatusOpen] = useState(false);
      const [isHostelOpen, setIsHostelOpen] = useState(false);
      const [isRTOOpen, setIsRTOOpen] = useState(false);
      const [isRPOOpen, setIsRPOOpen] = useState(false);
      const [isDROpen, setIsDROpen] = useState(false);
    
      const [selectedStatus, setSelectedStatus] = useState("-- Please select --");
      const [selectedTimeZone, setSelectedTimeZone] = useState(
        "-- Please select --"
      );
      const [selectedHostel, setSelectedHostel] = useState("-- Please select --");
      const [selectedRTO, setSelectedRTO] = useState("-- Please select --");
      const [selectedRPO, setSelectedRPO] = useState("-- Please select --");
      const [selectedDR, setSelectedDR] = useState("-- Please select --");
    
      const statusOptions = ["-- Please select --", "No", "Yes"];
      const TimeZoneOptions = ["-- Please select --", "Option 1", "Option 2"]; // Add some options
      const hostelOptions = ["-- Please select --", "No", "Yes"]; // Corrected "No" to "Yes" for variety
      const RTOOptions = ["-- Please select --", "RTO 1", "RTO 2"];
      const RPOOptions = ["-- Please select --", "RPO 1", "RPO 2"];
      const DROptions = ["-- Please select --", "DR 1", "DR 2"];
    
      const toggleStatusDropdown = () => setIsStatusOpen(!isStatusOpen);
      const toggleHostelDropdown = () => setIsHostelOpen(!isHostelOpen);
      const toggleTimeZoneDropdown = () => setIsTimeZoneOpen(!isTimeZoneOpen);
      const toggleRTODropdown = () => setIsRTOOpen(!isRTOOpen);
      const toggleRPODropdown = () => setIsRPOOpen(!isRPOOpen);
      const toggleDRDropdown = () => setIsDROpen(!isDROpen);
    
      const toggleToolDropDown = () => setIsToolOpen(!isToolOpen);
    
      const handleSelectTimeZone = (option) => {
        setSelectedTimeZone(option);
        setIsTimeZoneOpen(false);
      };
    
      const handleSelectStatus = (option) => {
        setSelectedStatus(option);
        setIsStatusOpen(false);
      };
    
      const handleSelecthostel = (option) => {
        setSelectedHostel(option);
        setIsHostelOpen(false);
      };
    
      const handleSelectRTO = (option) => {
        setSelectedRTO(option);
        setIsRTOOpen(false);
      };
    
      const handleSelectRPO = (option) => {
        setSelectedRPO(option);
        setIsRPOOpen(false);
      };
    
      const handleSelectDR = (option) => {
        setSelectedDR(option);
        setIsDROpen(false);
      };
      const [selectedReputationalImpact1D, setSelectedReputationalImpact1D] =
        useState("-- Please select --");
      const [isReputationalImpact1DOpen, setIsReputationalImpact1DOpen] =
        useState(false);
    
      const ReputationalImpact1DOptions = [
        "-- Please select --",
        "Negligible",
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
    
      const toggleReputationalImpact1DDropdown = () =>
        setIsReputationalImpact1DOpen(!isReputationalImpact1DOpen);
    
      const handleSelectReputationalImpact1D = (option) => {
        setSelectedReputationalImpact1D(option);
        setIsReputationalImpact1DOpen(false);
      };
      const [selectedReputationalImpact3D, setSelectedReputationalImpact3D] =
        useState("-- Please select --");
      const [isReputationalImpact3DOpen, setIsReputationalImpact3DOpen] =
        useState(false);
    
      const ReputationalImpact3DOptions = [
        "-- Please select --",
        "Major",
        "Critical",
      ];
    
      const toggleReputationalImpact3DDropdown = () =>
        setIsReputationalImpact3DOpen(!isReputationalImpact3DOpen);
    
      const handleSelectReputationalImpact3D = (option) => {
        setSelectedReputationalImpact3D(option);
        setIsReputationalImpact3DOpen(false);
      };
      const [selectedLegalImpact24D, setselectedLegalImpact24D] = useState(
        "-- Please select --"
      );
      const [isLegalImpact24DOpen, setIsILegalImpact24DOpen] = useState(false);
    
      const LegalImpact24DOptions = [
        "-- Please select --",
        "No",
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
    
      const toggleImpactLegalImpact24DDropdown = () =>
        setIsILegalImpact24DOpen(!isLegalImpact24DOpen);
    
      const handleSelectLegalImpact24D = (option) => {
        setselectedLegalImpact24D(option);
        setIsILegalImpact24DOpen(false);
      };
      const [selectedLegalImpact2D, setSelectedLegalImpact2D] = useState(
        "-- Please select --"
      );
      const [isLegalImpact2DOpen, setIsLegalImpact2DOpen] = useState(false);
    
      const LegalImpact2DOptions = [
        "-- Please select --",
        "ABC", // Or whatever your 2D options are
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
    
      const toggleLegalImpact2DDropdown = () =>
        setIsLegalImpact2DOpen(!isLegalImpact2DOpen);
    
      const handleSelectLegalImpact2D = (option) => {
        setSelectedLegalImpact2D(option);
        setIsLegalImpact2DOpen(false);
      };
    
      const [selectedLegalImpact1W, setSelectedLegalImpact1W] = useState(
        "-- Please select --"
      );
      const [isLegalImpact1WOpen, setIsLegalImpact1WOpen] = useState(false);
    
      const LegalImpact1WOptions = [
        "-- Please select --",
        "CFDD", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
      const [selectedFinancialImpact24H, setSelectedFinancialImpact24H] = useState(
        "-- Please select --"
      );
      const [isFinancialImpact24HOpen, setIsFinancialImpact24HOpen] =
        useState(false);
    
      const FinancialImpact24HOptions = [
        "-- Please select --",
        "EEG", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
      const [selectedFinancialImpact2D, setSelectedFinancialImpact2D] = useState(
        "-- Please select --"
      );
      const [isFinancialImpact2DOpen, setIsFinancialImpact2DOpen] = useState(false);
    
      const FinancialImpact2DOptions = [
        "-- Please select --",
        "HIIJ", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
    
      const toggleFinancialImpact2DDropdown = () =>
        setIsFinancialImpact2DOpen(!isFinancialImpact2DOpen);
    
      const handleSelectFinancialImpact2D = (option) => {
        setSelectedFinancialImpact2D(option);
        setIsFinancialImpact2DOpen(false);
      };
    
      const toggleFinancialImpact24HDropdown = () =>
        setIsFinancialImpact24HOpen(!isFinancialImpact24HOpen);
    
      const handleSelectFinancialImpact24H = (option) => {
        setSelectedFinancialImpact24H(option);
        setIsFinancialImpact24HOpen(false);
      };
    
      const toggleLegalImpact1WDropdown = () =>
        setIsLegalImpact1WOpen(!isLegalImpact1WOpen);
    
      const handleSelectLegalImpact1W = (option) => {
        setSelectedLegalImpact1W(option);
        setIsLegalImpact1WOpen(false);
      };
      const [selectedRegulatoryImpact3D, setSelectedRegulatoryImpact3D] = useState(
        "-- Please select --"
      );
      const [isRegulatoryImpact3DOpen, setIsRegulatoryImpact3DOpen] =
        useState(false);
    
      const RegulatoryImpact3DOptions = [
        "-- Please select --",
        "KKK", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
      const [selectedFinancialImpact1W, setSelectedFinancialImpact1W] = useState(
        "-- Please select --"
      );
      const [isFinancialImpact1WOpen, setIsFinancialImpact1WOpen] = useState(false);
    
      const FinancialImpact1WOptions = [
        "-- Please select --",
        "LLL", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
    
      const toggleFinancialImpact1WDropdown = () =>
        setIsFinancialImpact1WOpen(!isFinancialImpact1WOpen);
    
      const handleSelectFinancialImpact1W = (option) => {
        setSelectedFinancialImpact1W(option);
        setIsFinancialImpact1WOpen(false);
      };
    
      const toggleRegulatoryImpact3DDropdown = () =>
        setIsRegulatoryImpact3DOpen(!isRegulatoryImpact3DOpen);
    
      const handleSelectRegulatoryImpact3D = (option) => {
        setSelectedRegulatoryImpact3D(option);
        setIsRegulatoryImpact3DOpen(false);
      };
      const [selectedReputationalImpact02H, setSelectedReputationalImpact02H] =
        useState("-- Please select --");
      const [isReputationalImpact02HOpen, setIsReputationalImpact02HOpen] =
        useState(false);
    
      const ReputationalImpact02HOptions = [
        "-- Please select --",
        "MMM", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
      const [selectedReputationalImpact1W, setSelectedReputationalImpact1W] =
        useState("-- Please select --");
      const [isReputationalImpact1WOpen, setIsReputationalImpact1WOpen] =
        useState(false);
    
      const ReputationalImpact1WOptions = [
        "-- Please select --",
        "OOO", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
    
      const toggleReputationalImpact1WDropdown = () =>
        setIsReputationalImpact1WOpen(!isReputationalImpact1WOpen);
    
      const handleSelectReputationalImpact1W = (option) => {
        setSelectedReputationalImpact1W(option);
        setIsReputationalImpact1WOpen(false);
      };
    
      const toggleReputationalImpact02HDropdown = () =>
        setIsReputationalImpact02HOpen(!isReputationalImpact02HOpen);
    
      const handleSelectReputationalImpact02H = (option) => {
        setSelectedReputationalImpact02H(option);
        setIsReputationalImpact02HOpen(false);
      };
      const [selectedLegalImpact02H, setSelectedLegalImpact02H] = useState(
        "-- Please select --"
      );
      const [isLegalImpact02HOpen, setIsLegalImpact02HOpen] = useState(false);
    
      const LegalImpact02HOptions = [
        "-- Please select --",
        "NNNN", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
      const [selectedReputationalImpact2D, setSelectedReputationalImpact2D] =
        useState("-- Please select --");
      const [isReputationalImpact2DOpen, setIsReputationalImpact2DOpen] =
        useState(false);
    
      const ReputationalImpact2DOptions = [
        "-- Please select --",
        "PPP", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
    
      const toggleReputationalImpact2DDropdown = () =>
        setIsReputationalImpact2DOpen(!isReputationalImpact2DOpen);
    
      const handleSelectReputationalImpact2D = (option) => {
        setSelectedReputationalImpact2D(option);
        setIsReputationalImpact2DOpen(false);
      };
    
      const toggleLegalImpact02HDropdown = () =>
        setIsLegalImpact02HOpen(!isLegalImpact02HOpen);
    
      const handleSelectLegalImpact02H = (option) => {
        setSelectedLegalImpact02H(option);
        setIsLegalImpact02HOpen(false);
      };
      const [selectedLegalImpact3D, setSelectedLegalImpact3D] = useState(
        "-- Please select --"
      );
      const [isLegalImpact3DOpen, setIsLegalImpact3DOpen] = useState(false);
    
      const LegalImpact3DOptions = [
        "-- Please select --",
        "SSS", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
      const [selectedLegalImpact1D24H, setSelectedLegalImpact1D24H] = useState(
        "-- Please select --"
      );
      const [isLegalImpact1D24HOpen, setIsLegalImpact1D24HOpen] = useState(false);
    
      const LegalImpact1D24HOptions = [
        "-- Please select --",
        "TTT", 
        "Minor",
        "Moderate",
        "Major",
        "Critical",
      ];
    
      const toggleLegalImpact1D24HDropdown = () =>
        setIsLegalImpact1D24HOpen(!isLegalImpact1D24HOpen);
    
      const handleSelectLegalImpact1D24H = (option) => {
        setSelectedLegalImpact1D24H(option);
        setIsLegalImpact1D24HOpen(false);
      };
    
      const toggleLegalImpact3DDropdown = () =>
        setIsLegalImpact3DOpen(!isLegalImpact3DOpen);
    
      const handleSelectLegalImpact3D = (option) => {
        setSelectedLegalImpact3D(option);
        setIsLegalImpact3DOpen(false);
      };
  return (
  <React.Fragment>
      <Helmet>
        <title>New BIA Page | TRST</title>
        <meta name="description" content="This is the home page description" />
        <meta name="keywords" content="home, react, meta tags" />
      </Helmet>
      <div className="page-content">
        <div className="main-content1">
          <div className="d-flex align-items-center justify-content-between">
            <div className="header-text">BIA: New BIA</div>
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
        <div className="form-content">
          <div className="form-heading">BIA Information </div>
          <div className="border-1"></div>
          <Form>
            <div className="row pt-4">
              <div className="col-6">
                <div className="mb-3 d-flex">
                  <label
                    htmlFor="department"
                    className="form-label fs-15 w-20 me-2"
                  >
                    Department <span class="text-danger">*</span>
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
                    htmlFor="division"
                    className="form-label fs-15 w-20 me-2"
                  >
                    Division
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
                  <label htmlFor="group" className="form-label fs-15 w-20 me-2">
                    Group
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
                    htmlFor="general manager"
                    className="form-label fs-15 w-20 me-2"
                  >
                    General Manager
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
                  <button
                    type="button"
                    className="btn btn-secondary border-radius-2 me-1"
                  >
                    <TiPlus className="fs-15" />
                  </button>
                </div>
                <div className="mb-3 d-flex">
                  <label
                    htmlFor="bcm champion"
                    className="form-label fs-15 w-20 me-2"
                  >
                    BCM Champion (Secondary)
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
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40"
                  >
                    Do you normally work with a work backlog
                  </Label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleStatusDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedStatus}</span>
                      <svg
                        className={`ms-2 ${isStatusOpen ? "rotate-180" : ""}`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isStatusOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {statusOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectStatus(option)}
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Financial Impact 1D / 24H
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleTimeZoneDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedTimeZone}</span>
                      <svg
                        className={`ms-2 ${isTimeZoneOpen ? "rotate-180" : ""}`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isTimeZoneOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {TimeZoneOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectTimeZone(option)}
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="Financial Impact 3D"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Financial Impact 3D
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleHostelDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedHostel}</span>{" "}
                      <svg
                        className={`ms-2 ${isHostelOpen ? "rotate-180" : ""}`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isHostelOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {hostelOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelecthostel(option)}
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="Regulatory Impact 2D"
                    className="form-label me-2 fs-15 w-40"
                  >
                    Regulatory Impact 2D
                  </Label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleRTODropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedRTO}</span>
                      <svg
                        className={`ms-2 ${isRTOOpen ? "rotate-180" : ""}`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isRTOOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {RTOOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectRTO(option)}
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="Regulatory Impact 1W"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Regulatory Impact 1W
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleRPODropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedRPO}</span>
                      <svg
                        className={`ms-2 ${isRPOOpen ? "rotate-180" : ""}`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isRPOOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {RPOOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectRPO(option)}
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* Reputational Impact 2-4H Dropdown */}
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="Reputational Impact 2-4H"
                    className="form-label me-2 fs-15 w-40"
                  >
                    Reputational Impact 2-4H
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleDRDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedDR}</span>
                      <svg
                        className={`ms-2 ${isDROpen ? "rotate-180" : ""}`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isDROpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {DROptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectDR(option)}
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* Reputational Impact 1D/24H */}
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="reputationalImpact1D"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Reputational Impact 1D/24H
                    <FaCircleQuestion className="me-2 hw-20" />
                  </label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleReputationalImpact1DDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedReputationalImpact1D}</span>
                      <svg
                        className={`ms-2 ${
                          isReputationalImpact1DOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isReputationalImpact1DOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {ReputationalImpact1DOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectReputationalImpact1D(option)
                            }
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* Reputational Impact (3D) */}
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="reputationalImpact3D"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Reputational Impact 3D
                    <FaCircleQuestion className="me-2 hw-20" />
                  </label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleReputationalImpact3DDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedReputationalImpact3D}</span>
                      <svg
                        className={`ms-2 ${
                          isReputationalImpact3DOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isReputationalImpact3DOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {ReputationalImpact3DOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectReputationalImpact3D(option)
                            }
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* Legal Impact 2-4H */}
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="legal impact 2-4H"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Legal Impact 2-4H
                    <FaCircleQuestion className="me-2 hw-20" />
                  </label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleImpactLegalImpact24DDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedLegalImpact24D}</span>
                      <svg
                        className={`ms-2 ${
                          isLegalImpact24DOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isLegalImpact24DOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {LegalImpact24DOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectLegalImpact24D(option)}
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="legal impact 2-4H"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Legal Impact 2D
                    <FaCircleQuestion className="me-2 hw-20" />
                  </label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleLegalImpact2DDropdown} // Correct function name
                      className="form-control text-start d-flex justify-content-between align-items-center" // Your styling
                      type="button"
                    >
                      <span>{selectedLegalImpact2D}</span>
                      <svg
                        className={`ms-2 ${
                          isLegalImpact2DOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isLegalImpact2DOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1" // Your styling
                        style={{ zIndex: 1000 }}
                      >
                        {LegalImpact2DOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectLegalImpact2D(option)} // Correct function name
                            className="dropdown-item w-100 text-start py-2 px-3" // Your styling
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* Legal Impact 1W */}
                <div className="mb-3 d-flex align-items-center">
                  <label
                    htmlFor="legal impact 2-4H"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Legal Impact 1W
                    <FaCircleQuestion className="me-2 hw-20" />
                  </label>
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    <button
                      onClick={toggleLegalImpact1WDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedLegalImpact1W}</span>
                      <svg
                        className={`ms-2 ${
                          isLegalImpact1WOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isLegalImpact1WOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1" // Your styling
                        style={{ zIndex: 1000 }}
                      >
                        {LegalImpact1WOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectLegalImpact1W(option)} // Correct function name
                            className="dropdown-item w-100 text-start py-2 px-3" // Your styling
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3 d-flex">
                  <label
                    htmlFor="bia editor"
                    className="form-label fs-15 w-20 me-2"
                  >
                    BIA Editor
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
                    htmlFor="approval group"
                    className="form-label fs-15 w-20 me-2"
                  >
                    Approval Group
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
                    htmlFor="respondents"
                    className="form-label fs-15 w-20 me-2"
                  >
                    Respondents
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
                    BCM Champion (Primary)
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
                {["Normal working hours"].map((label, index) => (
                  <div className="mb-3 d-flex align-items-center" key={index}>
                    <Label
                      htmlFor={label}
                      className="form-label me-2 fs-15 w-40"
                    >
                      {label}
                    </Label>
                    <Input name="text" className="form-control" type="text" />
                  </div>
                ))}
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Financial Impact 2-4 H
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleFinancialImpact24HDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center" 
                      type="button"
                    >
                      <span>{selectedFinancialImpact24H}</span>
                      <svg
                        className={`ms-2 ${
                          isFinancialImpact24HOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isFinancialImpact24HOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {FinancialImpact24HOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectFinancialImpact24H(option)
                            } 
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Financial Impact 2D
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleFinancialImpact2DDropdown}
                      className="form-control text-start d-flex justify-content-between align-items-center" 
                      type="button"
                    >
                      <span>{selectedFinancialImpact2D}</span>
                      <svg
                        className={`ms-2 ${
                          isFinancialImpact2DOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isFinancialImpact2DOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {FinancialImpact2DOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectFinancialImpact2D(option)
                            } 
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Financial Impact 1W
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleFinancialImpact1WDropdown} 
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedFinancialImpact1W}</span>
                      <svg
                        className={`ms-2 ${
                          isFinancialImpact1WOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isFinancialImpact1WOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {FinancialImpact1WOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectFinancialImpact1W(option)
                            }
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Regulatory Impact 3D
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleRegulatoryImpact3DDropdown} 
                      className="form-control text-start d-flex justify-content-between align-items-center" 
                      type="button"
                    >
                      <span>{selectedRegulatoryImpact3D}</span>
                      <svg
                        className={`ms-2 ${
                          isRegulatoryImpact3DOpen ? "rotate-180" : ""
                        }`} 
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isRegulatoryImpact3DOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {RegulatoryImpact3DOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectRegulatoryImpact3D(option)
                            } 
                            className="dropdown-item w-100 text-start py-2 px-3" 
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Reputational Impact 0-2H
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleReputationalImpact02HDropdown} 
                      className="form-control text-start d-flex justify-content-between align-items-center" 
                      type="button"
                    >
                      <span>{selectedReputationalImpact02H}</span>
                      <svg
                        className={`ms-2 ${
                          isReputationalImpact02HOpen ? "rotate-180" : ""
                        }`} 
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isReputationalImpact02HOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {ReputationalImpact02HOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectReputationalImpact02H(option)
                            } 
                            className="dropdown-item w-100 text-start py-2 px-3" 
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Reputational Impact 1W
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleReputationalImpact1WDropdown} 
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedReputationalImpact1W}</span>
                      <svg
                        className={`ms-2 ${
                          isReputationalImpact1WOpen ? "rotate-180" : ""
                        }`} 
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isReputationalImpact1WOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1" 
                        style={{ zIndex: 1000 }}
                      >
                        {ReputationalImpact1WOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectReputationalImpact1W(option)
                            } 
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Reputational Impact 2D
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleReputationalImpact2DDropdown} 
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedReputationalImpact2D}</span>
                      <svg
                        className={`ms-2 ${
                          isReputationalImpact2DOpen ? "rotate-180" : ""
                        }`} 
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isReputationalImpact2DOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1" // Your styling
                        style={{ zIndex: 1000 }}
                      >
                        {ReputationalImpact2DOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              handleSelectReputationalImpact2D(option)
                            } // Correct function name
                            className="dropdown-item w-100 text-start py-2 px-3" // Your styling
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Legal Impact 0-2H
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleLegalImpact02HDropdown} 
                      className="form-control text-start d-flex justify-content-between align-items-center"
                      type="button"
                    >
                      <span>{selectedLegalImpact02H}</span>
                      <svg
                        className={`ms-2 ${
                          isLegalImpact02HOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isLegalImpact02HOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {LegalImpact02HOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectLegalImpact02H(option)} 
                            className="dropdown-item w-100 text-start py-2 px-3" 
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Legal Impact 1D / 24H
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleLegalImpact1D24HDropdown} 
                      className="form-control text-start d-flex justify-content-between align-items-center" 
                      type="button"
                    >
                      <span>{selectedLegalImpact1D24H}</span>
                      <svg
                        className={`ms-2 ${
                          isLegalImpact1D24HOpen ? "rotate-180" : ""
                        }`} 
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isLegalImpact1D24HOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {LegalImpact1D24HOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectLegalImpact1D24H(option)}
                            className="dropdown-item w-100 text-start py-2 px-3"
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-3 d-flex align-items-center ">
                  <Label
                    htmlFor="work backlog"
                    className="form-label me-2 fs-15 w-40 d-flex align-items-center justify-content-between"
                  >
                    Legal Impact 3D
                    <FaCircleQuestion className="me-2 hw-20" />
                  </Label>{" "}
                  <div className="dropdown-container position-relative flex-grow-1 w-100">
                    {" "}
                    <button
                      onClick={toggleLegalImpact3DDropdown} 
                      className="form-control text-start d-flex justify-content-between align-items-center" 
                      type="button"
                    >
                      <span>{selectedLegalImpact3D}</span>
                      <svg
                        className={`ms-2 ${
                          isLegalImpact3DOpen ? "rotate-180" : ""
                        }`}
                        style={{ width: "12px", height: "12px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />{" "}
                      </svg>
                    </button>
                    {isLegalImpact3DOpen && (
                      <div
                        className="position-absolute w-100 mt-1 bg-white border rounded dropdown-menu1"
                        style={{ zIndex: 1000 }}
                      >
                        {LegalImpact3DOptions.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectLegalImpact3D(option)} 
                            className="dropdown-item w-100 text-start py-2 px-3" 
                            type="button"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>                                                  
  )
}

export default NewBIADashboard
