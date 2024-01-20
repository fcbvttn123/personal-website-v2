import { Circle } from "./Circle";
import avt from "./images/avt.jpeg"

export function MainSection({moveToResumeSection, moveToProjectSection, moveToContactSection}) {
    return (
        <main className="mt-4">
            <div className="w-11/12 mx-auto max-w-screen-2xl md:max-w-screen-xl md:flex flex-row-reverse items-center justify-center gap-x-10">
                <div className="md:max-w-5xl flex-1">
                    <h1 className="move-up-animation text-5xl sm:text-7xl md:text-8xl font-semibold">Hello</h1>
                    <h3 className="move-up-animation text-2xl sm:text-3xl font-semibold mt-4 mb-1">A bit about me</h3>
                    <p className="move-up-animation md:max-w-md">Passionate front-end developer with a keen eye for design and a love for crafting seamless user experiences. Proficient in HTML, Tailwind CSS, JavaScript and React JS, I specialize in turning ideas into visually stunning and interactive websites.</p>
                    <div className="flex items-center justify-between gap-x-4 mt-6 mx-auto md:mx-0 max-w-128">
                        <Circle backgroundColor="bg-amber-600" moveUpAnimation="move-up-animation-delay-80" onClick={moveToResumeSection}>Resume</Circle>
                        <Circle backgroundColor="bg-red-500" moveUpAnimation="move-up-animation-delay-90" onClick={moveToProjectSection}>Projects</Circle>
                        <Circle backgroundColor="bg-teal-400" moveUpAnimation="move-up-animation-delay-100" onClick={moveToContactSection}>Contact</Circle>
                    </div>
                </div>
                <div className="move-up-animation overflow-hidden rounded-full border border-zinc-200 mt-6 md:mt-0 mx-auto max-w-96 md:max-w-none flex-1">
                    <img className="w-full h-full" src={avt} alt="" srcSet="" />
                </div>
            </div>
        </main>
    )
}