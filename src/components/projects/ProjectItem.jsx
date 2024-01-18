const IMAGE_URL = "/src/projects-images/"
import {projectsArr} from "./projects"

export function ProjectItem() {
    return (
        <div>
            <img src={`${IMAGE_URL}chat-app.png`}alt="" srcSet="" />
            <h1>React Chat App</h1>
            <div>
                <div className="flex items-start gap-x-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-black shrink-0 relative top-2"></div>
                    <p> Effective communication in order to train on the use of tools and resolve technical issues </p>
                </div>
            </div>
        </div>
    )
}