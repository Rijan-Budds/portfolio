import React from 'react';

function Contact() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-2 border border-gray-300 rounded-lg" />
        <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-lg" />
        <textarea placeholder="Message" className="p-2 border border-gray-300 rounded-lg"></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
}

export default Contact;
