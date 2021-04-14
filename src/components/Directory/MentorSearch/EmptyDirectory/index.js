import React from 'react';

const EmptyDirectory = () => {
  return (
    <div className="BannerContainer">
      <div className="mainText"> Your search came back empty. Oh well. </div>
      <div className="subText">
        See if you can try another relevant keyword.
      </div>
    </div>
  );
};

export default EmptyDirectory;
