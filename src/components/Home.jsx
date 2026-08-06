import { ArrowBigRightIcon } from 'lucide-react'   
import Portfo from '/Portfolio.svg'
import Attendance from '/Attendance.svg'
import Guitar from '/Guitar.svg'
import Movie from '/Movie.svg'
import { Css3Original, ExpressOriginal, GithubOriginal, GitOriginal, Html5Original, JavascriptOriginal, MongodbOriginal, NodejsOriginal, ReactOriginal, TailwindcssOriginal } from 'devicons-react'
import { BiLogoGithub } from 'react-icons/bi'

const Home = () => {
    return (
        <div className='min-h-screen flex-3 transition-all
        duration-500 dark:bg-black dark:text-white'>

        <main className='flex max-w-250 flex-col gap-10 p-5
        md:mx-10 md:py-14'>

            <div className="space-y-5">
                    
                <h1 className='text-2xl font-bold
                md:text-4xl'>About</h1>
                    <p>A MERN stack developer crafting an elegant and responsive website.</p>
                    
                    <div className="flex flex-wrap gap-3">
                        <span><Html5Original size={50}/></span>
                        <span><Css3Original size={50}/></span>
                        <span><JavascriptOriginal size={50}/></span>
                        <span><ReactOriginal size={50}/></span>
                        <span><TailwindcssOriginal size={50}/></span>
                        <span><NodejsOriginal size={50}/></span>
                        <span><ExpressOriginal size={50}/></span>
                        <span><MongodbOriginal size={50}/></span>
                        <span><GitOriginal size={50}/></span>
                        <span><GithubOriginal size={50}/></span>
                    </div>
                    
                </div>
                
                <div className="space-y-10">
                    <h1 className='text-2xl font-bold
                    md:text-4xl'>Projects</h1>

                    <div className="flex flex-col lg:flex-row lg:gap-20">

                    <ul>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-lg font-semibold'>A Portfolio</span>
                            <img className='w-80 h-80' src={Portfo} alt="Portfolio-img" />
                            <span className='text-sm text-blue-600'>Tech Stack: React & TailwindCSS</span>
                            <p className='text-sm text-gray-600
                            dark:text-gray-400'>Simple, rlegant & responsive portfolio for personal use. </p>
                            <div className="flex gap-4">
                                <a href="https://example.com" target="_blank" rel="noreferrer" className="w-max mt-4 inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-all duration-500 bg-black text-white hover:bg-blue-700 hover:text-white dark:border-black dark:bg-blue-700 dark:text-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                                    Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-max mt-4 inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-all duration-500 bg-black text-white hover:bg-blue-700 hover:text-white dark:border-black dark:bg-blue-700 dark:text-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                                    Github
                                    <BiLogoGithub className="h-4 w-4" />
                                </a>
                            </div>                              
                            

                        </li>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-lg font-semibold'>Attendance System Using CNN.</span>
                            <img className='w-80 h-80' src={Attendance} alt="Attendance-img" />
                            <span className='text-sm text-blue-600'>Tech Stack: JS, Flask, OpenCV, TensorFlow, Python & SQLite</span>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>An attendace system for staff members using CNN.</p>
                            <div className="flex gap-4">
                                <a href="https://example.com" target="_blank" rel="noreferrer" className="w-max mt-4 inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-all duration-500 bg-black text-white hover:bg-blue-700 hover:text-white dark:border-black dark:bg-blue-700 dark:text-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                                    Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                <a href="https://github.com/blackST4Rez/Portfolio" target="_blank" rel="noreferrer" className="w-max mt-4 inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-all duration-500 bg-black text-white hover:bg-blue-700 hover:text-white dark:border-black dark:bg-blue-700 dark:text-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                                    Github
                                    <BiLogoGithub className="h-4 w-4" />
                                </a>
                            </div>  
                        </li>
                    </ul>     
                    <ul> 
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-lg font-semibold'>E-Commerce Website</span>
                            <img className='w-80 h-80' src={Guitar} alt="Attendance-img" />
                            <span className='text-sm text-blue-600'>Tech Stack: MongoDB, Express, React & NodeJS</span>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>A musical instrument e-commerce website for the upcoming Superstar's.</p>
                            <div className="flex gap-4">
                                <a href="https://example.com" target="_blank" rel="noreferrer" className="w-max mt-4 inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-all duration-500 bg-black text-white hover:bg-blue-700 hover:text-white dark:border-black dark:bg-blue-700 dark:text-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                                    Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-max mt-4 inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-all duration-500 bg-black text-white hover:bg-blue-700 hover:text-white dark:border-black dark:bg-blue-700 dark:text-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                                    Github
                                    <BiLogoGithub className="h-4 w-4" />
                                </a>
                            </div>
                        </li>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-lg font-semibold'>Movie Ticket Booking System</span>
                            <img className='w-80 h-80' src={Movie} alt="Attendance-img" />
                            <span className='text-sm text-blue-600'>Tech Stack: MongoDB, Express, React & NodeJS with Khalti Payment Integration</span>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>A website for making booking movie ticket's easier & convinient.</p>
                            <div className="flex gap-4">
                                <a href="https://example.com" target="_blank" rel="noreferrer" className="w-max mt-4 inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-all duration-500 bg-black text-white hover:bg-blue-700 hover:text-white dark:border-black dark:bg-blue-700 dark:text-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                                    Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-max mt-4 inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-semibold transition-all duration-500 bg-black text-white hover:bg-blue-700 hover:text-white dark:border-black dark:bg-blue-700 dark:text-white dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
                                    Github
                                    <BiLogoGithub className="h-4 w-4" />
                                </a>
                            </div>
                        </li>
                    </ul>                        

                    </div>
                </div>

        </main>
        </div>
    )
}

export default Home