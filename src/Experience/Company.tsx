import React from 'react';
import '../styles/main.scss';

type CompanyProps = {
  company: string
}

const Company: React.FunctionComponent<CompanyProps> = (props) => {
  const {company, children} = props;
  const imageWebpSource = "images/companies/webp/" + encodeURI(company) + ".webp"
  const imagePngSource = "images/companies/png/" + encodeURI(company) + ".png"

  return (
    <article className="experience">
      <div className="image">
        <picture className="image">
          <source srcSet={imageWebpSource} type="image/webp"/>
          <source srcSet={imagePngSource} type="image/png"/>
          <img src={imagePngSource} data-position="center" alt={company}/>
        </picture>
      </div>
			<div className="content">
				<h3>{company}</h3>
        {children}
			</div>
	</article>
  );
}

export default Company;