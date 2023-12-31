import { useDispatch, useSelector } from "react-redux";
import { setOnGoingMyChallenge } from "../../slice/ChallengeSlice";
import { useEffect } from "react";
import { api } from "../../api/api";

const GetOnGoingMyChallenge = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  const onGoindMyChallenge = () => {
    api
      .get("https://crithub.shop/api/challenge/list/mine/ongoing", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        dispatch(setOnGoingMyChallenge(res.data.data));
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
