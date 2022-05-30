import { Form, Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../store/store";

const Post = () => {
  const [showCurrencies, setShowCurrencies] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [period, setPeriod] = useState("monthly");
  const [title, setTitle] = useState();
  const [minExp, setMinExp] = useState();
  const [maxExp, setMaxExp] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [salary, setSalary] = useState();
  const [location, setLocation] = useState();
  const [skill, setSkill] = useState();
  const [locations, setLocations] = useState([]);
  const [skills, setSkills] = useState([]);
  const formIsComplete = !title || !maxExp || !minExp || !jobDesc;
  const postJob = useStore((state) => state.postJob);

  const post = (
    title,
    maxExp,
    minExp,
    salary,
    description,
    currency,
    locations,
    skills,
    formIsComplete
  ) => {
    postJob(
      title,
      maxExp,
      minExp,
      salary,
      description,
      currency,
      locations,
      skills,
      formIsComplete
    );
  };

  const removeLocation = (index) => {
    let array = locations;
    array.splice(index, 1);
    setLocations([...array]);
  };

  const removeSkill = (index) => {
    let array = skills;
    array.splice(index, 1);
    setSkills([...array]);
  };

  const handleCurrency = (currency) => {
    setShowCurrencies(!showCurrencies);
    setCurrency(currency);
  };

  const addLocation = () => {
    if (location !== "") {
      setLocations([...locations, location]);
      setLocation("");
    }
  };

  const addSkill = () => {
    if (skill !== "") {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  return (
    <>
      <h1>Post Job</h1>
      <Form
        initialValues={{ remember: true }}
        autoComplete="off"
        className="form"
        name="basic"
      >
        {/* Basic Details */}

        <div className="header1">Basic Details</div>
        <hr />

        {/* Job Title */}

        <label htmlFor="title">
          Job Title <span className="asterisk">*</span>
        </label>
        <br />
        <Form.Item
          className="antd-item"
          name="title"
          rules={[{ required: true, message: "Please input your job title!" }]}
        >
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Write a title that appropriately describes the job"
            className="title text"
            id="title"
            label="Job Title"
          />
        </Form.Item>

        {/* Location */}

        <label htmlFor="title">Locations</label>
        <div className="location-cont">
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Click  ' + '  to add location"
            className="text location"
          ></input>
          <div onClick={addLocation} className="add-icon">
            <i className="add-loc fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="locations-list">
          {locations.map((location, index) => {
            return (
              <div className="place-cont">
                <i
                  onClick={(e) => removeLocation(index)}
                  className="fa-solid fa-xmark cross"
                ></i>
                <div className="place">{location}</div>
              </div>
            );
          })}
        </div>

        {/* Experience */}

        <label htmlFor="experience">
          Years of experience <span className="asterisk">*</span>
        </label>
        <div id="experience" className="experience-cont">
          <div className="min-exp">
            <Form.Item
              className="antd-item"
              name="min-exp"
              rules={[
                {
                  required: true,
                  message: "Please type the min experience required!",
                },
              ]}
            >
              <Input
                value={minExp}
                onChange={(e) => setMinExp(e.target.value)}
                placeholder="Min"
                className="text year-exp min"
                label="Min Experience"
                type="number"
              />
            </Form.Item>
          </div>
          <div className="max-exp">
            <Form.Item
              className="antd-item"
              name="max-exp"
              rules={[
                {
                  required: true,
                  message: "Please type the max experience required!",
                },
              ]}
            >
              <Input
                value={maxExp}
                onChange={(e) => setMaxExp(e.target.value)}
                placeholder="Max"
                className="text year-exp max"
                label="Max Experience"
                type="number"
              />
            </Form.Item>
          </div>
        </div>

        {/* Job Description */}

        <label htmlFor="title">
          Job Description <span className="asterisk">*</span>
        </label>
        <br />
        <Form.Item
          className="antd-item"
          name="job-desc"
          rules={[
            {
              required: true,
              message: "Please write the job description!",
            },
          ]}
        >
          <TextArea
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better"
            className="desc"
            id="desc"
            rows={4}
          />
        </Form.Item>

        {/* Targeting */}

        <div className="header1">Targeting</div>
        <hr />

        {/* Skills */}

        <label className="skill-label not-required" htmlFor="title">
          Skills
        </label>
        <div className="skill-cont">
          <input
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Click  ' + '  to add skill"
            className="text skill"
          ></input>
          <div onClick={addSkill} className="add-icon">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => {
            return (
              <div className="skill-container">
                <i
                  onClick={(e) => removeSkill(index)}
                  className="fa-solid fa-xmark cross"
                ></i>
                <div className="skill">{skill}</div>
              </div>
            );
          })}
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
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              type="number"
              placeholder="Salary or Stipend"
              className="text salary"
            ></input>
          </div>
          <div className="time-period">
            <input
              onClick={(e) => setPeriod("monthly")}
              defaultChecked
              type="radio"
              id="monthly"
              name="time"
              value="monthly"
            />
            <label htmlFor="monthly">Monthly</label>
            <input
              onClick={(e) => setPeriod("annually")}
              type="radio"
              id="annually"
              name="time"
              value="annually"
            />
            <label htmlFor="annually">Annually</label>
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-cont">
          <Form.Item>
            <Link to="v1jobs/job">
              <Button
                onClick={post(
                  title,
                  maxExp,
                  minExp,
                  salary,
                  jobDesc,
                  currency,
                  period,
                  locations,
                  skills,
                  formIsComplete
                )}
                disabled={formIsComplete}
                className="post-btn"
                htmlType="submit"
              >
                Post Job
              </Button>
            </Link>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default Post;
