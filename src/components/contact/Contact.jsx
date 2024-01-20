import { ContactForm } from "./ContactForm";

export function Contact() {
    return (
        <main className="mt-4 md:mt-24 md:mb-60">
            <div className="w-11/12 mx-auto max-w-screen-2xl sm:flex justify-between">
                <div className="md:flex-1 move-up-animation">
                    <h1 className="text-4xl font-extrabold">Contact</h1>
                    <p className="mt-2">Looking forward to hearing from you</p>
                    <div className="mt-7">
                        <h2 className="font-bold text-lg">Phone</h2>
                        <p>(437)-213-6600</p>
                    </div>
                    <div className="mt-2">
                        <h2 className="font-bold text-lg">Email</h2>
                        <a href="mailto:vutran@sheridancollege.ca">vutran@sheridancollege.ca</a>
                    </div>
                </div>
                <ContactForm />
            </div>
        </main>
    )
}