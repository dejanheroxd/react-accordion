import { useEffect, useState } from "react";
import "./App.scss";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "lorem ipsum dolor sit amet consecterti, adidsongfg aelit koma dasddhalakao men o sokijdi",
  },
  {
    title: "How long do i have to return my chair?",
    text: "Padjdj hfuend ifiendig hsidfjf ksndjf ioojsj osdksdjj ood sdmsmd djjs ii iuffjf nsd",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Kdkdjd dsjd ofjenf fjfdf sif ofjsodjsfhif siofnsofn soj ofjso fjoisf sofjs fsohiggind",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <>
      <div className="accordion">
        {data.map((el, index) => (
          <AccordionItem
            num={index}
            title={el.title}
            text={el.text}
            key={el.title}
          />
        ))}
      </div>
    </>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenClose() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={"item " + (isOpen ? "open" : "")} onClick={handleOpenClose}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
