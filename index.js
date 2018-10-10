
function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector("#nested").querySelector(".target");
}

//dfs first ele. just happens to work in this specific case because we only
//have one element
//finds deepest first element
function dffs(node){

    if(node.children[0]){
        for(let i = 0;i < node.children.length;i++){
            return dffs(node.children[i]);
        }
    }
    else{
        return node;
    }
}

function deepestChild(){

    const grand = document.querySelector("div#grand-node");
    return dffs(grand);

}

function increaseRankBy(n){

    let ranks = document.querySelectorAll(".ranked-list");
    for(let rank of ranks){
        let rows = rank.children;
        for(let i = 0; i < rows.length; i++){
            // console.log(`before: ${rows[i].innerHTML}`)
            rows[i].innerHTML = Number.parseInt(rows[i].innerHTML) + n;
                        // console.log(`after: ${rows[i].innerHTML}`)
             // console.log(rows[i]);
        }
    }

}
