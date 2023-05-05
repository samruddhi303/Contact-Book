
function addContact() {
    let cName = document.querySelector("#name").value.toUpperCase();
    let cNumber = document.querySelector("#number").value;
    let displayNotification = document.querySelector('#displayNoti');


    if (cName == '' || cNumber == '') {
        displayNotification.innerHTML = "please enter details  !";
        displayNotification.style.color = "red";

    }
    else {
        localStorage.setItem(cName, cNumber);
        displayNotification.innerHTML = "Successfully added new contact";
        displayNotification.style.color = "green";
    }
    setInterval(() => {
        displayNotification.innerHTML = "";

    }, 2000)


}

function getContact() {
    let displayDetail = document.querySelector("#displayContact");
    let displayOutput = document.getElementById("displayContact");
    displayOutput.classList.add("displayContactStyle");
    let getContactName =
        document.querySelector("#Get-contactName").value.toUpperCase();
    //getItem
    let output = localStorage.getItem(getContactName);
    displayDetail.innerHTML = `${getContactName} : ${output == null ? '(   This contact detail is not added' : `+91 ${output}`
        }`;
    getContactName = '';
}

function reset() {
    location.reload();
}
