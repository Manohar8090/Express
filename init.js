const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
},
{
    from: "abhishek",
    to: "indrajeet",
    msg: "teach me JS callbacks",
    created_at: new Date(),
},
{
    from: "rakesh",
    to: "nilesh",
    msg: "all the best!",
    created_at: new Date(),
},
{
    from: "prem",
    to: "ankit",
    msg: "bring me some fruits",
    created_at: new Date(),
},
{
    from: "amit",
    to: "raju",
    msg: "send me notes for the exam",
    created_at: new Date(),
},
];

Chat.insertMany(allChats);
