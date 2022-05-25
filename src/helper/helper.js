export function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c,] = lines[index];
    if (
      cells[a] &&
      cells[a] === cells[b] &&
      cells[a] === cells[c]
    ) {
      return cells[a];
    }
  }
  return null;
}

function declareWinner(squares) {
  /* Khai báo các biến để thực hiện logic ngang và dọc */

  // Mảng chứa cả ba điều kiện
  const samMok = [];

  // số lượng tấm khắc
  const intaglio = 36;

  // Mảng để lưu trữ theo logic ngang và dọc.
  var liness = [];
  var count = 0;

  // Biến kết thúc khi không còn trường hợp nào trúng thưởng là giá trị cuối của một dòng.
  var end = -3;

  // Kết thúc biến khi không có trường hợp nào trúng thưởng là cuối giá trị của một dòng.
  var endIf = 4;

  // Tổng số đường ngang và dọc
  var totalLine = 6;

  // Số lần thắng trên mỗi dòng có 3 cổ (ngang, dọc)
  var winNumberOfCases = 4;

  // in mảng mới qua các dòng (mảng đầy đủ)
  const lines = new Array();

  // in ra tổng số tấm đã khắc
  for (let x = 0; x < intaglio; x++) {
    samMok.push(x);
  }

  // lôgic ba cây ngang
  // Câu lệnh đầu tiên cho câu lệnh: 5 theo chiều ngang
  for (let k = 0; k < totalLine; k++) {
    // Lặp lại 3 lần vì số trường hợp có 3 hàng trên mỗi hàng của 3 hàng là 3
    for (let z = 0; z <= winNumberOfCases; z++) {
      // đếm cho cả 3 mộc bản
      for (let j = count; j < intaglio; j++) {
        // Chia các giá trị được lưu trữ trong samMok và lưu trữ chúng trong một mảng
        liness = samMok.slice(j, j + 3);
        lines.push(liness);
        // Mỗi khi giá trị của một dòng ngang kết thúc (ví dụ - 4,9,14), một câu lệnh điều kiện để kết thúc một vòng lặp
        // Thực hiện lại khi thực hiện 7x7. Bạn cần phải tinh chỉnh endif.
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!
        if (end % endIf == 0) {
          count += endIf - 2;
          break;
        }
        break;
      }
      count += 1;
      end += 1;
    }
  }

  // logic cổ 3 dọc
  var height = 0;
  var heightval = [];

  // Biểu thức dòng dọc (0,5,10,15,20 ....)
  for (let y = 0; y < totalLine; y++) {
    for (let z = 0; z < totalLine; z++) {
      // Đặt một giá trị vào giá trị chiều cao.
      heightval.push(height);
      height += totalLine;
      if (height >= intaglio) {
        break;
      }
    }
    // Công thức thiết lập giá trị ban đầu ở đầu dòng dọc mới: (height = (height%, nhập số đầu tiên của dòng ngang dưới cùng) - (Tất cả các dòng ngang / dòng dọc -1)
    // (Tổng dòng ngang / dọc -1) Lý do: Vì có một giá trị được thêm vào bởi height + = totalLine ở trên, nó bị trừ đi.
    height = (height % 30) - (totalLine - 1);
  }

  // Đặt giá trị ban đầu của đường thẳng đứng.
  count = 0;
  end = -3;
  endIf = 4;

  // Câu lệnh đầu tiên cho: 5 lần theo chiều dọc
  for (let w = 0; w < totalLine; w++) {
    // Lặp lại 3 lần vì số trường hợp có 3 hàng trên mỗi hàng của 3 hàng là 3
    for (let e = 0; e <= winNumberOfCases; e++) {
      // đếm cho cả 3 mộc bản
      for (let r = count; r < intaglio; r++) {
        // Chia các giá trị được lưu trữ trong samMok và lưu trữ chúng trong một mảng
        liness = heightval.slice(r, r + 3);
        lines.push(liness);
        // Mỗi khi giá trị của một dòng dọc kết thúc, một câu lệnh điều kiện để kết thúc một vòng lặp của một dòng
        if (end % endIf == 0) {
          count += endIf - 2;
          break;
        }
        break;
      }
      count += 1;
      end += 1;
    }
  }

  /* Khai báo các biến để thực hiện logic đường chéo */

  // a, b, c được khai báo để trừ các số trong một mảng chéo
  var a = 0;
  var b = 0;
  var c = 0;
  // số đường chéo đếm được.
  var crossCount = 0;
  // số tăng / giảm của crossCount.
  var crossCountPlus = 6;
  var crossLines = [];
  // số tăng / giảm đường chéo (/)
  var leftCross = 7;
  // Số tăng / giảm đường chéo (\)
  var rightCross = 5;
  // Số đường chéo có thể là 3 cổ trên một đường ngang.
  var crossLope = totalLine - 2;

  // đường chéo (\) logic -leftCross
  // Vì rất khó triển khai số lượng của mỗi mảng dưới dạng lát cắt, chúng tôi xuất mảng riêng biệt và đưa nó trở lại mảng
  // Giá trị tiếp theo trong mảng được tăng thêm 6, vì vậy hãy triển khai như sau.
  // Vòng lặp đầu tiên cho 3 lần vì có 3 số hàng ngang liên tiếp là số trúng thưởng (ví dụ - 0,5,10 / 5,10,15 / 10,15,20)        for(let x = 0; x < crossLope; x++) {
  for (let y = 0; y < crossLope; y++) {
    a = samMok.indexOf(y + crossCount);
    b = samMok.indexOf(y + leftCross * 1 + crossCount);
    c = samMok.indexOf(y + leftCross * 2 + crossCount);
    lines.push([a, b, c]);
  }
  crossCount += crossCountPlus;

  // Đặt giá trị crossCount ban đầu
  crossCount = 0;
  // Logic đường chéo (/) - rightCross
  // Vì khó triển khai số lượng của mỗi mảng như một lát cắt, nên mảng được in riêng và được đưa vào mảng một lần nữa.
  // Giá trị tiếp theo trong mảng được tăng thêm 4, vì vậy hãy triển khai như sau.
  // Vòng lặp đầu tiên cho 3 lần vì có 3 số hàng ngang liên tiếp là số trúng thưởng (ví dụ - 2,3,4 / 7,8,9 / 12,13,14)
  for (let x = 0; x < crossLope; x++) {
    // Lý do đặt y thành giá trị ban đầu là 2: Giá trị nhỏ nhất của 2 được đưa ra vì điều kiện để thắng 3 trận trong bảng khắc 5x5 là [2,6,10].
    for (let y = 2; y < crossLope + 2; y++) {
      a = samMok.indexOf(y + crossCount);
      b = samMok.indexOf(y + rightCross * 1 + crossCount);
      c = samMok.indexOf(y + rightCross * 2 + crossCount);
      lines.push([a, b, c]);
    }
    crossCount += crossCountPlus;
  }

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  for (let i = 0; i < intaglio; i++) {
    if (squares[i] === null) {
      return null;
    }
  }
  return intaglio; // Trong trường hợp hòa, trả về intaglio
}
