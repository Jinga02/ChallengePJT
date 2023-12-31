// BoardCard 컴포넌트
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SBoardCard, SBoardItemTitle,SBoardItemWriter, SBoardItemViews, SBoardTitle, SHr2, SPrimaryButton } from '../../styles/pages/SCommunityPage';

const BoardCard = ({ classification, boards }) => {
  const maxBoardArticle = 6;

  const handleGoToDetail = () => {
    // 자세히 보기 버튼을 누를 때 해당 경로로 이동합니다.
    // 예를 들어, /CommunityBoardPage/:classification 경로로 이동하도록 합니다.
    window.location.href = `/CommunityBoardPage/${classification}`;
  };

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 200,
      easing: "ease-in-out",
      once: false,
      delay: 50,
      anchorPlacement: "bottom-top",
    });
  
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div data-aos="flip-up">
    <SBoardCard onClick={handleGoToDetail}>
      <h1>{classification}</h1>
      <SBoardTitle />
      {boards
      .filter((board) => board.classification === classification)
      .slice(0, maxBoardArticle)
      .map((board, index) => (
        <div key={board.id}>
          <div className="board-item">
            <SBoardItemTitle>{board.title}</SBoardItemTitle>
            <SBoardItemWriter>{board.writer}</SBoardItemWriter>
            <SBoardItemViews>조회수: {board.views}</SBoardItemViews>
          </div>
            <SHr2 />
          </div>
        ))}
        <SPrimaryButton className="gotodetail" onClick={handleGoToDetail}>게시판 입장</SPrimaryButton>
    </SBoardCard>
    </div>
  );
};

export default BoardCard;
