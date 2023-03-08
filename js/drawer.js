let isDrawerOpen = false;

const openDrawerButton = document.getElementById("open-drawer-button");
const drawer = document.getElementById("drawer");

openDrawerButton.onclick = function() {
  if (isDrawerOpen) {
    isDrawerOpen = false;
    drawer.className = "drawer";
  } else {
    isDrawerOpen = true;
    drawer.className = "drawer drawer-open";
  }
}