import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Madan Basnet - Python Developer',
	description:
		'Welcome to my portfolio! I am Madan Basnet, a passionate Python developer specializing in backend development, building scalable server architectures, and efficient APIs.',
	keywords: [
		'Python Developer',
		'Backend Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Madan Basnet',
		'Python',
		'Django',
		'Flask',
		'Distributed Systems',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: 'Madan Basnet' }],
	creator: 'Madan Basnet',
	openGraph: {
		title: 'Madan Basnet - Python Developer Portfolio',
		description: 'Passionate Python developer crafting scalable and efficient backend architectures. Explore my projects and technical expertise.',
		url: 'https://your-domain.com', // Replace with your actual domain later
		siteName: 'Madan Basnet - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Madan Basnet - Python Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Madan Basnet - Python Developer',
		description: 'Passionate Python developer crafting scalable and efficient backend architectures. Explore my projects and technical expertise.',
		creator: '@madanpx',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
