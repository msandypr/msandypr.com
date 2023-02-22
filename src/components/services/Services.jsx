import React, {useState} from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">If you ask what I can do, I can ...</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Apps <br/> Development</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Apps Development</h3>
                        <p className="services__modal-description">Service With More Than 1 Years Of Experience. Providing Quality Work To Clients and Companies.</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I can be a FrontEnd/BackEnd role</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop websites/apps from zero</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Responsive websites/apps</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">API/RESTful API.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Database Management</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">IT Project <br/> Manager</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">IT Project Manager</h3>
                        <p className="services__modal-description">I don't really have experience managing project it in the industrial world, but I do have experience when there are college assignments or organizational events, so what I can do is</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Manage project execution to ensure adherence to budget, schedule, and scope</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop or update project plans for information technology projects including project objectives, technology, systems, information specifications, schedules, funding, and staffing</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Monitor and evaluate the progress of the project and ensure everything is on schedule</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Confer with project personnel to identify and resolve problems</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Develop and manage work breakdown structures on information technology projects</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-cloud services__icon"></i>
                    <h3 className="services__title">Cloud <br/> Engineer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Cloud Engineer</h3>
                        <p className="services__modal-description">I don't really have experience for cloud computing in the industrial world, but i experienced following <a href="https://bangkit.academy">Bangkit Academy by Google</a> with cloud computing learning path</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Plan, develop and design cloud-based software and applications</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Migrate existing system data to cloud-based applications</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Work and collaborate on and troubleshoot with technical teams to identify and implement cloud solutions</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Perform system monitoring across cloud infrastructure</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Automate cloud-based platforms and functions across systems</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services