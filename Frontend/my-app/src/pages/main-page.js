import {
  SEntranceButton,
  SEntranceButtonWrapper,
  SEntranceSlide,
  SEntranceLiButton,
  SEntranceSwiper,
} from "../styles/pages/SMainPage";
import SearchShorts from "../component/shorts/SearchShorts";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
const MainPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const openChallenge = () => {
    setIsOpen(!isOpen);
  };

  const user = useSelector((state) => state.users);
  const location = useLocation();
  const navigate = useNavigate();
  const [myChallenges, setMyChallenges] = useState([]);
  const getMyChallenge = () => {
    api
      .get("http://localhost:8080/challenge/list/mine", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setMyChallenges(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 상세보기 클릭
  const detailClick = (challenge) => {
    if (location.pathname === "/ChallengePage") {
      navigate(`/ChallengePage/${challenge.id}`, {
        state: { challenge },
      });
    }
  };
  useEffect(() => {
    getMyChallenge();
  }, []);
  console.log(myChallenges);
  console.log(isOpen);
  return (
    <>
      <SEntranceButtonWrapper>
        <SEntranceButton onClick={openChallenge}>바로입장</SEntranceButton>
        {isOpen ? null : (
          <SEntranceSwiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {myChallenges.map((challenge) => (
              <SEntranceSlide key={challenge.id}>
                <img
                  src="https://github.com/Jinga02/Review/assets/110621233/e8edd4c4-dd18-42d8-904c-4a04c6618018"
                  alt="예싱이미지"
                />
                <h4>{challenge.name}</h4>
                <p>
                  {challenge.info.length > 30
                    ? challenge.info.slice(0, 30) + "..."
                    : challenge.info}
                </p>
                <SEntranceLiButton>입장하기</SEntranceLiButton>
              </SEntranceSlide>
            ))}
          </SEntranceSwiper>
        )}
      </SEntranceButtonWrapper>
      <SearchShorts />
    </>
  );
};

export default MainPage;
