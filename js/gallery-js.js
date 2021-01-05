function galleryFunc(id) {
    var elementId = document.getElementById(id);
    elementId.style.width = "320px";
    elementId.style.height = "320px";
    elementId.style.opacity = "70%";

    switch (id) {
        case "d1":
            elementId.style.transform = "rotate(-20deg)";
            elementId.style.backgroundImage = "url(Images/Birthday/birthday.jpg)"
            elementId.style.gridArea = "birthday";
            break;
        case "d2":
            elementId.style.transform = "rotate(20deg)";
            elementId.style.backgroundImage = "url(Images/Cocktail/cocktail3.jpg)"
            elementId.style.gridArea = "cocktail";
            break;
        case "d3":
            elementId.style.transform = "rotate(-20deg)";
            elementId.style.backgroundImage = "url(Images/Baby_shower/baby2.jpg)"
            elementId.style.gridArea = "shower";
            break;
        case "d4":
            elementId.style.transform = "rotate(20deg)";
            elementId.style.backgroundImage = "url(Images/Wedding/wed1.jpg)"
            elementId.style.gridArea = "wedding";
            break;
        case "d5":
            elementId.style.transform = "rotate(-20deg)";
            elementId.style.backgroundImage = "url(Images/Pool/pool2.jpg)"
            elementId.style.gridArea = "pool";
            break;
        case "d6":
            elementId.style.transform = "rotate(20deg)";
            elementId.style.backgroundImage = "url(Images/bonFire/bon5.jpg)"
            elementId.style.gridArea = "bonfire";
            break;
    }

}

function galleryNormFunc(id) {
    var elementId = document.getElementById(id);
    elementId.style.transform = "unset";
    elementId.style.width = "300px";
    elementId.style.height = "300px";
    elementId.style.backgroundRepeat = "no-repeat";
    elementId.style.backgroundSize = "cover";
    elementId.style.opacity = "unset";
    switch (id) {
        case "d1":
            elementId.style.backgroundImage = "url(Images/Birthday/party-balloons.jpg)"
            elementId.style.gridArea = "birthday";
            break;
        case "d2":
            elementId.style.backgroundImage = "url(Images/Cocktail/cocktail5.jpg)"
            elementId.style.gridArea = "cocktail";
            break;
        case "d3":
            elementId.style.backgroundImage = "url(Images/Baby_shower/baby1.jpg)"
            elementId.style.gridArea = "shower";
            break;
        case "d4":
            elementId.style.backgroundImage = "url(Images/Wedding/wed4.jpg)"
            elementId.style.gridArea = "wedding";
            break;
        case "d5":
            elementId.style.backgroundImage = "url(Images/Pool/pool1.jpg)"
            elementId.style.gridArea = "pool";
            break;
        case "d6":
            elementId.style.backgroundImage = "url(Images/bonFire/bon2.jpg)"
            elementId.style.gridArea = "bonfire";
            break;
    }
}

window.onclick = function(event) {
    if (event.target.id == "d1") {
        localStorage.setItem("modal", "birthGallery");
    } else if (event.target.id == "d2") {
        localStorage.setItem("modal", "cocktailGallery");
    } else if (event.target.id == "d3") {
        localStorage.setItem("modal", "showerGallery");
    } else if (event.target.id == "d4") {
        localStorage.setItem("modal", "weddingGallery");
    } else if (event.target.id == "d5") {
        localStorage.setItem("modal", "poolGallery");
    } else if (event.target.id == "d6") {
        localStorage.setItem("modal", "bonfireGallery");
    }

    if (event.target.id == "mainGallery") {
        var x = localStorage.getItem("modal");
        document.getElementById(x).style.display = "none";
        localStorage.removeItem("modal");
    }
}