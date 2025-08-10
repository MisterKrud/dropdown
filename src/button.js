
export const dropDownMenu = () => {
    console.log('dropDownMenu')

const content = document.getElementById('content');


const menuContainer = document.querySelectorAll('.menu');

menuContainer.forEach(container => {
const menuButton = container.querySelector('.dropdown');
const menuList = container.querySelector('.menu-list')
const menuItems = container.querySelectorAll('.menu-item')
menuButton.addEventListener("mouseenter", ()=>{
    menuList.classList.remove('invisible')
})

menuButton.addEventListener("mouseleave", ()=>{
     menuList.classList.add("invisible")
})

 menuList.addEventListener("mouseenter", () =>{
    menuList.classList.remove("invisible")
})

 menuList.addEventListener("mouseleave", () =>{
    menuList.classList.add("invisible")
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

})

return menuButton
}