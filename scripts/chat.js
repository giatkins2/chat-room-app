//adding new chat docs
class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //save chat doc
        const response = await this.chats.add(chat);
        return response;
    }
    //setting up a real-time listener to get new chats
    getChats(callback) {
        this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        //update UI not chat
                        callback(change.doc.data())
                    }
                });
            });
    }
}

const chatroom = new Chatroom('gaming', 'shaun');

chatroom.getChats((data) => {
    console.log(data);
})



//updating the username

//updating the room


