function lazyLoad(img, url) {

  // observer: when el is intersecting with viewport > load src and disconnect observer
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      img.src = url;
      observer.disconnect();
    }
  })

  // you should call observe the observer after construct it
  observer.observe(img);
}

const targetImage = document.querySelector('#lazy');

lazyLoad(targetImage, targetImage.url);