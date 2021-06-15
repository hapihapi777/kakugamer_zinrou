"use strict";
{
  //   // チェックボックスと<div>要素と削除ボタンをn人数分IDかclass付きで作る
  // // チェックが入ったら削除ボタンを有効にする
  // // 削除ボタンを押した人を削除して配列を詰める
  // function Initial_action() {

  //   const ninzuu = parseInt(document.getElementById("hito").value);
  //   for (let i = 1; i <= ninzuu; i++) {
  //     addForm(i);
  //   }

  //   ButtonMotion();
  //   const select = document.getElementById("select");
  //   select.disabled = true;
  //   const hito = document.getElementById("hito");
  //   settei.classList.add("nodisp");
  //   const parent = document.getElementById("parent");
  //   parent.classList.remove('nodisp');

  //   member_decision.disabled = true;

  // }

  // // function tuika() {
  // //   const palette = document.createElement('div');
  // //   palette.id = "parent";
  // //   palette.classList.add("container");

  // //   const settei = document.getElementById("settei");

  // //   document.body.insertBefore(palette, settei.nextSibling);
  // //   // palette.textContent = "メンバー";
  // // }

  // function addForm(num) {
  //   const input_data = document.createElement('input');
  //   input_data.type = 'search';
  //   input_data.id = 'inputform_' + num;
  //   input_data.classList.add("item5");
  //   input_data.name = "member_name";
  //   // input_data.placeholder = num + "人目";
  //   input_data.value = num +"人目";

  //   const parent = document.getElementById('parent');
  //   const member_btns = document.getElementById('member_btns');
  //   parent.insertBefore(input_data, member_btns);
  // }

  // // ボタン関数
  // function ButtonMotion() {
  //   const parent = document.getElementById("parent");
    
  //   const hyouzi = document.getElementById("hyouzi");
    
  //   const ninzuu = parseInt(document.getElementById("hito").value);
  //   document.getElementById('number_of_people').textContent = "今回は" + ninzuu + "人村";
    
  //   for (let i = 0; i < ninzuu; i++) {
  //     const new_li = document.createElement("li");
  //     // new_li.id = "li" + i;
  //     new_li.classList.add("item5");
  //     hyouzi.appendChild(new_li);

  //   }
    
 

  // }

  // function GetMember() {
  //   const ninzuu = parseInt(document.getElementById("hito").value);
  //   // const member_decision = document.getElementsById("member_decision");
  //   const hyouzi = document.getElementById("hyouzi");
  //   // const member_decision = document.getElementById("member_decision");

  //   // const member_list = [];
  //   for (let i = 0; i < ninzuu; i++) {
  //     const p_i = document.getElementsByName("member_name")[i].value;
  //     member_list.push(p_i);
  //   }
  //   if (member_list.indexOf("") !== -1) {
  //     console.log("kara");
  //     member_decision.disabled = true;
  //   } else {
  //     member_decision.disabled = false;
  //   }

  //   let str = "";
  //   for (let i = 0; i < member_list.length; i++) {
  //     str = (i + 1) + ":" + member_list[i] + " ";
  //     let list = hyouzi.getElementsByTagName("li")[i];
  //     list.innerHTML = str;
  //   }
  //   console.log(member_list);

  // }

  // function GameStart() {
  //   const first_village = document.getElementById("first_village");
  //   first_village.classList.remove('nodisp');
  //   GetJob("first_member");
  //   // GetJob("job_1_0");
  // }

  // function GetJob(id) {
  //   const list_hyouzi = document.getElementById(id);
  //   list_hyouzi.textContent = member_list;
  // }

  // function shuffle(arr) {
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arr[j], arr[i]] = [arr[i], arr[j]];
  //   }
  //   return arr;
  // }
}