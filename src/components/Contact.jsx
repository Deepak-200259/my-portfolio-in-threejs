import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);

	const details = {
		templateID: "template_g8szjfm",
		serviceID: "service_gfibgec",
		key: "7Tiwzak_lwcCI7lSE",
		to_name: "Deepak Saini",
		to_email: "deepak952002@gmail.com",
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		const emailSent = () => {
			setLoading(false);
			alert("Thankyou for Contacting me. I'll get back to you ASAP!");
			setForm({ name: "", email: "", message: "" });
		};

		const errorOccured = (error) => {
			setLoading(false);
			console.log(error);
			alert("Oops! Something went Wrong");
		};

		emailjs
			.send(
				details.serviceID,
				details.templateID,
				{
					from_name: form.name,
					to_name: details.to_name,
					from_email: form.email,
					to_email: details.to_email,
					message: form.message,
				},
				details.key,
			)
			.then(emailSent, errorOccured);
	};
	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				<p className={styles.sectionSubText}>Get in Touch</p>
				<h3 className={styles.sectionHeadText}>Contact</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Enter your name here"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email ID</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Enter your email ID here"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
