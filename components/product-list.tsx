import ProductCard from '@/components/ui/product-card';
import { Product } from '@/types';
import NoResults from '@/components/ui/no-results';

interface ProductListProps {
	title: string;
	items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
	return (
		<div className='py-10'>
			<h3 className='font-bold text-xl md:text-3xl mb-4'>{title}</h3>
			{items.length === 0 && <NoResults />}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{items.map((item) => (
					<ProductCard key={item.id} data={item} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
