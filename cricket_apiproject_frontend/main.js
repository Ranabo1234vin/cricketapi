import axios from "axios";
let noteListRootElement=document.querySelector('.notesList')
let notes=[];
let updatingID=null;
document.getElementById('createNoteButton').addEventListener("click",function(){
const first_name=document.getElementById('first_name').value;
const last_name=document.getElementById('last_name').value;
const email=document.getElementById("email").value;
const phone_number=document.getElementById("phone").value;
const role=document.getElementById("role").value;
const avalible=document.querySelector('input[name="avalible"]:checked')?
document.querySelector('input[name="avalible"]:checked').value:"";
if(!first_name || !last_name || !email || !phone_number || !role)
{
    document.getElementById("warning-msg").innerHTML="All Feilds are required";
}
let body={first_name,last_name,email,phone_number,role,avalible};
if(updatingID)
{
    axios.put(`http://localhost:3000/api/v1/players/update_players/${updatingID}`, body).then((response) => {     
        console.log('Response:',response.data)
        renderElementToScreen();
        document.getElementById("warning-msg").innerHTML="";
        updatingID=null;
         document.getElementById("createNoteButton").innerHTML="Submit"
    }).catch((error) => {    
            console.error('Error:', error); });
}
else
{
axios.post('http://localhost:3000/api/v1/players/add_players', body).then((response) => {     
    console.log('Response:',response.data)
    renderElementToScreen();
    document.getElementById("warning-msg").innerHTML="";
}).catch((error) => {    
        console.error('Error:', error); });
console.log("this inside eventlistner");
}
})

async function renderElementToScreen()
{
    noteListRootElement.innerHTML="";
const players= await axios.get("http://localhost:3000/api/v1/players/get_players")
    
if(players.data.data)
{
notes=players.data.data
notes.forEach(note=>{
    renderNoteToList(note,note._id);
})
}
}
function renderNoteToList(note,uniquID)
{
    
    let noteDev=document.createElement('div');
    let noteTitle=document.createElement('p');
    noteDev.classList.add("note",`note${uniquID}`);
    let noteContent=document.createElement('p');
    let playermobile=document.createElement("p");
    let playeravalible=document.createElement("p");
    let playerrole=document.createElement("p");
    let noteDeleteButton=document.createElement('button')
    noteTitle.innerText=`Name:${note.first_name} ${note.last_name}`;
    noteContent.innerText=`Email:${note.email}`;
    playeravalible.innerText=`Avaliblety:${note.avalible ? "Yes":"No"}`;
    playermobile.innerText=`Phone:${note.phone_number}`;
    playerrole.innerText=`Role:${note.role}`;
     let updatebutton=document.createElement("button");
    noteDeleteButton.innerText='Delete'
    updatebutton.innerText="update";
    updatebutton.style.marginLeft="10px";
    noteDeleteButton.addEventListener('click',()=>{
    removeElementFromNoteList(uniquID)
    })
    updatebutton.addEventListener("click",()=>{
     console.log("this is update button");
     updateplayers(note,uniquID)

    })

    noteDev.appendChild(noteTitle);
    noteDev.appendChild(noteContent);
    noteDev.appendChild(playermobile);
    noteDev.appendChild(playerrole)
    noteDev.appendChild(playeravalible);
    noteDev.appendChild(noteDeleteButton)
    noteDev.appendChild(updatebutton);
    noteListRootElement.appendChild(noteDev) 
    
    document.getElementById('first_name').value="";
    document.getElementById('last_name').value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("role").value="";
}
async function  removeElementFromNoteList(ID)
{
    document.querySelector(`.note${ID}`).remove();
   const response= await axios.delete(`http://localhost:3000/api/v1/players/delete_players/${ID}`)
   console.log(res.data);
   
   

}
async function updateplayers(note,uniquID) {
    document.getElementById("first_name").value=note.first_name;
    document.getElementById("last_name").value=note.last_name;
    document.getElementById("email").value=note.email;
    document.getElementById("phone").value=note.phone_number;
    document.getElementById("role").value=note.role;
    note.avalible?document.getElementById("role_yes").checked=true:
    document.getElementById("role_no").checked=true;
    updatingID=uniquID;
    document.getElementById("createNoteButton").innerHTML="update"

    
}
renderElementToScreen()
