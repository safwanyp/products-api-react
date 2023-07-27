import RatingStars from "./RatingStars";

export default function ProductCard({ product }) {
    return (
        <div className="max-w-sm flex flex-col gap-2 border rounded-lg shadow bg-gray-800 border-gray-700">
            <div className="relative rounded-t-lg w-full pt-[56.25%] overflow-hidden">
                <img src={product.thumbnail} alt={product.title} className="rounded-t-lg absolute w-full h-full top-0 left-0 object-cover" />
            </div>
            <div className="px-5 flex flex-col font-rubik">
                <span className="font-medium text-white text-xl">{product.title}</span>
                <span className="font-normal text-gray-300 text-base">{product.description}</span>
            </div>
            <div className="px-5  w-auto h-auto flex flex-row items-center gap-2">
                <RatingStars value={product.rating} />
                <div className="flex justify-center items-center bg-slate-700 px-2 py-1 text-xs rounded-full shadow-inner">
                    <span className="font-rubik font-medium text-white">{product.rating}</span>
                </div>
            </div>
            <div className="px-5 pb-5 w-full h-auto flex flex-row justify-start items-center">
                <span className="font-rubik font-medium text-3xl text-white">${product.price}</span>
            </div>
            
        </div>
    );
}