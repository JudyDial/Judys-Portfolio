import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div id="contact" className="min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <p className="mb-4">
        Phone: <a href="tel:+254717763102" className="text-blue-500">+254 717 763 102</a><br />
        Email: <a href="mailto:judynjenga14@gmail.com" className="text-blue-500">judynjenga14@gmail.com</a><br />
        LinkedIn: <a href="https://www.linkedin.com/in/judy-njenga-94b313270" className="text-blue-500">View Profile</a>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
}
