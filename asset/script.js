
const commentList = document.querySelector("#comment-list");
const myError = document.querySelector("#error-message");
const form = document.querySelector("form");

// jai trouver sur internet en fesant des recherche jai pas compris 
// (#comment-list > div:nth-child(2)")
// si je le met pas mes comentaire recopi ceux du dessus vue que je lui demande de cloner la function des comentaires
// mais se " > div:nth-child(2) " pas trouver par moi meme 

const comment = document.querySelector("#comment-list > div:nth-child(2)");


// creer une fonction qui se "clone" toute seule

const cloneComment = (comment, firstname, lastname, message) => {
  const commentClone = comment.cloneNode(true);
  const h3 = commentClone.querySelector(".font-medium, .text-gray-900");
  h3.textContent = `${firstname} ${lastname}`;
  const p = commentClone.querySelector(
    ".prose, .prose-sm, .mt-4, .max-w-none, .text-gray-500"
  );
  p.textContent = message;
  return commentClone;
}

const resetFormInput = () => {
  document.querySelector("#first-name").value = "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#message").value = "";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();


// Pour le message d'erreur

const inputFirstName = document.querySelector("#first-name").value.trim();
const inputLastName = document.querySelector("#last-name").value.trim();
const inputMessage = document.querySelector("#message").value.trim();

// jai pas trouver la signification des || entre chaque input sais pas expliquer
// si absence de " ||   || " message d'erreur ne marche pas 
// ( je voulais metre des "  ,   ,  " entre chaque input)

if (inputFirstName == "" || inputLastName == "" || inputMessage == "") {
    myError.style.display = "block";
  } else { 
    const clone = cloneComment(
      comment,
      inputFirstName,
      inputLastName,
      inputMessage
    );
    commentList.appendChild(clone);

    resetFormInput();
    myError.style.display = "none";
  }
});