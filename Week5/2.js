/*
2.[ {grade: 4, name: '페이커'}, 
    {grade:3, name:'너구리'},
    {grade:3, name:'쇼메이커'},
    {grade: 1, name: '칸나'}, 
    {grade: 2, name: '캐니언'},
    {grade: 1, name:'라이프'}   ]
가 있을 때 
member 변수에  {high: [ ], low: [ ]} 를 기본으로 grade가 3이상이면 high에 2 이하면 low에
넣고 싶다. 배열 메소드를 사용하여 해보아라.
*/

let array = [{grade: 4, name: '페이커'}, 
    {grade:3, name:'너구리'},
    {grade:3, name:'쇼메이커'},
    {grade: 1, name: '칸나'}, 
    {grade: 2, name: '캐니언'},
    {grade: 1, name:'라이프'}];

let member = {high: [], low: []};

array.forEach(element => {
    if (element['grade'] >= 3){
        member['high'].push(element);
    }
    else{
        member['low'].push(element);
    }
});

console.log(member)