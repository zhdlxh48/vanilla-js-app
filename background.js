const body = document.querySelector("body");

const IMG_RANGE = 3;

const imageLinks = [
  {
    index: 0,
    link:
      "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80",
  },
  {
    index: 1,
    link:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    index: 2,
    link:
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

/*
 * Returns random number in specified range
 * @param {number} max range's maximum (inclusive)
 * @param {number} min range's minimun (inclusive)
 */
const randIndex = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min) + min) + min;
};

const handleImageLoad = () => {
  console.log("Image loading is done");
};

const paintImage = (index) => {
  const image = new Image();
  image.src = imageLinks[index].link;
  image.addEventListener("loadend", handleImageLoad);
  image.classList.add("background-image");
  body.appendChild(image);
};

function initState() {
  const imgNumber = randIndex(IMG_RANGE);
  paintImage(imgNumber);
}

initState();
