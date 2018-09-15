import React from "react";
import { Button } from "antd";

const ZoomControls = ({ onZoomIn, onZoomOut, onZoomReset }) => {
  return (
    <div>
      <Button onClick={onZoomReset} icon="retweet" />
      <Button onClick={onZoomIn} icon="plus" />
      <Button onClick={onZoomOut} icon="minus" />
    </div>
  );
};

export default ZoomControls;
