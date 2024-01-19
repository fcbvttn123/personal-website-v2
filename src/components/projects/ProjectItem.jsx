const IMAGE_URL = "/src/projects-images/"
import { BulletPoint } from "../BulletPoint"

export function ProjectItem({imgName, projectName, projectDesc, url, itemIndex}) {
    let animation = itemIndex > 1 ? "move-up-animation-view" : "move-up-animation"
    return (
      <>
        <a href={url} className={`block mt-7 move-up-animation lg:hidden ${animation}`}>
          <h1 className="text-3xl font-bold">{projectName}</h1>
          <img className="my-5 object-cover" src={IMAGE_URL + imgName} />
          <div>
            {projectDesc.map((desc, index) => (
              <BulletPoint key={index}>{desc}</BulletPoint>
            ))}
          </div>
        </a>
        <a href={url} className={`hidden mt-16 move-up-animation lg:flex items-stretch gap-x-10 ${animation}`}>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">{projectName}</h1>
            <div>
              {projectDesc.map((desc, index) => (
                <BulletPoint key={index}>{desc}</BulletPoint>
                ))}
            </div>
          </div>
          <div className="flex-1">
            <img className="my-0 object-cover w-full h-full" src={IMAGE_URL + imgName} />
          </div>
        </a>
      </>
    );
}