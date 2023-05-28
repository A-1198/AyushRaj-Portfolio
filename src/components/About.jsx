import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            BRIEF:
          </p>
        </div>
        <p className="text-xl mt-20">
        As an aspiring web developer, JAVA coder, and AI/ML enthusiast, I am passionate about creating innovative solutions and exploring the intersection of technology and human experience. With a firm grasp on programming fundamentals and a thirst for knowledge, I am constantly honing my skills to stay up-to-date with the latest advancements in the field. 

        <br />

        <p className="text-xl">
        Currently in my begineer phase, I am excited to apply my theoretical knowledge in real-world scenarios and contribute to cutting-edge projects. Whether it's building dynamic websites, developing efficient algorithms, or diving into the complexities of machine learning, I am driven by a curiosity to explore the limitless possibilities of the digital realm.
        </p>
        </p>
      </div>
    </div>
  );
};

export default About;
