import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, event) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (event === undefined) {
      this.event = ['touchstart', 'click'];
    } else {
      this.event = event;
    }
    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.event, () => {
      element.classList.remove('active');
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.event.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
