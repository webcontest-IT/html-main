var favorite = false;
let articles_number;

async function load_articles_json() {
    const response = await fetch('../assets/articles.json');
    const data = await response.json();
    articles_number = data[filename];
    console.log('articles_number: ' + articles_number);
}

onload = function() {
    load_articles_json();
    setTimeout(chack_favorite, 10);
    console.log('favorite');
    console.log('articles_number: ' + articles_number);
}

function fast(){
    load_articles_json();
    setTimeout(chack_favorite, 10);
    console.log('favorite');
    console.log('articles_number: ' + articles_number);
}

function add_mypage() {
    const cookies_list = document.cookie ? document.cookie.split('; ') : [];
    if (cookies_list.some(cookie => cookie.split('=')[1] === String(articles_number))) {
        console.log('already');
        var del_num = cookies_list.find(cookie => cookie.split('=')[1] === String(articles_number)).split('=')[0];
        document.cookie = `${del_num}=; max-age=0`;
    } else {
        console.log('not yet');
        const last_cookies_number = cookies_list.length > 0 ? parseInt(cookies_list[cookies_list.length - 1].split('=')[0].substr(5)) : 0;
        const new_cookie_number = last_cookies_number + 1;
        document.cookie = `pages${new_cookie_number}=${articles_number}`;
    }
    console.log(document.cookie);
}

function push_favorite() {
    favorite = !favorite;
    if (favorite) {
        console.log('true');
        add_mypage();
        document.getElementById('img_favorite').src = "../assets/images/favorite.png";
    } else {
        console.log('false');
        document.getElementById('img_favorite').src = "../assets/images/no_favorite.png";
        const cookies_list = document.cookie ? document.cookie.split('; ') : [];
        var del_num = cookies_list.find(cookie => cookie.split('=')[1] === String(articles_number)).split('=')[0];
        document.cookie = `${del_num}=; max-age=0`;
    }
}

function chack_favorite() {
    const cookies_list = document.cookie ? document.cookie.split('; ') : [];
    if (cookies_list.some(cookie => cookie.split('=')[1] == String(articles_number))) {
        console.log('aaa');
        document.getElementById('img_favorite').src = "../assets/images/favorite.png";
        favorite = true;
    } else {
        console.log('fff');
        document.getElementById('img_favorite').src = "../assets/images/no_favorite.png";
        favorite = false;
    }
}