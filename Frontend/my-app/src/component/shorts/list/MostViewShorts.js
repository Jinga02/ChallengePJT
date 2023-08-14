<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { SShortsCard } from '../../../styles/pages/SMainPage';
import { SEmpty, SEmpty2 } from '../../../styles/pages/SCommunityPage';
import { SWrapper } from '../../../styles/SCommon';
import { SShortsContainer, SShortItem } from "../../../styles/pages/SMainPage";
import DetailShortModal from '../DetailShortModal';

const MostViewShorts = ({ shortsByView }) => {
  const [openDetailModal, setOpenDetailModal] = useState({});

  useEffect(() => {
    if (shortsByView) {
      const initialModalState = {};

      shortsByView.forEach((short) => {
        initialModalState[short.id] = false;
      });

      setOpenDetailModal(initialModalState);
    }
  }, [shortsByView]);

  const isAnyModalOpen = () => {
    return Object.values(openDetailModal).some((value) => value === true);
  };

  return (
    <SWrapper>
      <h1>조회순 쇼츠</h1>
      <hr/>
      <SEmpty2 />
      <SShortsContainer>
        {shortsByView &&
          shortsByView.map((short) => (
            <SShortItem key={short.id}>
              <img
                src={short.thumbnailUrl}
                alt={short.title}
                onClick={() =>
                  !isAnyModalOpen() &&
                  setOpenDetailModal({
                    ...openDetailModal,
                    [short.id]: !openDetailModal[short.id],
                  })
                }
              />
              <h2>{short.title}</h2>
              <p>♥ &nbsp; {short.likesCount}</p>
              
            </SShortItem>
          ))}


      </SShortsContainer>

      {shortsByView &&
        shortsByView.map((short) =>
          openDetailModal[short.id] ? (
            <DetailShortModal
              key={short.id}
              shortId={short.id}
              setOpenDetailModal={() =>
                setOpenDetailModal({
                  ...openDetailModal,
                  [short.id]: false,
                })
              }
            />
          ) : null
        )}
    </SWrapper>
  );
};

=======
import React, { useState, useEffect } from "react";
import { SShortsCard } from '../../../styles/pages/SMainPage';
import { SEmpty, SEmpty2 } from '../../../styles/pages/SCommunityPage';
import { SWrapper } from '../../../styles/SCommon';
import { SShortsContainer, SShortItem } from "../../../styles/pages/SMainPage";
import DetailShortModal from '../DetailShortModal';

const MostViewShorts = ({ shortsByView }) => {
  const [openDetailModal, setOpenDetailModal] = useState({});

  useEffect(() => {
    if (shortsByView) {
      const initialModalState = {};

      shortsByView.forEach((short) => {
        initialModalState[short.id] = false;
      });

      setOpenDetailModal(initialModalState);
    }
  }, [shortsByView]);

  const isAnyModalOpen = () => {
    return Object.values(openDetailModal).some((value) => value === true);
  };

  return (
    <SWrapper>
      <h1>조회순 쇼츠</h1>
      <hr/>
      <SEmpty2 />
      <SShortsContainer>
        {shortsByView &&
          shortsByView.map((short) => (
            <SShortItem key={short.id}>
              <img
                src={short.thumbnailUrl}
                alt={short.title}
                onClick={() =>
                  !isAnyModalOpen() &&
                  setOpenDetailModal({
                    ...openDetailModal,
                    [short.id]: !openDetailModal[short.id],
                  })
                }
              />
              <h2>{short.title}</h2>
              <p>♥ &nbsp; {short.likesCount}</p>
              
            </SShortItem>
          ))}


      </SShortsContainer>

      {shortsByView &&
        shortsByView.map((short) =>
          openDetailModal[short.id] ? (
            <DetailShortModal
              key={short.id}
              shortId={short.id}
              setOpenDetailModal={() =>
                setOpenDetailModal({
                  ...openDetailModal,
                  [short.id]: false,
                })
              }
            />
          ) : null
        )}
    </SWrapper>
  );
};

>>>>>>> 9ef782af2f69c513080be5cb10ef258c41b485e6
export default MostViewShorts;