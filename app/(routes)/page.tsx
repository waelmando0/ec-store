import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';
import Billboard from '@/components/ui/billboard';

export const revalidate = 0;

const HomePage = async () => {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard('2b1be24f-0708-4332-93ee-2abc3a1b04ac');

	return (
		<div className='container'>
			<div className='py-10'>
				<Billboard data={billboard} />
				<div className='flex flex-col '>
					<ProductList title='Featured Products' items={products} />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
