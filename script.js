let color_list = [
    "rgba(248, 202, 18, 1)",
    "rgba(0, 107, 86, 1)",
    "rgba(0, 167, 222, 1)",
    "rgba(0, 108, 146, 1)",
    "rgba(122, 78, 155, 1)",
    "rgba(213, 128, 178, 1)",
    "rgba(226, 116, 16, 1)",
  ];
  let d = new Date();
  let day = d.getDay();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  
  window.onload = function () {
    document.getElementById("dot").style.backgroundColor = color_list[day];
    document.getElementById("date").innerHTML =
      ("0" + month).slice(-2) + "/" + ("0" + date).slice(-2);
    if (checkName() == true) {
      document.getElementById("name").innerHTML = localStorage.getItem("name");
      if (
        localStorage.getItem("name") == "Rick" ||
        localStorage.getItem("name") == "rick"
      ) {
        rickMode();
      } else {
        document.getElementById("dot").className = "dot";
      }
    } else {
      setName();
    }
    document.getElementById("card").classList.add("is-active");
  };
  
  function checkName() {
    if (localStorage.getItem("name")) {
      return true;
    } else {
      return false;
    }
  }
  
  function setName() {
    let name;
    while (true) {
      let input = window.prompt("請輸入姓名");
      if (input != null && input != "") {
        name = input;
        break;
      } else {
        window.alert("輸入名稱有誤，請重新輸入");
      }
    }
    localStorage.setItem("name", name);
    document.getElementById("name").innerHTML = localStorage.getItem("name");
    if (name == "Rick" || name == "rick") {
      rickMode();
    } else if (name == "bili" || name == "Bili" ){
      biliMode();
    } else {
      document.getElementById("dot").className = "dot";
    }
  }
  
  function resetName() {
    document.getElementById("card").classList.remove("is-active");
    setName();
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("card").classList.add("is-active");
  }
  
  function biliMode() {
    document.getElementById("dot").className = "bili";
    var audio2 = new Audio("比利王.m4a");
    audio2.play();
  }


  function rickMode() {
    document.getElementById("dot").className = "rick";
    var audio = new Audio("audio_rick.m4a");
    audio.play();
  }