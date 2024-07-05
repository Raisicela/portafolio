import React from "react";
import { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    // Agrega otros campos aquí
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a la API o realizar otras acciones
    console.log("Form data submitted:", formData);
  };

  return (
    <section id="contact" className="flex flex-col justify-center pt-0">
      <h2 className="text-white uppercase font-poppins text-2xl font-semibold text-left mt-16 tracking-tight">
        Contact
      </h2>
      <article className="flex flex-col w-full text-left mt-6 px-8  rounded-3xl pb-5 bg-[#1E293B]">
        {/* <p className="text-slate-400 font-poppins text-md text-left mt-4">
        raisa.marilyn1993@gmail.com
      </p> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black font-poppins text-md text-left mt-4"
        >
          <label className="text-white">Your name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-1 my-4 w-full"
          />
          <label className="text-white">Your email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-1 my-4 w-full"
          />
          <label className="text-white">Your message:</label>
          <input
            type=""
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-1 my-4 w-full"
          />
          <div className="w-full flex justify-center py-4">
            <button
              type="submit"
              className="bg-slate-700 p-2 px-6 rounded-xl text-white"
            >
              Submit
            </button>
          </div>
        </form>
        <br />
        {/* <p className="text-slate-400 font-poppins text-md text-left mt-4">
        In my free time, I enjoy spending time with my husky, who is very
        playful and loyal. I also like to assemble jigsaw puzzles, which
        challenge my logic and creativity.
      </p> */}
      </article>
    </section>
  );
};

export default About;
