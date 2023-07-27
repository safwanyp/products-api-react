import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

export default function RatingStars({ value }) {
    const stars = [];

    for (let i=1; i<=5; i++) {
        if (i <= Math.floor(value)) {
            stars.push(<BsStarFill key={i} className='text-yellow-400' />);
        } else if (i === Math.ceil(value) && !Number.isInteger(value)) {
            stars.push(<BsStarHalf key={i} className='text-yellow-400' />);
        }
        else {
            stars.push(<BsStar key={i} className='text-yellow-400' />);
        }
    }

    return (
        <div className='w-auto h-auto flex flex-row justify-center items-center gap-1'>
            {stars}
        </div>
    );
}