declare interface CodesMap {
  'backspace': number;
  'tab': number;
  'enter': number;
  'shift': number;
  'ctrl': number;
  'alt': number;
  'pause/break': number;
  'caps lock': number;
  'esc': number;
  'space': number;
  'page up': number;
  'page down': number;
  'end': number;
  'home': number;
  'left': number;
  'up': number;
  'right': number;
  'down': number;
  'insert': number;
  'delete': number;
  'command': number;
  'left command': number;
  'right command': number;
  'numpad *': number;
  'numpad +': number;
  'numpad -': number;
  'numpad .': number;
  'numpad /': number;
  'num lock': number;
  'scroll lock': number;
  'my computer': number;
  'my calculator': number;
  ';': number;
  '=': number;
  ',': number;
  '-': number;
  '.': number;
  '/': number;
  '`': number;
  '[': number;
  '\\': number;
  ']': number;
  "'": number;
  'a': number;
  'b': number;
  'c': number;
  'd': number;
  'e': number;
  'f': number;
  'g': number;
  'h': number;
  'i': number;
  'j': number;
  'k': number;
  'l': number;
  'm': number;
  'n': number;
  'o': number;
  'p': number;
  'q': number;
  'r': number;
  's': number;
  't': number;
  'u': number;
  'v': number;
  'w': number;
  'x': number;
  'y': number;
  'z': number;
  '0': number;
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  'f1': number;
  'f2': number;
  'f3': number;
  'f4': number;
  'f5': number;
  'f6': number;
  'f7': number;
  'f8': number;
  'f9': number;
  'f10': number;
  'f11': number;
  'f12': number;
  'numpad 0': number;
  'numpad 1': number;
  'numpad 2': number;
  'numpad 3': number;
  'numpad 4': number;
  'numpad 5': number;
  'numpad 6': number;
  'numpad 7': number;
  'numpad 8': number;
  'numpad 9': number;
}

declare interface AliasesMap {
  'windows': number;
  '⇧': number;
  '⌥': number;
  '⌃': number;
  '⌘': number;
  'ctl': number;
  'control': number;
  'option': number;
  'pause': number;
  'break': number;
  'caps': number;
  'return': number;
  'escape': number;
  'spc': number;
  'pgup': number;
  'pgdn': number;
  'ins': number;
  'del': number;
  'cmd': number;
}

declare interface InverseCodesMap {
  [key: number]: string;
}

declare interface Keycode {
  (event: Event): string;
  (keycode: number): string;
  (name: string): number;
  codes: CodesMap;
  aliases: AliasesMap;
  names: InverseCodesMap;
}

declare var keycode: Keycode;

declare module "keycode" {
  export = keycode;
}