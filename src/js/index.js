//* 변수 앞에 $를 표시한 이유는 DOM을 사용했다라는 의미
const $form = document.querySelector('#espresso-menu-form');
const $input = document.querySelector('#espresso-menu-name');
const $menuList = document.querySelector('#espresso-menu-list');

const updateMenuCount = () => {
  const $menuCount = document.querySelector('.menu-count');
  $menuCount.innerText = `${$menuList.querySelectorAll('li').length} 개`;
};

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

  $menuList.insertAdjacentHTML('beforeend', template(menuName));
  $input.value = '';

  updateMenuCount();
};

const updateMenuName = e => {
  const $menuName = e.target.closest('li').querySelector('.menu-name');
  const updatedMenuName = prompt('메뉴명을 수정하세요.', $menuName.innerText);

  if (updatedMenuName === null) return;

  $menuName.innerText = updatedMenuName;
};

const removeMenuName = e => {
  if (confirm('정말 삭제하시겠습니까?')) {
    e.target.closest('li').remove();
  }
  updateMenuCount();
};

$form.addEventListener('submit', e => {
  e.preventDefault();

  if (!$input.value) {
    alert('메뉴를 입력하세요');
    return;
  }
  addMenuName();
});

$menuList.addEventListener('click', e => {
  if (e.target.classList.contains('menu-edit-button')) {
    updateMenuName(e);
    return;
  }

  if (e.target.classList.contains('menu-remove-button')) {
    removeMenuName(e);
    return;
  }
});
