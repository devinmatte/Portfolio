import '../styles/main.scss';

import React from 'react';

interface JobProps {
  range: string;
  position: string;
  desciption: string;
}

const Job: React.FunctionComponent<JobProps> = ({ position, range, desciption }) => {
  return (
    <div>
      <h5>{position} | {range}</h5>
      <p>{desciption}</p>
    </div>
  );
}

export default Job;