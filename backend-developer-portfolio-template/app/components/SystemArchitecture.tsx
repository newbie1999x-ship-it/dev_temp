'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Ecommerce Website',
							description:
								'Developed a comprehensive ecommerce platform with user-friendly shopping features, product management, and secure checkout system.',
							details: [
								'Implemented user registration, login, and profile management using Django’s authentication system',
								'Created an intuitive and responsive frontend with HTML, CSS, and JavaScript',
								'Built robust backend with Django for managing products, categories, and orders',
								'Integrated Stripe API for secure and smooth payment processing',
								'Designed database schemas and managed data with PostgreSQL',
								'Added search functionality and filtering options to enhance user experience',
							],
							tech: ['Python', 'Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Stripe API'],
						},
						{
							title: 'Task Management System',
							description:
								'Built a web-based task management app to help users organize and prioritize daily tasks.',
							details: [
								'Developed user authentication and role-based access control',
								'Implemented task creation, editing, and deadline notifications',
								'Designed responsive UI with Django templates and Bootstrap',
								'Integrated REST API for mobile app support',
								'Optimized database queries to improve load times by 30%',
								'Wrote unit and integration tests to ensure reliability',
							],
							tech: ['Django', 'REST Framework', 'Bootstrap', 'SQLite', 'Docker', 'PostgreSQL'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span
										key={i}
										className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
