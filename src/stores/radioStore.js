import { atom } from "recoil";

export const radioStore = atom({
  key: "radioStore",
  /**
   * @type {{
   *    id:number|null,
   *    url:string|null,
   *    name:string|null,
   *    state: 'play'|'pause'|'stop',
   *  }}
   */
  default: {
    id: null,
    url: null,
    name: null,
    state: "stop",
  },
});
