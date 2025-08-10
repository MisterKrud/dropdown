
export const dropDownMenu = () => {
    console.log('dropDownMenu')
const menuButton = document.getElementById('dropdown');
const content = document.getElementById('content');
const menuItems = document.querySelectorAll('.menu-item')

const menuContainer = document.getElementById('menu-list');

menuButton.addEventListener("mouseenter", ()=>{
    menuContainer.classList.remove('invisible')
})

menuButton.addEventListener("mouseleave", ()=>{
    menuContainer.classList.add("invisible")
})

menuContainer.addEventListener("mouseover", () =>{
    menuContainer.classList.remove("invisible")
})
menuItems.forEach(item => {
    item.addEventListener("mouseenter", ()=>{
        item.classList.add("selected-item");
        item.style.cursor = "default";
    })
})
menuItems.forEach(item => {
    item.addEventListener("mouseleave", ()=>{
        item.classList.remove("selected-item")
    })
})


return menuButton
}