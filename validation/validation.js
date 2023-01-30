function details(e) {
  e.preventDefault();
  var obj = {};
  for (let index = 0; index < e.target.length - 1; index++) {
    if (e.target[index].type == "checkbox" || e.target[index].type == "radio") {
      if (e.target[index].checked) {
        obj = {
          ...obj,
          [e.target[index].name]: e.target[index].value,
        };
      }
    } else {
      obj = {
        ...obj,
        [e.target[index].name]: e.target[index].value,
      };
    }
  }
  if (!obj.vehicle1) {
    alert("please select atleast one checkbox");
  } else {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    Object.keys(obj).map((val, indx) => {
      document.writeln(val + " : " + Object.values(obj)[indx] + "<br>");
    });
  }
}

function numbercheck(n) {
  var arr = "1234567890!@#$%^&*()~[]{}|_+-=,./<>?;:'";
  var arr2 = '"';

  if (arr.includes(n[n.length - 1]) || arr2.includes(n[n.length - 1])) {
    return true;
  }
  return false;
}
function key(e) {
  let val = e.value;
  if (val.includes(" ") || numbercheck(val)) {
    e.value = val.slice(0, -1);
    alert(
      "Please enter valid name \nName should not cantain number,special char and space"
    );
  }
}
