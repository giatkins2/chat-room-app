//adding new chat docs

//setting up a real-time listener to get new chats

//updating the username

//updating the room


class Chatroom {
    consturtor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = 
    }
}

const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom);