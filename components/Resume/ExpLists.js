import React from "react";
import ExpCard from "./ExpCard";






const Dummy = [
  {
    id: "e1",
    title: "Front-End Web Development",
    description:
      "Building the visual components of websites using HTML, CSS, and JavaScript, and working with front-end frameworks like React or Angular",
  },
  {
    id: "e2",
    title: "Web Design and Development",
    description:
      "Creating visually appealing and user-friendly websites by combining web design principles with coding skills in HTML, CSS, and JavaScript. This can include working with graphic design software such as Adobe Photoshop or Sketch to create website layouts and designs.",
  },
  {
    id: "e4",
    title: "Web Scraping",
    description:
      "Extracting data from websites using Python, libraries like BeautifulSoup and Scrapy, and automating the process with tools like Selenium. This can involve writing scripts to collect and clean data from various sources and formats.",
  },
  {
    id: "e5",
    title: "Video Editing and Post-Production",
    description:
      "I have studied this school. This is first school I have studied in city. (Butwal). This is the Private Boarding School. Located in Manigram, Butwal.I have studied Grade 2.",
  },
  {
    id: "e6",
    title: "Back-End Web Development",
    description:
      "Developing and maintaining the server-side components of websites using languages like Node.js, Next, Django and working with databases like MySQL or MongoDB.",
  },
];

const ExpLists = () => {
  return (
    <div>
      {Dummy.map((item) => {
        return (
          <ExpCard
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default ExpLists;
