export class Client {
    id;
    room;

    constructor(room, id) {
        this.id = id;
        this.room = room;
    }

    send(message: string, data: any) {
        this.room.onMessageHandlers[message](this, data)
    }
}
