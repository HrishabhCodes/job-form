import React, { useState } from "react";

const Form = () => {
  const [showCurrencies, setShowCurrencies] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState();
  const [locations, setLocations] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleCurrency = (currency) => {
    setShowCurrencies(!showCurrencies);
    setCurrency(currency);
  };

  return (
    <>
      <h1>Post Job</h1>
      <form className="form">
        {/* Basic Details */}

        <div className="header1">Basic Details</div>
        <hr />

        {/* Job Title */}

        <label htmlFor="title">Job Title *</label>
        <br />
        <input
          placeholder="Write a title that appropriately describes the job"
          className="title text"
          id="title"
          label="Job Title"
        />
        <p className="error">Error</p>

        {/* Location */}

        <label htmlFor="title">Locations *</label>
        <div className="location-cont">
          <div className="add-icon">
            <i className="fa-solid fa-plus"></i>
          </div>
          <input placeholder="Add Location" className="text location"></input>
        </div>
        <p className="error">Error</p>

        {/* Experience */}

        <label htmlFor="experience">Years of experience *</label>
        <div id="experience" className="experience-cont">
          <div className="min-exp">
            <input
              placeholder="Min"
              className="text year-exp min"
              label="Min Experience"
              type="number"
            />
            <p className="error">Error</p>
          </div>
          <div className="max-exp">
            <input
              required
              placeholder="Max"
              className="text year-exp max"
              label="Max Experience"
              type="number"
            />
            <p className="error">Error</p>
          </div>
        </div>

        {/* Job Description */}

        <label htmlFor="title">Job Description *</label>
        <br />
        <textarea
          placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
          className="desc"
          id="desc"
        />
        <p className="error">Error</p>

        {/* Targeting */}

        <div className="header1">Targeting</div>
        <hr />

        {/* Skills */}

        <label className="skill-label not-required" htmlFor="title">
          Skills
        </label>
        <div className="skill-cont">
          <div className="add-icon">
            <i className="fa-solid fa-plus"></i>
          </div>
          <input placeholder="Add Skill" className="text skill"></input>
        </div>

        {/* Salary */}

        <label className="not-required" htmlFor="title">
          Salary / Stipend
        </label>
        <div className="salary-cont">
          <div className="salary-input">
            <div
              onClick={(e) => setShowCurrencies(!showCurrencies)}
              className="currency-icon"
            >
              {currency === "inr" ? (
                <i className="fa-solid fa-indian-rupee-sign"></i>
              ) : currency === "usd" ? (
                <i className="usd fa-solid fa-dollar-sign"></i>
              ) : (
                <i className="eur fa-solid fa-sterling-sign"></i>
              )}
            </div>
            {showCurrencies ? (
              <div className="currency-options">
                <i
                  onClick={(e) => handleCurrency("inr")}
                  className="inr fa-solid fa-indian-rupee-sign"
                ></i>
                <i
                  onClick={(e) => handleCurrency("usd")}
                  className="usd fa-solid fa-dollar-sign"
                ></i>
                <i
                  onClick={(e) => handleCurrency("eur")}
                  className="eur fa-solid fa-sterling-sign"
                ></i>
              </div>
            ) : null}
            <input
              type="number"
              placeholder="Salary or Stipend"
              className="text salary"
            ></input>
          </div>
          <div className="time-period">
            <input type="radio" id="monthly" name="time" value="monthly" />
            <label htmlFor="monthly">Monthly</label>
            <input type="radio" id="annually" name="time" value="annually" />
            <label htmlFor="annually">Annually</label>
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-cont">
          <div className="post-btn">Post Job</div>
          <div className="reset-btn">Reset</div>
        </div>
      </form>
    </>
  );
};

export default Form;
