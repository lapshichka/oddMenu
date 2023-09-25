function readMore() {
  let textNone = document.querySelectorAll('#text-none');
  let btn = document.querySelectorAll('#btn');

  if (textNone.style.display === 'none') {
    textNone.style.display = 'inline';
  } else {
    textNone.style.display = 'none';
  }
}
