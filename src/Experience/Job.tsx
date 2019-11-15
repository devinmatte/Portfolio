import React from 'react';
import '../styles/main.scss';

type JobProps = {
  range: string; 
  position: string;
  desciption: string;
}

const Job: React.FunctionComponent<JobProps> = ({position, range, desciption}) => {
  return (
    <div>
      <h5>{position} | {range}</h5>
			<p>{desciption}</p>
		</div>
  );
}

export default Job;