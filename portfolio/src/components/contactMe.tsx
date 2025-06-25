 "use client"
import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import FloatingOrbsBackground from "./FloatingOrbsBackground"

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Replace these with your own EmailJS Service ID, Template ID, and Public Key
    const serviceID = "service_h6zxr5p" // e.g., 'service_xxxxx'
    const templateID = "template_423jhyn" // e.g., 'template_xxxxx'
    const publicKey = "UQiP4o4_VtyJPKVl9" // e.g., 'abc123DEF456'

    // Prepare the email template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response: unknown) => {
        console.log("SUCCESS!", response)
        setFormStatus("Thank you for contacting me! Your message has been sent.")
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitting(false)
        
      })
      .catch((error: unknown) => {
        console.error("FAILED...", error)
        setFormStatus("Something went wrong. Please try again.")
        setIsSubmitting(false)
      })
  }

  return (
    <div className="w-full min-h-screen py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-foreground relative overflow-hidden">
      <FloatingOrbsBackground />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Send me a message and I&apos;ll get
            back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 hover:shadow-2xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white backdrop-blur-sm transition-all duration-300 hover:shadow-md"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:text-white backdrop-blur-sm transition-all duration-300 hover:shadow-md resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>

          {/* Status Message */}
          {formStatus && (
            <div className="mt-6 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-400 text-center font-medium">{formStatus}</p>
            </div>
          )}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Other Ways to Reach Me</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:judynjenga14@gmail.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="text-lg">📧</span>
                <span>judynjenga14@gmail.com</span>
              </a>
              <a
                href="tel:+254717763102"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="text-lg">📱</span>
                <span>(+254) 717 763 102</span>
              </a>
              <a
                href="https://linkedin.com/in/judy-njenga-94b313270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="text-lg">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
