import ig from "./images/instagram.png"
import github from "./images/github.png"

export function Footer() {
    return (
        <footer className="border-t border-gray-300 py-5 mt-10">
            <div className="w-11/12 mx-auto max-w-screen-2xl md:flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-lg">Phone</h2>
                    <p>(437)-213-6600</p>
                </div>
                <div className="my-5">
                    <h2 className="font-bold text-lg">Email</h2>
                    <a href="mailto:vutran@sheridancollege.ca">vutran@sheridancollege.ca</a>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Follow Me</h2>
                    <div className="flex items-center gap-x-4">
                        <a href="https://www.instagram.com/nganvu3903/" className="block w-8">
                            <img className="w-full h-full object-cover" src={ig} alt="" srcSet="" />
                        </a>
                        <a href="https://github.com/fcbvttn123" className="block w-8">
                            <img className="w-full h-full object-cover" src={github} alt="" srcSet="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}