import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

function Faq({ question, answer, number }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  function answerHandler() {
    const scrollHeight = contentRef.current.scrollHeight + "px";
    setMaxHeight(isOpen ? "0px" : scrollHeight);
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="bg-gray-900 max-w-2xl w-full mt-4 rounded-xl mx-auto">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
        onClick={answerHandler}
      >
        <h3 className="text-white font-semibold">
          Q:{number} {question}
        </h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Answer */}
      <div
        ref={contentRef}
        style={{
          maxHeight,
          paddingBottom: !isOpen && "0px",
        }}
        className="overflow-hidden transition-all duration-400 px-4 pb-8 pt-2 text-white border-t border-gray-700"
      >
        {answer}
      </div>
    </div>
  );
}

export default Faq;
