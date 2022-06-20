import { AiOutlineCloudDownload } from 'react-icons/ai'

export default function AboutView() {
    return (
        <>
            <section className="bg-white h-[calc(100vh-88px)]">
                <div className="app-container relative h-full w-full flex items-center">
                    <div className="max-w-[700px] space-y-3">
                        <h4 className="text-gray-500">Hi, I am</h4>
                        <h1 className="font-bold text-4xl">
                            <span className="text-blue-500">KHOA</span> PHAM DUY
                            DANG
                        </h1>
                        <h3>Junior Web Developer</h3>
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
                            <AiOutlineCloudDownload className="text-xl text-blue-500 hover:text-blue-400 transition-colors cursor-pointer" />
                        </small>
                    </div>
                    <img
                        className="hidden md:block min-w-0 max-w-[720px] mx-auto"
                        src={require('assets/images/profile.png')}
                        alt="Picture of Kyle Pham"
                    />
                </div>
            </section>
        </>
    )
}
