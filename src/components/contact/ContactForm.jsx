import { useState } from "react"

export function ContactForm() {
    let [emailBorderColor, setEmailBorderColor] = useState("border-black")
    function checkEmailValidity(e) {
        if(!e.target.checkValidity() || e.target.value == "") {
            setEmailBorderColor('border-red-500 border-2')
        } else {
            setEmailBorderColor("border-black")
        }
    }
    return (
        <form className="mt-7 move-up-animation sm:mt-0 md:flex md:flex-1 md:flex-wrap" action="#">
            <div className="flex flex-col gap-y-1 mb-2 md:w-2/4 md:pr-2">
                <label htmlFor="firstName" className="text-lg">First Name</label>
                <input type="text" name="firstName" id="firstName" className="border hover:border-2 border-black bg-transparent h-12 pl-2"/>
            </div>
            <div className="flex flex-col gap-y-1 mb-2 md:w-2/4 md:pl-2">
                <label htmlFor="lastName" className="text-lg">Last Name</label>
                <input type="text" name="lastName" id="lastName" className="border hover:border-2 border-black bg-transparent h-12 pl-2"/>
            </div>
            <div className="flex flex-col gap-y-1 mb-2 md:w-2/4 md:pr-2">
                <label htmlFor="email" className="text-lg">Email</label>
                <input onBlur={(e) => checkEmailValidity(e)} type="email" name="email" id="email" className={`border hover:border-2 ${emailBorderColor} bg-transparent h-12 pl-2`}/>
            </div>
            <div className="flex flex-col gap-y-1 mb-2 md:w-2/4 md:pl-2">
                <label htmlFor="subject" className="text-lg">Subject</label>
                <input type="text" name="subject" id="subject" className="border hover:border-2 border-black bg-transparent h-12 pl-2"/>
            </div>
            <div className="md:w-full md:flex items-center justify-start gap-x-10">
                <div className="flex flex-col gap-y-1 mb-2 lg:w-2/4 lg:pr-2">
                    <label htmlFor="message" className="text-lg">Message</label>
                    <textarea name="message" id="message" cols="30" rows="5" className="border hover:border-2 border-black bg-transparent pl-2 pt-2"></textarea>
                </div>
                <button className="p-3 mt-4 md:mt-0 scale-125 aspect-square rounded-full border border-black text-xl font-semibold bg-amber-600 transition-all duration-500 hover:bg-white">
                    Submit
                </button>
            </div>
        </form>
    )
}