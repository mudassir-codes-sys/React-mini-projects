import faqs from "./Questions";
import Faq from "./Faq";

function List() {
  return faqs.map((faq, index) => {
    return  <Faq key={index} question={faq.question} answer={faq.answer} number={index+1} />;
  });
}
export default List;
