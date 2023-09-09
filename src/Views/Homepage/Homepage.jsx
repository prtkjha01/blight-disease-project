import React, { useState } from "react";
import "./Styles/styles.css";
const Homepage = () => {
  const sisstummm = [1, 2, 3, 4, 5];
  const handleInput = (e) => {
    console.log(e.target.files);
  };
  const [showUpload, setShowUpload] = useState(false);
  const [selected, setSelected] = useState(
    [false, false, false, false, false]
    //sisstummm.forEach((item) => false)
  );
  const handleCardClick = (index) => {
    let newSelected = Array(sisstummm.length).fill(false);
    newSelected[index] = !newSelected[index];
    //!newSelected[index];
    setSelected(newSelected);
    console.log(selected);
    setShowUpload(true);
    console.log(showUpload);
  };
  const SelectedView = () => {
    return showUpload ? (
      <div className="input-wrapper">
        <label className="file-input-label" htmlFor="file-input">
          <div className="file-input-box">Click to upload a file</div>
        </label>
        <input
          className="file-input"
          type="file"
          name=""
          id="file-input"
          onInput={(e) => handleInput(e)}
        />
      </div>
    ) : (
      <div />
    );
  };
  return (
    <div>
      <div className="homepage-wrapper">
        <div className="card-grid">
          {sisstummm?.map((item, index) => {
            return (
              <div
                className={"card" + (selected[index] ? "-selected" : "")}
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-image-wrapper">
                  <img
                    src="https://media.defense.gov/2014/Feb/14/2000779845/-1/-1/0/140213-A-CE999-053.JPG"
                    alt=""
                    className="card-image"
                  />
                </div>
                <div className="card-text">Kisi cheez ka patta</div>
              </div>
            );
          })}
        </div>
        <SelectedView />
      </div>
    </div>
  );
};

export default Homepage;
