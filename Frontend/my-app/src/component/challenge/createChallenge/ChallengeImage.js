import { useState } from "react";
import { SChallengeImage } from "../../../styles/pages/SChallengePage";

const ChallengeImage = ({ onChangeImage }) => {
<<<<<<< HEAD
  const [image, setImage] = useState(null);
  const onChallengeImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    onChangeImage(file);
=======
  const [image, setImage] = useState();
  const onChallengeImage = (e) => {
    const file = e.target.files[0]; // 사용자가 선택한 이미지 파일
    setImage(file);
    onChangeImage(file); // 부모 컴포넌트로 선택한 이미지 파일 전달
>>>>>>> eefece12ef9b8a0f19f9cae4154daf5b92ec8427
  };

  // 이미지 프리뷰 URL 생성
  const imageURL = image ? URL.createObjectURL(image) : null;

  return (
    <SChallengeImage>
<<<<<<< HEAD
      <div>{imageURL && <img src={imageURL} alt="챌린지 썸네일" />}</div>
      <label htmlFor="image">대표 이미지 설정</label>
      <input type="file" accept="image/*" onChange={onChallengeImage} />
=======
      <div>{image}</div>
      <label htmlFor="image">대표 이미지 설정</label>
      <input type="file" accept="image/*" onChange={onChallengeImage} />{" "}
>>>>>>> eefece12ef9b8a0f19f9cae4154daf5b92ec8427
    </SChallengeImage>
  );
};

export default ChallengeImage;
