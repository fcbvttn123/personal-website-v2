import { Circle } from "./Circle";
import avt from "./images/avt.jpeg"

export function MainSection() {
    return (
        <main className="mt-4">
            <div className="w-11/12 mx-auto max-w-screen-2xl md:flex">
                <div>
                    <h1 className="text-5xl font-semibold">Hello</h1>
                    <h3 className="text-2xl font-semibold mt-4 mb-1">A bit about me</h3>
                    <p>Passionate front-end developer with a keen eye for design and a love for crafting seamless user experiences. Proficient in HTML, Tailwind CSS, JavaScript and React JS, I specialize in turning ideas into visually stunning and interactive websites.</p>
                    <div className="flex items-center justify-between gap-x-4 mt-6 mx-auto md:mx-0 max-w-128">
                        <Circle backgroundColor="bg-amber-600">Resume</Circle>
                        <Circle backgroundColor="bg-red-500">Projects</Circle>
                        <Circle backgroundColor="bg-teal-400">Contact</Circle>
                    </div>
                </div>
                <div className="overflow-hidden rounded-full border border-zinc-200 mt-6 mx-auto max-w-96">
                    <img className="w-full h-full" src={avt} alt="" srcset="" />
                </div>
            </div>
        </main>
    )
}