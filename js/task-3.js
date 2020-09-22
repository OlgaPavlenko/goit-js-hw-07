const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galaryRef = document.getElementById('gallery');
galaryRef.classList.add('gallery');
const uniteImgRef = '';
// const elements = images.map(({ url, alt }) => {
//   const elementRef = document.createElement('li');
//   elementRef.classList.add('elem-item');
//   const imageElem = document.createElement('img');
//   imageElem.classList.add('img-item');
//   imageElem.src = url;
//   imageElem.alt = alt;
//   imageElem.width = 370;

//   elementRef.append(imageElem);
//   galaryRef.append(elementRef);

//   return elementRef;
// });

const elements = images
  .map(
    ({ url, alt }) =>
      `<li><img src = '${url}' alt = '${alt}' width = 370></li>`,
  )
  .join();
galaryRef.insertAdjacentHTML('afterbegin', elements);
