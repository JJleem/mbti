import React, { useState } from "react";
import { styled } from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { QuestionData } from "../assets/data/questiondata";
import { createSearchParams, useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    {
      id: "EI",
      score: 0,
    },
    {
      id: "SN",
      score: 0,
    },
    {
      id: "FT",
      score: 0,
    },
    {
      id: "PJ",
      score: 0,
    },
  ]);

  const handleClickButton = (num, type) => {
    const newScore = totalScore.map((it) =>
      it.id === type ? { id: it.id, score: it.score + num } : it
    );
    console.log(newScore);
    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );

      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  return (
    <Container>
      <ProgressBarStyle
        striped
        variant="info"
        now={(questionNo / QuestionData.length) * 100}
      />
      <Wrapper>
        <div>
          <Title>{QuestionData[questionNo].title}</Title>
          <ButtonGroup>
            <Buttons
              onClick={() =>
                handleClickButton(1, QuestionData[questionNo].type)
              }
            >
              {QuestionData[questionNo].answera}
            </Buttons>
            <Buttons
              onClick={() =>
                handleClickButton(0, QuestionData[questionNo].type)
              }
            >
              {QuestionData[questionNo].answerb}
            </Buttons>
          </ButtonGroup>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Question;

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: #cde9f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProgressBarStyle = styled(ProgressBar)`
  width: 100%;
  position: absolute;
  top: 0;
`;
const Wrapper = styled.div`
  @media ${(props) => props.theme.mobile} {
    background: #fff;
    width: 90%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 30px;
    box-shadow: 0px 0px 5px #999;
  }
  @media ${(props) => props.theme.desktop} {
    background: #fff;
    width: 80%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 30px;
    box-shadow: 0px 0px 5px #999;
  }
`;
const Title = styled.div`
  @media ${(props) => props.theme.mobile} {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 30px;
    width: 300px;
    height: 60px;
  }
  @media ${(props) => props.theme.desktop} {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
`;
const ButtonGroup = styled.div`
  @media ${(props) => props.theme.mobile} {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${(props) => props.theme.desktop} {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 20px;
  }
`;

const Buttons = styled(Button)`
  @media ${(props) => props.theme.mobile} {
    width: 300px;
    height: 100px;
    font-size: 1rem;
    background: #ffcfcf;
    border: none;
    font-weight: bold;
    box-shadow: 0px 0px 5px #999;
    &:hover {
      background: #cde9f6;
      color: #ffcfcf;
    }
  }
  @media ${(props) => props.theme.desktop} {
    width: 400px;
    height: 200px;
    font-size: 1.5rem;
    background: #ffcfcf;
    border: none;
    font-weight: bold;
    box-shadow: 0px 0px 5px #999;
    &:hover {
      background: #cde9f6;
      color: #ffcfcf;
    }
  }
`;
