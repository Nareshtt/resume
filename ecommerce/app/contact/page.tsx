import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-heading-2 text-dark-900 mb-6">Get in Touch</h1>
          <p className="text-lead text-dark-700 mb-8">
            We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-light-200 p-3 text-dark-900">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-heading-3 text-dark-900">Visit Us</h3>
                <p className="text-body text-dark-700">
                  123 Nike Way<br />
                  Beaverton, OR 97005<br />
                  USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-light-200 p-3 text-dark-900">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-heading-3 text-dark-900">Email Us</h3>
                <p className="text-body text-dark-700">
                  support@nike.com<br />
                  press@nike.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-light-200 p-3 text-dark-900">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-heading-3 text-dark-900">Call Us</h3>
                <p className="text-body text-dark-700">
                  +1 (800) 806-6453<br />
                  Mon-Fri from 8am to 5pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-light-100 p-8 shadow-lg ring-1 ring-light-300">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-body-medium text-dark-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-light-300 px-4 py-3 text-body text-dark-900 focus:border-dark-500 focus:outline-none focus:ring-1 focus:ring-dark-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-body-medium text-dark-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-light-300 px-4 py-3 text-body text-dark-900 focus:border-dark-500 focus:outline-none focus:ring-1 focus:ring-dark-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-body-medium text-dark-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg border border-light-300 px-4 py-3 text-body text-dark-900 focus:border-dark-500 focus:outline-none focus:ring-1 focus:ring-dark-500"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-dark-900 py-4 text-body-medium text-light-100 transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
