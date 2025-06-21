const text = ["Think Rich To Alleviate Mediocrity & Poverty Liberia","Imaginatively We Can Save Lives", " Transformative Power In Creating Positive Change And Improving Lives", 
    " Excellence In Talent Is A Standard, Not A Reward"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let leeter = "";

    (function type() {
        if(count === text.length) count = 0;
        currentText = text[count];
        letter = currentText.slice(0, ++index)
        document.getElementById('typing').textContent = letter;

        if(letter.length === currentText.length){
            count++;
            index = 0;
            setTimeout(type, 1000);
        }else{
            setTimeout(type, 100)
        }
    })()

    window.addEventListener('load', () => {
  const footer = document.getElementById('footer');
  const body = document.body;
  const html = document.documentElement;

  const height = Math.max(body.scrollHeight, body.offsetHeight, 
                          html.clientHeight, html.scrollHeight, html.offsetHeight);
  
  if (height < window.innerHeight) {
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '100%';
  }
});