import React from "react";

const Interests = ({ data, setData }) => {
  const { interests } = data;
  const handleDataChange = (e, name) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
          Music
        </label>
        <label>
          <input
            type="checkbox"
            name="movies"
            checked={interests.includes("movies")}
            onChange={handleDataChange}
          />
          Movies
        </label>
      </div>
    </div>
  );
};

export default Interests;
