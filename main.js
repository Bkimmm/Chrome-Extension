function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // console.log('responseText:' + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        // console.log(err.message + ' in ' + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open('GET', url, true);
  xmlhttp.send();
}

ajax_get(
  'https://api.thecatapi.com/v1/images/search?size=full',
  function (data) {
    // document.getElementById('id').innerHTML = data[0]['id'];
    // document.getElementById('url').innerHTML = data[0]['url'];
    const body = document.body;
    body.style.backgroundImage = 'url(' + data[0]['url'] + ')';
    body.style.backgroundColor = 'lightsteelblue';
    body.style.backgroundSize = 'contain';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';

    //button 1
    const button1 = document.querySelector('.gNO89b');
    // console.log(button1);
    button1.setAttribute('id', 'button_1');

    const button_1 = document.querySelector('#button_1');
    button_1.style.backgroundColor = 'pink';
    //button 2
    const button2 = document.getElementById('gbqfbb');
    button2.style.background = 'pink';

    //footer
    const footer = document.querySelector('.c93Gbe');
    footer.style.background = '#dcd0ff';
    const google = document.querySelector('.lnXdpd');
    google.style.display = 'none';
    // var html = '<img src="' + data[0]['url'] + '">';
    // document.getElementById('image').innerHTML = html;
  }
);
//gbqfbb (im feeling lucky)
//name ='btnK'

fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2')
  .then((response) => response.json())
  .then((data) => {
    //array of cat facts that fit the footer;
    //2 facts
    let facts = document.querySelector('.ktLKi');
    if (data[0].text.length > data[1].text.length) {
      facts.innerHTML = data[1].text;
    } else {
      facts.innerHTML = data[0].text;
    }
    // console.log(data.text[0], data.text[1]);
    document.querySelector('.Pb9hCb').src = 'cat-icon-2.png';
  })
  .catch((error) => console.log(error));

//https://cat-fact.herokuapp.com/facts/random&amount=1
// lnXdpd
