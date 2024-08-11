import React from 'react';
import parse from 'html-react-parser';

function ResumeItem({icon, year, title, desc}) {
  return (
   <div className="resume__item">
        <div className="resume__icon">{icon}</div>
        <soan className="resume__date">{year}</soan>
        <h3 className="resume__subtitle">{parse(title)}</h3>
        <p className="resume__description">{desc}</p>
   </div>
  );
};

export default ResumeItem