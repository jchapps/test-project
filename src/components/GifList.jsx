import React from "react";
import Gif from "./Gif";

const GifList = (props) => {
  const { gifIds } = props;
  return (
    <div className="gifGrid">
      {gifIds.map((gifId) => (
        <Gif gifId={ gifId } key={ gifId } />
      ))}
    </div>
  );
};

export default GifList;
