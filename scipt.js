var toggle = document.querySelector("#toggle");
const body = document.querySelector("body");

toggle.addEventListener('input',()=>{
    if(body.classList.contains("dark"))
    body.classList.remove("dark");
    else
    body.classList.add("dark");
})

var Exp = 1,Pro = 1,Cer = 1, Hon = 1,Info = 1;

document.querySelector("#addExp").addEventListener('click',()=>{
    document.querySelector("#expSec").innerHTML +=`
    <div class="row">
    <h6>Experience ${++Exp} </h6>
    <div class="col-12 inputStyle col-md-6">
        <label for="titleExp1"> Firm Name </label>
        <input   type="text" placeholder="xyz firm" name="titleExp1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="designationExp1"> Designation </label>
        <input   type="text" placeholder="SDE intern" name="designationExp1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="timeExp1"> Time Span </label>
        <input   type="text" placeholder="22 june 2022 - present" name="timeExp1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="techExp1"> Technology experience </label>
        <input   type="text" placeholder="nodeJS , reactjs , mongoose , JavaScript" name="techExp1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="descrpExp1"> Description </label>
        <input   type="text" placeholder="My work is to improve efficiency of backend server and implement new features." name="descrpExp1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="linkExp1"> Any link to share </label>
        <input   type="url" placeholder="eg: https://My-Work-Is-This.com" name="linkExp1" >
    </div>
    `;
})

document.querySelector("#addPro").addEventListener('click',()=>{
    document.querySelector("#projectSec").innerHTML +=`
    <div class="row">
    <h6>Project ${++Pro}</h6>
    <div class="col-12 inputStyle col-md-6">
        <label for="titlePro1"> Project Name </label>
        <input   type="text" placeholder="CP Calender" name="titlePro1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="timePro1"> Time Span </label>
        <input   type="text" placeholder="30 jan 2022 - 24 feb 2022" name="timePro1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="techPro1"> Technology Used </label>
        <input   type="text" placeholder="nodeJS , reactjs , mongoose , JavaScript" name="techPro1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="descrpPro1"> Description </label>
        <input   type="text" placeholder="show details related upcoming CP Contests" name="descrpPro1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="linkPro1"> Any link to share </label>
        <input   type="url" placeholder="eg: https://My-Is-My-Project.com" name="linkPro1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="gitPro1"> Github Repo </label>
        <input   type="url" placeholder="eg: https://github.com/getlost01/cp-contest-calender" name="gitPro1" >
    </div>
    `;
})

document.querySelector("#addCer").addEventListener('click',()=>{
    document.querySelector("#certifySec").innerHTML +=`
    <div class="row">
    <h6>Certificate ${++Cer}</h6>
    <div class="col-12 inputStyle col-md-6">
        <label for="titleCer1"> Certificate Name </label>
        <input   type="text" placeholder="Front-End Web UI Frameworks and Tools" name="titleCer1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="issCer1"> Issued By </label>
        <input   type="text" placeholder="Coursera" name="issCer1">
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="descrpCer1"> Description </label>
        <input   type="text" placeholder="For learning front end development." name="descrpCer1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="linkCer1"> Any link to share </label>
        <input   type="url" placeholder="eg: https://My-Is-My-Certificate.com" name="linkCer1" >
    </div>

    `;
})

document.querySelector("#addHon").addEventListener('click',()=>{
    document.querySelector("#honorSec").innerHTML +=`
    <div class="row" >
    <h6>Achievement ${++Hon}</h6>
    <div class="col-12 inputStyle col-md-6">
        <label for="titleHon1"> Achievements name </label>
        <input   type="text" placeholder="Get ranked 28 in conest by codechef." name="titleHon1">
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="recHon1"> Recognised by </label>
        <input   type="text" placeholder="Codechef" name="recHon1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="descrpHon1"> Description </label>
        <input   type="text" placeholder="In xyz contest I got 28 rank out of 1600+ students." name="descrpHon1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="linkHon1"> Any link to share </label>
        <input   type="url" placeholder="eg: https://My-Is-My-Honor.com" name="linkHon1" >
    </div>
    `;
})

document.querySelector("#addInfo").addEventListener('click',()=>{
    document.querySelector("#infoSec").innerHTML +=`
    <div class="row" >
    <h6>Info ${++Info}</h6>
    <div class="col-12 inputStyle col-md-6">
        <label for="titleInfo1">  Info name </label>
        <input   type="text" placeholder="I also like digital art." name="titleInfo1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="recInfo1"> Related to </label>
        <input   type="text" placeholder="Content Creation" name="recInfo1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="descrpInfo1"> Description </label>
        <input   type="text" placeholder="I have create 50+ digital art / posters for social media." name="descrpInfo1" >
    </div>
    <div class="col-12 inputStyle col-md-6">
        <label for="linkInfo1"> Any link to share </label>
        <input   type="url" placeholder="eg: https://My-Is-My-Art.com" name="linkInfo1" >
    </div>
    `;
})