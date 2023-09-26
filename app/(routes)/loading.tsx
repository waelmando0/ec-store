import Skeleton from '@/components/ui/skeleton';

const Loading = () => {
	return (
		<section className='container'>
			<div className='w-full h-full py-10'>
				<Skeleton className='w-full aspect-square rounded-xl md:aspect-[2.4/1]' />
				<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
					<Skeleton className='aspect-square rounded-xl' />
				</div>
			</div>
		</section>
	);
};

export default Loading;
