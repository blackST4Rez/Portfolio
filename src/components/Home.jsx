import { ArrowBigRightIcon } from 'lucide-react'
import GithubSearcher from '/GithubSearcher.svg'   
import Portfo from '/Portfolio.svg'
import Attendance from '/Attendance.svg'
import Guitar from '/Guitar.svg'
import Movie from '/Movie.svg'
import { Css3Original, GithubOriginal, GitOriginal, Html5Original, JavascriptOriginal, ReactOriginal,TailwindcssOriginal } from 'devicons-react'
import { BiLogoGithub } from 'react-icons/bi'

const Home = ({darkMode}) => {
    return (
        <div className='min-h-screen flex-3 transition-all
        duration-500'>

        <main className='flex max-w-250 flex-col gap-10 p-5
        md:mx-10 md:py-14'>

            <div className="space-y-5">
                    
                <h1 className='text-2xl font-bold
                md:text-4xl'>About</h1>
                    <p>React developer crafting an elegant and responsive website.</p>
                    
                    <div className="flex flex-wrap gap-3">
                        <span><Html5Original size={50}/></span>
                        <span><Css3Original size={50}/></span>
                        <span><JavascriptOriginal size={50}/></span>
                        <span><ReactOriginal size={50}/></span>
                        <span><TailwindcssOriginal size={50} /></span>
                        <span><GitOriginal size={50}/></span>
                        <span><GithubOriginal size={50}/></span>
                    </div>
                    
                </div>
                
                <div className="space-y-10">
                    <h1 className='text-2xl font-bold
                    md:text-4xl'>Projects</h1>

                    <div className="flex flex-col lg:flex-row lg:gap-30">

                    <ul>
                        <li className= 'relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-lg font-semibold'>A Portfolio</span>
                            <img className='w-90 h-90' src={Portfo} alt="Portfolio-img" />
                            <span className='text-sm text-blue-600'>Tech Stack: React & TailwindCSS</span>
                            <p className='text-sm text-gray-600'>Simple, rlegant & responsive portfolio for personal use. </p>
                            <div className="flex gap-4">
                                <a href=
                                    "https://portfolio-e42g.onrender.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                    >Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                        >
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
                                    <a
                                        href="https://example.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                        >
                                    Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                        >
                                    Github
                                    <BiLogoGithub className="h-4 w-4" />
                                </a>
                            </div>  
                        </li>
                    </ul>     
                    <ul> 
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-lg font-semibold'>E-Commerce Website</span>
                            <img className='w-75 h-75' src={Guitar} alt="Attendance-img" />
                            <span className='text-sm text-blue-600'>Tech Stack: React & TailwindCSS</span>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>A musical instrument e-commerce website for the upcoming Superstar's.</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                >
                                    Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                        >
                                    Github
                                    <BiLogoGithub className="h-4 w-4" />
                                </a>
                            </div>
                        </li>
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-lg font-semibold'>Movie Website</span>
                            <img className='w-80 h-80' src={Movie} alt="Attendance-img" />
                            <span className='text-sm text-blue-600'>Tech Stack: React & TailwindCSS using TMDB API Integration</span>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>A website for searching trending, upcoming & top-rated Movies and TV-Series conviniently.</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                >
                                    Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                    >
                                    Github
                                    <BiLogoGithub className="h-4 w-4" />
                                </a>
                            </div>
                        </li>
                        </ul>

                    <ul> 
                        <li className='relative flex flex-col gap-1 border-l p-6 before:absolute before:-left-1.5 before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform'>
                            <span className='text-lg font-semibold'>Github User Searcher</span>
                            <img className='w-75 h-75' src={GithubSearcher} alt="Attendance-img" />
                            <span className='text-sm text-blue-600'>Tech Stack: React & TailwindCSS</span>
                            <p className='text-sm text-gray-600 dark:text-gray-400'>Github User Finder using React & TailwindCSS.</p>
                            <div className="flex gap-4">
                                <a
                                    href="https://githubuserfinder-mp7e.onrender.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                        }`}
                                    >Live Demo
                                    <ArrowBigRightIcon className="h-4 w-4 -rotate-45" />
                                </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank" rel="noreferrer"
                                        className={`w-max mt-4 inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold
                                            ${darkMode
                                                ? "border-black bg-blue-700 text-white hover:bg-black hover:border-white hover:text-white transition-all ease-in-out duration-300"
                                                : "border-black bg-black text-white hover:bg-blue-700 hover:border-black hover:text-white transition-all ease-in-out duration-300"
                                            }`}
                                        >
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