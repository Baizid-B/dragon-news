import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-base text-gray-500'>Journalism Without Fear or Favour</p>
            <div className='flex flex-row items-center gap-1'>
                <p className='font-semibold'>{moment().format("dddd,")}</p>
                <p className='font-semibold text-gray-500'>{moment().format("MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;