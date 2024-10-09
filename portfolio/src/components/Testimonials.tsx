interface Testimonial {
    name: string;
    feedback: string;
  }
  
  export default function Testimonials() {
    const testimonials: Testimonial[] = [
      { name: "Client A", feedback: "Excellent work! Very responsive and professional." },
      { name: "Client B", feedback: "Delivered ahead of time with great quality." }
    ];
  
    return (
      <div className="min-h-screen p-5">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-5 rounded-md shadow-lg">
              <p className="text-gray-600">{testimonial.feedback}</p>
              <h4 className="mt-4 text-xl font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
  