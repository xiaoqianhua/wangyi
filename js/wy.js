//小三角的切换
var span = document.getElementById('square');

//右边网页的切换
var first = document.getElementById('right163');
var second = document.getElementById('right126');
var three = document.getElementById('rightYeah');
var four = document.getElementById('rightPhone');
function tab1() {
    span.style.top = "2px";
    first.style.display = 'block';
    second.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
}
function tab2() {
    span.style.top = "87px";
    first.style.display = 'none';
    second.style.display = 'block';
    three.style.display = 'none';
    four.style.display = 'none';
}
function tab3() {
    span.style.top = "173px";
    first.style.display = 'none';
    second.style.display = 'none';
    three.style.display = 'block';
    four.style.display = 'none';
}
function tab4() {
    span.style.top = "259px";
    first.style.display = 'none';
    second.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'block';
}


