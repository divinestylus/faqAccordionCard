/** Global constants */
const QUESTION_ROW = document.querySelectorAll('.title');


/** Functions section */

/**
 * This function displays the body text
 * @param {string} content 
 */
function toggleContent(title, content, arrow){
    title.classList.toggle('highlight-content');
    content.classList.toggle('toggle-content');
    arrow.classList.toggle('rotate-arrow');

}


/** Listeners section */
QUESTION_ROW.forEach(row => {
    row.addEventListener('click', event => {
        let title = event.target.parentElement,
            content = event.target.parentElement.nextElementSibling,
            arrow =  event.target.parentElement.children[1];
        toggleContent(title, content, arrow);
    })
})
