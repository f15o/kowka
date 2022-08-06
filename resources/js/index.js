const image = document.getElementById('image');
const button = document.getElementById('button');
const loader = document.getElementById('loader');

const clipboard = document.getElementById('clipboard');
const clipboardSuccess = document.getElementById('clipboard-success');

const url = 'https://cataas.com/cat?json=true';

async function onClick() {
  loader.style.opacity = '1';
  const res = await fetch(url);
  const data = await res.json();

  image.src = `https://cataas.com${data.url}`;
}

image.addEventListener('load', () => {
  loader.style.opacity = '0';
  clipboard.style.display = 'block';
  clipboardSuccess.style.display = 'none';
});

button.addEventListener('click', onClick);
document.addEventListener('DOMContentLoaded', onClick);

image.addEventListener('click', () => {
  navigator.clipboard.writeText(image.src).then(() => {
    clipboard.style.display = 'none';
    clipboardSuccess.style.display = 'block';

    setTimeout(() => {
      clipboardSuccess.style.display = 'none';
      clipboard.style.display = 'block';
    }, 1500);
  });
});
