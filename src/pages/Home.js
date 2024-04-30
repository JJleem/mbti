import React from "react";
import { styled } from "styled-components";
import main from "../assets/img/main.png";
import { useNavigate } from "react-router-dom";
import { setPageTitle } from "../assets/style/PageTitle";
import { useEffect } from "react";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #cde9f6;
  font-family: "SimKyungha";
  padding: 30px 0px 30px 0px;
`;

const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffcfcf;
  padding: 10px 20px;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  overflow-x: hidden;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;
const LogoImage = styled.div`
  width: 350px;
  height: 350px;
  margin: 10px 0 20px;
`;

const Desc = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 30px;
`;
const Button = styled.button`
  font-size: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
`;
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/question");
  };
  useEffect(() => {
    setPageTitle("회사 성격 테스트");
  }, []);
  return (
    <Wrapper>
      <Header>회사 성격 테스트</Header>
      <Contents>
        <LogoImage>
          <img width={350} height={410} src={main} alt="main" />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나의 회사 성격 테스트!</Desc>
        <Button onClick={handleClick}>테스트 시작하기!</Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;
