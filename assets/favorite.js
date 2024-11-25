let articlesData; // グローバル変数として定義

async function loadArticlesData() {
    const response = await fetch('/assets/articles.json');
    articlesData = await response.json();
}

async function articles_json(value) {
    if (!articlesData) {
        await loadArticlesData();
    }
    const key = Object.keys(articlesData).find(key => articlesData[key] === parseInt(value));
    return key;
}
// fetch('https://script.google.com/macros/s/AKfycbyDdSAGPG3I1d0TBkyfi0ZVyAG-fPswQI_7k9rM2rz2GJYZUM_lDbcNoAuQuA4ObybR/exec?mode=list')
//   .then(response => response.json())
//   .then(async data => {
//         let textbox_element = document.getElementById('textbox');
//         for (i of data["value"]) {
//             let new_element = document.createElement('p');
//             new_element.textContent = i[1];

//             let combined_element = document.createDocumentFragment();
//             combined_element.appendChild(document.createTextNode(await articles_json(i[0])));
            
//             combined_element.appendChild(new_element);
//             textbox_element.appendChild(combined_element);
//         }
//   })
//   .catch(error => console.error('Error:', error));

function addURL(pageid) {
    const url = `https://script.google.com/macros/s/AKfycbyDdSAGPG3I1d0TBkyfi0ZVyAG-fPswQI_7k9rM2rz2GJYZUM_lDbcNoAuQuA4ObybR/exec?mode=write&key=${pageid}&value=1`;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            console.log("addURL");
        })
        .catch(error => console.error('Error:', error));
}

function delURL(pageid) {
    const url = `https://script.google.com/macros/s/AKfycbyDdSAGPG3I1d0TBkyfi0ZVyAG-fPswQI_7k9rM2rz2GJYZUM_lDbcNoAuQuA4ObybR/exec?mode=write&key=${pageid}&value=-1`;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            console.log("delURL");
        })
        .catch(error => console.error('Error:', error));
}

function favorite_button(pageid) {
    var button = this;
    var isFavorite = button.getAttribute('data-favorite') === 'true';
    var img = button.querySelector('img');
    if (isFavorite) {
        button.setAttribute('data-favorite', 'false');
        img.src = '../assets/images/star_false.png'; // false画像に変更
        console.log('false');
        delURL(pageid);
    } else {
        button.setAttribute('data-favorite', 'true');
        img.src = '../assets/images/star_true.png'; // true画像に変更
        console.log('true');
        addURL(pageid);
    }
}