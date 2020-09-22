import { useState } from 'react'
import SelectorIcon from 'heroicons/solid/selector.svg'
import Dots from 'heroicons/solid/dots-horizontal.svg'
import Cog from 'heroicons/solid/cog.svg'
import Plus from 'heroicons/solid/plus.svg'
import Link from 'next/link'

function VercelLogo({className}) {
    return (
        <svg className={className} viewBox="0 0 116 100" fill="#000" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0z"/>
        </svg>
    )
}

function Avatar({ src, alt="", size="md" }) {

    const sizeClasses = ({
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
    })[size]

    return (
        <img
            className={`${sizeClasses}w-8 h-8 border border-gray-200 rounded-full`}
            src={src}
            alt={alt}
        />
    )
}

function Github({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"fill="currentColor"className={className}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    )
}

function AccountSwitcher() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">

            <span className="inline-flex items-center space-x-2 text-sm font-medium leading-5">
                <Link href="#">
                    <a className="inline-flex items-center space-x-2">
                        <span>
                            <Avatar src="matt.jpg" alt="me"/>
                        </span>
                        <span>Matt Heslington</span>
                    </a>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className={`inline-flex items-center py-1 transition ${isOpen ?  'text-black' : 'border-transparent text-gray-400' } duration-300 ease-in-out border border-transparent rounded-md hover:border-gray-200 hover:bg-gray-100`}>
                    <SelectorIcon className="w-5 h-5"/>
                </button>
            </span>

            {isOpen && (

               <div className="absolute w-56 overflow-hidden bg-white divide-y rounded-md shadow-lg divide-grey-200">
                    <div className="py-2">
                        <div className="px-4 pt-3 pb-2 text-xs leading-5 tracking-wide text-gray-500 uppercase">Personal Account</div>
                        <ul>
                            <li className="px-4 py-3 bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <Link href="">
                                        <a className="flex items-center space-x-2 text-sm leading-5 text-gray-500 hover:text-black">
                                            <Avatar size="sm" src="matt.jpg" alt="me"/>
                                            <span>Matt&nbsp;Heslington</span>
                                        </a>
                                    </Link>

                                    <div>
                                        <Link href="">
                                            <a className="text-gray-300 hover:text-black">
                                                <Cog className="w-5 h-5"/>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="py-2">
                        <Link href="#">
                            <a className="flex items-center justify-between px-4 py-3 text-sm leading-5 text-gray-500 hover:text-black">
                                <span>Create a Team</span>
                                <Plus className="w-4 h-4 text-gray-400"/>
                            </a>
                        </Link>
                    </div>
                </div>

            )}

        </div>

    )
}

function Activity() {
    return (
        <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4 text-sm leading-5 ">
                <Avatar src="matt.jpg" alt="me"/>
                <span className="text-gray-700">MattHeslington deployed portfolio (ed13c13 in master) to{' '}
                <Link href="#"><a className="text-black hover:underline">production</a></Link>
                </span>
            </div>
            <div className="text-sm leading-5 text-gray-500">
                <time datetime="2020-09-22">1d</time>
            </div>
        </div>
    )
}

function ProjectCard() {
    return (
        <div className="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow-md">
            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold">portfolio</h3>
                    <a href="#" className="px-5 font-medium py-1.5 text-sm leading-5 text-gray-600 border border-gray-200 rounded hover:border-black transition ease-in-out duration-150">Visit</a>
                </div>
                <div className="space-y-3">
                    <div
                        aria-label="Production Deployment"
                        className="flex items-center space-x-3">
                        <Link href="#">
                            <a className="inline-flex items-center mt-px space-x-2 text-sm font-medium leading-5">
                                <span aria-hidden className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full">

                                </span>
                                <span>mattt.pw</span>
                            </a>
                        </Link>
                        <span className="inline-flex px-1.5 text-xs font-medium leading-4 py-px border border-gray-200 rounded-full bg-gray-50">Production</span>
                        <span className="text-sm leading-5 text-gray-500">
                            <time datetime="2019-18-29">204d</time>
                        </span>
                    </div>

                    <div aria-label="Production Deployment" className="flex items-center space-x-3">
                        <Link href="#">
                            <a className="inline-flex items-center mt-px space-x-2 text-sm font-medium leading-5">
                                <span aria-hidden className="inline-block w-2.5 h-2.5 bg-green-400 rounded-full">

                                </span>
                                <span>portfolio-q242x1isn.vercel.app</span>
                            </a>
                        </Link>
                        <span className="inline-flex px-1.5 text-xs font-medium leading-4 py-px border border-gray-200 rounded-full bg-gray-50">Latest</span>
                        <span className="text-sm leading-5 text-gray-500">
                            <time datetime="2020-09-22">19h</time>
                        </span>
                    </div>
                </div>
            </div>
            <div className="px-6 py-3">
                <a href="#" className="inline-flex items-center space-x-2 text-sm font-medium leading-5">
                    <Github className="w-4 h-4"/>
                    <span>mattheslington/portfolio</span>
                </a>
            </div>
        </div>
    )
}

