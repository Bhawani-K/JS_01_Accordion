const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

// const accordianBody;
const faqs = [];

function showFaq() {

}

function createFaq() {
  for (let i = 0; i < faqData.length; i++) {
    // faq
    const body = document.getElementsByClassName('accordian_body')[0]
    const createDiv = document.createElement('div');
    createDiv.className = "faq";
    let createDivText = document.createDocumentFragment()
    createDiv.appendChild(createDivText)
    body.appendChild(createDiv);

    const faq = document.getElementsByClassName('faq')[i]
    // faq_Header
    const createHeader = document.createElement('div');
    createHeader.className = "faq_header";
    let createHeaderText = document.createDocumentFragment()
    createHeader.appendChild(createHeaderText)
    faq.appendChild(createHeader);

    // faq_hidden
    const createHidden = document.createElement('div');
    createHidden.className = "hidden";
    let createHiddenText = document.createDocumentFragment()
    createHidden.appendChild(createHiddenText)
    faq.appendChild(createHidden);

    // faq_header
    const faqHeader = document.getElementsByClassName('faq_header')[i]
    const createQuestion = document.createElement('h3');
    let createh3Question = document.createTextNode(faqData[i].question)
    createQuestion.appendChild(createh3Question)
    faqHeader.appendChild(createQuestion);

    // faq_Button
    const createButton = document.createElement('button');
    createButton.className = "show_btn";
    let createShowButton = document.createTextNode('+')
    createButton.appendChild(createShowButton)
    faqHeader.appendChild(createButton);
  }
}

function btnStatusUpdate() {

}

window.onload = createFaq;