/* eslint-disable react/no-unescaped-entities */
// import { Fragment } from "react";
// import "./index.css";

// export function WhatAndWhy() {
// 	return (
// 		<Fragment>
// 			<section className="main__what-and-why flexbox">
// 				<div className="main__what-and-why_top flexbox">
// 					<div className="main__what-and-why_top-left flexbox">
// 						image
// 					</div>

// 					<div className="main__what-and-why_top-right">
// 						<h1>
// 							What is <span>CraftConnect</span>
// 						</h1>

// 						<p>{renderTopSectionTexts()}</p>
// 					</div>
// 				</div>

// 				<div className="main__what-and-why_bottom flexbox">
// 					<div className="main__what-and-why_bottom-left flexbox">
// 						image
// 					</div>
// 					<div className="main__what-and-why_bottom-right flexbox">
// 						{renderBottomSectionTexts()}
// 					</div>
// 				</div>
// 			</section>
// 		</Fragment>
// 	);
// }

// function renderTopSectionTexts() {
// 	let pTexts;

// 	pTexts = [
// 		`CraftConnect is your go-to platform for seamlessly connecting with skilled professionals for your home improvement needs.`,
// 		`Say goodbye to the hassle of endless searches and stressful negotiations.`,
// 		`With CraftConnect, you're just a few clicks away from finding the right craftsmen for your project.`,
// 	];

// 	return pTexts.map((text, index) => {
// 		return <span key={index}>{text}</span>;
// 	});
// }

// function renderBottomSectionTexts() {
// 	let divTexts, texts;

// 	divTexts = [
// 		{
// 			icon: "",
// 			title: "skip the search",
// 			description:
// 				"No more scrolling through endless lists or clicking on multiple websites. CraftConnect streamlines the process, saving you time and effort.",
// 		},
// 	];

// 	texts = divTexts.map((text, index) => {
// 		const { icon, title, description } = text;

// 		return (
// 			<Fragment key={index}>
// 				<li>
// 					<h3>
// 						<i>{icon}</i>
// 						<span>{title}</span>
// 					</h3>

// 					<p>{description}</p>
// 				</li>
// 			</Fragment>
// 		);
// 	});

// 	return (
// 		<Fragment>
// 			<ul>{texts}</ul>
// 		</Fragment>
// 	);
// }


import { Fragment } from "react";
import "./index.css";

export function SectionWhy() {
	return (
		<Fragment>
            <section className="why">
                <div className="whyImageDiv">
                <WhyImage/>
                </div>

                <div className="write">
                    <div className="writeUps1" >
                        <div className="wtitle">
                            <img src="./Icon1.svg" className="iconimg" alt="IconImage" />
                           
                            <h1 className="writeUps__title">Skip The Search</h1>   
                        </div>
                        <div className="wtitle_p">
                            <p className="writeUps__text">
                                No more scrolling through endless lists 
                                or clicking on multiple websites.
                            </p>
                            <p>
                                CraftConnect streamlines the process, saving you time and effort.
                            </p>
                        </div>
                    
                    </div>
                    <div className="writeUps2" >
                        <div className="wtitle2">
                                <img src="./Icon2.svg" className="iconimg" alt="IconImage" />
                                <h1 className="writeUps__title">Stress-Free Quotes</h1>
                        </div>
                        <div className="wtitle_p">
                            <p className="writeUps__text">
                                Gone are the days of negotiating quotes. 
                                CraftConnect ensures transparent pricing every step of the way.
                                Know exactly what you're paying for without the stress.
                            </p>
                        </div>
                        
                    </div>

                    <div className="writeUps3" >
                        <div className="wtitle3">
                            <img src="./Icon3.svg" className="iconimg" alt="IconImage" />
                            <h1 className="writeUps__title">User-Friendly Platform</h1>
                        </div>
                        <div className="wtitle_p">
                            <p className="writeUps__text">
                            Our platform is designed with you in mind. It's user-friendly, 
                            making it easy for you to navigate, explore, 
                            and connect with the perfect craftsmen for your project.
                            </p>
                        </div>
                        
                    </div>
                    <div className="writeUps4" >
                        <div className="wtitle4">
                            <img src="./Icon4.svg" className="iconimg" alt="IconImage" />
                            <h1 className="writeUps__title">Transparent Pricing</h1>
                        </div>
                        <div className="wtitle_p">
                            <p className="writeUps__text">
                            CraftConnect believes in transparency.
                             Know the pricing upfront, 
                             so you can make informed decisions without any surprises.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>

        </Fragment>
    );
}

function WhyImage() {
    return (
        <div to="/" className="whyimage">
            <img src="/why.svg" alt="why_chose_CraftConnect"/>
        </div>
    );
}