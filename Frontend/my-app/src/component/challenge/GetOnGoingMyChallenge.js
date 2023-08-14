import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { setOnGoingMyChallenge } from "../../slice/ChallengeSlice";
=======
import { setOnGoingChallenge } from "../../slice/ChallengeSlice";
>>>>>>> 9ef782af2f69c513080be5cb10ef258c41b485e6
import { useEffect } from "react";
import { api } from "../../api/api";

const GetOnGoingMyChallenge = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  const onGoindMyChallenge = () => {
    api
<<<<<<< HEAD
      .get("https://i9d201.p.ssafy.io/api/challenge/list/mine/ongoing", {
=======
      .get("https://i9d201.p.ssafy.io/api/challenge/list/ongoing", {
>>>>>>> 9ef782af2f69c513080be5cb10ef258c41b485e6
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
<<<<<<< HEAD
        dispatch(setOnGoingMyChallenge(res.data.data));
=======
        dispatch(setOnGoingChallenge(res.data.data));
>>>>>>> 9ef782af2f69c513080be5cb10ef258c41b485e6
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    onGoindMyChallenge();
  }, []);
  return;
};

export default GetOnGoingMyChallenge;
