// read more - read less
const parentContainer = document.querySelector('.content');
parentContainer.addEventListener('click', event=>{
    const current =event.target;
    const isReadmorebtn = current.className.includes('read-more-btn');
    if(!isReadmorebtn) return;
    const currentText = event.target.parentNode.querySelector('.read-more-content');
    currentText.classList.toggle('read-more-content--show');
    current.textContent = current.textContent.includes('Read More')? "Read Less" : "Read More";
})


const parentContainer1 = document.querySelector('.skills-tools');
parentContainer1.addEventListener('click', event=>{
    const current =event.target;
    const isReadmorebtn = current.className.includes('read-more-btn');
    if(!isReadmorebtn) return;
    const currentText = event.target.parentNode.querySelector('.read-more-content');
    currentText.classList.toggle('read-more-content--show');
    current.textContent = current.textContent.includes('Read More')? "Read Less" : "Read More";
})
 

// contact
