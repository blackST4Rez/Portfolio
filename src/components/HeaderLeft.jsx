import image from '/public/Profile.png'
import { BiSun, BiMoon, BiEnvelope, BiPhone, BiLogoGithub, BiLogoTwitter, BiLogoLinkedin, BiMapPin } from 'react-icons/bi'

const HeaderLeft = ({darkMode, toggleDarkMode}) => {
    return (
        <div className='min-h-screen flex-1 relative p-10 transition-all duration-500'>
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center gap-5">
            <img src={image} alt="" className='w-32 h-32 rounded-full' />

            <div className="text-center space-y-1">
                <h1 className='text-4xl font-light'>
                Raka <span className='font-semibold'>Maharjan</span>
                </h1>
                <h3 className='text-xl font-light'>Front End Developer</h3>
            </div>

            <button className='absolute right-10 top-10 transition-all duration-500' onClick={toggleDarkMode}>
                {
                darkMode ? (
                    <BiSun className='text-2xl'/>
                ) : (
                    <BiMoon className='text-2xl'/>
                )
                }
            </button>
            </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <BiMapPin className='text-xl text-red-600' />
                            <span>Kathmandu, Nepal</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiEnvelope className='text-xl text-blue-400' />
                            <span>maharjanraka2015@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiPhone className='text-xl text-green-600' />
                            <span>+977 98-0329-4610</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
                    <h1 className="text-baes font-semibold md:text-2xl">Social</h1>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">
                            <BiLogoGithub className='text-xl' />
                            <span>
                                <a href="https://github.com/blackST4Rez" target='_blank'>@blackST4Rez</a>
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiLogoTwitter className='text-xl text-sky-400' />
                            <span>
                                <a href="https://x.com/MaharjanRaka" target='_blank'>@blackST4Rez</a>
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <BiLogoLinkedin className='text-xl text-blue-600' />
                            <span>
                                <a href="https://www.linkedin.com/in/raka-maharjan-865a04226/" target='_blank'>@RakaMaharjan</a>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
                    <h1 className="text-baes font-semibold md:text-2xl">Education</h1>

                    <ul>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='font-semibold md:text-lg'>Bachelor's of Computer Science & Information Technology</span>
                            <span className='font-light'>Asian College Of Higher Studies</span>
                            <span className='text-sm text-gray-400'>2021-Pending</span>
                        </li>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='font-semibold md:text-lg'>Grade XII</span>
                            <span className='font-light'>Little Angel's Secondary School</span>
                            <span className='text-sm text-gray-400'>2020-2021</span>
                        </li>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full dark:before:bg-white before:bg-black before:transform'>
                            <span className='font-semibold md:text-lg'>Grade XI</span>
                            <span className='font-light'>Little Angel's Secondary School</span>
                            <span className='text-sm text-gray-400'>2019-2020</span>
                        </li>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='font-semibold md:text-lg'>Grade X</span>
                            <span className='font-light'>Little Angel's School</span>
                            <span className='text-sm text-gray-400'>2018-2019</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-start justify-start gap-5 border-b p-5">
                    <h1 className="text-bae font-semibold md:text-2xl">LANGUAGES</h1>
                    <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
                        <li>English</li>
                        <li>Nepali</li>
                    </ul>
                </div>
        </div>
        </div>
    )
}

export default HeaderLeft