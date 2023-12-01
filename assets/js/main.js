function myFunction() {
    const x = document.getElementById("my-nav");
    if (x.className === "nav") {
        x.className += " responsive";
    }
    else{
        x.className = "nav";
    }
}