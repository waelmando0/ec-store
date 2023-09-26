import { Urbanist } from 'next/font/google';

import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

import './globals.css';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { fontSans } from '@/lib/fonts';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={cn('font-sans', fontSans.variable)}>
				<div className='relative flex min-h-screen flex-col'>
					<ToastProvider />
					<ModalProvider />
					<Navbar />
					<main className='flex-1'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
