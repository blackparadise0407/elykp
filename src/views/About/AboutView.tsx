export default function AboutView() {
    return (
        <>
            <section className="bg-gray-50 h-[600px]">
                <div className="app-container relative h-full w-full">
                    <img
                        className="absolute bottom-0 right-[200px] w-[340px]"
                        src={require('assets/images/profile.png')}
                        alt="Picture of Kyle Pham"
                    />
                </div>
            </section>
        </>
    )
}
