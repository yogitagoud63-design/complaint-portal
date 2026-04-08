function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong Username or Password");
    }
}

function submitComplaint(){
    let name = document.getElementById("name").value;
    let complaint = document.getElementById("complaint").value;

    let date = new Date().toLocaleString();

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push({
        name: name,
        text: complaint,
        time: date,
        status: "Pending"
    });

    localStorage.setItem("complaints", JSON.stringify(complaints));

    alert("Complaint Submitted!");
}

function deleteComplaint(index){
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.splice(index, 1);

    localStorage.setItem("complaints", JSON.stringify(complaints));

    location.reload();
}

function changeStatus(index){
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    if(complaints[index].status === "Pending"){
        complaints[index].status = "Solved";
    } else {
        complaints[index].status = "Pending";
    }

    localStorage.setItem("complaints", JSON.stringify(complaints));

    location.reload();
}

function logout(){
    window.location.href = "index.html";
}