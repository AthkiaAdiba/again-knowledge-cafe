import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-[100px] mt-10 border-b-2 pb-5'>
           <h1 className='text-4xl font-bold text-[#111111]'>Knowledge</h1>
           <img className='w-20' src={profile} alt="" /> 
        </div>
    );
};

export default Header;