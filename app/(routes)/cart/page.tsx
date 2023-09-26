'use client';

import { useEffect, useState } from 'react';

import useCart from '@/hooks/use-cart';

import Summary from './components/summary';
import CartItem from './components/cart-item';

export const revalidate = 0;

const CartPage = () => {
	const [isMounted, setIsMounted] = useState(false);
	const cart = useCart();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<section className='container'>
			<div className='py-10'>
				<h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
				<div className='mt-12 md:grid md:grid-cols-12 md:items-start gap-x-12'>
					<div className='col-span-12 lg:col-span-7'>
						{cart.items.length === 0 && (
							<p className='text-neutral-500'>No items added to cart.</p>
						)}
						<ul>
							{cart.items.map((item) => (
								<CartItem key={item.id} data={item} />
							))}
						</ul>
					</div>
					<Summary />
				</div>
			</div>
		</section>
	);
};

export default CartPage;
