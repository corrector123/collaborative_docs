export const registerSockets = (sockets, proxy, socket) => {
  sockets &&
    Object.keys(sockets).forEach((t) => {
      "subscribe" !== t &&
        "unsubscribe" !== t &&
        socket.emitter.addListener(t, sockets[t], proxy);
    });
};
export const destroySockets = (sockets, proxy, socket) => {
  sockets &&
    Object.keys(sockets).forEach((t) => {
      socket.emitter.removeListener(t, proxy);
    });
};
