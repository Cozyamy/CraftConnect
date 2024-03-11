/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import "./index.css";

export function WhatAndWhy() {
	return (
		<Fragment>
			<section className="main__what-and-why flexbox">
				<div className="main__what-and-why_top flexbox">
					<div className="main__what-and-why_top-left flexbox">
						image
					</div>

					<div className="main__what-and-why_top-right">
						<h1>
							What is <span>CraftConnect</span>
						</h1>

						<p>{renderTopSectionTexts()}</p>
					</div>
				</div>

				<div className="main__what-and-why_bottom flexbox">
					<div className="main__what-and-why_bottom-left flexbox">
						image
					</div>
					<div className="main__what-and-why_bottom-right flexbox">
						{renderBottomSectionTexts()}
					</div>
				</div>
			</section>
		</Fragment>
	);
}

function renderTopSectionTexts() {
	let pTexts;

	pTexts = [
		`CraftConnect is your go-to platform for seamlessly connecting with skilled professionals for your home improvement needs.`,
		`Say goodbye to the hassle of endless searches and stressful negotiations.`,
		`With CraftConnect, you're just a few clicks away from finding the right craftsmen for your project.`,
	];

	return pTexts.map((text, index) => {
		return <span key={index}>{text}</span>;
	});
}

function renderBottomSectionTexts() {
	let divTexts, texts;

	divTexts = [
		{
			icon: "",
			title: "skip the search",
			description:
				"No more scrolling through endless lists or clicking on multiple websites. CraftConnect streamlines the process, saving you time and effort.",
		},
	];

	texts = divTexts.map((text, index) => {
		const { icon, title, description } = text;

		return (
			<Fragment key={index}>
				<li>
					<h3>
						<i>{icon}</i>
						<span>{title}</span>
					</h3>

					<p>{description}</p>
				</li>
			</Fragment>
		);
	});

	return (
		<Fragment>
			<ul>{texts}</ul>
		</Fragment>
	);
}
