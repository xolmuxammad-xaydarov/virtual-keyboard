const eventCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const eventKeyEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲',
  'Ctr', 'Win', 'Alt', ' ', 'Alt', 'Ctr', '◄', '▼', '►'];

// consteventKeyRus = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё',
//   'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
//   'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲',
//   'Ctr', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►'];

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.prepend(wrapper);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');

wrapper.append(textarea, keyboard);

const addAllKeys = (arr, arr1) => {
  for (let i = 0; i < arr.length; i += 1) {
    const keyBtn = document.createElement('button');
    keyBtn.classList.add('keyboard__key');
    keyBtn.setAttribute('data', arr[i]);
    if (keyBtn.getAttribute('data') === 'Space') {
      keyBtn.classList.add('keyboard__key-wide');
    } else if (keyBtn.getAttribute('data') === 'ShiftLeft' || keyBtn.getAttribute('data') === 'Backspace' || keyBtn.getAttribute('data') === 'Enter' || keyBtn.getAttribute('data') === 'Tab' || arr[i] === 'ArrowUp') {
      if (keyBtn.getAttribute('data') !== 'ArrowUp') {
        keyBtn.classList.add('key__bg');
      }
      keyBtn.classList.add('keyboard__key-middle');
    } else if (keyBtn.getAttribute('data') === 'CapsLock') {
      keyBtn.classList.add('keyboard__key-short');
    }
    keyBtn.textContent = arr1[i];
    keyboard.append(keyBtn);
  }
};
addAllKeys(eventCode, eventKeyEng);
