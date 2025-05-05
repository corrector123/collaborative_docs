import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";
import { QuillBinding } from "y-quill"; // 确保安装 y-quill

const Editor = () => {
    const editorRef = useRef<HTMLDivElement>(null);
    const ydoc = new Y.Doc();

    useEffect(() => {
        if (editorRef.current) {
            const quill = new Quill(editorRef.current, { theme: "snow" });
            const provider = new WebsocketProvider("ws://localhost:3001", "my-room", ydoc);
            const ytext = ydoc.getText("quill");
            const binding = new QuillBinding(ytext, quill);

            provider.on('status', event => {
                console.log(event.status) // logs "connected" or "disconnected"
            })
            // 组件卸载时清理资源
            return () => {
                provider.destroy();
                ydoc.destroy();
                binding.destroy();
            };
        }
    }, []);

    return <div ref={editorRef} className="h-screen" />;
};

export default Editor;