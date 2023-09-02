export {};

declare global {
  interface Window {
    kakaoModal: {
      showModal: () => void;
      close: () => void;
    };
    currentModal: {
      showModal: () => void;
      close: () => void;
    };
  }
}
