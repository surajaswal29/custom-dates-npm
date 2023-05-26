import { useEffect } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const socket = io.connect("http://localhost:8000");

  const sendMessageHandler = () => {
    socket.emit("send_message", { message: "Suraj Aswal" });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
      alert(data.message);
    });
  }, [socket]);
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-6/12 bg-white border p-4 flex flex-col">
          <h1 className="text-2xl my-3 font-semibold">👤 Chat App</h1>
          <input
            type="text"
            placeholder="Message..."
            className="border p-2 my-2"
          />
          <button
            type="submit"
            className="border p-2 bg-red-500 text-white"
            onClick={sendMessageHandler}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
