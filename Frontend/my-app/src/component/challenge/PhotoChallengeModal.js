import { SPhotochallengeWrapper } from "../../styles/pages/SChallengePage";

const PhotoChallengeModal = ({ challengeData, closePhotoModal }) => {
  console.log(challengeData);
  api
    .post("https://i9d201.p.ssafy.io/api/cert/img", {
      challengeId,
      outTime,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <SPhotochallengeWrapper>
      <button onClick={closePhotoModal}>나가기</button>
    </SPhotochallengeWrapper>
  );
};

export default PhotoChallengeModal;
