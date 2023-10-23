import {
	cocos,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	cocos2d,
	tailwind,
	nodejs,
	git,
	chicmic,
	burgerRush,
	interactiveMap,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Cocos Game Developer",
		icon: cocos,
	},
	{
		title: "Three.JS Developer",
		icon: threejs,
	},
	// {
	// 	title: "Content Creator",
	// 	icon: creator,
	// },
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "Git",
		icon: git,
	},
	{
		name: "Cocos",
		icon: cocos2d,
	},
];

const experiences = [
	{
		title: "Cocos Game Developer (Intern)",
		company_name: "Chicmic",
		icon: chicmic,
		iconBg: "#383E56",
		date: "January 2023 - September 2023",
		points: [
			"Developing and maintaining web 2d games using Cocos2D and other related technologies such as Tiled, Texture Packer etc.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality 2D games.",
			"Developing 3D Game Experiences using webgl and frameworks like Three.JS and React three Fiber.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews of SonarQube and Creation of Documentations of particular Features for easy future uses.",
		],
	},
	// {
	//   title: "React Native Developer",
	//   company_name: "Tesla",
	//   icon: tesla,
	//   iconBg: "#E6DEDD",
	//   date: "Jan 2021 - Feb 2022",
	//   points: [
	//     "Developing and maintaining web applications using React.js and other related technologies.",
	//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	//     "Implementing responsive design and ensuring cross-browser compatibility.",
	//     "Participating in code reviews and providing constructive feedback to other developers.",
	//   ],
	// },
	// {
	//   title: "Web Developer",
	//   company_name: "Shopify",
	//   icon: shopify,
	//   iconBg: "#383E56",
	//   date: "Jan 2022 - Jan 2023",
	//   points: [
	//     "Developing and maintaining web applications using React.js and other related technologies.",
	//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	//     "Implementing responsive design and ensuring cross-browser compatibility.",
	//     "Participating in code reviews and providing constructive feedback to other developers.",
	//   ],
	// },
	// {
	//   title: "Full stack Developer",
	//   company_name: "Meta",
	//   icon: meta,
	//   iconBg: "#E6DEDD",
	//   date: "Jan 2023 - Present",
	//   points: [
	//     "Developing and maintaining web applications using React.js and other related technologies.",
	//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	//     "Implementing responsive design and ensuring cross-browser compatibility.",
	//     "Participating in code reviews and providing constructive feedback to other developers.",
	//   ],
	// },
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Burger Rush Game",
		description:
			"A simple 3D Game with simple controls developed in react three fiber in which the player need's to reach the end in minimum time possible to win the burger by avoiding the obstacles. Challenge is to reach within 5 seconds.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "three.js",
				color: "green-text-gradient",
			},
			{
				name: "react-three-fiber",
				color: "pink-text-gradient",
			},
		],
		image: burgerRush,
		source_code_link: "https://github.com/Deepak-200259/BurgerRush-R3F.git",
		live_link: "https://burger-rush.netlify.app/",
	},
	{
		name: "The Interactive 3D Map",
		description:
			"This is an interactive 3D World map developed by the usage of three.js framework that enables users to interact with the map for getting the bravery shown by Black Women's in Differents countries of the World.",
		tags: [
			{
				name: "three.js",
				color: "blue-text-gradient",
			},
			{
				name: "gsap",
				color: "green-text-gradient",
			},
			{
				name: "html",
				color: "pink-text-gradient",
			},
		],
		image: interactiveMap,
		source_code_link: "https://github.com/Deepak-200259/Flavilla-ThreeJs",
		live_link: "https://flavilla-testing.netlify.app/",
	},
	// {
	// 	name: "Trip Guide",
	// 	description:
	// 		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	// 	tags: [
	// 		{
	// 			name: "nextjs",
	// 			color: "blue-text-gradient",
	// 		},
	// 		{
	// 			name: "supabase",
	// 			color: "green-text-gradient",
	// 		},
	// 		{
	// 			name: "css",
	// 			color: "pink-text-gradient",
	// 		},
	// 	],
	// 	image: tripguide,
	// 	source_code_link: "https://github.com/",
	// },
];

export { services, technologies, experiences, testimonials, projects };
