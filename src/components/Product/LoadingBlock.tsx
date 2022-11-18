import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={537}
      viewBox="0 0 300 550"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="6" y="333" rx="3" ry="3" width="286" height="30" />
      <circle cx="150" cy="153" r="150" />
      <rect x="222" y="495" rx="0" ry="0" width="63" height="24" />
      <rect x="207" y="372" rx="0" ry="0" width="0" height="8" />
      <rect x="17" y="485" rx="0" ry="0" width="144" height="47" />
      <rect x="7" y="383" rx="0" ry="0" width="283" height="58" />
    </ContentLoader>
  );
}
export default LoadingBlock;

//  <ContentLoader
//    className="pizza-block"
//    speed={2}
//    width={280}
//    height={460}
//    viewBox="0 0 280 460"
//    backgroundColor="#f3f3f3"
//    foregroundColor="#ecebeb"
//  >
//    <circle cx="132" cy="142" r="115" />
//    <rect x="0" y="273" rx="3" ry="3" width="280" height="26" />
//    <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
//    <rect x="0" y="418" rx="3" ry="3" width="91" height="31" />
//    <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
//  </ContentLoader>;
