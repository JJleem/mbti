import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () => {
  const [bgColor, setBgColor] = useState("");

  const [resultData, setResultData] = useState({});
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  const handleNameChange = () => {
    if (resultData.name === "남색 사원증") {
      setBgColor("#062EA0");
    } else if (resultData.name === "하늘 사원증") {
      setBgColor("#75DBE0");
    } else if (resultData.name === "연핑크 사원증") {
      setBgColor("#FFC3C3");
    } else if (resultData.name === "회색 사원증") {
      setBgColor("#9C9C9C");
    } else if (resultData.name === "주황 사원증") {
      setBgColor("#F48C29");
    } else if (resultData.name === "연두 사원증") {
      setBgColor("#A8E047");
    } else if (resultData.name === "연노랑 사원증") {
      setBgColor("#FEEA87");
    } else if (resultData.name === "연보라 사원증") {
      setBgColor("#B68DC8");
    } else if (resultData.name === "연회색 사원증") {
      setBgColor("#E4E4E4");
    } else if (resultData.name === "초록 사원증") {
      setBgColor("#22B622");
    } else if (resultData.name === "노랑 사원증") {
      setBgColor("#FFD203");
    } else if (resultData.name === "민트 사원증") {
      setBgColor("#7DF1C4");
    } else if (resultData.name === "핫핑크 사원증") {
      setBgColor("#F86BC7");
    } else if (resultData.name === "보라 사원증") {
      setBgColor("#B841E9");
    } else if (resultData.name === "파랑 사원증") {
      setBgColor("#0972E8");
    } else if (resultData.name === "베이지 사원증") {
      setBgColor("#E7C7AE");
    }
  };

  useEffect(() => {
    const result = ResultData.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  useEffect(() => {
    handleNameChange();
  });

  return (
    <Wrapper>
      <Contents>
        <LogoImage>
          <img src={resultData.image} alt="" />
        </LogoImage>
        <Header
          style={{
            backgroundColor: bgColor,
          }}
        >
          {resultData.name}
        </Header>
        <Desc>
          {resultData.name} ({resultData.best})
          <br /> {resultData.desc1}
          <br /> {resultData.desc2}
          <br /> {resultData.desc3}
          <br /> {resultData.desc4}
          <br /> {resultData.desc5}
          <br /> {resultData.desc6}
          <br /> {resultData.desc7}
          <br /> {resultData.desc8}
          <br /> {resultData.desc9}
          <br /> {resultData.desc10}
          <br /> {resultData.desc11}
          <br /> {resultData.desc12}
        </Desc>
        <Preferred>
          <PreferredTitle
            style={{
              backgroundColor: bgColor,
            }}
          >
            선호하는 직원
          </PreferredTitle>
          <PreferredInfo>{resultData.preferred1}</PreferredInfo>
          <PreferredInfo>{resultData.preferred2}</PreferredInfo>
        </Preferred>
        <Preferred>
          <PreferredTitle
            style={{
              backgroundColor: bgColor,
            }}
          >
            선호하지않는 직원
          </PreferredTitle>
          <PreferredInfo>{resultData.unpreferred1}</PreferredInfo>
          <PreferredInfo>{resultData.unpreferred2}</PreferredInfo>
        </Preferred>
        <Button onClick={handleClick}>테스트 다시하기</Button>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #cde9f6;
    font-family: "SimKyungha";
    padding: 100px 0px 80px 0px;
    gap: 100px;
  }
  @media ${(props) => props.theme.desktop} {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #cde9f6;
    font-family: "SimKyungha";
    padding: 100px 0px 80px 0px;
    gap: 100px;
  }
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 30px;
  border-radius: 8px;
  color: #fff;
`;
const Contents = styled.div`
  @media ${(props) => props.theme.mobile} {
    gap: 50px;
    background: #fff;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    border-radius: 30px;
    box-shadow: 0px 0px 5px #999;
    padding: 50px 20px 50px 20px;
  }
  @media ${(props) => props.theme.desktop} {
    gap: 80px;
    background: #fff;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    border-radius: 30px;
    box-shadow: 0px 0px 5px #999;
    padding: 50px 20px 50px 20px;
  }
`;

const LogoImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
`;

const Desc = styled.div`
  font-size: 20px;
  line-height: 2.2;
`;
const Button = styled.button`
  font-size: 30px;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
`;
const Preferred = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PreferredTitle = styled.div`
  background: aliceblue;
  border-radius: 5px;
  padding: 2px 10px 2px 10px;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
`;
const PreferredInfo = styled.div`
  text-align: center;
  line-height: 30px;
  font-size: 1.5rem;
`;
