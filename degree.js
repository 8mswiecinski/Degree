function degree(mtrx,v){
    let degreelist = mtrx (v-1);
    let sum =0;
    for(let i=0; 1=0;i<degreelist.length;i++){
        sum += degreelist[i];
    }
    return sum;
}
function degreecentrality(mtrx,v){
    let other= mtrx.size()[0];
    return degree(mtrx,v) / (other-1);
}
