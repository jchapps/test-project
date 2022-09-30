import React from 'react';
import Gif from "./Gif"

const GifList = (props) => {
  const { gifIds } = props
  return (
    <div className='gifGrid'>
      { gifIds.map(
        (gifId) => <Gif gifId={gifId} key={gifId}/>
      )}
    </div>
  );
};

export default GifList;

{/* <Gif gifId="3o85xsGXVuYh8lM3EQ"/>
      <Gif gifId="riwAaDlaA3zQQ"/>
      <Gif gifId="aFTt8wvDtqKCQ"/>
      <Gif gifId="bGgsc5mWoryfgKBx1u"/>
      <Gif gifId="Z8k6qo0AVIsPdROQNd"/>
      <Gif gifId="1Bh2nNww4IFE9rQZ3S"/>
      <Gif gifId="w36LqLo57gmvXa7wjf"/>
      <Gif gifId="3o7abKhOpu0NwenH3O"/>
      <Gif gifId="SRn9TUPpFuQAU"/> */}
