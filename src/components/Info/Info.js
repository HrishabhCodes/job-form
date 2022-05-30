import React from "react";
import useStore from "../../store/store";

const Info = () => {
  const title = useStore((state) => state.title);
  const description = useStore((state) => state.description);
  const maxExp = useStore((state) => state.maxExp);
  const locations = useStore((state) => state.locations);
  const minExp = useStore((state) => state.minExp);
  const salary = useStore((state) => state.salary);
  const currency = useStore((state) => state.currency);
  const skills = useStore((state) => state.skills);
  const period = useStore((state) => state.period);

  let skillsList = "";
  for (let i = 0; i < skills.length; i++) {
    if (i === skills.length - 1) {
      skillsList += "'" + skills[i] + "'";
    } else skillsList += "'" + skills[i] + "', ";
  }

  let locationsList = "";
  for (let i = 0; i < locations.length; i++) {
    if (i === locations.length - 1) {
      locationsList += "'" + locations[i] + "'";
    } else locationsList += "'" + locations[i] + "', ";
  }

  return (
    <div className="info-cont">
      <div className="title">"Title": "{title}"</div>
      <div className="title">"Description": "{description}"</div>
      {maxExp === minExp ? (
        <div className="title">"Experience": "{maxExp}"</div>
      ) : (
        <div className="title">
          "Experience": "{minExp} - {maxExp}"
        </div>
      )}
      <div className="title">"Locations": [{locationsList}]</div>
      <div className="title">
        "Salary / Stipend": "{salary}, {currency}, {period}"
      </div>
      <div className="title">"Skills": [{skillsList}]</div>
    </div>
  );
};

export default Info;
