import selfie from "../images/placeholder.png"

let content = document.querySelector("#content");

function loadAbout() {

    let header = document.createElement("h2");
    header.id = "aboutHeader";
    header.innerText = "About Me";
    content.appendChild(header);

    let photo = document.createElement("img");
    photo.src = selfie;
    photo.id = "selfie";
    content.appendChild(photo)

    let blurb = document.createElement("div");
    blurb.id = "blurb";
    blurb.innerText = "Henry Steel Place Holder";
    content.appendChild(blurb)

}

export {loadAbout};
