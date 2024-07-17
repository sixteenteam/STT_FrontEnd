interface Window {
  webkit?: {
    messageHandlers: {
      tokenHandler: {
        postMessage: (message: any) => void;
      };
    };
  };
}
