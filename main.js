const hlink = document.querySelector("#hlink");
const alink = document.querySelector("#alink");
function show(shown, hidden) {
    document.getElementById(shown).style.display = "block";
    document.getElementById(hidden).style.display = "none";
    return false;
}
hlink.addEventListener("click", function onclick(event) {
    event.preventDefault();
    return show("hpage", "apage");
});
alink.addEventListener("click", function onclick(event) {
    event.preventDefault();
    return show("apage", "hpage");
});
