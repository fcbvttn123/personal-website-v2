import { BulletPoint } from "../BulletPoint";

export function Resume() {
    return (
      <main className="mt-4">
        <h1 className="text-4xl font-extrabold w-11/12 mx-auto max-w-screen-2xl">
          Resume
        </h1>
        {/* Work Experience Section */}
        <div>
          <div className="w-11/12 mx-auto max-w-screen-2xl mt-10 lg:mt-20 lg:flex">
            <h3 className="text-2xl font-medium move-up-animation w-1/4">Work Experience</h3>
            <div className="2xl:ml-72">
              <div className="mt-4 lg:mt-0 opacity-0 move-up-animation-delay-80">
                <p className="font-thin">01/2023 - 04/2023</p>
                <p className="text-lg font-medium">Technical Analyst</p>
                <div>
                  <BulletPoint>Effective communication in order to train on the use of tools and resolve technical issues</BulletPoint>
                  <BulletPoint>Supporting creation of I&IT architecture artifacts based on Ontario Public Service</BulletPoint>
                  <BulletPoint>Participating in IT security activities: security assessments, development and management of security deliverables</BulletPoint>
                  <BulletPoint>Providing technical support in the maintenance and development of SharePoint repositories</BulletPoint>
                </div>
              </div>
              <div className="mt-4 lg:mt-8 opacity-0 move-up-animation-delay-100">
                <p className="font-thin">09/2023 - 01/2024</p>
                <p className="text-lg font-medium">Support Technologist</p>
                <div>
                  <BulletPoint>Provide Classroom support to clients using the mobile labs, smart classrooms and Computer labs</BulletPoint>
                  <BulletPoint>Resolve inquiries regarding desktop and laptop computers, operating systems</BulletPoint>
                  <BulletPoint>Improved MacOS skills by using MacOS in Work</BulletPoint>
                  <BulletPoint>Successfully to stay for the par-time position after finishing the COOP Term</BulletPoint>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="border-t border-gray-300 mt-10 lg:mt-28 pt-10">
          <div className="w-11/12 mx-auto max-w-screen-2xl opacity-0 move-up-animation-view lg:flex">
            <h3 className="text-2xl font-medium w-1/4">Skills</h3>
            <div className="2xl:ml-72">
              <BulletPoint>
                <span className="font-bold">Programming Languages: </span>
                HTML, CSS, JavaScript, Java
              </BulletPoint>
              <BulletPoint>
                <span className="font-bold">Frameworks: </span>
                React JS, Tailwind CSS, Spring Boot, Angular
              </BulletPoint>
              <BulletPoint>
                <span className="font-bold">Version Control: </span>
                Git/GitHub
              </BulletPoint>
              <BulletPoint>
                <span className="font-bold">Databases: </span>
                Firebase, MySQL, H2
              </BulletPoint>
              <BulletPoint>
                <span className="font-bold">Build Tools: </span>
                Vite, Maven, Parcel Bundler, NPM
              </BulletPoint>
              <BulletPoint>
                    <span className="font-bold">Operating Systems: </span>
                    Window, macOS, iOS
              </BulletPoint>
            </div>
          </div>
        </div>
        {/* Education Section */}
        <div className="border-t border-gray-300 mt-10 lg:mt-28 pt-10">
          <div className="w-11/12 mx-auto max-w-screen-2xl move-up-animation-view lg:flex">
            <h3 className="text-2xl font-medium mb-4 w-1/4">Education</h3>
            <div className="2xl:ml-72">
              <p className="font-thin">01/2022 - 12/2024</p>
              <p className="font-bold border-r-4 border-black w-fit pr-2">
                Software Dev & Network Engineering
              </p>
              <p className="font-bold">Advanced Diploma</p>
              <BulletPoint>Web Development</BulletPoint>
              <BulletPoint>Database Design and Implementation</BulletPoint>
              <BulletPoint>Mobile Web-based Applications</BulletPoint>
              <BulletPoint>Computer and Network Security</BulletPoint>
            </div>
          </div>
        </div>
      </main>
    );
}