import Link from 'next/link';

import MainNav from '@/components/main-nav';
import NavbarActions from '@/components/navbar-actions';
import getCategories from '@/actions/get-categories';

const Navbar = async () => {
	const categories = await getCategories();

	return (
		<header className='bg-background border-b border-t'>
			<div className='container'>
				<div className='flex items-center   h-16'>
					<Link href='/' className='flex  gap-x-2'>
						<p className='font-bold text-xl'>STORE</p>
					</Link>
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
