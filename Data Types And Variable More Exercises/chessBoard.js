function chessBoard(num) {
    let result=`<div class="chessboard">\n`;
    for (i=0;i<num;i++) {
        let row='';
        row+=`  <div>\n`;
        for (j=0;j<num;j++) {
            let color=(i+j)%2 ? `white` : `black`;
            row+=`    <span class="${color}"></span>\n`;
        }
        row+=`  </div>\n`;
        result+=row;
    }
    result+=`</div>`
    console.log(result);
}

chessBoard(3)