import JSONEditor, {JSONEditorOptions} from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css"
import WebSocket from "isomorphic-ws";

const ws = new WebSocket("ws://localhost:8080");

let container = document.createElement('div')

document.body.append(container)
const options: JSONEditorOptions = {
    mode: "tree",
    colorPicker:true
}
const editor = new JSONEditor(container, options)
// set json
// const initialJson = {

ws.onopen = function open() {
    console.log('connected');
    // ws.send(Date.now());
};

ws.onclose = function close() {
    console.log('disconnected');
};

ws.onmessage = function incoming(data: any) {
    editor.set(JSON.parse(data.data))
};
