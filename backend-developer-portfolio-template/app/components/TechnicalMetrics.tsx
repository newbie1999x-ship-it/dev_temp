'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* System Performance */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">System Performance</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Django API Backend</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>Built simple REST APIs using Django framework</li>
									<li>Connected Django with MySQL database</li>
									<li>Handled basic CRUD operations and routing</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Java Fundamentals</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>Learned Java syntax and OOP concepts</li>
									<li>Built small projects like a student management system</li>
									<li>Explored basic GUI development with Java Swing</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Infrastructure & DevOps */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Infrastructure & DevOps (Beginner Focused)</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Project Setup & Deployment</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>Deployed simple Django apps using Heroku and Netlify</li>
									<li>Learned basics of Docker for containerizing applications</li>
									<li>Managed virtual environments and dependencies with pip and virtualenv</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Version Control & Collaboration</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>Used Git for source code management and version control</li>
									<li>Created branches and merged changes through GitHub pull requests</li>
									<li>Practiced collaborative workflows with team members</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Development & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Development & Leadership (Beginner Focused)</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Learning & Collaboration</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>Completed multiple small Django projects to solidify backend skills</li>
									<li>Collaborated with peers on coding exercises and group projects</li>
									<li>Followed best practices by writing clean and readable code</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Personal Growth & Contributions</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>Maintained project documentation to improve understanding and onboarding</li>
									<li>Participated in online coding communities and code reviews</li>
									<li>Explored version control workflows using Git and GitHub</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
