import React from 'react';

const Gif = (props) => {
    const { gifId} = props;
    const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;

    return (
    <div>
      <img src={url} alt="gif" />
    </div>
  );
};

export default Gif;
