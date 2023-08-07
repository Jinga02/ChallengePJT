import { styled } from "styled-components";
// 디테일페이지 전체 div
export const SDetailChallengeWrapper = styled.div`
  margin: 30px auto -40px auto;
`;
// 디테일페이지 챌린지 정보 div
export const SInformationWrapper = styled.div`
  width: 1200px;
  height: 530px;
  background-color: rgba(22, 22, 22, 22);

  border-radius: 10px;
  box-shadow: 0px 0px 15px gray;
  margin: 10px auto;
  display: flex;
`;
// 챌린지 정보 각각 div
export const SImgWrapper = styled.div`
  width: 40%;
  height: 500px;
  text-align: center;
  // background-color: blue;

  #name {
    font-size: 30px;
    padding: 10px 0 0 0;
  }
  #img {
    width: 70%;
    height: 55%;
    border-radius: 100px;
    margin: ;
  }
  #DATE {
    font-size: 25px;
  }
  #date {
    font-size: 20px;
  }
  #TIME {
    font-size: 25px;
  }
  #time {
    font-size: 20px;
  }
`;
export const SInfoWrapper = styled.div`
  // background-color: red;
  width: 60%;
  height: 500px;
  padding: 0 0 0 50px;
  #CATEGORY {
    position: absolute;
    top: 125px;
    font-size: 25px;
  }
  #category {
    position: absolute;
    top: 165px;
    font-size: 20px;
  }
  #CERT {
    position: absolute;
    top: 210px;
    font-size: 25px;
  }
  #cert {
    position: absolute;
    top: 250px;
    font-size: 20px;
  }
  #INFO {
    position: absolute;
    top: 295px;
    font-size: 25px;
  }
  #info {
    position: absolute;
    top: 335px;
    font-size: 20px;
    width: 700px;
    height: 190px;
    white-space: pre-wrap;
    word-break: break-all;
  }
  #USERLIST {
    position: absolute;
    top: 140px;
    font-size: 25px;
    margin: 0 0 0 400px;
  }
  #userList {
    position: absolute;
    top: 180px;
    font-size: 20px;
    margin: 0 0 0 400px;
  }
`;
export const SButtonWrapper = styled.div`
  // width: 20%;
  // background-color: green;
  text-align: center;
  #participation {
    width: 150px;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    margin: 150px 150px 0 0;
    background-color: #33ff00;
    // color: white;
  }
  #enter {
    width: 150px;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    margin: 150px 150px 0 0;
  }
`;

// 디테일챌린지 글 작성
export const SBoardWriteWrapper = styled.div`
  width: 1200px;
  margin: 30px auto;
  text-align: center;
  width: 1200px;

  #label {
    width: 100px;
  }
`;
export const SBoardInput = styled.input`
  width: 70%;
  height: 70px;
  background: transparent;
  border: none;
  border-bottom: solid 3px gray;
  color: white;
  font-size: 25px;
  margin: 50px 0 20px 0;
`;
// export const SBoardSubmit = styled.input`
//   width: 100px;
//   height: 30px;
//   cursor: pointer;
// `;
export const SLabelImage = styled.label`
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;
export const SBoardImage = styled.input`
  display: none;
`;

// 디테일챌린지 게시판
export const SBoardWrapper = styled.div`
  width: 1200px;
  margin: 30px auto;
  // border: 1px solid gray;
`;

export const SBoardLi = styled.li`
  list-style: none;
  width: 100%;
  margin: 20px auto;
  padding: 15px 15px 0 15px;
  // border-top: 0.5px solid gray;
  // border-bottom: 0.5px solid gray;
  // // background-color: green;
  // background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23969696FF' stroke-width='4' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  #writer {
    font-size: 18px;
    color: gray;
    margin: 0;
  }

  div {
    // background-color: red;
    width: 100%;
    display: flex;
  }
  #content {
    // background-color: blue;
    width: 90%;
    font-size: 25px;
    color: white;
  }
`;

export const SDeleteBoardButton = styled.button`
  background: transparent;
  color: gray;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
export const SSpan = styled.span`
  width: 10%;
  display: flex;
`;
export const SUpdateBoardButton = styled.button`
  background: transparent;
  color: gray;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
export const SLikeBoardButton = styled.button`
  height: 25px;
  margin: auto 0;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #0000c5;
  width: 10%;
`;
