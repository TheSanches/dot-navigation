function dotsWrite() {
  dotsSettings();
  let boxText = document.querySelectorAll(set.dotsHeading); //section text
  let box = document.querySelectorAll(set.dotsClass); //sections

  let dotsContainer = document.createElement('div'); //create a container for dots
  dotsContainer.className = 'dots'; //add class
  document.body.prepend(dotsContainer); //add to page
  dotsContainer.append(createDots(box, boxText)); //add the function that creates the filling of the container

  let dotsText = document.querySelectorAll('.dots__text'); //dots headers

  for (let i = 0, id = 1; i < box.length; i++, id++) { //iterate over the screen headers

      box[i].id = 'dot-' + id; //add id to sections

    for (let j = 0; j < dotsText.length; j++) { //iterate over the dots headers

      window.addEventListener('scroll', function () { //catch page scrolling
        let boxScroll = box[i].getBoundingClientRect(); //get the scroll coordinates of the section

        if (boxScroll.top >= -100 && boxScroll.top <= 200) { //at what coordinates does the script work
          if (i == j) { //when a section matches a dot
            for (let elem of dotsContainer.children) { //we sort out the children of the block with dots
              elem.classList.remove('dots__link_active'); //remove the class at all dots
            }
            dotsText[i].parentNode.classList.add('dots__link_active'); //add the class to the desired dot
          }
        }
      });

    }

  }

}

dotsWrite();

function createDots(quantity, boxText) { //create dots
  let fragment = new DocumentFragment(); 

  for (let k = 1; k <= quantity.length; k++) { //calculate count sections
    let a = document.createElement('a'); //create the desired number of links
    a.className = 'dots__link'; //add class
    a.href = "#dot-" + k; //add href

    let span = document.createElement('span'); //create span
    span.className = 'dots__text'; //add class

    for (let b = 0; b < boxText.length; b++) { //iterate over the screen headers
      if (k - 1 == b) { //if the header and dot number match
        span.innerHTML = boxText[b].innerHTML; //we substitute headings in points
      }
    }

    a.append(span); //insert span into the link

    fragment.append(a); //put it all here
  }

  return fragment; //return result
}

(function settings() { //auto call function settings
  let dots = document.querySelector('.dots');
  let dotsLink = document.querySelectorAll('.dots__link');

  dotsSettings();

  // dots on left
  set.posL ? dots.classList.add('dots_posL') : dots.classList.remove('dots_posL');

  // dots on top
  set.posT ? dots.classList.add('dots_posT') : dots.classList.remove('dots_posT');

  // dots below
  set.posB ? dots.classList.add('dots_posB') : dots.classList.remove('dots_posB');

  // horizontal orientation of dots
  set.orientX ? dots.classList.add('dots_orientX') : dots.classList.remove('dots_orientX');

  // if the color of the dots is specified, iterate over the dots and give the specified color
  if (set.dotsColor != false) {
    for (let dotsSetColor = 0; dotsSetColor < dotsLink.length; dotsSetColor++) {
      dotsLink[dotsSetColor].style.backgroundColor = set.dotsColor;
    }
  }

  // disable the border at the dots
  set.dotsBorder ? dots.classList.add('dots_dotsBorder') : dots.classList.remove('dots_dotsBorder');

  // set square dots
  set.dotsSquare ? dots.classList.add('dots_square') : dots.classList.remove('dots_square');

  // dots size
  if (set.dotsSize) {
    for (let dotsSetSize = 0; dotsSetSize < dotsLink.length; dotsSetSize++) {
      dotsLink[dotsSetSize].style.width = set.dotsSize[0]+'px';
      dotsLink[dotsSetSize].style.height = set.dotsSize[1]+'px';
    }
  }

  // border color
  if (set.dotsBorderColor != false) {
    for (let dotsSetBc = 0; dotsSetBc < dotsLink.length; dotsSetBc++) {
      dotsLink[dotsSetBc].style.borderColor = set.dotsBorderColor;
    }
  }
})();

