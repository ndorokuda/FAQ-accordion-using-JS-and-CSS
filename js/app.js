const App = {
  $: {
    faqHeaders: document.querySelectorAll('.faq-header'),
    answers: document.querySelectorAll('.answer'),
  },

  init() {
    App.evtHandlers();
  },

  //   Event handlers
  evtHandlers() {
    App.$.faqHeaders.forEach((header, index) => {
      header.addEventListener('click', (event) => {
        header.classList.toggle('active');
        const questionNumber = index;
        App.$.answers.forEach((answer, index) => {
          const answerNumber = index;
          if (answerNumber === questionNumber) {
            answer.classList.toggle('hidden');
            answer.classList.toggle('answer-animation-open');
            console.log(questionNumber);
          }
        });
      });
    });
  },
};

window.addEventListener('load', App.init);
