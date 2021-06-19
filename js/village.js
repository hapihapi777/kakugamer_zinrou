// 'use strict';
// {
  class Village {
    constructor(id) {
      this.id = id;


      this.Init();
    }

    Init() {

      let member_list = GetMember();
    member_decision.disabled = true;
    let this_member_list = [];
    this_member_list = this_member_list.concat(shuffle(member_list));
    console.log(this_member_list);

    let N = this_member_list.length;
    let zinrou = ["【人狼】"];
    zinrou.push(this_member_list[0], this_member_list[1]);
    this_member_list.splice(0, 2);
    if (N > 10) {
      zinrou.push(this_member_list[0]);
      this_member_list.shift();
    }

    let this_job = [["【騎士】"], ["【ハンター】"], ["【サイコキラー】"], ["【占い師】"]];
    shuffle(this_job);

    const text_place = ["job_1_0", "job_1_1", "job_1_2", "job_1_3"];
    for (let i = 0; i < this_job.length; i++) {
      let str = "";
      this_job[i].push(this_member_list[i]);
      if (this_job[i][0] === "【占い師】") {
        this_member_list.splice(i, 1);
        console.log(this_member_list);
        this_job[i].push("(占い先 > " + this_member_list[Math.floor(Math.random() * (this_member_list.length - 1))] + ")");
      }
      for (let j = 0; j < this_job[i].length; j++) {
        str += " " + this_job[i][j];
      }
      document.getElementById(text_place[i]).textContent = str;
    }
    shuffle(this_job);

    let zinrou_member = "";
    zinrou.forEach(e => zinrou_member += " " + e);
    document.getElementById("zinrou").textContent = zinrou_member;

    console.log(zinrou);
    console.log(this_member_list);
    console.log(this_job);


    member_list = shuffle(member_list);

    const first_member = document.getElementById("first_member");
    let str = "";
    for (let i = 0; i < member_list.length; i++) {
      str = (i + 1) + ": " + member_list[i];
      let list = first_member.querySelectorAll("li")[i];
      list.textContent = str;
    }


    function GetMember() {
      const ninzuu = parseInt(document.getElementById("hito").value);
  
      const member_list = [];
      for (let i = 0; i < ninzuu; i++) {
        let p_i = document.getElementsByName("member_name")[i].value;
        member_list.push(p_i);
      }
      if (member_list.indexOf("") !== -1) {
        console.log("kara");
        member_decision.disabled = true;
      } else {
        member_decision.disabled = false;
      }
      console.log(member_list);
  
      return member_list;
      // console.log(member_list);
    }


    }
  }
// }