function IndexPage() {
    return (
        <div>
            <div className="bg-white">

                <header className="space-y-2 border-b border-gray-200">

                    <nav className="flex items-center justify-between max-w-5xl px-6 pt-4 mx-auto">
                        <div className="flex items-center space-x-3">

                            <Link href="https://vercel.com">
                                <a>
                                    <VercelLogo className="h-6"/>
                                </a>
                            </Link>

                            <span>
                                <svg viewBox="0 0 32 32" stroke="currentColor" className="w-8 h-8 text-gray-300">
                                    <line x1="10" y1="28" x2="22" y2="4"/>
                                </svg>
                            </span>

                            <AccountSwitcher/>

                        </div>

                        <div className="flex items-center space-x-4">

                            <div className="flex items-center space-x-5">
                                <button type="button" className="px-3 py-1.5 text-sm leading-5 text-gray-600 border border-gray-200 rounded hover:border-black transition ease-in-out duration-150">Feedback</button>
                                <Link href="#">
                                    <a className="inline-block text-sm leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-black">Blog</a>
                                </Link>
                                <Link href="#">
                                    <a className="inline-block text-sm leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-black">Support</a>
                                </Link>
                                <Link href="#">
                                    <a className="inline-block text-sm leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-black">Docs</a>
                                </Link>
                            </div>

                            <button type="button">
                                <Dots className="w-5 h-5 text-gray-400"/>
                            </button>

                            <span>
                                <button type="button">
                                    <Avatar src="matt.jpg" alt="me"/>
                                </button>
                            </span>

                        </div>

                    </nav>


                    <div className="max-w-5xl px-6 mx-auto">
                        <nav className="flex items-center -mb-px space-x-5 text-sm leading-5">

                            <Link href="#">
                                <a className="hover:text-black py-4 border-b-2 border-black px-0.5 text-black">Overview</a>
                            </Link>
                            <Link href="#">
                                <a className="hover:text-black py-4 border-b-2 border-transparent px-0.5 text-gray-500">Projects</a>
                            </Link>
                            <Link href="#">
                                <a className="hover:text-black py-4 border-b-2 border-transparent px-0.5 text-gray-500">Integrations</a>
                            </Link>
                            <Link href="#">
                                <a className="hover:text-black py-4 border-b-2 border-transparent px-0.5 text-gray-500">Activity</a>
                            </Link>
                            <Link href="#">
                                <a className="hover:text-black py-4 border-b-2 border-transparent px-0.5 text-gray-500">Domains</a>
                            </Link>
                            <Link href="#">
                                <a className="hover:text-black py-4 border-b-2 border-transparent px-0.5 text-gray-500">Usage</a>
                            </Link>
                            <Link href="#">
                                <a className="hover:text-black py-4 border-b-2 border-transparent px-0.5 text-gray-500">Settings</a>
                            </Link>

                        </nav>
                    </div>
                </header>


                <div className="flex items-start justify-between max-w-5xl px-6 mx-auto pt-14 py-28">

                    <div className="flex space-x-8">
                        <div>
                            <img className="w-24 h-24 rounded-full py" src="matt.jpg" alt=""/>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="flex items-center space-x-3">
                                <h1 className="text-4xl font-bold leading-10 text-black">Matt Heslington</h1>
                                <span className="inline-flex px-2 mt-1 text-xs font-medium leading-5 tracking-wide text-black uppercase border border-gray-200 rounded-full bg-gray-50">hobby</span>
                            </div>

                            <div>
                                <dl>
                                    <dt className="text-xs font-medium leading-5 tracking-wide text-gray-500 uppercase">Git integration</dt>
                                    <dd className="flex items-center space-x-2 text-sm font-medium leading-5">
                                        <Github className="w-4 h-4"/><span>mattheslington</span>
                                    </dd>

                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-gap-6">
                        <Link href="#">
                            <a className="inline-flex justify-center px-6 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-200 rounded hover:border-black hover:text-black">Invite Team</a>
                        </Link>
                        <Link href="#">
                            <a className="inline-flex justify-center px-6 py-2 text-sm font-medium leading-5 text-white bg-black border border-transparent rounded hover:border-black hover:text-black hover:bg-white">Import Project</a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <main className="grid max-w-5xl grid-cols-12 col-gap-20 px-6 mx-auto -mt-9">
                    <div className="col-span-7">
                        <h2 className="sr-only">Recent Projects</h2>
                        <div className="space-y-12">
                            <ul className="space-y-12">
                                <li>
                                    <ProjectCard/>
                                </li>
                                <li>
                                    <ProjectCard/>
                                </li>
                                <li>
                                    <ProjectCard/>
                                </li>
                                <li>
                                    <ProjectCard/>
                                </li>
                            </ul>
                            <div>
                                <Link href="#">
                                    <a className="text-sm font-bold leading-5 text-blue-500 hover:underline">View All Projects</a>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-5 pt-1 space-y-9">
                        <h2 className="text-sm font-bold leading-5">Recent Activity</h2>
                        <ul className="border-b border-gray-200 divide-y divide-gray-200">
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                            <li className="py-3">
                                <Activity/>
                            </li>
                        </ul>
                        <div>
                                <Link href="#">
                                    <a className="text-sm font-bold leading-5 text-blue-500 hover:underline">View All Activity</a>
                                </Link>
                            </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default IndexPage;
