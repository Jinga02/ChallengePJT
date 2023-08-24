import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { api, getNewAccessToken } from "./api";
import { setUser } from "../slice/UserSlice";
import { persistor } from "../store";

const Token = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // 로그인 상태인 경우에만 인터셉터 설정
    if (user?.accessToken) {
      // 로컬 스토리지에서 사용자 데이터 가져오기
      const storedData = localStorage.getItem("persist:root");
      if (storedData) {
        // 사용자 데이터에서 accessToken과 refreshToken 추출
        const parsedData = JSON.parse(storedData);
        const usersData = JSON.parse(parsedData.users);
        const accessToken = usersData.accessToken;
        const refreshToken = usersData.refreshToken;

        // Request Interceptor 추가
        // interceptors.request.use()를 사용하여 모든 요청 전송 전에 실행되는 함수이다.
        api.interceptors.request.use(
          async (config) => {
            // accessToken이 있으면 요청에 헤더에 포함하여 보냄
            if (accessToken) {
              config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
          },
          (error) => {
            return Promise.reject(error);
          },
        );

        // Response Interceptor 추가
        // interceptors.response.use()는 모든 응답 수신 후에 실행되는 함수이다.
        api.interceptors.response.use(
          (response) => {
            return response;
          },
          async (error) => {
            // 응답이 에러인 경우 처리
            console.log(error);
            if (
              error.response &&
              (error.response.status === 500 || error.response.status === 401)
            ) {
              // 만료된 AccessToken으로 인증 실패한 경우
              // persistor.purge(); // 영구 저장된 모든 상태를 초기화
              try {
                // 새로운 AccessToken을 받아와서 다시 요청을 보냄
                const newAccessToken = await getNewAccessToken(refreshToken);
                // 사용자 정보와 새로운 AccessToken을 업데이트
                dispatch(
                  setUser({
                    id: user.id,
                    nickname: user.nickname,
                    accessToken: newAccessToken,
                    refreshToken: user.refreshToken,
                  }),
                );
                persistor.flush(); // 상태를 영구적으로 저장
                error.config.headers.Authorization = `Bearer ${newAccessToken}`;
                window.location.reload(); // 페이지 재시작
                return api.request(error.config);
              } catch (refreshError) {
                // RefreshToken으로 AccessToken 재발급에 실패한 경우
                console.error("Failed to get new access token:", refreshError);
                throw error;
              }
            }
            return Promise.reject(error);
          },
        );
      } else {
        console.log("No data found in localStorage.");
      }
    }
  }, [user?.accessToken, dispatch]);

  // 이하 생략...
};

export default Token;
