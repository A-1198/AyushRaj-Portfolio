import React from "react";
import instaclone from "../assets/portfolio/instaclone.jpeg";
import lib from "../assets/portfolio/libmanage.jpeg";
import edit from "../assets/portfolio/codeeditor.png";
import todo from "../assets/portfolio/todolist.jpeg";
import senti from "../assets/portfolio/senti.jpeg";
import disease from "../assets/portfolio/disease.jpeg";
import {BsEye} from 'react-icons/bs';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: instaclone,
      github:"https://github.com/A-1198/INSTA_CLONE"
    },
    {
      id: 2,
      src: lib,
      github:"https://github.com/A-1198/Library-Management-System"
    },
    {
      id: 3,
      src: edit,
      github:"https://github.com/A-1198/ONLINE-CODE-EDITOR"

    },
    {
      id: 4,
      src: todo,
      github:"https://github.com/A-1198/ToDoList"

    },
    {
      id: 5,
      src: senti,
      github:"https://github.com/A-1198/Sentimental_Analysis"

    },
    {
      id: 6,
      src: disease,
      github:"https://github.com/A-1198/Disease-Predictor"

    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <div className="flex items-center justify-center">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              </div>
              <div className="flex items-center justify-center">
                <a href={github} className="flex items-center justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
