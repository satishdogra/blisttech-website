import React from 'react'
import styles from './AboutMain.module.css';
import Image from 'next/image';

export default function AboutMain() {
    return (
        <>
            <div className={`container py-5 ${styles.about}`}>
                <div className="row">
                    <div className="col-7">
                        <p>BlistTech, a pioneering web design and development company in India offers best-in-className web design and development services at great prices.
                            Bestowed with the most professional resources, we bring the guaranteed results for your online business.</p><br />
                        <h4>Who We Are?</h4>
                        <p>We are a full-service IT company offering web design and development services. With more than 10+ years of experience, 1000+ clients across all 6 continents and 2,000 projects, BlistTech is a strong design and development agency beating their competitors using the latest technology.
                            We value teamwork, honesty, quality and passion. Being an eminent web design and development company in India, our Company has gained a great reputation for web design and development services. We have created great experiences for our clients around the globe.
                            Our team of designers and developers focus on the latest technology and render the best solutions for great outcomes.</p>
                    </div>
                    <div className="col-5">
                        <Image src="/images/aboutmain/About/about-team.jpg" alt="Description of the image" width={451} height={241} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h4>What We Do?</h4>
                        <p>Our company offers award-winning web solutions i.e. web design, web development and other IT solutions. We are committed to exceeding the level of performance. Our professional developers deliver customized solutions that attract visibility and traffic. At BlistTech, you'll experience matchless customer support and service. In other words, we are a one-stop web design and development company. From web hosting to web design, web development to portal development, our Company has it all.</p>
                    </div>
                    <div className="col-6">
                        <div className='row'>
                            <div className="col-6">
                                <h4>Vision</h4>
                                <p>To be the web design and development company that understands the clients’ businesses and strives hard to achieve success by nurturing a pool of partners and client through mutual understanding and loyalty.</p>
                            </div>
                            <div className="col-6">
                                <h4>Mission</h4>
                                <p>Our mission is to deliver world-class products and services, provide innovate solutions with emerging technology and satisfy clients to the fullest.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Services Offered At Us */}
                <div className='row'>
                    <div className={`col-12 ${styles.services}`}>
                        <h3>Services Offered At Us</h3>
                        <div className='row'>
                            <div className='col-4'> <p>Website Designing</p>
                                <p>Responsive Web Design</p>
                                <p>Website Redesign</p>
                                <p>Application Designing</p>
                            </div>
                            <div className='col-4'> <p>Website Designing</p>
                                <p>Responsive Web Design</p>
                                <p>Website Redesign</p>
                                <p>Application Designing</p>
                            </div>
                            <div className='col-4'> <p>Website Designing</p>
                                <p>Responsive Web Design</p>
                                <p>Website Redesign</p>
                                <p>Application Designing</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Web Design and Development */}
                <div className={`col-12 ${styles.services}`}>
                    <h3>Why BlistTech For Web Design and Development?</h3>
                    <p><strong>Years of Experience:</strong> Our Company takes every project as an opportunity to perform better and exceed clients’ expectations.</p>
                    <p><strong>Efficient Team:</strong> Our Company has a team of 100+ IT professionals who are passionate and motivated to design and develop mobile and web projects. By formulating the right strategy, we save our clients' time and money.</p>
                    <p><strong>Communication:</strong> Good communication is the key to success for companies. At BlistTech, we understand clients' requirements and stay in touch with clients.

                    </p>
                    <p><strong>Everything Under One Roof:</strong> Our IT Company offers design, development, mobile apps, branding and conversion services. Whichever are your business requirements, BlistTech has the solution.

                        BlistTech, the leading web design and development Company, ensures you to have a strong online presence through our quality web design and development services. Our team of expert designers, coders and developers has great experience in developing applications to give a boost to your business.

                        Are you looking for the best web design and development company? Your search ends. Ready to discuss your requirements? Request for free consulation. Our top-rated designers and developers craft custom web design and development solutions to meet your needs.</p>

                </div>
            </div>
        </>
    )
}
