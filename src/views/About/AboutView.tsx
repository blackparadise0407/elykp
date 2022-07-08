import { motion } from 'framer-motion'
import { AiOutlineCloudDownload } from 'react-icons/ai'

export default function AboutView() {
    return (
        <>
            <section className="h-[calc(100vh-88px)]">
                <div className="app-container relative h-full w-full flex items-center">
                    <div className="flex flex-col">
                        <div className="relative max-w-[700px] md:min-w-[400px] space-y-3">
                            <motion.h4
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-gray-500"
                            >
                                Hi, I am
                            </motion.h4>
                            <h1 className="font-bold text-4xl">
                                <span className="text-blue-500">KHOA</span> PHAM
                                DUY DANG
                            </h1>
                            <h2>Junior Web Developer</h2>
                            <p className="text-gray-500">
                                I&apos;m currently working at{' '}
                                <a
                                    className="link text-black"
                                    target="_blank"
                                    href="https://www.idealogic.com.vn/"
                                    rel="noreferrer"
                                >
                                    Idealogic Vietnam
                                </a>{' '}
                                as a frontend developer
                            </p>
                            <button>Contact me</button>
                            <br />
                            <small className="flex items-center gap-2 text-gray-500 font-medium">
                                Or you can take a look my attached CV{' '}
                                <a
                                    href={require('assets/files/cv.pdf')}
                                    target="_blank"
                                    download="phamddangkhoa-cv.pdf"
                                    rel="noreferrer"
                                >
                                    <AiOutlineCloudDownload className="text-xl text-blue-500 hover:text-blue-400 transition-colors cursor-pointer" />
                                </a>
                            </small>
                        </div>
                        <div className="flex-grow"></div>
                        <ul className="flex flex-wrap items-center gap-10 mt-32 md:mt-52">
                            <li>
                                <h4 className="font-semibold">Email</h4>
                                <a
                                    className="font-normal"
                                    href="mailto:phamddangkhoa@gmail.com"
                                >
                                    phamddangkhoa@gmail.com
                                </a>
                            </li>
                            <div className="hidden md:block h-[40px] w-[2px] rounded bg-gray-300"></div>
                            <li>
                                <h4 className="font-semibold">Linkedin</h4>
                                <a
                                    className="font-normal"
                                    href="https://www.linkedin.com/in/khoa-pham-a61a471a5/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Khoa Pham
                                </a>
                            </li>
                            <div className="hidden md:block h-[40px] w-[2px] rounded bg-gray-300"></div>
                            <li>
                                <h4 className="font-semibold">Location</h4>
                                <p>HCM, Vietnam</p>
                            </li>
                        </ul>
                    </div>
                    <img
                        loading="eager"
                        className="hidden md:block min-w-0 max-w-[720px] mx-auto"
                        src={require('assets/images/profile.png')}
                        alt="Picture of Kyle Pham"
                    />
                </div>
            </section>
        </>
    )
}
