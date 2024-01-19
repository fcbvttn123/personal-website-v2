import { ProjectItem } from "./ProjectItem"
import {projectsArr} from "./projects"

export function Project() {
    let projects = projectsArr.map((project, indexNumber) => {
      return (
        <ProjectItem
          key={indexNumber}
          imgName={project.img_name}
          projectName={project.project_name}
          projectDesc={project.project_desc}
          url={project.url}
          itemIndex={indexNumber}
        />
      );
    });
    return (
        <main className="mt-4">
            <div className="w-11/12 mx-auto max-w-screen-2xl">
                <h1 className="text-4xl font-extrabold mb-10">Projects</h1>
                {projects}
            </div>
        </main>
    )
}