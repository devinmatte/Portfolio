import React from 'react';
import '../styles/main.scss';

type CompanyProps = {
  company: string
}

const Company: React.FunctionComponent<CompanyProps> = (props) => {
  const imageWebpSource = "images/companies/webp/" + props.company + ".webp"
  const imagePngSource = "images/companies/png/" + props.company + ".png"

  return (
    <article className="experience">
      <div className="image">
        <picture className="image">
          <source src={imageWebpSource} type="image/webp"/>
          <source src={imagePngSource} type="image/png"/>
          <img src={imagePngSource} data-position="center" alt={props.company}/>
        </picture>
      </div>
			<div className="content">
				<h3>{props.company}</h3>
        {props.children}
			</div>
	</article>
  );
}

export default Company;