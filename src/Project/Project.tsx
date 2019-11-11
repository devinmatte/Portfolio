import React from 'react';
import '../styles/main.scss';

type ProjectProps = {
  name: string,
  description: string,
  imageKey: string
}

const Project: React.FunctionComponent<ProjectProps> = (props) => {
  const {name, description, imageKey, children} = props;
  const imageWebpSource = "images/projects/webp/" + imageKey + ".webp"
  const imagePngSource = "images/projects/png/" + imageKey + ".png"
  return (
    <article>
        <div className="image">
            <picture className="image">
                <source src={imageWebpSource} type="image/webp"/>
                <source src={imagePngSource} type="image/png"/>
                <img src={imagePngSource} data-position="center" alt={name + " Screenshot"}/>
            </picture>
        </div>
		<div className="content">
			<h3>{name}</h3>
			<p>{description}</p>
			<ul className="actions">
				{children}
			</ul>
		</div>
    </article>
  );
}

export default Project;