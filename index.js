function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = `${n + parseInt(lis[i].innerHTML)}`
  }
}


function deepestChild() {
  let grandNode = document.querySelector('#grand-node')
  let list = grandNode.querySelectorAll('div')
  return list[list.length-1]
}
