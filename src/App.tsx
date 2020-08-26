import React from 'react';
import './styles/main.scss';
import Job from './Experience/Job';
import Company from './Experience/Company'
import Project from './Project/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const App: React.FC = () => {
  const today = new Date();
  return (
    <div id={"page-wrapper"} className={"App"}>

      <div className={"wrapper"}>
        <div className={"inner"}>

          <header id={"header"}>
            <a href={"/"} className={"logo"}>Devin Matte <span>Full Stack Software Engineer</span></a>
          </header>

          <section id={"banner"}>
            <div className={"items"}>
              <section className={"accent1"}>
                <h1>Devin Matte</h1>
                <p>Software Engineering Student at Rochester Institute of Technology with a focus on Full Stack Web Development and DevOps</p>
                <ul className={"actions"}>
                  <li><a href={"https://resume.devinmatte.com"} className={"button special fit"} title={"Resume"}>Resume</a></li>
                  <li><a href={"https://github.com/devinmatte"} className={"button special fit"} title={"GitHub"}>GitHub</a></li>
                </ul>
              </section>
            </div>
            <div className={"slider"}>
              <article>
                <img src={"/images/devinmatte.jpg"} alt={"Devin Matte Image"} data-position={"fit right"} />
              </article>
            </div>
          </section>

          <section className={"main accent2"}>
            <header className={"major"}>
              <h2>Experience</h2>
            </header>
            <div className={"spotlights"}>
              <Company company={"Datadog"}>
                <Job
                  position={"Software Engineering Intern"}
                  range={"Aug 2020 - Present"}
                  desciption={"Full-time Software Engineer on the Data Engineering Infrastructure team building out tools for data engineers to run Apache Spark pipelines for data processing."}
                />
                <Job
                  position={"Software Engineering Intern"}
                  range={"Jan 2020 - May 2020"}
                  desciption={"Full-time Software Engineer on the Data Engineering Infrastructure team building out tools for data engineers to run Apache Spark pipelines for data processing. Built out a new frontend with React in TypeScript for the product."}
                />
              </Company>
              <Company company={"Apple"}>
                <Job
                  position={"Software Engineering Intern"}
                  range={"May 2020 - Aug 2020"}
                  desciption={"Interned on the Developer Tools Team builing a stability tracking application. Built using React, Typescript, Swift, and Kubernetes."}
                />
              </Company>
              <Company company={"Constant Contact"}>
                <Job
                  position={"Remote Software Engineering Intern"}
                  range={"Aug 2019 - Dec 2019"}
                  desciption={"Asked to continue work remotely to help build the new marketing calendar features, including Google Calendar and Outlook integrations. Worked in Java with AWS Lambdas and S3."}
                />
                <Job
                  position={"Software Engineering Intern"}
                  range={"Jun 2019 - Aug 2019"}
                  desciption={"Contributed to the main customer facing campaigns page, social campaign inbox and the mailchimp import tool. Worked in Java with Springboot, and Javascript with React and Angular.js."}
                />
              </Company>
              <Company company={"Datto"}>
                <Job
                  position={"Software Engineering Intern"}
                  range={"Jan 2019 - May 2019"}
                  desciption={"Built new backup features for their flagship product as well as web interfaces for restoring them in the web. Designed a new metrics tracking system using Datadog for metric hosting. Worked in PHP with Symfony, ZFS, Typescript, Javascript, Docker, ESX, Hyper-V and Windows Services."}
                />
                <Job
                  position={"Software Engineering Intern"}
                  range={"May 2018 - Aug 2018"}
                  desciption={"Worked on building the administrative portal for the company. Retired tens of thousands of lines of legacy code. Worked in PHP with Symfony, Javascript, MySQL, Apache, Docker, and Ubuntu."}
                />
              </Company>
              <Company company={"Zorus"}>
                <Job
                  position={"Software Engineer"}
                  range={"Jun 2017 - Aug 2019"}
                  desciption={"Worked during startup stages as one of three engineers at the company. Built a customer portal and corresponding servers from the ground up. Worked in PHP using Slim, Javascript, Python, NGINX, MySQL and AWS."}
                />
              </Company>
            </div>
          </section>

          <section className={"main accent3"}>
            <header className={"major"}>
              <h2>Projects</h2>
            </header>
            <div className={"projects"}>
              <Project
                name={"Packet"}
                description={"Packet is a web application used by Computer Science House to replace a paper signature system used when new members apply. The system keeps track of signatures, allows people to sign packets, sends push notifications and emails. Built using Python and Flask, with SQLAlchemy, FreeIPA LDAP and behind OIDC auth."}
                imageKey={"packet"}
              >
                <li><a href={"https://github.com/ComputerScienceHouse/packet"} className={"button special"}>Github</a></li>
              </Project>
              <Project
                name={"ScheduleMaker"}
                description={"Maintain and contribute as the primary maintainer to an Open Source web app used by over 8,000 students each semester at RIT to build their class schedules. Implemented new features and improving the codebase using PHP and Angular."}
                imageKey={"schedulemaker"}
              >
                <li><a href={"https://github.com/ComputerScienceHouse/schedulemaker"} className={"button special"}>Github</a></li>
                <li><a href={"https://schedule.csh.rit.edu"} className={"button special"}>Visit</a></li>
              </Project>
              <Project
                name={"OpenShift (OKD) Cluster"}
                description={"Stood up a fully functional, multi-user OpenShift Origin Cluster. The cluster is built of 15 nodes, 5 master, 5 etcd, and a load balancer. The cluster supports over 100 projects currently including our GitLab, Keycloak SSO, and s3 instances."}
                imageKey={"openshift"}
              >
                <li><a href={"https://devinmatte.me/deploying-openshift"} className={"button special"}>Blog Post</a></li>
              </Project>
            </div>
          </section>

        </div>
      </div>
      <div className={"wrapper"}>
        <div className={"inner"}>

          <footer id={"footer"}>
            <ul className={"actions"}>
              <li><a href={"https://linkedin.com/in/devinmatte"} className={"button small special fit"} title={"LinkedIn"}><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href={"https://github.com/devinmatte"} className={"button small special fit"} title={"GitHub"}><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>
            <p className={"copyright"}>&copy;{today.getFullYear()} Devin Matte <br />Code on <a href={"https://github.com/devinmatte/Portfolio"}>GitHub</a>
            </p>
          </footer>

        </div>
      </div>

    </div>
  );
}

export default App;
