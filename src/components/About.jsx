import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<div className="flex justify-center items-center">
			<Tilt className="xs:w-[250px] w-full">
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient div-[1px] rounded-[20px] shadow-card">
					<div
						options={{ max: 45, scale: 1, speed: 450 }}
						className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] h-20 flex max-w-[250px] justify-contain items-center flex-col">
						<img
							src={icon}
							alt="title"
							className="w-16 h-16 mt-8 object-contain"
						/>
						<h3 className="text-white text-[20px] mt-4 font-bold text-center">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</div>
	);
};

const About = () => {
	return (
		<>
			<motion.div>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				I'm a Beginner Software Developer with hand's on Experience in
				TypeScript, JavaScript, and expertise in frameworks like React, Three.js
				and React Three Fiber. Along with that I have worked as Cocos Game
				Developer and has hands on Experience on Cocos2d Gaming Engine and Tiled
				Software. I'm a quick learner and collaborate efficienty with team
				members possessing leadership skills. Let's Work together to bring new
				ideas to life.
			</motion.p>
			<div className="ml-20 sm:ml-0 mt-10 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
