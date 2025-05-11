import { useState } from 'react';
import { Mail, Lock, Briefcase, MessageSquare, Star, ArrowRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Valid email is required';
    if (!formData.licenseType) errors.licenseType = 'Please select a license type';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const mockResponses = {
      'how do i sell my license?': 'To sell your license, upload your license details, get a valuation, and receive payment after verification.',
      'what is softsell?': 'SoftSell is a platform to sell your unused software licenses quickly and securely.',
    };

    setChatMessages([
      ...chatMessages,
      { type: 'user', text: chatInput },
      {
        type: 'bot',
        text: mockResponses[chatInput.toLowerCase()] || "Sorry, I don't have an answer for that. Please contact us!",
      },
    ]);
    setChatInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/*---------------- Hero Section ------------------ */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sell Your Unused Software Licenses
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Get top value for your software with SoftSell's secure and fast process.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/*------------------------- How It Works --------------------------*/}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Lock size={40} />, title: 'Upload License', desc: 'Securely upload your license details.' },
              { icon: <Briefcase size={40} />, title: 'Get Valuation', desc: 'Receive a fair and transparent quote.' },
              { icon: <Mail size={40} />, title: 'Get Paid', desc: 'Get paid quickly after verification.' },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="border border-gray-200 rounded-xl p-6 flex flex-col items-center shadow-sm bg-white">
                  <div className="text-blue-600 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Secure Transactions', desc: 'Your data is protected with top-tier encryption.' },
              { title: 'Fast Payments', desc: 'Get paid within days, not weeks.' },
              { title: 'Transparent Pricing', desc: 'No hidden fees, just fair valuations.' },
              { title: 'Expert Support', desc: 'Our team is here to guide you.' },
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*--------------------------- Testimonials ----------------------------------*/}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Jane Doe',
                role: 'IT Manager',
                company: 'TechCorp',
                text: 'SoftSell made selling our unused licenses a breeze. Fast and reliable!',
              },
              {
                name: 'John Smith',
                role: 'CFO',
                company: 'GrowEasy',
                text: 'The valuation was fair, and the payment was quick. Highly recommend!',
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="font-semibold">{review.name}</p>
                <p className="text-gray-500">{review.role}, {review.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*---------------------------------------- Contact Form -------------------------------------*/}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-lg mx-auto p-8 flex flex-col items-center">
            <form
              onSubmit={handleFormSubmit}
              className="w-[22rem] max-w-md space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                />
                {formErrors.name && <p className="text-red-300 text-sm">{formErrors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                />
                {formErrors.email && <p className="text-red-300 text-sm">{formErrors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  placeholder="Company Name"
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                />
              </div>
              <div>
                <select
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleFormChange}
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                >
                  <option value="">Select License Type</option>
                  <option value="SaaS">SaaS</option>
                  <option value="Perpetual">Perpetual</option>
                  <option value="Subscription">Subscription</option>
                </select>
                {formErrors.licenseType && <p className="text-red-300 text-sm">{formErrors.licenseType}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-lg bg-white text-gray-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-blue-600 p-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4">
        {isChatOpen && (
          <div
            className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col"
          >
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Chat with Us</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-white">
                &times;
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.type === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask a question..."
                className="w-full p-2 rounded-lg text-gray-900 border"
              />
            </form>
          </div>
        )}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
        >
          <MessageSquare size={24} />
        </button>
      </div>
    </div>
  );
}

export default App;