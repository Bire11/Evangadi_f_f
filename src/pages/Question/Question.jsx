import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../component/Dataprovide/DataProvider";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import "./question.css";
import { FaArrowCircleRight } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from "@mui/material";

function Question() {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const titleDom = useRef();
  const descriptionDom = useRef();

  // useEffect(() => {
  //   if (!user.data) navigate("/");
  // }, [user.user, navigate]);

  const token = localStorage.getItem("token");

  async function handleSubmit(e) {
    e.preventDefault();
    const titleValue = titleDom.current.value;
    const descriptionValue = descriptionDom.current.value;

    if (!titleValue || !descriptionValue) {
      // alert("Please provide all required information");
      return;
    }
    try {
      await axios.post(
        "/questions/askQuestion",
        {
          title: titleValue,
          description: descriptionValue,
          userid: user?.user?.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Thank you for your question");
      navigate("/");
    } catch (error) {
      alert("something went wrong!");
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className={"question_container"}>
        <div className="question_wrapper">
          <div className={"question_steps"}>
            <h3 className={"question_headtitle"}>
              Steps To Write A Good Question.
              <div className={"questions_steps_line"}></div>
            </h3>
            <ul className={"question_li"}>
              <li>
                <div>
                  <FaArrowCircleRight color="#35355E" size={15} />
                </div>
                <div>Summarize your problems in a one-line title.</div>
              </li>
              <li>
                <div>
                  <FaArrowCircleRight color="#35355E" size={15} />
                </div>
                <div>Describe your problem in more detail.</div>
              </li>
              <li>
                <div>
                  <FaArrowCircleRight color="#35355E" size={15} />
                </div>
                <div>
                  Explain what you have tried and what you expected to happen.
                </div>
              </li>
              <li>
                <div>
                  <FaArrowCircleRight color="#35355E" size={15} />
                </div>
                <div>Review your question and post it to the site.</div>
              </li>
            </ul>
          </div>

          <h4 className={"question_post_your"}>Post Your Question</h4>
          <div className={"question_headtitle2"}>
            <form onSubmit={handleSubmit}>
            <input
                className={"question_title"}
                ref={titleDom}
                type="text"
                placeholder="Title"
              />
              <textarea
                rows={4}
                className={"question_description"}
                ref={descriptionDom}
                type="text"
                placeholder="Question Description..."
              />
              {/* <TextField
                className={"question_title"}
                ref={titleDom}
                type="text"
                label="  Title"
              /> <br/>
                 <TextareaAutosize
                 Label="  Question Description..."
        aria-label="empty textarea"
        placeholder="Question Description..."
        minRows={3}
        maxRows={10}
                          /> */}
              {/* <TextField
                rows={4}
                className={"question_description"}
                ref={descriptionDom}
                type="text"
                Label="  Question Description..."
              /> */}
              <span>
                <button
                  className={"question_button"}
                  variant="primary"
                  type="submit">
                  Post Your Question
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Question;
