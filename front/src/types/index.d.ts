export {};

declare global {
  interface Window {
    kakaoModal: {
      showModal: () => void;
      close: () => void;
    };
    currentModal: {
      close: () => void;
    };
  }
}
