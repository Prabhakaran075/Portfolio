  const exampleText = ['Developer', 'Designer', 'Author'];
  const exampleTyping = new AutoTyping('#text', exampleText, {
      typeSpeed: 100,
      deleteSpeed: 100,
      waitBeforeDelete: 2000,
      waitBetweenWords: 500,
  });
  exampleTyping.start()