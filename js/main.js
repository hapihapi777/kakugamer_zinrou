'use strict';
{
  // チェックボックスと<div>要素と削除ボタンをn人数分IDかclass付きで作る
  // チェックが入ったら削除ボタンを有効にする
  // 削除ボタンを押した人を削除して配列を詰める
  function Initial_action() {
    tuika();

    const ninzuu = parseInt(document.getElementById("hito").value);
    for (let i = 1; i <= ninzuu; i++) {
      addForm(i);
    }

    ButtonMotion();
    const select = document.getElementById("select");
    select.disabled = true;
    const hito = document.getElementById("hito");
    settei.classList.add("nodisp");
    const test = document.getElementById("test");
    test.classList.remove('nodisp');
  }

  function tuika() {
    const palette = document.createElement('div');
    palette.id = "parent";
    palette.classList.add("container");

    const settei = document.getElementById("settei");

    document.body.insertBefore(palette, settei.nextSibling);
    // palette.textContent = "メンバー";
  }

  function addForm(num) {
    const input_data = document.createElement('input');
    input_data.type = 'search';
    input_data.id = 'inputform_' + num;
    input_data.classList.add("item5");
    input_data.name = "member_name";
    input_data.placeholder = num + "人目";

    const parent = document.getElementById('parent');
    parent.appendChild(input_data);
  }

  // ボタン関数
  function ButtonMotion() {
    const addMember = document.createElement("input");
    addMember.type = 'button';
    addMember.id = "addmember";
    addMember.name = "member_btn";
    addMember.classList.add('addition');
    // addMember.classList.add('item1');
    addMember.value = '確認ボタン';

    const Member_decision = document.createElement("input");
    Member_decision.type = 'button';
    Member_decision.id = "member_decision";
    Member_decision.name = "member_decision";
    Member_decision.classList.add('addition');
    // Member_decision.classList.add('item1');
    Member_decision.value = '決定';

    const newDiv = document.createElement("div");
    newDiv.id = "btn2ko";
    newDiv.classList.add("item2");

    const parent = document.getElementById("parent");
    parent.appendChild(newDiv);

    const btn2ko = document.getElementById("btn2ko");
    btn2ko.appendChild(addMember);
    btn2ko.appendChild(Member_decision);
    // Member_decision.disabled = true;

    const hyouzi = document.createElement("ul");
    hyouzi.id = "hyouzi";
    hyouzi.classList.add("item2");
    parent.appendChild(hyouzi);

    const ninzuu = parseInt(document.getElementById("hito").value);
    document.getElementById('number_of_people').textContent = "今回は" + ninzuu + "人村となります";

    for (let i = 0; i < ninzuu; i++) {
      const new_li = document.createElement("li");
      new_li.id = "li" + i;
      hyouzi.appendChild(new_li);
      // const li
    }

    addMember.addEventListener("click", GetMember);
    // () => {
    //   GetMember();
      // const member_list = [];
      // for (let i = 0; i < ninzuu; i++) {
      //   const p_i = document.getElementsByName("member_name")[i].value;
      //   member_list.push(p_i);
      // }
      // if (member_list.indexOf("") !== -1) {
      //   console.log("kara");
      //   Member_decision.disabled = true;
      // } else {
      //   Member_decision.disabled = false;
      // }

      // let str = "";
      // for (let i = 0; i < member_list.length; i++) {
      //   str += (i + 1) + ":" + member_list[i] + " ";
      // }
      // hyouzi.textContent = str;
      // console.log(member_list);
    // });

  }

  function GetMember() {
    const ninzuu = parseInt(document.getElementById("hito").value);
    const Member_decision = document.getElementsByName("Member_decision");
    const hyouzi = document.getElementById("hyouzi");

    const member_list = [];
    for (let i = 0; i < ninzuu; i++) {
      const p_i = document.getElementsByName("member_name")[i].value;
      member_list.push(p_i);
    }
    if (member_list.indexOf("") !== -1) {
      console.log("kara");
      Member_decision.disabled = true;
    } else {
      Member_decision.disabled = false;
    }

    let str = "";
    for (let i = 0; i < member_list.length; i++) {
      str += (i + 1) + ":" + member_list[i] + " ";
    }
    hyouzi.textContent = str;
    console.log(member_list);
    // const ninzuu = parseInt(document.getElementById("hito").value);
    // const member_list = [];
    // for (let i = 0; i < ninzuu; i++) {
    //   const p_i = document.getElementsByName("member_name")[i].value;
    //   member_list.push(p_i);
    // }
    // if (member_list.indexOf("") !== -1) {
    //   console.log("kara");
    // }
    // console.log(member_list);
    // // return member_list;
  }

  const select = document.getElementById('select');
  select.addEventListener('click', Initial_action);

}