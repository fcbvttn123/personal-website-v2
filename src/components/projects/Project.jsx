import { ProjectItem } from "./ProjectItem"

export function Project() {
    return (
        <main className="mt-4">
            <div className="w-11/12 mx-auto max-w-screen-2xl">
                <h1 className="text-4xl font-extrabold">Projects</h1>
                <ProjectItem />
            </div>
        </main>
    )
}