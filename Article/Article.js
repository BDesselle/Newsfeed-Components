const submitBtn = document.querySelector('.submitArticle');
submitBtn.addEventListener('click', () => {
  event.preventDefault();
  const headerText = document.querySelector('.newArticleTitle');
  const paraText = document.querySelector('.newArticle');
  articleContainer.appendChild(
    article(headerText.value, new Date(), [paraText.value])
  );
  modal.style.display = 'none';
});
const articles = [
  {
    header: `Bee puns really sting.`,
    date: 'Nov 5th, 2017',
    content: [
      `You’re not supposed to talk to a human. I can’t believe I’m doing this. I’ve got to. Oh, I can’t do it! Come on! No, yes, no, do it! I can’t. How should I start it? You like jazz? No, that’s no good. Here she comes. Speak, you fool. As Vanessa walks by, Barry takes a DEEP BREATH. BARRY (CONT’D) (cheerful) Umm...hi. Vanessa DROPS A STACK OF DISHES, and HOPS BACK. BARRY (CONT’D) I’m sorry. VANESSA You’re talking. BARRY Yes, I know, I know. VANESSA You’re talking. BARRY I know, I’m sorry. I’m so sorry. VANESSA It’s okay. It’s fine. It’s just, I know I’m dreaming, but I don’t recall going to bed. "Bee Movie" - JS REVISIONS 8/13/07 35. BARRY Well, you know I’m sure this is very disconcerting. VANESSA Well yeah. I mean this is a bit of a surprise to me. I mean...you’re a bee. BARRY Yeah, I am a bee, and you know I’m not supposed to be doing this, but they were all trying to kill me and if it wasn’t for you...I mean, I had to thank you. It’s just the way I was raised. Vanessa intentionally JABS her hand with a FORK. VANESSA Ow! BARRY That was a little weird. VANESSA (to herself) I’m talking to a bee. BARRY Yeah. VANESSA I’m talking to a bee. BARRY Anyway... VANESSA And a bee is talking to me... BARRY I just want you to know that I’m grateful, and I’m going to leave now. VANESSA Wait, wait, wait, wait, how did you learn to do that? BARRY What? "Bee Movie" - JS REVISIONS 8/13/07 36. VANESSA The talking thing. BARRY Same way you did, I guess.`,
    ],
  },
  {
    header: `Quit pollen my leg.`,
    date: 'Nov 5th, 2017',
    content: [
      `You’re not supposed to talk to a human. I can’t believe I’m doing this. I’ve got to. Oh, I can’t do it! Come on! No, yes, no, do it! I can’t. How should I start it? You like jazz? No, that’s no good. Here she comes. Speak, you fool. As Vanessa walks by, Barry takes a DEEP BREATH. BARRY (CONT’D) (cheerful) Umm...hi. Vanessa DROPS A STACK OF DISHES, and HOPS BACK. BARRY (CONT’D) I’m sorry. VANESSA You’re talking. BARRY Yes, I know, I know. VANESSA You’re talking. BARRY I know, I’m sorry. I’m so sorry. VANESSA It’s okay. It’s fine. It’s just, I know I’m dreaming, but I don’t recall going to bed. "Bee Movie" - JS REVISIONS 8/13/07 35. BARRY Well, you know I’m sure this is very disconcerting. VANESSA Well yeah. I mean this is a bit of a surprise to me. I mean...you’re a bee. BARRY Yeah, I am a bee, and you know I’m not supposed to be doing this, but they were all trying to kill me and if it wasn’t for you...I mean, I had to thank you. It’s just the way I was raised. Vanessa intentionally JABS her hand with a FORK. VANESSA Ow! BARRY That was a little weird. VANESSA (to herself) I’m talking to a bee. BARRY Yeah. VANESSA I’m talking to a bee. BARRY Anyway... VANESSA And a bee is talking to me... BARRY I just want you to know that I’m grateful, and I’m going to leave now. VANESSA Wait, wait, wait, wait, how did you learn to do that? BARRY What? "Bee Movie" - JS REVISIONS 8/13/07 36. VANESSA The talking thing. BARRY Same way you did, I guess.`,
    ],
  },
  {
    header: `These bee puns are just winging it.`,
    date: 'Nov 5th, 2017',
    content: [
      `You’re not supposed to talk to a human. I can’t believe I’m doing this. I’ve got to. Oh, I can’t do it! Come on! No, yes, no, do it! I can’t. How should I start it? You like jazz? No, that’s no good. Here she comes. Speak, you fool. As Vanessa walks by, Barry takes a DEEP BREATH. BARRY (CONT’D) (cheerful) Umm...hi. Vanessa DROPS A STACK OF DISHES, and HOPS BACK. BARRY (CONT’D) I’m sorry. VANESSA You’re talking. BARRY Yes, I know, I know. VANESSA You’re talking. BARRY I know, I’m sorry. I’m so sorry. VANESSA It’s okay. It’s fine. It’s just, I know I’m dreaming, but I don’t recall going to bed. "Bee Movie" - JS REVISIONS 8/13/07 35. BARRY Well, you know I’m sure this is very disconcerting. VANESSA Well yeah. I mean this is a bit of a surprise to me. I mean...you’re a bee. BARRY Yeah, I am a bee, and you know I’m not supposed to be doing this, but they were all trying to kill me and if it wasn’t for you...I mean, I had to thank you. It’s just the way I was raised. Vanessa intentionally JABS her hand with a FORK. VANESSA Ow! BARRY That was a little weird. VANESSA (to herself) I’m talking to a bee. BARRY Yeah. VANESSA I’m talking to a bee. BARRY Anyway... VANESSA And a bee is talking to me... BARRY I just want you to know that I’m grateful, and I’m going to leave now. VANESSA Wait, wait, wait, wait, how did you learn to do that? BARRY What? "Bee Movie" - JS REVISIONS 8/13/07 36. VANESSA The talking thing. BARRY Same way you did, I guess.`,
    ],
  },
  {
    header: `Wasp are you talking about?`,
    date: 'Nov 5th, 2017',
    content: [
      `You’re not supposed to talk to a human. I can’t believe I’m doing this. I’ve got to. Oh, I can’t do it! Come on! No, yes, no, do it! I can’t. How should I start it? You like jazz? No, that’s no good. Here she comes. Speak, you fool. As Vanessa walks by, Barry takes a DEEP BREATH. BARRY (CONT’D) (cheerful) Umm...hi. Vanessa DROPS A STACK OF DISHES, and HOPS BACK. BARRY (CONT’D) I’m sorry. VANESSA You’re talking. BARRY Yes, I know, I know. VANESSA You’re talking. BARRY I know, I’m sorry. I’m so sorry. VANESSA It’s okay. It’s fine. It’s just, I know I’m dreaming, but I don’t recall going to bed. "Bee Movie" - JS REVISIONS 8/13/07 35. BARRY Well, you know I’m sure this is very disconcerting. VANESSA Well yeah. I mean this is a bit of a surprise to me. I mean...you’re a bee. BARRY Yeah, I am a bee, and you know I’m not supposed to be doing this, but they were all trying to kill me and if it wasn’t for you...I mean, I had to thank you. It’s just the way I was raised. Vanessa intentionally JABS her hand with a FORK. VANESSA Ow! BARRY That was a little weird. VANESSA (to herself) I’m talking to a bee. BARRY Yeah. VANESSA I’m talking to a bee. BARRY Anyway... VANESSA And a bee is talking to me... BARRY I just want you to know that I’m grateful, and I’m going to leave now. VANESSA Wait, wait, wait, wait, how did you learn to do that? BARRY What? "Bee Movie" - JS REVISIONS 8/13/07 36. VANESSA The talking thing. BARRY Same way you did, I guess.`,
    ],
  },
  {
    header: `Say, these bee puns aren’t too shab-bee.`,
    date: 'Nov 5th, 2017',
    content: [
      `You’re not supposed to talk to a human. I can’t believe I’m doing this. I’ve got to. Oh, I can’t do it! Come on! No, yes, no, do it! I can’t. How should I start it? You like jazz? No, that’s no good. Here she comes. Speak, you fool. As Vanessa walks by, Barry takes a DEEP BREATH. BARRY (CONT’D) (cheerful) Umm...hi. Vanessa DROPS A STACK OF DISHES, and HOPS BACK. BARRY (CONT’D) I’m sorry. VANESSA You’re talking. BARRY Yes, I know, I know. VANESSA You’re talking. BARRY I know, I’m sorry. I’m so sorry. VANESSA It’s okay. It’s fine. It’s just, I know I’m dreaming, but I don’t recall going to bed. "Bee Movie" - JS REVISIONS 8/13/07 35. BARRY Well, you know I’m sure this is very disconcerting. VANESSA Well yeah. I mean this is a bit of a surprise to me. I mean...you’re a bee. BARRY Yeah, I am a bee, and you know I’m not supposed to be doing this, but they were all trying to kill me and if it wasn’t for you...I mean, I had to thank you. It’s just the way I was raised. Vanessa intentionally JABS her hand with a FORK. VANESSA Ow! BARRY That was a little weird. VANESSA (to herself) I’m talking to a bee. BARRY Yeah. VANESSA I’m talking to a bee. BARRY Anyway... VANESSA And a bee is talking to me... BARRY I just want you to know that I’m grateful, and I’m going to leave now. VANESSA Wait, wait, wait, wait, how did you learn to do that? BARRY What? "Bee Movie" - JS REVISIONS 8/13/07 36. VANESSA The talking thing. BARRY Same way you did, I guess.`,
    ],
  },
  {
    header: `You like jazz?`,
    date: 'Nov 5th, 2017',
    content: [
      `You’re not supposed to talk to a human. I can’t believe I’m doing this. I’ve got to. Oh, I can’t do it! Come on! No, yes, no, do it! I can’t. How should I start it? You like jazz? No, that’s no good. Here she comes. Speak, you fool. As Vanessa walks by, Barry takes a DEEP BREATH. BARRY (CONT’D) (cheerful) Umm...hi. Vanessa DROPS A STACK OF DISHES, and HOPS BACK. BARRY (CONT’D) I’m sorry. VANESSA You’re talking. BARRY Yes, I know, I know. VANESSA You’re talking. BARRY I know, I’m sorry. I’m so sorry. VANESSA It’s okay. It’s fine. It’s just, I know I’m dreaming, but I don’t recall going to bed. "Bee Movie" - JS REVISIONS 8/13/07 35. BARRY Well, you know I’m sure this is very disconcerting. VANESSA Well yeah. I mean this is a bit of a surprise to me. I mean...you’re a bee. BARRY Yeah, I am a bee, and you know I’m not supposed to be doing this, but they were all trying to kill me and if it wasn’t for you...I mean, I had to thank you. It’s just the way I was raised. Vanessa intentionally JABS her hand with a FORK. VANESSA Ow! BARRY That was a little weird. VANESSA (to herself) I’m talking to a bee. BARRY Yeah. VANESSA I’m talking to a bee. BARRY Anyway... VANESSA And a bee is talking to me... BARRY I just want you to know that I’m grateful, and I’m going to leave now. VANESSA Wait, wait, wait, wait, how did you learn to do that? BARRY What? "Bee Movie" - JS REVISIONS 8/13/07 36. VANESSA The talking thing. BARRY Same way you did, I guess.`,
    ],
  },
];
function article(header, date, content) {
  const article = document.createElement('div');
  const articleHeader = document.createElement('h2');
  const articleDate = document.createElement('p');
  const articleContent = content.map(para => {
    const articlePara = document.createElement('p');
    articlePara.textContent = para;
    return articlePara;
  });
  const articleBtn = document.createElement('span');
  article.classList.add('article');
  articleHeader.textContent = header;
  articleDate.classList.add('date');
  articleDate.textContent = date;
  articleBtn.classList.add('expandButton');
  articleBtn.textContent = 'Expand';
  article.appendChild(articleHeader);
  article.appendChild(articleDate);
  articleContent.forEach(art => {
    article.appendChild(art);
  });
  article.appendChild(articleBtn);
  articleBtn.addEventListener('click', event => {
    const openArticles = document.querySelectorAll('.article-open');
    article.classList.toggle('article-open');
    if (article.classList.contains('article-open')) {
      article.lastChild.textContent = 'Close';
    } else {
      article.lastChild.textContent = 'Expand';
    }
    openArticles.forEach(art => {
      art.classList.remove('article-open');
      art.lastChild.textContent = 'Expand';
    });
  });
  return article;
}
const articleContainer = document.querySelector('.articles');
articles.forEach(art => {
  articleContainer.appendChild(article(art.header, art.date, art.content));
});
