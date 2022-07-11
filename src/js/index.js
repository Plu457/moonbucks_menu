const $form = document.querySelector('#espresso-menu-form');
const $input = document.querySelector('#espresso-menu-name');
const menuList = document.querySelector('#espresso-menu-list');

const addMenuName = () => {
  const menuName = $input.value;
  const template = menuName => {
    return `
      <li class="menu-list-item d-flex items-center py-2">
  <span class="w-100 pl-2 menu-name">${menuName}</span>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  >
    수정
  </button>
  <button
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
  >
    삭제
  </button>
</li>
    `;
  };

  menuList.insertAdjacentHTML('beforeend', template(menuName));
  $input.value = '';
};

$form.addEventListener('submit', e => {
  e.preventDefault();

  if (!$input.value) {
    alert('메뉴를 입력하세요');
    return;
  }
  addMenuName();
});
