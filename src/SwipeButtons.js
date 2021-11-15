import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <iconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </iconButton>
      <iconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </iconButton>
      <iconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </iconButton>
      <iconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </iconButton>
      <iconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </iconButton>
    </div>
  );
}

export default SwipeButtons;
