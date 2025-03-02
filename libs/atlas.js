$(document).ready(function() {
  //var nums01 = [0, 1, 2, 3],
  //  ranNums01 = [],
  //  i = nums01.length,
  //  j = 0;

  //while (i--) {
  //  j = Math.floor(Math.random() * (i + 1));
  //  ranNums01.push(nums01[j]);
  //  nums01.splice(j, 1);
  //}

  function shuffle(array) {
    var i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  ////// ArachaCholitgul
  var ranNumsArachaCholitgul = shuffle([0, 1]);

  var imgArrayArachaCholitgul = new Array();
  imgArrayArachaCholitgul[0] = "img/Thailand/Bangkok/ArachaCholitgul/01/01.jpg";
  imgArrayArachaCholitgul[1] = "img/Thailand/Bangkok/ArachaCholitgul/01/02.jpg";

  var imggArachaCholitgul = document.createElement("img");
  imggArachaCholitgul.setAttribute(
    "src",
    imgArrayArachaCholitgul[ranNumsArachaCholitgul[0]]
  );
  imggArachaCholitgul.setAttribute("class", "img-ArachaCholitgul");

  ////// Aye Ko
  var ranNumsAyeKo = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);

  var imgArrayAyeKo = new Array();
  imgArrayAyeKo[0] = "img/Myanmar/Yangon/AyeKo/01/01.jpg";
  imgArrayAyeKo[1] = "img/Myanmar/Yangon/AyeKo/01/02.jpg";
  imgArrayAyeKo[2] = "img/Myanmar/Yangon/AyeKo/01/03.jpg";
  imgArrayAyeKo[3] = "img/Myanmar/Yangon/AyeKo/01/04.jpg";
  imgArrayAyeKo[4] = "img/Myanmar/Yangon/AyeKo/01/05.jpg";
  imgArrayAyeKo[5] = "img/Myanmar/Yangon/AyeKo/01/06.jpg";
  imgArrayAyeKo[6] = "img/Myanmar/Yangon/AyeKo/01/07.jpg";
  imgArrayAyeKo[7] = "img/Myanmar/Yangon/AyeKo/01/08.jpg";

  var imggAyeKo = document.createElement("img");
  imggAyeKo.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[0]]);
  imggAyeKo.setAttribute("class", "img-AyeKo");

  // BunthengBat
  var ranNumsBunthengBat = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ]);

  var imgArrayBunthengBat = new Array();
  imgArrayBunthengBat[0] = "img/Cambodia/PhnomPenh/BunthengBat/01/01.jpg";
  imgArrayBunthengBat[1] = "img/Cambodia/PhnomPenh/BunthengBat/01/02.jpg";
  imgArrayBunthengBat[2] = "img/Cambodia/PhnomPenh/BunthengBat/01/03.jpg";
  imgArrayBunthengBat[3] = "img/Cambodia/PhnomPenh/BunthengBat/01/04.jpg";
  imgArrayBunthengBat[4] = "img/Cambodia/PhnomPenh/BunthengBat/01/05.jpg";
  imgArrayBunthengBat[5] = "img/Cambodia/PhnomPenh/BunthengBat/01/06.jpg";
  imgArrayBunthengBat[6] = "img/Cambodia/PhnomPenh/BunthengBat/02/01.jpg";
  imgArrayBunthengBat[7] = "img/Cambodia/PhnomPenh/BunthengBat/02/02.jpg";
  imgArrayBunthengBat[8] = "img/Cambodia/PhnomPenh/BunthengBat/02/03.jpg";
  imgArrayBunthengBat[9] = "img/Cambodia/PhnomPenh/BunthengBat/02/04.jpg";
  imgArrayBunthengBat[10] = "img/Cambodia/PhnomPenh/BunthengBat/02/05.jpg";
  imgArrayBunthengBat[11] = "img/Cambodia/PhnomPenh/BunthengBat/02/06.jpg";
  imgArrayBunthengBat[12] = "img/Cambodia/PhnomPenh/BunthengBat/02/07.jpg";
  imgArrayBunthengBat[13] = "img/Cambodia/PhnomPenh/BunthengBat/02/08.jpg";

  var imggBunthengBat = document.createElement("img");
  imggBunthengBat.setAttribute(
    "src",
    imgArrayBunthengBat[ranNumsBunthengBat[0]]
  );
  imggBunthengBat.setAttribute("class", "img-BunthengBat");

  // DatVu
  var ranNumsDatVu = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ]);

  var imgArrayDatVu = new Array();
  imgArrayDatVu[0] = "img/Vietnam/HoChiMinhCity/DatVu/01/01.jpg";
  imgArrayDatVu[1] = "img/Vietnam/HoChiMinhCity/DatVu/01/02.jpg";
  imgArrayDatVu[2] = "img/Vietnam/HoChiMinhCity/DatVu/01/03.jpg";
  imgArrayDatVu[3] = "img/Vietnam/HoChiMinhCity/DatVu/01/04.jpg";
  imgArrayDatVu[4] = "img/Vietnam/HoChiMinhCity/DatVu/01/05.jpg";
  imgArrayDatVu[5] = "img/Vietnam/HoChiMinhCity/DatVu/01/06.jpg";
  imgArrayDatVu[6] = "img/Vietnam/HoChiMinhCity/DatVu/01/07.jpg";
  imgArrayDatVu[7] = "img/Vietnam/HoChiMinhCity/DatVu/01/08.jpg";
  imgArrayDatVu[8] = "img/Vietnam/HoChiMinhCity/DatVu/01/09.jpg";
  imgArrayDatVu[9] = "img/Vietnam/HoChiMinhCity/DatVu/01/10.jpg";
  imgArrayDatVu[10] = "img/Vietnam/HoChiMinhCity/DatVu/01/11.jpg";
  imgArrayDatVu[11] = "img/Vietnam/HoChiMinhCity/DatVu/01/12.jpg";
  imgArrayDatVu[12] = "img/Vietnam/HoChiMinhCity/DatVu/01/13.jpg";
  imgArrayDatVu[13] = "img/Vietnam/HoChiMinhCity/DatVu/01/14.jpg";
  imgArrayDatVu[14] = "img/Vietnam/HoChiMinhCity/DatVu/01/15.jpg";
  imgArrayDatVu[15] = "img/Vietnam/HoChiMinhCity/DatVu/01/16.jpg";

  var imggDatVu = document.createElement("img");
  imggDatVu.setAttribute("src", imgArrayDatVu[ranNumsDatVu[0]]);
  imggDatVu.setAttribute("class", "img-DatVu");

  // DuHoang
  var ranNumsDuHoang = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30
  ]);

  var imgArrayDuHoang = new Array();
  imgArrayDuHoang[0] = "img/Vietnam/Hanoi/DuHoang/01/01.jpg";
  imgArrayDuHoang[1] = "img/Vietnam/Hanoi/DuHoang/01/02.jpg";
  imgArrayDuHoang[2] = "img/Vietnam/Hanoi/DuHoang/01/03.jpg";
  imgArrayDuHoang[3] = "img/Vietnam/Hanoi/DuHoang/01/04.jpg";
  imgArrayDuHoang[4] = "img/Vietnam/Hanoi/DuHoang/01/05.jpg";
  imgArrayDuHoang[5] = "img/Vietnam/Hanoi/DuHoang/01/06.jpg";
  imgArrayDuHoang[6] = "img/Vietnam/Hanoi/DuHoang/01/07.jpg";
  imgArrayDuHoang[7] = "img/Vietnam/Hanoi/DuHoang/01/08.jpg";
  imgArrayDuHoang[8] = "img/Vietnam/Hanoi/DuHoang/01/09.jpg";
  imgArrayDuHoang[9] = "img/Vietnam/Hanoi/DuHoang/01/10.jpg";
  imgArrayDuHoang[10] = "img/Vietnam/Hanoi/DuHoang/01/11.jpg";
  imgArrayDuHoang[11] = "img/Vietnam/Hanoi/DuHoang/01/12.jpg";
  imgArrayDuHoang[12] = "img/Vietnam/Hanoi/DuHoang/01/13.jpg";
  imgArrayDuHoang[13] = "img/Vietnam/Hanoi/DuHoang/01/14.jpg";
  imgArrayDuHoang[14] = "img/Vietnam/Hanoi/DuHoang/01/15.jpg";
  imgArrayDuHoang[15] = "img/Vietnam/Hanoi/DuHoang/01/16.jpg";
  imgArrayDuHoang[16] = "img/Vietnam/Hanoi/DuHoang/01/17.jpg";
  imgArrayDuHoang[17] = "img/Vietnam/Hanoi/DuHoang/01/18.jpg";
  imgArrayDuHoang[18] = "img/Vietnam/Hanoi/DuHoang/01/19.jpg";

  imgArrayDuHoang[19] = "img/Vietnam/Hanoi/DuHoang/02/01.jpg";
  imgArrayDuHoang[20] = "img/Vietnam/Hanoi/DuHoang/02/02.jpg";
  imgArrayDuHoang[21] = "img/Vietnam/Hanoi/DuHoang/02/03.jpg";
  imgArrayDuHoang[22] = "img/Vietnam/Hanoi/DuHoang/02/04.jpg";
  imgArrayDuHoang[23] = "img/Vietnam/Hanoi/DuHoang/02/05.jpg";
  imgArrayDuHoang[24] = "img/Vietnam/Hanoi/DuHoang/02/06.jpg";
  imgArrayDuHoang[25] = "img/Vietnam/Hanoi/DuHoang/02/07.jpg";
  imgArrayDuHoang[26] = "img/Vietnam/Hanoi/DuHoang/02/08.jpg";

  imgArrayDuHoang[27] = "img/Vietnam/Hanoi/DuHoang/03/01.jpg";
  imgArrayDuHoang[28] = "img/Vietnam/Hanoi/DuHoang/03/02.jpg";
  imgArrayDuHoang[29] = "img/Vietnam/Hanoi/DuHoang/03/03.jpg";
  imgArrayDuHoang[30] = "img/Vietnam/Hanoi/DuHoang/03/04.jpg";

  var imggDuHoang = document.createElement("img");
  imggDuHoang.setAttribute("src", imgArrayDuHoang[ranNumsDuHoang[0]]);
  imggDuHoang.setAttribute("class", "img-DuHoang");

  // Eiji Sumi
  var ranNumsEijiSumi = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18
  ]);

  var imgArrayEijiSumi = new Array();
  imgArrayEijiSumi[0] = "img/Thailand/Bangkok/EijiSumi/01/01.jpg";
  imgArrayEijiSumi[1] = "img/Thailand/Bangkok/EijiSumi/01/02.jpg";
  imgArrayEijiSumi[2] = "img/Thailand/Bangkok/EijiSumi/01/03.jpg";
  imgArrayEijiSumi[3] = "img/Thailand/Bangkok/EijiSumi/01/04.jpg";
  imgArrayEijiSumi[4] = "img/Thailand/Bangkok/EijiSumi/01/05.jpg";

  imgArrayEijiSumi[5] = "img/Thailand/Bangkok/EijiSumi/02/01.jpg";
  imgArrayEijiSumi[6] = "img/Thailand/Bangkok/EijiSumi/02/02.jpg";
  imgArrayEijiSumi[7] = "img/Thailand/Bangkok/EijiSumi/02/03.jpg";
  imgArrayEijiSumi[8] = "img/Thailand/Bangkok/EijiSumi/02/04.jpg";
  imgArrayEijiSumi[9] = "img/Thailand/Bangkok/EijiSumi/02/05.jpg";
  imgArrayEijiSumi[10] = "img/Thailand/Bangkok/EijiSumi/02/06.jpg";
  imgArrayEijiSumi[11] = "img/Thailand/Bangkok/EijiSumi/02/07.jpg";
  imgArrayEijiSumi[12] = "img/Thailand/Bangkok/EijiSumi/02/08.jpg";
  imgArrayEijiSumi[13] = "img/Thailand/Bangkok/EijiSumi/02/09.jpg";
  imgArrayEijiSumi[14] = "img/Thailand/Bangkok/EijiSumi/02/10.jpg";
  imgArrayEijiSumi[15] = "img/Thailand/Bangkok/EijiSumi/02/11.jpg";
  imgArrayEijiSumi[16] = "img/Thailand/Bangkok/EijiSumi/02/12.jpg";
  imgArrayEijiSumi[17] = "img/Thailand/Bangkok/EijiSumi/02/13.jpg";
  imgArrayEijiSumi[18] = "img/Thailand/Bangkok/EijiSumi/02/14.jpg";

  var imggEijiSumi = document.createElement("img");
  imggEijiSumi.setAttribute("src", imgArrayEijiSumi[ranNumsEijiSumi[0]]);
  imggEijiSumi.setAttribute("class", "img-EijiSumi");

  // HuyAn
  var ranNumsHuyAn = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  var imgArrayHuyAn = new Array();
  imgArrayHuyAn[0] = "img/Vietnam/Hanoi/HuyAn/01/01.jpg";
  imgArrayHuyAn[1] = "img/Vietnam/Hanoi/HuyAn/01/02.jpg";
  imgArrayHuyAn[2] = "img/Vietnam/Hanoi/HuyAn/01/03.jpg";
  imgArrayHuyAn[3] = "img/Vietnam/Hanoi/HuyAn/01/04.jpg";
  imgArrayHuyAn[4] = "img/Vietnam/Hanoi/HuyAn/01/05.jpg";
  imgArrayHuyAn[5] = "img/Vietnam/Hanoi/HuyAn/01/06.jpg";
  imgArrayHuyAn[6] = "img/Vietnam/Hanoi/HuyAn/01/07.jpg";
  imgArrayHuyAn[7] = "img/Vietnam/Hanoi/HuyAn/01/08.jpg";
  imgArrayHuyAn[8] = "img/Vietnam/Hanoi/HuyAn/01/09.jpg";
  imgArrayHuyAn[9] = "img/Vietnam/Hanoi/HuyAn/01/10.jpg";

  var imggHuyAn = document.createElement("img");
  imggHuyAn.setAttribute("src", imgArrayHuyAn[ranNumsHuyAn[0]]);
  imggHuyAn.setAttribute("class", "img-HuyAn");

  // KaminLertchaiprasert
  var ranNumsKaminLertchaiprasert = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  var imgArrayKaminLertchaiprasert = new Array();
  imgArrayKaminLertchaiprasert[0] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/01.jpg";
  imgArrayKaminLertchaiprasert[1] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/02.jpg";
  imgArrayKaminLertchaiprasert[2] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/03.jpg";
  imgArrayKaminLertchaiprasert[3] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/04.jpg";
  imgArrayKaminLertchaiprasert[4] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/05.jpg";
  imgArrayKaminLertchaiprasert[5] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/06.jpg";
  imgArrayKaminLertchaiprasert[6] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/07.jpg";
  imgArrayKaminLertchaiprasert[7] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/08.jpg";
  imgArrayKaminLertchaiprasert[8] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/09.jpg";
  imgArrayKaminLertchaiprasert[9] =
    "img/Thailand/ChiangMai/KaminLertchaiprasert/01/10.jpg";

  var imggKaminLertchaiprasert = document.createElement("img");
  imggKaminLertchaiprasert.setAttribute(
    "src",
    imgArrayKaminLertchaiprasert[ranNumsKaminLertchaiprasert[0]]
  );
  imggKaminLertchaiprasert.setAttribute("class", "img-KaminLertchaiprasert");

  // KanithaTith
  var ranNumsKanithaTith = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ]);

  var imgArrayKanithaTith = new Array();
  imgArrayKanithaTith[0] = "img/Cambodia/PhnomPenh/KanithaTith/01/01.jpeg";
  imgArrayKanithaTith[1] = "img/Cambodia/PhnomPenh/KanithaTith/01/02.jpeg";
  imgArrayKanithaTith[2] = "img/Cambodia/PhnomPenh/KanithaTith/01/03.jpeg";
  imgArrayKanithaTith[3] = "img/Cambodia/PhnomPenh/KanithaTith/01/04.jpeg";
  imgArrayKanithaTith[4] = "img/Cambodia/PhnomPenh/KanithaTith/01/05.jpeg";
  imgArrayKanithaTith[5] = "img/Cambodia/PhnomPenh/KanithaTith/01/06.jpeg";
  imgArrayKanithaTith[6] = "img/Cambodia/PhnomPenh/KanithaTith/01/07.jpeg";
  imgArrayKanithaTith[7] = "img/Cambodia/PhnomPenh/KanithaTith/01/08.jpeg";
  imgArrayKanithaTith[8] = "img/Cambodia/PhnomPenh/KanithaTith/01/09.jpeg";
  imgArrayKanithaTith[9] = "img/Cambodia/PhnomPenh/KanithaTith/01/10.jpeg";
  imgArrayKanithaTith[10] = "img/Cambodia/PhnomPenh/KanithaTith/01/11.jpeg";
  imgArrayKanithaTith[11] = "img/Cambodia/PhnomPenh/KanithaTith/01/12.jpeg";
  imgArrayKanithaTith[12] = "img/Cambodia/PhnomPenh/KanithaTith/01/13.jpeg";
  imgArrayKanithaTith[13] = "img/Cambodia/PhnomPenh/KanithaTith/01/14.jpeg";
  imgArrayKanithaTith[14] = "img/Cambodia/PhnomPenh/KanithaTith/01/15.jpeg";
  imgArrayKanithaTith[15] = "img/Cambodia/PhnomPenh/KanithaTith/01/16.jpeg";
  imgArrayKanithaTith[16] = "img/Cambodia/PhnomPenh/KanithaTith/01/17.jpeg";
  imgArrayKanithaTith[17] = "img/Cambodia/PhnomPenh/KanithaTith/01/18.jpeg";
  imgArrayKanithaTith[18] = "img/Cambodia/PhnomPenh/KanithaTith/01/19.jpeg";
  imgArrayKanithaTith[19] = "img/Cambodia/PhnomPenh/KanithaTith/01/20.jpeg";
  imgArrayKanithaTith[20] = "img/Cambodia/PhnomPenh/KanithaTith/01/21.jpeg";
  imgArrayKanithaTith[21] = "img/Cambodia/PhnomPenh/KanithaTith/01/22.jpeg";
  imgArrayKanithaTith[22] = "img/Cambodia/PhnomPenh/KanithaTith/01/23.jpeg";
  imgArrayKanithaTith[23] = "img/Cambodia/PhnomPenh/KanithaTith/01/24.jpeg";

  var imggKanithaTith = document.createElement("img");
  imggKanithaTith.setAttribute(
    "src",
    imgArrayKanithaTith[ranNumsKanithaTith[0]]
  );
  imggKanithaTith.setAttribute("class", "img-KanithaTith");

  // KhievKanel
  var ranNumsKhievKanel = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24
  ]);

  var imgArrayKhievKanel = new Array();
  imgArrayKhievKanel[0] = "img/Cambodia/PhnomPenh/KhievKanel/01/01.jpg";
  imgArrayKhievKanel[1] = "img/Cambodia/PhnomPenh/KhievKanel/01/02.jpg";
  imgArrayKhievKanel[2] = "img/Cambodia/PhnomPenh/KhievKanel/01/03.jpg";
  imgArrayKhievKanel[3] = "img/Cambodia/PhnomPenh/KhievKanel/01/04.jpg";
  imgArrayKhievKanel[4] = "img/Cambodia/PhnomPenh/KhievKanel/01/05.jpg";
  imgArrayKhievKanel[5] = "img/Cambodia/PhnomPenh/KhievKanel/01/06.jpg";
  imgArrayKhievKanel[6] = "img/Cambodia/PhnomPenh/KhievKanel/01/07.jpg";
  imgArrayKhievKanel[7] = "img/Cambodia/PhnomPenh/KhievKanel/01/08.jpg";
  imgArrayKhievKanel[8] = "img/Cambodia/PhnomPenh/KhievKanel/01/09.jpg";
  imgArrayKhievKanel[9] = "img/Cambodia/PhnomPenh/KhievKanel/01/10.jpg";
  imgArrayKhievKanel[10] = "img/Cambodia/PhnomPenh/KhievKanel/01/11.jpg";
  imgArrayKhievKanel[11] = "img/Cambodia/PhnomPenh/KhievKanel/01/12.jpg";
  imgArrayKhievKanel[12] = "img/Cambodia/PhnomPenh/KhievKanel/01/13.jpg";
  imgArrayKhievKanel[13] = "img/Cambodia/PhnomPenh/KhievKanel/01/14.jpg";
  imgArrayKhievKanel[14] = "img/Cambodia/PhnomPenh/KhievKanel/01/15.jpg";
  imgArrayKhievKanel[15] = "img/Cambodia/PhnomPenh/KhievKanel/01/16.jpg";
  imgArrayKhievKanel[16] = "img/Cambodia/PhnomPenh/KhievKanel/01/17.jpg";
  imgArrayKhievKanel[17] = "img/Cambodia/PhnomPenh/KhievKanel/01/18.jpg";
  imgArrayKhievKanel[18] = "img/Cambodia/PhnomPenh/KhievKanel/01/19.jpg";
  imgArrayKhievKanel[19] = "img/Cambodia/PhnomPenh/KhievKanel/01/20.jpg";
  imgArrayKhievKanel[20] = "img/Cambodia/PhnomPenh/KhievKanel/01/21.jpg";
  imgArrayKhievKanel[21] = "img/Cambodia/PhnomPenh/KhievKanel/01/22.jpg";
  imgArrayKhievKanel[22] = "img/Cambodia/PhnomPenh/KhievKanel/01/23.jpg";
  imgArrayKhievKanel[23] = "img/Cambodia/PhnomPenh/KhievKanel/01/24.jpg";
  imgArrayKhievKanel[24] = "img/Cambodia/PhnomPenh/KhievKanel/01/25.jpg";

  var imggKhievKanel = document.createElement("img");
  imggKhievKanel.setAttribute("src", imgArrayKhievKanel[ranNumsKhievKanel[0]]);
  imggKhievKanel.setAttribute("class", "img-KhievKanel");

  // LeBrothers
  var ranNumsLeBrothers = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  var imgArrayLeBrothers = new Array();
  imgArrayLeBrothers[0] = "img/Vietnam/Hue/LeBrothers/01/01.jpg";
  imgArrayLeBrothers[1] = "img/Vietnam/Hue/LeBrothers/01/02.jpg";
  imgArrayLeBrothers[2] = "img/Vietnam/Hue/LeBrothers/01/03.jpg";
  imgArrayLeBrothers[3] = "img/Vietnam/Hue/LeBrothers/01/04.jpg";
  imgArrayLeBrothers[4] = "img/Vietnam/Hue/LeBrothers/01/05.jpg";
  imgArrayLeBrothers[5] = "img/Vietnam/Hue/LeBrothers/01/06.jpg";
  imgArrayLeBrothers[6] = "img/Vietnam/Hue/LeBrothers/01/07.jpg";
  imgArrayLeBrothers[7] = "img/Vietnam/Hue/LeBrothers/01/08.jpg";
  imgArrayLeBrothers[8] = "img/Vietnam/Hue/LeBrothers/01/09.jpg";
  imgArrayLeBrothers[9] = "img/Vietnam/Hue/LeBrothers/01/10.jpg";

  var imggLeBrothers = document.createElement("img");
  imggLeBrothers.setAttribute("src", imgArrayLeBrothers[ranNumsLeBrothers[0]]);
  imggLeBrothers.setAttribute("class", "img-LeBrothers");

  // LeopoldFranckowiak
  var ranNumsLeopoldFranckowiak = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
  ]);

  var imgArrayLeopoldFranckowiak = new Array();
  imgArrayLeopoldFranckowiak[0] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/01.jpg";
  imgArrayLeopoldFranckowiak[1] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/02.jpg";
  imgArrayLeopoldFranckowiak[2] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/03.jpg";
  imgArrayLeopoldFranckowiak[3] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/04.jpg";
  imgArrayLeopoldFranckowiak[4] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/05.jpg";
  imgArrayLeopoldFranckowiak[5] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/06.jpg";
  imgArrayLeopoldFranckowiak[6] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/07.jpg";
  imgArrayLeopoldFranckowiak[7] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/08.jpg";
  imgArrayLeopoldFranckowiak[8] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/09.jpg";
  imgArrayLeopoldFranckowiak[9] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/10.jpg";
  imgArrayLeopoldFranckowiak[10] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/11.jpg";
  imgArrayLeopoldFranckowiak[11] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/12.jpg";
  imgArrayLeopoldFranckowiak[12] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/13.jpg";
  imgArrayLeopoldFranckowiak[13] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/14.jpg";
  imgArrayLeopoldFranckowiak[14] =
    "img/Vietnam/Hue/LeopoldFranckowiak/01/15.jpg";

  var imggLeopoldFranckowiak = document.createElement("img");
  imggLeopoldFranckowiak.setAttribute(
    "src",
    imgArrayLeopoldFranckowiak[ranNumsLeopoldFranckowiak[0]]
  );
  imggLeopoldFranckowiak.setAttribute("class", "img-LeopoldFranckowiak");

  // LeQuyTong
  var ranNumsLeQuyTong = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  var imgArrayLeQuyTong = new Array();
  imgArrayLeQuyTong[0] = "img/Vietnam/Hanoi/LeQuyTong/01/01.jpg";
  imgArrayLeQuyTong[1] = "img/Vietnam/Hanoi/LeQuyTong/01/02.jpg";
  imgArrayLeQuyTong[2] = "img/Vietnam/Hanoi/LeQuyTong/01/03.jpg";
  imgArrayLeQuyTong[3] = "img/Vietnam/Hanoi/LeQuyTong/01/04.jpg";
  imgArrayLeQuyTong[4] = "img/Vietnam/Hanoi/LeQuyTong/01/05.jpg";
  imgArrayLeQuyTong[5] = "img/Vietnam/Hanoi/LeQuyTong/01/06.jpg";
  imgArrayLeQuyTong[6] = "img/Vietnam/Hanoi/LeQuyTong/01/07.jpg";
  imgArrayLeQuyTong[7] = "img/Vietnam/Hanoi/LeQuyTong/01/08.jpg";
  imgArrayLeQuyTong[8] = "img/Vietnam/Hanoi/LeQuyTong/01/09.jpg";
  imgArrayLeQuyTong[9] = "img/Vietnam/Hanoi/LeQuyTong/01/10.jpg";

  var imggLeQuyTong = document.createElement("img");
  imggLeQuyTong.setAttribute("src", imgArrayLeQuyTong[ranNumsLeQuyTong[0]]);
  imggLeQuyTong.setAttribute("class", "img-LeQuyTong");

  // MaiNguyenAnh
  var ranNumsMaiNguyenAnh = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32
  ]);

  var imgArrayMaiNguyenAnh = new Array();
  imgArrayMaiNguyenAnh[0] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/01.jpg";
  imgArrayMaiNguyenAnh[1] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/02.jpg";
  imgArrayMaiNguyenAnh[2] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/03.jpg";
  imgArrayMaiNguyenAnh[3] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/04.jpg";
  imgArrayMaiNguyenAnh[4] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/05.jpg";
  imgArrayMaiNguyenAnh[5] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/06.jpg";
  imgArrayMaiNguyenAnh[6] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/07.jpg";
  imgArrayMaiNguyenAnh[7] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/08.jpg";
  imgArrayMaiNguyenAnh[8] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/09.jpg";
  imgArrayMaiNguyenAnh[9] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/10.jpg";
  imgArrayMaiNguyenAnh[10] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/11.jpg";
  imgArrayMaiNguyenAnh[11] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/12.jpg";
  imgArrayMaiNguyenAnh[12] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/13.jpg";
  imgArrayMaiNguyenAnh[13] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/14.jpg";
  imgArrayMaiNguyenAnh[14] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/15.jpg";
  imgArrayMaiNguyenAnh[15] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/16.jpg";
  imgArrayMaiNguyenAnh[16] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/17.jpg";
  imgArrayMaiNguyenAnh[17] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/18.jpg";
  imgArrayMaiNguyenAnh[18] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/19.jpg";
  imgArrayMaiNguyenAnh[19] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/20.jpg";
  imgArrayMaiNguyenAnh[20] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/21.jpg";
  imgArrayMaiNguyenAnh[21] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/22.jpg";
  imgArrayMaiNguyenAnh[22] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/23.jpg";
  imgArrayMaiNguyenAnh[23] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/24.jpg";
  imgArrayMaiNguyenAnh[24] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/25.jpg";
  imgArrayMaiNguyenAnh[25] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/26.jpg";
  imgArrayMaiNguyenAnh[26] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/27.jpg";
  imgArrayMaiNguyenAnh[27] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/28.jpg";
  imgArrayMaiNguyenAnh[28] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/29.jpg";
  imgArrayMaiNguyenAnh[29] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/30.jpg";
  imgArrayMaiNguyenAnh[30] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/31.jpg";
  imgArrayMaiNguyenAnh[31] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/32.jpg";
  imgArrayMaiNguyenAnh[32] = "img/Vietnam/Hanoi/MaiNguyenAnh/01/33.jpg";

  var imggMaiNguyenAnh = document.createElement("img");
  imggMaiNguyenAnh.setAttribute(
    "src",
    imgArrayMaiNguyenAnh[ranNumsMaiNguyenAnh[0]]
  );
  imggMaiNguyenAnh.setAttribute("class", "img-MaiNguyenAnh");

  // ManitSriwanichpoom
  var ranNumsManitSriwanichpoom = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  var imgArrayManitSriwanichpoom = new Array();
  imgArrayManitSriwanichpoom[0] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/01.jpg";
  imgArrayManitSriwanichpoom[1] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/02.jpg";
  imgArrayManitSriwanichpoom[2] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/03.jpg";
  imgArrayManitSriwanichpoom[3] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/04.jpg";
  imgArrayManitSriwanichpoom[4] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/05.jpg";
  imgArrayManitSriwanichpoom[5] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/06.jpg";
  imgArrayManitSriwanichpoom[6] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/07.jpg";
  imgArrayManitSriwanichpoom[7] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/08.jpg";
  imgArrayManitSriwanichpoom[8] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/09.jpg";
  imgArrayManitSriwanichpoom[9] =
    "img/Thailand/Bangkok/ManitSriwanichpoom/01/10.jpg";

  var imggManitSriwanichpoom = document.createElement("img");
  imggManitSriwanichpoom.setAttribute(
    "src",
    imgArrayManitSriwanichpoom[ranNumsManitSriwanichpoom[0]]
  );
  imggManitSriwanichpoom.setAttribute("class", "img-ManitSriwanichpoom");

  // Mayco
  var ranNumsMayco = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30
  ]);

  var imgArrayMayco = new Array();
  imgArrayMayco[0] = "img/Myanmar/Yangon/Mayco/01/01.jpg";
  imgArrayMayco[1] = "img/Myanmar/Yangon/Mayco/01/02.jpg";
  imgArrayMayco[2] = "img/Myanmar/Yangon/Mayco/01/03.jpg";
  imgArrayMayco[3] = "img/Myanmar/Yangon/Mayco/01/04.jpg";
  imgArrayMayco[4] = "img/Myanmar/Yangon/Mayco/01/05.jpg";
  imgArrayMayco[5] = "img/Myanmar/Yangon/Mayco/01/06.jpg";
  imgArrayMayco[6] = "img/Myanmar/Yangon/Mayco/01/07.jpg";
  imgArrayMayco[7] = "img/Myanmar/Yangon/Mayco/01/08.jpg";
  imgArrayMayco[8] = "img/Myanmar/Yangon/Mayco/01/09.jpg";
  imgArrayMayco[9] = "img/Myanmar/Yangon/Mayco/01/10.jpg";
  imgArrayMayco[10] = "img/Myanmar/Yangon/Mayco/01/11.jpg";
  imgArrayMayco[11] = "img/Myanmar/Yangon/Mayco/01/12.jpg";
  imgArrayMayco[12] = "img/Myanmar/Yangon/Mayco/01/13.jpg";
  imgArrayMayco[13] = "img/Myanmar/Yangon/Mayco/01/14.jpg";
  imgArrayMayco[14] = "img/Myanmar/Yangon/Mayco/01/15.jpg";
  imgArrayMayco[15] = "img/Myanmar/Yangon/Mayco/01/16.jpg";
  imgArrayMayco[16] = "img/Myanmar/Yangon/Mayco/01/17.jpg";
  imgArrayMayco[17] = "img/Myanmar/Yangon/Mayco/01/18.jpg";
  imgArrayMayco[18] = "img/Myanmar/Yangon/Mayco/01/19.jpg";
  imgArrayMayco[19] = "img/Myanmar/Yangon/Mayco/01/20.jpg";
  imgArrayMayco[20] = "img/Myanmar/Yangon/Mayco/01/21.jpg";
  imgArrayMayco[21] = "img/Myanmar/Yangon/Mayco/01/22.jpg";
  imgArrayMayco[22] = "img/Myanmar/Yangon/Mayco/01/23.jpg";
  imgArrayMayco[23] = "img/Myanmar/Yangon/Mayco/01/24.jpg";
  imgArrayMayco[24] = "img/Myanmar/Yangon/Mayco/01/25.jpg";
  imgArrayMayco[25] = "img/Myanmar/Yangon/Mayco/01/26.jpg";
  imgArrayMayco[26] = "img/Myanmar/Yangon/Mayco/01/27.jpg";
  imgArrayMayco[27] = "img/Myanmar/Yangon/Mayco/01/28.jpg";
  imgArrayMayco[28] = "img/Myanmar/Yangon/Mayco/01/29.jpg";
  imgArrayMayco[29] = "img/Myanmar/Yangon/Mayco/01/30.jpg";
  imgArrayMayco[30] = "img/Myanmar/Yangon/Mayco/01/31.jpg";

  var imggMayco = document.createElement("img");
  imggMayco.setAttribute("src", imgArrayMayco[ranNumsMayco[0]]);
  imggMayco.setAttribute("class", "img-Mayco");

  // MitJaiInn
  var ranNumsMitJaiInn = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ]);

  var imgArrayMitJaiInn = new Array();
  imgArrayMitJaiInn[0] = "img/Thailand/ChiangMai/MitJaiInn/01/01.jpg";
  imgArrayMitJaiInn[1] = "img/Thailand/ChiangMai/MitJaiInn/01/02.jpg";
  imgArrayMitJaiInn[2] = "img/Thailand/ChiangMai/MitJaiInn/01/03.jpg";
  imgArrayMitJaiInn[3] = "img/Thailand/ChiangMai/MitJaiInn/01/04.jpg";
  imgArrayMitJaiInn[4] = "img/Thailand/ChiangMai/MitJaiInn/01/05.jpg";
  imgArrayMitJaiInn[5] = "img/Thailand/ChiangMai/MitJaiInn/01/06.jpg";
  imgArrayMitJaiInn[6] = "img/Thailand/ChiangMai/MitJaiInn/01/07.jpg";
  imgArrayMitJaiInn[7] = "img/Thailand/ChiangMai/MitJaiInn/01/08.jpg";
  imgArrayMitJaiInn[8] = "img/Thailand/ChiangMai/MitJaiInn/01/09.jpg";
  imgArrayMitJaiInn[9] = "img/Thailand/ChiangMai/MitJaiInn/01/10.jpg";
  imgArrayMitJaiInn[10] = "img/Thailand/ChiangMai/MitJaiInn/01/11.jpg";
  imgArrayMitJaiInn[11] = "img/Thailand/ChiangMai/MitJaiInn/01/12.jpg";
  imgArrayMitJaiInn[12] = "img/Thailand/ChiangMai/MitJaiInn/01/13.jpg";
  imgArrayMitJaiInn[13] = "img/Thailand/ChiangMai/MitJaiInn/01/14.jpg";
  imgArrayMitJaiInn[14] = "img/Thailand/ChiangMai/MitJaiInn/01/15.jpg";
  imgArrayMitJaiInn[15] = "img/Thailand/ChiangMai/MitJaiInn/01/16.jpg";
  imgArrayMitJaiInn[16] = "img/Thailand/ChiangMai/MitJaiInn/01/17.jpg";
  imgArrayMitJaiInn[17] = "img/Thailand/ChiangMai/MitJaiInn/01/18.jpg";
  imgArrayMitJaiInn[18] = "img/Thailand/ChiangMai/MitJaiInn/01/19.jpg";
  imgArrayMitJaiInn[19] = "img/Thailand/ChiangMai/MitJaiInn/01/20.jpg";
  imgArrayMitJaiInn[20] = "img/Thailand/ChiangMai/MitJaiInn/01/21.jpg";

  var imggMitJaiInn = document.createElement("img");
  imggMitJaiInn.setAttribute("src", imgArrayMitJaiInn[ranNumsMitJaiInn[0]]);
  imggMitJaiInn.setAttribute("class", "img-MitJaiInn");

  // NguyenQuocDzung
  var ranNumsNguyenQuocDzung = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22
  ]);

  var imgArrayNguyenQuocDzung = new Array();
  imgArrayNguyenQuocDzung[0] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/01.jpg";
  imgArrayNguyenQuocDzung[1] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/02.jpg";
  imgArrayNguyenQuocDzung[2] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/03.jpg";
  imgArrayNguyenQuocDzung[3] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/04.jpg";
  imgArrayNguyenQuocDzung[4] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/05.jpg";
  imgArrayNguyenQuocDzung[5] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/01/06.jpg";
  imgArrayNguyenQuocDzung[6] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/01.jpg";
  imgArrayNguyenQuocDzung[7] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/02.jpg";
  imgArrayNguyenQuocDzung[8] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/03.jpg";
  imgArrayNguyenQuocDzung[9] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/04.jpg";
  imgArrayNguyenQuocDzung[10] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/05.jpg";
  imgArrayNguyenQuocDzung[11] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/02/06.jpg";
  imgArrayNguyenQuocDzung[12] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/01.jpg";
  imgArrayNguyenQuocDzung[13] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/02.jpg";
  imgArrayNguyenQuocDzung[14] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/03.jpg";
  imgArrayNguyenQuocDzung[15] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/04.jpg";
  imgArrayNguyenQuocDzung[16] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/05.jpg";
  imgArrayNguyenQuocDzung[17] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/03/06.jpg";
  imgArrayNguyenQuocDzung[18] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/01.jpg";
  imgArrayNguyenQuocDzung[19] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/02.jpg";
  imgArrayNguyenQuocDzung[20] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/03.jpg";
  imgArrayNguyenQuocDzung[21] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/04.jpg";
  imgArrayNguyenQuocDzung[22] =
    "img/Vietnam/HoChiMinhCity/NguyenQuocDzung/04/05.jpg";

  var imggNguyenQuocDzung = document.createElement("img");
  imggNguyenQuocDzung.setAttribute(
    "src",
    imgArrayNguyenQuocDzung[ranNumsNguyenQuocDzung[0]]
  );
  imggNguyenQuocDzung.setAttribute("class", "img-NguyenQuocDzung");

  // NguyenVanDu
  var ranNumsNguyenVanDu = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26
  ]);

  var imgArrayNguyenVanDu = new Array();
  imgArrayNguyenVanDu[0] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/01.jpg";
  imgArrayNguyenVanDu[1] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/02.jpg";
  imgArrayNguyenVanDu[2] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/03.jpg";
  imgArrayNguyenVanDu[3] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/04.jpg";
  imgArrayNguyenVanDu[4] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/05.jpg";
  imgArrayNguyenVanDu[5] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/06.jpg";
  imgArrayNguyenVanDu[6] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/07.jpg";
  imgArrayNguyenVanDu[7] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/08.jpg";
  imgArrayNguyenVanDu[8] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/09.jpg";
  imgArrayNguyenVanDu[9] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/10.jpg";
  imgArrayNguyenVanDu[10] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/11.jpg";
  imgArrayNguyenVanDu[11] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/12.jpg";
  imgArrayNguyenVanDu[12] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/13.jpg";
  imgArrayNguyenVanDu[13] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/14.jpg";
  imgArrayNguyenVanDu[14] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/15.jpg";
  imgArrayNguyenVanDu[15] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/16.jpg";
  imgArrayNguyenVanDu[16] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/17.jpg";
  imgArrayNguyenVanDu[17] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/18.jpg";
  imgArrayNguyenVanDu[18] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/19.jpg";
  imgArrayNguyenVanDu[19] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/01/20.jpg";
  imgArrayNguyenVanDu[20] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/01.jpg";
  imgArrayNguyenVanDu[21] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/02.jpg";
  imgArrayNguyenVanDu[22] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/03.jpg";
  imgArrayNguyenVanDu[23] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/04.jpg";
  imgArrayNguyenVanDu[24] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/05.jpg";
  imgArrayNguyenVanDu[25] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/06.jpg";
  imgArrayNguyenVanDu[26] = "img/Vietnam/HoChiMinhCity/NguyenVanDu/02/07.jpg";

  var imggNguyenVanDu = document.createElement("img");
  imggNguyenVanDu.setAttribute(
    "src",
    imgArrayNguyenVanDu[ranNumsNguyenVanDu[0]]
  );
  imggNguyenVanDu.setAttribute("class", "img-NguyenVanDu");

  // PheSophon
  var ranNumsPheSophon = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  var imgArrayPheSophon = new Array();
  imgArrayPheSophon[0] = "img/Cambodia/PhnomPenh/PheSophon/01/01.jpeg";
  imgArrayPheSophon[1] = "img/Cambodia/PhnomPenh/PheSophon/01/02.jpeg";
  imgArrayPheSophon[2] = "img/Cambodia/PhnomPenh/PheSophon/01/03.jpeg";
  imgArrayPheSophon[3] = "img/Cambodia/PhnomPenh/PheSophon/01/04.jpeg";
  imgArrayPheSophon[4] = "img/Cambodia/PhnomPenh/PheSophon/01/05.jpeg";
  imgArrayPheSophon[5] = "img/Cambodia/PhnomPenh/PheSophon/01/06.jpeg";
  imgArrayPheSophon[6] = "img/Cambodia/PhnomPenh/PheSophon/01/07.jpeg";
  imgArrayPheSophon[7] = "img/Cambodia/PhnomPenh/PheSophon/01/08.jpeg";
  imgArrayPheSophon[8] = "img/Cambodia/PhnomPenh/PheSophon/01/09.jpeg";
  imgArrayPheSophon[9] = "img/Cambodia/PhnomPenh/PheSophon/01/10.jpeg";
  imgArrayPheSophon[10] = "img/Cambodia/PhnomPenh/PheSophon/01/11.jpeg";
  imgArrayPheSophon[11] = "img/Cambodia/PhnomPenh/PheSophon/01/12.jpeg";

  var imggPheSophon = document.createElement("img");
  imggPheSophon.setAttribute("src", imgArrayPheSophon[ranNumsPheSophon[0]]);
  imggPheSophon.setAttribute("class", "img-PheSophon");

  // PhuongDuc
  var ranNumsPhuongDuc = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17
  ]);

  var imgArrayPhuongDuc = new Array();
  imgArrayPhuongDuc[0] = "img/Vietnam/Hanoi/PhuongDuc/01/01.jpg";
  imgArrayPhuongDuc[1] = "img/Vietnam/Hanoi/PhuongDuc/01/02.jpg";
  imgArrayPhuongDuc[2] = "img/Vietnam/Hanoi/PhuongDuc/01/03.jpg";
  imgArrayPhuongDuc[3] = "img/Vietnam/Hanoi/PhuongDuc/01/04.jpg";
  imgArrayPhuongDuc[4] = "img/Vietnam/Hanoi/PhuongDuc/01/05.jpg";
  imgArrayPhuongDuc[5] = "img/Vietnam/Hanoi/PhuongDuc/01/06.jpg";
  imgArrayPhuongDuc[6] = "img/Vietnam/Hanoi/PhuongDuc/01/07.jpg";
  imgArrayPhuongDuc[7] = "img/Vietnam/Hanoi/PhuongDuc/01/08.jpg";
  imgArrayPhuongDuc[8] = "img/Vietnam/Hanoi/PhuongDuc/01/09.jpg";
  imgArrayPhuongDuc[9] = "img/Vietnam/Hanoi/PhuongDuc/01/10.jpg";
  imgArrayPhuongDuc[10] = "img/Vietnam/Hanoi/PhuongDuc/01/11.jpg";
  imgArrayPhuongDuc[11] = "img/Vietnam/Hanoi/PhuongDuc/01/12.jpg";
  imgArrayPhuongDuc[12] = "img/Vietnam/Hanoi/PhuongDuc/01/13.jpg";
  imgArrayPhuongDuc[13] = "img/Vietnam/Hanoi/PhuongDuc/01/14.jpg";
  imgArrayPhuongDuc[14] = "img/Vietnam/Hanoi/PhuongDuc/01/15.jpg";
  imgArrayPhuongDuc[15] = "img/Vietnam/Hanoi/PhuongDuc/01/16.jpg";
  imgArrayPhuongDuc[16] = "img/Vietnam/Hanoi/PhuongDuc/01/17.jpg";
  imgArrayPhuongDuc[17] = "img/Vietnam/Hanoi/PhuongDuc/01/18.jpg";

  var imggPhuongDuc = document.createElement("img");
  imggPhuongDuc.setAttribute("src", imgArrayPhuongDuc[ranNumsPhuongDuc[0]]);
  imggPhuongDuc.setAttribute("class", "img-PhuongDuc");

  // PichaiPongsasaovapark
  var ranNumsPichaiPongsasaovapark = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ]);

  var imgArrayPichaiPongsasaovapark = new Array();
  imgArrayPichaiPongsasaovapark[0] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/01/01.jpg";
  imgArrayPichaiPongsasaovapark[1] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/01/02.jpg";
  imgArrayPichaiPongsasaovapark[2] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/02/01.jpg";
  imgArrayPichaiPongsasaovapark[3] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/02/02.jpg";
  imgArrayPichaiPongsasaovapark[4] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/03/01.jpg";
  imgArrayPichaiPongsasaovapark[5] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/03/02.jpg";
  imgArrayPichaiPongsasaovapark[6] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/04/01.jpg";
  imgArrayPichaiPongsasaovapark[7] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/04/02.jpg";
  imgArrayPichaiPongsasaovapark[8] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/05/01.jpg";
  imgArrayPichaiPongsasaovapark[9] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/05/02.jpg";
  imgArrayPichaiPongsasaovapark[10] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/06/01.jpg";
  imgArrayPichaiPongsasaovapark[11] =
    "img/Thailand/Bangkok/PichaiPongsasaovapark/06/02.jpg";

  var imggPichaiPongsasaovapark = document.createElement("img");
  imggPichaiPongsasaovapark.setAttribute(
    "src",
    imgArrayPichaiPongsasaovapark[ranNumsPichaiPongsasaovapark[0]]
  );
  imggPichaiPongsasaovapark.setAttribute("class", "img-PichaiPongsasaovapark");

  // PipatraBanpabutr
  var ranNumsPipatraBanpabutr = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  var imgArrayPipatraBanpabutr = new Array();
  imgArrayPipatraBanpabutr[0] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/01.jpg";
  imgArrayPipatraBanpabutr[1] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/02.jpg";
  imgArrayPipatraBanpabutr[2] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/03.jpg";
  imgArrayPipatraBanpabutr[3] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/04.jpg";
  imgArrayPipatraBanpabutr[4] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/05.jpg";
  imgArrayPipatraBanpabutr[5] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/06.jpg";
  imgArrayPipatraBanpabutr[6] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/07.jpg";
  imgArrayPipatraBanpabutr[7] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/08.jpg";
  imgArrayPipatraBanpabutr[8] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/09.jpg";
  imgArrayPipatraBanpabutr[9] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/10.jpg";
  imgArrayPipatraBanpabutr[10] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/11.jpg";
  imgArrayPipatraBanpabutr[11] =
    "img/Thailand/Bangkok/PipatraBanpabutr/01/12.jpg";

  var imggPipatraBanpabutr = document.createElement("img");
  imggPipatraBanpabutr.setAttribute(
    "src",
    imgArrayPipatraBanpabutr[ranNumsPipatraBanpabutr[0]]
  );
  imggPipatraBanpabutr.setAttribute("class", "img-PipatraBanpabutr");

  // PiyaratPiyapongwiwat
  var ranNumsPiyaratPiyapongwiwat = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24
  ]);

  var imgArrayPiyaratPiyapongwiwat = new Array();
  imgArrayPiyaratPiyapongwiwat[0] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/01.jpg";
  imgArrayPiyaratPiyapongwiwat[1] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/02.jpg";
  imgArrayPiyaratPiyapongwiwat[2] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/03.jpg";
  imgArrayPiyaratPiyapongwiwat[3] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/04.jpg";
  imgArrayPiyaratPiyapongwiwat[4] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/05.jpg";
  imgArrayPiyaratPiyapongwiwat[5] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/06.jpg";
  imgArrayPiyaratPiyapongwiwat[6] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/07.jpg";
  imgArrayPiyaratPiyapongwiwat[7] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/08.jpg";
  imgArrayPiyaratPiyapongwiwat[8] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/09.jpg";
  imgArrayPiyaratPiyapongwiwat[9] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/10.jpg";
  imgArrayPiyaratPiyapongwiwat[10] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/11.jpg";
  imgArrayPiyaratPiyapongwiwat[11] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/12.jpg";
  imgArrayPiyaratPiyapongwiwat[12] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/13.jpg";
  imgArrayPiyaratPiyapongwiwat[13] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/14.jpg";
  imgArrayPiyaratPiyapongwiwat[14] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/15.jpg";
  imgArrayPiyaratPiyapongwiwat[15] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/16.jpg";
  imgArrayPiyaratPiyapongwiwat[16] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/17.jpg";
  imgArrayPiyaratPiyapongwiwat[17] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/18.jpg";
  imgArrayPiyaratPiyapongwiwat[18] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/19.jpg";
  imgArrayPiyaratPiyapongwiwat[19] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/20.jpg";
  imgArrayPiyaratPiyapongwiwat[20] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/21.jpg";
  imgArrayPiyaratPiyapongwiwat[21] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/22.jpg";
  imgArrayPiyaratPiyapongwiwat[22] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/23.jpg";
  imgArrayPiyaratPiyapongwiwat[23] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/24.jpg";
  imgArrayPiyaratPiyapongwiwat[24] =
    "img/Thailand/ChiangMai/PiyaratPiyapongwiwat/01/25.jpg";

  var imggPiyaratPiyapongwiwat = document.createElement("img");
  imggPiyaratPiyapongwiwat.setAttribute(
    "src",
    imgArrayPiyaratPiyapongwiwat[ranNumsPiyaratPiyapongwiwat[0]]
  );
  imggPiyaratPiyapongwiwat.setAttribute("class", "img-PiyaratPiyapongwiwat");

  // Po Po
  var ranNumsPoPo = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  var imgArrayPoPo = new Array();
  imgArrayPoPo[0] = "img/Myanmar/Yangon/PoPo/01/01.jpeg";
  imgArrayPoPo[1] = "img/Myanmar/Yangon/PoPo/01/02.jpeg";
  imgArrayPoPo[2] = "img/Myanmar/Yangon/PoPo/01/03.jpeg";
  imgArrayPoPo[3] = "img/Myanmar/Yangon/PoPo/01/04.jpeg";
  imgArrayPoPo[4] = "img/Myanmar/Yangon/PoPo/01/05.jpeg";
  imgArrayPoPo[5] = "img/Myanmar/Yangon/PoPo/01/06.jpeg";
  imgArrayPoPo[6] = "img/Myanmar/Yangon/PoPo/01/07.jpeg";
  imgArrayPoPo[7] = "img/Myanmar/Yangon/PoPo/01/08.jpeg";
  imgArrayPoPo[8] = "img/Myanmar/Yangon/PoPo/01/09.jpeg";
  imgArrayPoPo[9] = "img/Myanmar/Yangon/PoPo/02/01.jpeg";
  imgArrayPoPo[10] = "img/Myanmar/Yangon/PoPo/02/02.jpeg";
  imgArrayPoPo[11] = "img/Myanmar/Yangon/PoPo/02/03.jpeg";
  imgArrayPoPo[12] = "img/Myanmar/Yangon/PoPo/02/04.jpeg";

  var imggPoPo = document.createElement("img");
  imggPoPo.setAttribute("src", imgArrayPoPo[ranNumsPoPo[0]]);
  imggPoPo.setAttribute("class", "img-PoPo");

  // PornchaiChaima
  var ranNumsPornchaiChaima = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  var imgArrayPornchaiChaima = new Array();
  imgArrayPornchaiChaima[0] = "img/Thailand/ChiangMai/PornchaiChaima/01/01.jpg";
  imgArrayPornchaiChaima[1] = "img/Thailand/ChiangMai/PornchaiChaima/01/02.jpg";
  imgArrayPornchaiChaima[2] = "img/Thailand/ChiangMai/PornchaiChaima/01/03.jpg";
  imgArrayPornchaiChaima[3] = "img/Thailand/ChiangMai/PornchaiChaima/01/04.jpg";
  imgArrayPornchaiChaima[4] = "img/Thailand/ChiangMai/PornchaiChaima/01/05.jpg";
  imgArrayPornchaiChaima[5] = "img/Thailand/ChiangMai/PornchaiChaima/01/06.jpg";
  imgArrayPornchaiChaima[6] = "img/Thailand/ChiangMai/PornchaiChaima/01/07.jpg";
  imgArrayPornchaiChaima[7] = "img/Thailand/ChiangMai/PornchaiChaima/01/08.jpg";
  imgArrayPornchaiChaima[8] = "img/Thailand/ChiangMai/PornchaiChaima/01/09.jpg";
  imgArrayPornchaiChaima[9] = "img/Thailand/ChiangMai/PornchaiChaima/01/10.jpg";

  var imggPornchaiChaima = document.createElement("img");
  imggPornchaiChaima.setAttribute(
    "src",
    imgArrayPornchaiChaima[ranNumsPornchaiChaima[0]]
  );
  imggPornchaiChaima.setAttribute("class", "img-PornchaiChaima");

  // Sai Htin Linn Htet
  var ranNumsSaiHtinLinnHtet = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19
  ]);

  var imgArraySaiHtinLinnHtet = new Array();
  imgArraySaiHtinLinnHtet[0] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/01.jpg";
  imgArraySaiHtinLinnHtet[1] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/02.jpg";
  imgArraySaiHtinLinnHtet[2] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/03.jpg";
  imgArraySaiHtinLinnHtet[3] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/04.jpg";
  imgArraySaiHtinLinnHtet[4] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/05.jpg";
  imgArraySaiHtinLinnHtet[5] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/06.jpg";
  imgArraySaiHtinLinnHtet[6] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/07.jpg";
  imgArraySaiHtinLinnHtet[7] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/08.jpg";
  imgArraySaiHtinLinnHtet[8] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/09.jpg";
  imgArraySaiHtinLinnHtet[9] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/10.jpg";
  imgArraySaiHtinLinnHtet[10] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/11.jpg";
  imgArraySaiHtinLinnHtet[11] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/12.jpg";
  imgArraySaiHtinLinnHtet[12] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/13.jpg";
  imgArraySaiHtinLinnHtet[13] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/14.jpg";
  imgArraySaiHtinLinnHtet[14] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/15.jpg";
  imgArraySaiHtinLinnHtet[15] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/16.jpg";
  imgArraySaiHtinLinnHtet[16] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/17.jpg";
  imgArraySaiHtinLinnHtet[17] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/18.jpg";
  imgArraySaiHtinLinnHtet[18] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/19.jpg";
  imgArraySaiHtinLinnHtet[19] = "img/Myanmar/Yangon/SaiHtinLinnHtet/01/20.jpg";

  var imggSaiHtinLinnHtet = document.createElement("img");
  imggSaiHtinLinnHtet.setAttribute(
    "src",
    imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[0]]
  );
  imggSaiHtinLinnHtet.setAttribute("class", "img-SaiHtinLinnHtet");

  // San Minn
  var ranNumsSanMinn = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28
  ]);

  var imgArraySanMinn = new Array();
  imgArraySanMinn[0] = "img/Myanmar/Yangon/SanMinn/01/01.jpg";
  imgArraySanMinn[1] = "img/Myanmar/Yangon/SanMinn/01/02.jpg";
  imgArraySanMinn[2] = "img/Myanmar/Yangon/SanMinn/01/03.jpg";
  imgArraySanMinn[3] = "img/Myanmar/Yangon/SanMinn/01/04.jpg";
  imgArraySanMinn[4] = "img/Myanmar/Yangon/SanMinn/01/05.jpg";
  imgArraySanMinn[5] = "img/Myanmar/Yangon/SanMinn/01/06.jpg";
  imgArraySanMinn[6] = "img/Myanmar/Yangon/SanMinn/01/07.jpg";
  imgArraySanMinn[7] = "img/Myanmar/Yangon/SanMinn/01/08.jpg";
  imgArraySanMinn[8] = "img/Myanmar/Yangon/SanMinn/01/09.jpg";
  imgArraySanMinn[9] = "img/Myanmar/Yangon/SanMinn/01/10.jpg";
  imgArraySanMinn[10] = "img/Myanmar/Yangon/SanMinn/01/11.jpg";
  imgArraySanMinn[11] = "img/Myanmar/Yangon/SanMinn/01/12.jpg";
  imgArraySanMinn[12] = "img/Myanmar/Yangon/SanMinn/01/13.jpg";
  imgArraySanMinn[13] = "img/Myanmar/Yangon/SanMinn/01/14.jpg";
  imgArraySanMinn[14] = "img/Myanmar/Yangon/SanMinn/01/15.jpg";
  imgArraySanMinn[15] = "img/Myanmar/Yangon/SanMinn/01/16.jpg";
  imgArraySanMinn[16] = "img/Myanmar/Yangon/SanMinn/01/17.jpg";
  imgArraySanMinn[17] = "img/Myanmar/Yangon/SanMinn/01/18.jpg";
  imgArraySanMinn[18] = "img/Myanmar/Yangon/SanMinn/01/19.jpg";
  imgArraySanMinn[19] = "img/Myanmar/Yangon/SanMinn/01/20.jpg";
  imgArraySanMinn[20] = "img/Myanmar/Yangon/SanMinn/01/21.jpg";
  imgArraySanMinn[21] = "img/Myanmar/Yangon/SanMinn/01/22.jpg";
  imgArraySanMinn[22] = "img/Myanmar/Yangon/SanMinn/01/23.jpg";
  imgArraySanMinn[23] = "img/Myanmar/Yangon/SanMinn/01/24.jpg";
  imgArraySanMinn[24] = "img/Myanmar/Yangon/SanMinn/01/25.jpg";
  imgArraySanMinn[25] = "img/Myanmar/Yangon/SanMinn/01/26.jpg";
  imgArraySanMinn[26] = "img/Myanmar/Yangon/SanMinn/01/27.jpg";
  imgArraySanMinn[27] = "img/Myanmar/Yangon/SanMinn/01/28.jpg";
  imgArraySanMinn[28] = "img/Myanmar/Yangon/SanMinn/01/29.jpg";

  var imggSanMinn = document.createElement("img");
  imggSanMinn.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[0]]);
  imggSanMinn.setAttribute("class", "img-SanMinn");

  // SreyMao
  var ranNumsSreyMao = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  var imgArraySreyMao = new Array();
  imgArraySreyMao[0] = "img/Cambodia/PhnomPenh/SreyMao/01/01.jpg";
  imgArraySreyMao[1] = "img/Cambodia/PhnomPenh/SreyMao/01/02.jpg";
  imgArraySreyMao[2] = "img/Cambodia/PhnomPenh/SreyMao/01/03.jpg";
  imgArraySreyMao[3] = "img/Cambodia/PhnomPenh/SreyMao/01/04.jpg";
  imgArraySreyMao[4] = "img/Cambodia/PhnomPenh/SreyMao/01/05.jpg";
  imgArraySreyMao[5] = "img/Cambodia/PhnomPenh/SreyMao/01/06.jpg";
  imgArraySreyMao[6] = "img/Cambodia/PhnomPenh/SreyMao/01/07.jpg";
  imgArraySreyMao[7] = "img/Cambodia/PhnomPenh/SreyMao/02/01.jpg";
  imgArraySreyMao[8] = "img/Cambodia/PhnomPenh/SreyMao/02/02.jpg";
  imgArraySreyMao[9] = "img/Cambodia/PhnomPenh/SreyMao/02/03.jpg";
  imgArraySreyMao[10] = "img/Cambodia/PhnomPenh/SreyMao/02/04.jpg";
  imgArraySreyMao[11] = "img/Cambodia/PhnomPenh/SreyMao/02/05.jpg";

  var imggSreyMao = document.createElement("img");
  imggSreyMao.setAttribute("src", imgArraySreyMao[ranNumsSreyMao[0]]);
  imggSreyMao.setAttribute("class", "img-SreyMao");

  // ThasnaiSethaseree
  var ranNumsThasnaiSethaseree = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19
  ]);

  var imgArrayThasnaiSethaseree = new Array();
  imgArrayThasnaiSethaseree[0] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/01.jpg";
  imgArrayThasnaiSethaseree[1] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/02.jpg";
  imgArrayThasnaiSethaseree[2] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/03.jpg";
  imgArrayThasnaiSethaseree[3] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/04.jpg";
  imgArrayThasnaiSethaseree[4] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/05.jpg";
  imgArrayThasnaiSethaseree[5] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/06.jpg";
  imgArrayThasnaiSethaseree[6] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/07.jpg";
  imgArrayThasnaiSethaseree[7] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/08.jpg";
  imgArrayThasnaiSethaseree[8] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/09.jpg";
  imgArrayThasnaiSethaseree[9] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/10.jpg";
  imgArrayThasnaiSethaseree[10] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/11.jpg";
  imgArrayThasnaiSethaseree[11] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/12.jpg";
  imgArrayThasnaiSethaseree[12] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/13.jpg";
  imgArrayThasnaiSethaseree[13] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/14.jpg";
  imgArrayThasnaiSethaseree[14] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/15.jpg";
  imgArrayThasnaiSethaseree[15] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/16.jpg";
  imgArrayThasnaiSethaseree[16] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/17.jpg";
  imgArrayThasnaiSethaseree[17] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/18.jpg";
  imgArrayThasnaiSethaseree[18] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/19.jpg";
  imgArrayThasnaiSethaseree[19] =
    "img/Thailand/ChiangMai/ThasnaiSethaseree/01/20.jpg";

  var imggThasnaiSethaseree = document.createElement("img");
  imggThasnaiSethaseree.setAttribute(
    "src",
    imgArrayThasnaiSethaseree[ranNumsThasnaiSethaseree[0]]
  );
  imggThasnaiSethaseree.setAttribute("class", "img-ThasnaiSethaseree");

  // ThitibodeeRungteerawattananon
  var ranNumsThitibodeeRungteerawattananon = shuffle([0, 1, 2, 3, 4, 5, 6]);

  var imgArrayThitibodeeRungteerawattananon = new Array();
  imgArrayThitibodeeRungteerawattananon[0] =
    "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/01.jpg";
  imgArrayThitibodeeRungteerawattananon[1] =
    "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/02.jpg";
  imgArrayThitibodeeRungteerawattananon[2] =
    "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/03.jpg";
  imgArrayThitibodeeRungteerawattananon[3] =
    "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/04.jpg";
  imgArrayThitibodeeRungteerawattananon[4] =
    "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/05.jpg";
  imgArrayThitibodeeRungteerawattananon[5] =
    "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/06.jpg";
  imgArrayThitibodeeRungteerawattananon[6] =
    "img/Thailand/Bangkok/ThitibodeeRungteerawattananon/01/07.jpg";

  var imggThitibodeeRungteerawattananon = document.createElement("img");
  imggThitibodeeRungteerawattananon.setAttribute(
    "src",
    imgArrayThitibodeeRungteerawattananon[
      ranNumsThitibodeeRungteerawattananon[0]
    ]
  );
  imggThitibodeeRungteerawattananon.setAttribute(
    "class",
    "img-ThitibodeeRungteerawattananon"
  );

  // TheetatThunkijjanukij
  var ranNumsTheetatThunkijjanukij = shuffle([0, 1, 2]);

  var imgArrayTheetatThunkijjanukij = new Array();
  imgArrayTheetatThunkijjanukij[0] =
    "img/Thailand/Bangkok/TheetatThunkijjanukij/01/01.jpg";
  imgArrayTheetatThunkijjanukij[1] =
    "img/Thailand/Bangkok/TheetatThunkijjanukij/01/02.jpg";
  imgArrayTheetatThunkijjanukij[2] =
    "img/Thailand/Bangkok/TheetatThunkijjanukij/01/03.jpg";

  var imggTheetatThunkijjanukij = document.createElement("img");
  imggTheetatThunkijjanukij.setAttribute(
    "src",
    imgArrayTheetatThunkijjanukij[ranNumsTheetatThunkijjanukij[0]]
  );
  imggTheetatThunkijjanukij.setAttribute("class", "img-TheetatThunkijjanukij");

  // TienVeGroup
  var ranNumsTienVeGroup = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26
  ]);

  var imgArrayTienVeGroup = new Array();
  imgArrayTienVeGroup[0] = "img/Vietnam/Hanoi/TienVeGroup/01/01.jpg";
  imgArrayTienVeGroup[1] = "img/Vietnam/Hanoi/TienVeGroup/01/02.jpg";
  imgArrayTienVeGroup[2] = "img/Vietnam/Hanoi/TienVeGroup/01/03.jpg";
  imgArrayTienVeGroup[3] = "img/Vietnam/Hanoi/TienVeGroup/01/04.jpg";
  imgArrayTienVeGroup[4] = "img/Vietnam/Hanoi/TienVeGroup/01/05.jpg";
  imgArrayTienVeGroup[5] = "img/Vietnam/Hanoi/TienVeGroup/01/06.jpg";
  imgArrayTienVeGroup[6] = "img/Vietnam/Hanoi/TienVeGroup/01/07.jpg";
  imgArrayTienVeGroup[7] = "img/Vietnam/Hanoi/TienVeGroup/01/08.jpg";
  imgArrayTienVeGroup[8] = "img/Vietnam/Hanoi/TienVeGroup/01/09.jpg";
  imgArrayTienVeGroup[9] = "img/Vietnam/Hanoi/TienVeGroup/01/10.jpg";
  imgArrayTienVeGroup[10] = "img/Vietnam/Hanoi/TienVeGroup/01/11.jpg";
  imgArrayTienVeGroup[11] = "img/Vietnam/Hanoi/TienVeGroup/01/12.jpg";
  imgArrayTienVeGroup[12] = "img/Vietnam/Hanoi/TienVeGroup/01/13.jpg";
  imgArrayTienVeGroup[13] = "img/Vietnam/Hanoi/TienVeGroup/02/01.jpg";
  imgArrayTienVeGroup[14] = "img/Vietnam/Hanoi/TienVeGroup/02/02.jpg";
  imgArrayTienVeGroup[15] = "img/Vietnam/Hanoi/TienVeGroup/02/03.jpg";
  imgArrayTienVeGroup[16] = "img/Vietnam/Hanoi/TienVeGroup/02/04.jpg";
  imgArrayTienVeGroup[17] = "img/Vietnam/Hanoi/TienVeGroup/02/05.jpg";
  imgArrayTienVeGroup[18] = "img/Vietnam/Hanoi/TienVeGroup/02/06.jpg";
  imgArrayTienVeGroup[19] = "img/Vietnam/Hanoi/TienVeGroup/02/07.jpg";
  imgArrayTienVeGroup[20] = "img/Vietnam/Hanoi/TienVeGroup/02/08.jpg";
  imgArrayTienVeGroup[21] = "img/Vietnam/Hanoi/TienVeGroup/02/09.jpg";
  imgArrayTienVeGroup[22] = "img/Vietnam/Hanoi/TienVeGroup/02/10.jpg";
  imgArrayTienVeGroup[23] = "img/Vietnam/Hanoi/TienVeGroup/02/11.jpg";
  imgArrayTienVeGroup[24] = "img/Vietnam/Hanoi/TienVeGroup/02/12.jpg";
  imgArrayTienVeGroup[25] = "img/Vietnam/Hanoi/TienVeGroup/02/13.jpg";
  imgArrayTienVeGroup[26] = "img/Vietnam/Hanoi/TienVeGroup/02/14.jpg";

  var imggTienVeGroup = document.createElement("img");
  imggTienVeGroup.setAttribute(
    "src",
    imgArrayTienVeGroup[ranNumsTienVeGroup[0]]
  );
  imggTienVeGroup.setAttribute("class", "img-TienVeGroup");

  // TunWin Aung
  var ranNumsTunWinAungAndWahNu = shuffle([0, 1, 2, 3, 4, 5]);

  var imgArrayTunWinAungAndWahNu = new Array();
  imgArrayTunWinAungAndWahNu[0] =
    "img/Myanmar/Yangon/TunWinAungAndWahNu/01/01.jpg";
  imgArrayTunWinAungAndWahNu[1] =
    "img/Myanmar/Yangon/TunWinAungAndWahNu/01/02.jpg";
  imgArrayTunWinAungAndWahNu[2] =
    "img/Myanmar/Yangon/TunWinAungAndWahNu/01/03.jpg";
  imgArrayTunWinAungAndWahNu[3] =
    "img/Myanmar/Yangon/TunWinAungAndWahNu/01/04.jpg";
  imgArrayTunWinAungAndWahNu[4] =
    "img/Myanmar/Yangon/TunWinAungAndWahNu/01/05.jpg";
  imgArrayTunWinAungAndWahNu[5] =
    "img/Myanmar/Yangon/TunWinAungAndWahNu/01/06.jpg";

  var imggTunWinAungAndWahNu = document.createElement("img");
  imggTunWinAungAndWahNu.setAttribute(
    "src",
    imgArrayTunWinAungAndWahNu[ranNumsTunWinAungAndWahNu[0]]
  );
  imggTunWinAungAndWahNu.setAttribute("class", "img-TunWinAungAndWahNu");

  // UdomsakKrisanamis
  var ranNumsUdomsakKrisanamis = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
  ]);

  var imgArrayUdomsakKrisanamis = new Array();
  imgArrayUdomsakKrisanamis[0] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/01.jpg";
  imgArrayUdomsakKrisanamis[1] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/02.jpg";
  imgArrayUdomsakKrisanamis[2] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/03.jpg";
  imgArrayUdomsakKrisanamis[3] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/04.jpg";
  imgArrayUdomsakKrisanamis[4] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/05.jpg";
  imgArrayUdomsakKrisanamis[5] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/06.jpg";
  imgArrayUdomsakKrisanamis[6] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/07.jpg";
  imgArrayUdomsakKrisanamis[7] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/08.jpg";
  imgArrayUdomsakKrisanamis[8] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/09.jpg";
  imgArrayUdomsakKrisanamis[9] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/10.jpg";
  imgArrayUdomsakKrisanamis[10] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/11.jpg";
  imgArrayUdomsakKrisanamis[11] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/12.jpg";
  imgArrayUdomsakKrisanamis[12] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/13.jpg";
  imgArrayUdomsakKrisanamis[13] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/14.jpg";
  imgArrayUdomsakKrisanamis[14] =
    "img/Thailand/ChiangMai/UdomsakKrisanamis/01/15.jpg";

  var imggUdomsakKrisanamis = document.createElement("img");
  imggUdomsakKrisanamis.setAttribute(
    "src",
    imgArrayUdomsakKrisanamis[ranNumsUdomsakKrisanamis[0]]
  );
  imggUdomsakKrisanamis.setAttribute("class", "img-UdomsakKrisanamis");

  // UuDamTranNguyen
  var ranNumsUuDamTranNguyen = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22
  ]);

  var imgArrayUuDamTranNguyen = new Array();
  imgArrayUuDamTranNguyen[0] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/01.jpg";
  imgArrayUuDamTranNguyen[1] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/02.jpg";
  imgArrayUuDamTranNguyen[2] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/03.jpg";
  imgArrayUuDamTranNguyen[3] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/04.jpg";
  imgArrayUuDamTranNguyen[4] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/05.jpg";
  imgArrayUuDamTranNguyen[5] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/06.jpg";
  imgArrayUuDamTranNguyen[6] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/07.jpg";
  imgArrayUuDamTranNguyen[7] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/08.jpg";
  imgArrayUuDamTranNguyen[8] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/09.jpg";
  imgArrayUuDamTranNguyen[9] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/10.jpg";
  imgArrayUuDamTranNguyen[10] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/11.jpg";
  imgArrayUuDamTranNguyen[11] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/12.jpg";
  imgArrayUuDamTranNguyen[12] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/13.jpg";
  imgArrayUuDamTranNguyen[13] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/14.jpg";
  imgArrayUuDamTranNguyen[14] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/15.jpg";
  imgArrayUuDamTranNguyen[15] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/16.jpg";
  imgArrayUuDamTranNguyen[16] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/17.jpg";
  imgArrayUuDamTranNguyen[17] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/18.jpg";
  imgArrayUuDamTranNguyen[18] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/19.jpg";
  imgArrayUuDamTranNguyen[19] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/20.jpg";
  imgArrayUuDamTranNguyen[20] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/21.jpg";
  imgArrayUuDamTranNguyen[21] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/22.jpg";
  imgArrayUuDamTranNguyen[22] =
    "img/Vietnam/HoChiMinhCity/UuDamTranNguyen/01/23.jpg";

  var imggUuDamTranNguyen = document.createElement("img");
  imggUuDamTranNguyen.setAttribute(
    "src",
    imgArrayUuDamTranNguyen[ranNumsUuDamTranNguyen[0]]
  );
  imggUuDamTranNguyen.setAttribute("class", "img-UuDamTranNguyen");

  // VinaiDithajohn
  var ranNumsVinaiDithajohn = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ]);

  var imgArrayVinaiDithajohn = new Array();
  imgArrayVinaiDithajohn[0] = "img/Thailand/Bangkok/VinaiDithajohn/01/01.jpg";
  imgArrayVinaiDithajohn[1] = "img/Thailand/Bangkok/VinaiDithajohn/01/02.jpg";
  imgArrayVinaiDithajohn[2] = "img/Thailand/Bangkok/VinaiDithajohn/01/03.jpg";
  imgArrayVinaiDithajohn[3] = "img/Thailand/Bangkok/VinaiDithajohn/01/04.jpg";
  imgArrayVinaiDithajohn[4] = "img/Thailand/Bangkok/VinaiDithajohn/01/05.jpg";
  imgArrayVinaiDithajohn[5] = "img/Thailand/Bangkok/VinaiDithajohn/01/06.jpg";
  imgArrayVinaiDithajohn[6] = "img/Thailand/Bangkok/VinaiDithajohn/01/07.jpg";
  imgArrayVinaiDithajohn[7] = "img/Thailand/Bangkok/VinaiDithajohn/01/08.jpg";
  imgArrayVinaiDithajohn[8] = "img/Thailand/Bangkok/VinaiDithajohn/01/09.jpg";
  imgArrayVinaiDithajohn[9] = "img/Thailand/Bangkok/VinaiDithajohn/01/10.jpg";
  imgArrayVinaiDithajohn[10] = "img/Thailand/Bangkok/VinaiDithajohn/01/11.jpg";
  imgArrayVinaiDithajohn[11] = "img/Thailand/Bangkok/VinaiDithajohn/01/12.jpg";
  imgArrayVinaiDithajohn[12] = "img/Thailand/Bangkok/VinaiDithajohn/01/13.jpg";
  imgArrayVinaiDithajohn[13] = "img/Thailand/Bangkok/VinaiDithajohn/01/14.jpg";
  imgArrayVinaiDithajohn[14] = "img/Thailand/Bangkok/VinaiDithajohn/01/15.jpg";
  imgArrayVinaiDithajohn[15] = "img/Thailand/Bangkok/VinaiDithajohn/01/16.jpg";
  imgArrayVinaiDithajohn[16] = "img/Thailand/Bangkok/VinaiDithajohn/01/17.jpg";
  imgArrayVinaiDithajohn[17] = "img/Thailand/Bangkok/VinaiDithajohn/01/18.jpg";
  imgArrayVinaiDithajohn[18] = "img/Thailand/Bangkok/VinaiDithajohn/01/19.jpg";
  imgArrayVinaiDithajohn[19] = "img/Thailand/Bangkok/VinaiDithajohn/01/20.jpg";
  imgArrayVinaiDithajohn[20] = "img/Thailand/Bangkok/VinaiDithajohn/01/21.jpg";
  imgArrayVinaiDithajohn[21] = "img/Thailand/Bangkok/VinaiDithajohn/01/22.jpg";
  imgArrayVinaiDithajohn[22] = "img/Thailand/Bangkok/VinaiDithajohn/01/23.jpg";
  imgArrayVinaiDithajohn[23] = "img/Thailand/Bangkok/VinaiDithajohn/01/24.jpg";

  var imggVinaiDithajohn = document.createElement("img");
  imggVinaiDithajohn.setAttribute(
    "src",
    imgArrayVinaiDithajohn[ranNumsVinaiDithajohn[0]]
  );
  imggVinaiDithajohn.setAttribute("class", "img-VinaiDithajohn");

  // Yu Yu Myint Than
  var ranNumsYuYuMyintThan = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ]);

  var imgArrayYuYuMyintThan = new Array();
  imgArrayYuYuMyintThan[0] = "img/Myanmar/Yangon/YuYuMyintThan/01/01.jpg";
  imgArrayYuYuMyintThan[1] = "img/Myanmar/Yangon/YuYuMyintThan/01/02.jpg";
  imgArrayYuYuMyintThan[2] = "img/Myanmar/Yangon/YuYuMyintThan/01/03.jpg";
  imgArrayYuYuMyintThan[3] = "img/Myanmar/Yangon/YuYuMyintThan/01/04.jpg";
  imgArrayYuYuMyintThan[4] = "img/Myanmar/Yangon/YuYuMyintThan/01/05.jpg";
  imgArrayYuYuMyintThan[5] = "img/Myanmar/Yangon/YuYuMyintThan/01/06.jpg";
  imgArrayYuYuMyintThan[6] = "img/Myanmar/Yangon/YuYuMyintThan/01/07.jpg";
  imgArrayYuYuMyintThan[7] = "img/Myanmar/Yangon/YuYuMyintThan/01/08.jpg";
  imgArrayYuYuMyintThan[8] = "img/Myanmar/Yangon/YuYuMyintThan/01/09.jpg";
  imgArrayYuYuMyintThan[9] = "img/Myanmar/Yangon/YuYuMyintThan/01/10.jpg";
  imgArrayYuYuMyintThan[10] = "img/Myanmar/Yangon/YuYuMyintThan/01/11.jpg";
  imgArrayYuYuMyintThan[11] = "img/Myanmar/Yangon/YuYuMyintThan/01/12.jpg";
  imgArrayYuYuMyintThan[12] = "img/Myanmar/Yangon/YuYuMyintThan/01/13.jpg";
  imgArrayYuYuMyintThan[13] = "img/Myanmar/Yangon/YuYuMyintThan/01/14.jpg";

  var imggYuYuMyintThan = document.createElement("img");
  imggYuYuMyintThan.setAttribute(
    "src",
    imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[0]]
  );
  imggYuYuMyintThan.setAttribute("class", "img-YuYuMyintThan");

  // Zar Min Htike
  var ranNumsZarMinHtike = shuffle([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21
  ]);

  var imgArrayZarMinHtike = new Array();
  imgArrayZarMinHtike[0] = "img/Myanmar/Yangon/ZarMinHtike/01/01.jpg";
  imgArrayZarMinHtike[1] = "img/Myanmar/Yangon/ZarMinHtike/01/02.jpg";
  imgArrayZarMinHtike[2] = "img/Myanmar/Yangon/ZarMinHtike/01/03.jpg";
  imgArrayZarMinHtike[3] = "img/Myanmar/Yangon/ZarMinHtike/01/04.jpg";
  imgArrayZarMinHtike[4] = "img/Myanmar/Yangon/ZarMinHtike/01/05.jpg";
  imgArrayZarMinHtike[5] = "img/Myanmar/Yangon/ZarMinHtike/01/06.jpg";
  imgArrayZarMinHtike[6] = "img/Myanmar/Yangon/ZarMinHtike/01/07.jpg";
  imgArrayZarMinHtike[7] = "img/Myanmar/Yangon/ZarMinHtike/01/08.jpg";
  imgArrayZarMinHtike[8] = "img/Myanmar/Yangon/ZarMinHtike/01/09.jpg";
  imgArrayZarMinHtike[9] = "img/Myanmar/Yangon/ZarMinHtike/01/10.jpg";
  imgArrayZarMinHtike[10] = "img/Myanmar/Yangon/ZarMinHtike/01/11.jpg";
  imgArrayZarMinHtike[11] = "img/Myanmar/Yangon/ZarMinHtike/01/12.jpg";
  imgArrayZarMinHtike[12] = "img/Myanmar/Yangon/ZarMinHtike/01/13.jpg";
  imgArrayZarMinHtike[13] = "img/Myanmar/Yangon/ZarMinHtike/01/14.jpg";
  imgArrayZarMinHtike[14] = "img/Myanmar/Yangon/ZarMinHtike/01/15.jpg";
  imgArrayZarMinHtike[15] = "img/Myanmar/Yangon/ZarMinHtike/01/16.jpg";
  imgArrayZarMinHtike[16] = "img/Myanmar/Yangon/ZarMinHtike/01/17.jpg";
  imgArrayZarMinHtike[17] = "img/Myanmar/Yangon/ZarMinHtike/01/18.jpg";
  imgArrayZarMinHtike[18] = "img/Myanmar/Yangon/ZarMinHtike/01/19.jpg";
  imgArrayZarMinHtike[19] = "img/Myanmar/Yangon/ZarMinHtike/01/20.jpg";
  imgArrayZarMinHtike[20] = "img/Myanmar/Yangon/ZarMinHtike/01/21.jpg";
  imgArrayZarMinHtike[21] = "img/Myanmar/Yangon/ZarMinHtike/01/22.jpg";
  imgArrayZarMinHtike[22] = "img/Myanmar/Yangon/ZarMinHtike/01/23.jpg";
  imgArrayZarMinHtike[23] = "img/Myanmar/Yangon/ZarMinHtike/01/24.jpg";
  imgArrayZarMinHtike[24] = "img/Myanmar/Yangon/ZarMinHtike/02/01.jpg";
  imgArrayZarMinHtike[25] = "img/Myanmar/Yangon/ZarMinHtike/02/02.jpg";
  imgArrayZarMinHtike[26] = "img/Myanmar/Yangon/ZarMinHtike/02/03.jpg";
  imgArrayZarMinHtike[27] = "img/Myanmar/Yangon/ZarMinHtike/02/04.jpg";
  imgArrayZarMinHtike[28] = "img/Myanmar/Yangon/ZarMinHtike/02/05.jpg";
  imgArrayZarMinHtike[29] = "img/Myanmar/Yangon/ZarMinHtike/02/06.jpg";
  imgArrayZarMinHtike[30] = "img/Myanmar/Yangon/ZarMinHtike/02/07.jpg";
  imgArrayZarMinHtike[31] = "img/Myanmar/Yangon/ZarMinHtike/02/08.jpg";
  imgArrayZarMinHtike[32] = "img/Myanmar/Yangon/ZarMinHtike/02/09.jpg";
  imgArrayZarMinHtike[33] = "img/Myanmar/Yangon/ZarMinHtike/02/10.jpg";
  imgArrayZarMinHtike[34] = "img/Myanmar/Yangon/ZarMinHtike/02/11.jpg";
  imgArrayZarMinHtike[35] = "img/Myanmar/Yangon/ZarMinHtike/02/12.jpg";
  imgArrayZarMinHtike[36] = "img/Myanmar/Yangon/ZarMinHtike/02/13.jpg";
  imgArrayZarMinHtike[37] = "img/Myanmar/Yangon/ZarMinHtike/02/14.jpg";
  imgArrayZarMinHtike[38] = "img/Myanmar/Yangon/ZarMinHtike/02/15.jpg";
  imgArrayZarMinHtike[39] = "img/Myanmar/Yangon/ZarMinHtike/02/16.jpg";
  imgArrayZarMinHtike[40] = "img/Myanmar/Yangon/ZarMinHtike/02/17.jpg";
  imgArrayZarMinHtike[41] = "img/Myanmar/Yangon/ZarMinHtike/02/18.jpg";
  imgArrayZarMinHtike[42] = "img/Myanmar/Yangon/ZarMinHtike/02/19.jpg";
  imgArrayZarMinHtike[43] = "img/Myanmar/Yangon/ZarMinHtike/02/20.jpg";
  imgArrayZarMinHtike[44] = "img/Myanmar/Yangon/ZarMinHtike/02/21.jpg";
  imgArrayZarMinHtike[45] = "img/Myanmar/Yangon/ZarMinHtike/02/22.jpg";

  var imggZarMinHtike = document.createElement("img");
  imggZarMinHtike.setAttribute(
    "src",
    imgArrayZarMinHtike[ranNumsZarMinHtike[0]]
  );
  imggZarMinHtike.setAttribute("class", "img-ZarMinHtike");

  // shuffle
  /*
  var ranNums01 = shuffle(["01", "02", "03", "04", "05", "06", "07", "08"]);
  var ranNums02 = shuffle(["09", "10", "11", "12", "13", "14", "15", "16"]);
  var ranNums03 = shuffle(["17", "18", "19", "20", "21", "22", "23", "24"]);
  var ranNums04 = shuffle(["25", "26", "27", "28", "29", "30", "31", "32"]);
  var ranNums05 = shuffle(["33", "34", "35", "36", "37", "38", "39", "40"]);
  var ranNums06 = shuffle(["41", "42", "43", "44", "45", "46", "47", "48"]);
  var ranNums07 = shuffle(["49", "50", "51", "52", "53", "54", "55", "56"]);
*/
  var ranNums = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  var imgGroup01 = new Array();

  imgGroup01[0] = imggArachaCholitgul;
  imgGroup01[1] = imggAyeKo;
  imgGroup01[2] = imggBunthengBat;
  imgGroup01[3] = imggDatVu;
  imgGroup01[4] = imggDuHoang;
  imgGroup01[5] = imggEijiSumi;
  imgGroup01[6] = imggHuyAn;
  imgGroup01[7] = imggKaminLertchaiprasert;
  imgGroup01[8] = imggKanithaTith;
  imgGroup01[9] = imggKhievKanel;
  imgGroup01[10] = imggLeBrothers;
  imgGroup01[11] = imggLeopoldFranckowiak;
  imgGroup01[12] = imggLeQuyTong;
  imgGroup01[13] = imggMaiNguyenAnh;
  imgGroup01[14] = imggManitSriwanichpoom;
  imgGroup01[15] = imggMayco;
  imgGroup01[16] = imggMitJaiInn;
  imgGroup01[17] = imggNguyenQuocDzung;
  imgGroup01[18] = imggNguyenVanDu;
  imgGroup01[19] = imggPheSophon;
  imgGroup01[20] = imggPhuongDuc;
  imgGroup01[21] = imggPichaiPongsasaovapark;
  imgGroup01[22] = imggPipatraBanpabutr;
  imgGroup01[23] = imggPiyaratPiyapongwiwat;
  imgGroup01[24] = imggPoPo;
  imgGroup01[25] = imggPornchaiChaima;
  imgGroup01[26] = imggSaiHtinLinnHtet;
  imgGroup01[27] = imggSanMinn;
  imgGroup01[28] = imggSreyMao;
  imgGroup01[29] = imggThasnaiSethaseree;
  imgGroup01[30] = imggThitibodeeRungteerawattananon;
  imgGroup01[31] = imggTheetatThunkijjanukij;
  imgGroup01[32] = imggTienVeGroup;
  imgGroup01[33] = imggTunWinAungAndWahNu;
  imgGroup01[34] = imggUdomsakKrisanamis;
  imgGroup01[35] = imggUuDamTranNguyen;
  imgGroup01[36] = imggVinaiDithajohn;
  imgGroup01[37] = imggYuYuMyintThan;
  imgGroup01[38] = imggZarMinHtike;

  var ranNumsWidth = shuffle([16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);

  var ranNumsTop = shuffle([
    10,
    12,
    15,
    17,
    20,
    22,
    25,
    27,
    30,
    32,
    35,
    37,
    40,
    42,
    45,
    47,
    50,
    52,
    55,
    57,
    60,
    62,
    65,
    67,
    70,
    72,
    75,
    77,
    80,
    82,
    85,
    87,
    90,
    92,
    95,
    97,
    100
  ]);

  var ranNumsLeft = shuffle([
    5,
    7,
    10,
    12,
    15,
    17,
    20,
    22,
    25,
    27,
    30,
    32,
    35,
    37,
    40,
    42,
    45,
    47,
    50,
    52,
    55,
    57,
    60,
    62,
    65,
    67,
    70,
    72,
    75,
    77
  ]);

  document
    .getElementById("ArachaCholitgul-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[0] + "vh;" + "left:" + ranNumsLeft[0] + "vw;"
    );
  document.getElementById("ArachaCholitgul-01-div").appendChild(imgGroup01[0]);
  imgGroup01[0].setAttribute("style", "height:" + ranNumsWidth[0] + "vh;");

  document
    .getElementById("AyeKo-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[1] + "vh;" + "left:" + ranNumsLeft[1] + "vw;"
    );
  document.getElementById("AyeKo-01-div").appendChild(imgGroup01[1]);
  imgGroup01[1].setAttribute("style", "height:" + ranNumsWidth[1] + "vh;");

  document
    .getElementById("BunthengBat-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[2] + "vh;" + "left:" + ranNumsLeft[2] + "vw;"
    );
  document.getElementById("BunthengBat-01-div").appendChild(imgGroup01[2]);
  imgGroup01[2].setAttribute("style", "height:" + ranNumsWidth[2] + "vh;");

  document
    .getElementById("DatVu-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[3] + "vh;" + "left:" + ranNumsLeft[3] + "vw;"
    );
  document.getElementById("DatVu-01-div").appendChild(imgGroup01[3]);
  imgGroup01[3].setAttribute("style", "height:" + ranNumsWidth[3] + "vh;");

  document
    .getElementById("DuHoang-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[4] + "vh;" + "left:" + ranNumsLeft[4] + "vw;"
    );
  document.getElementById("DuHoang-01-div").appendChild(imgGroup01[4]);
  imgGroup01[4].setAttribute("style", "height:" + ranNumsWidth[4] + "vh;");

  document
    .getElementById("EijiSumi-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[5] + "vh;" + "left:" + ranNumsLeft[5] + "vw;"
    );
  document.getElementById("EijiSumi-01-div").appendChild(imgGroup01[5]);
  imgGroup01[5].setAttribute("style", "height:" + ranNumsWidth[5] + "vh;");

  document
    .getElementById("HuyAn-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[6] + "vh;" + "left:" + ranNumsLeft[6] + "vw;"
    );
  document.getElementById("HuyAn-01-div").appendChild(imgGroup01[6]);
  imgGroup01[6].setAttribute("style", "height:" + ranNumsWidth[6] + "vh;");

  document
    .getElementById("KaminLertchaiprasert-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[7] + "vh;" + "left:" + ranNumsLeft[7] + "vw;"
    );
  document
    .getElementById("KaminLertchaiprasert-01-div")
    .appendChild(imgGroup01[7]);
  imgGroup01[7].setAttribute("style", "height:" + ranNumsWidth[7] + "vh;");

  document
    .getElementById("KanithaTith-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[8] + "vh;" + "left:" + ranNumsLeft[8] + "vw;"
    );
  document.getElementById("KanithaTith-01-div").appendChild(imgGroup01[8]);
  imgGroup01[8].setAttribute("style", "height:" + ranNumsWidth[8] + "vh;");

  document
    .getElementById("KhievKanel-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[9] + "vh;" + "left:" + ranNumsLeft[9] + "vw;"
    );
  document.getElementById("KhievKanel-01-div").appendChild(imgGroup01[9]);
  imgGroup01[9].setAttribute("style", "height:" + ranNumsWidth[9] + "vh;");

  document
    .getElementById("LeBrothers-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[10] + "vh;" + "left:" + ranNumsLeft[10] + "vw;"
    );
  document.getElementById("LeBrothers-01-div").appendChild(imgGroup01[10]);
  imgGroup01[10].setAttribute("style", "height:" + ranNumsWidth[0] + "vh;");

  document
    .getElementById("LeopoldFranckowiak-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[11] + "vh;" + "left:" + ranNumsLeft[11] + "vw;"
    );
  document
    .getElementById("LeopoldFranckowiak-01-div")
    .appendChild(imgGroup01[11]);
  imgGroup01[11].setAttribute("style", "height:" + ranNumsWidth[1] + "vh;");

  document
    .getElementById("LeQuyTong-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[12] + "vh;" + "left:" + ranNumsLeft[12] + "vw;"
    );
  document.getElementById("LeQuyTong-01-div").appendChild(imgGroup01[12]);
  imgGroup01[12].setAttribute("style", "height:" + ranNumsWidth[2] + "vh;");

  document
    .getElementById("MaiNguyenAnh-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[13] + "vh;" + "left:" + ranNumsLeft[13] + "vw;"
    );
  document.getElementById("MaiNguyenAnh-01-div").appendChild(imgGroup01[13]);
  imgGroup01[13].setAttribute("style", "height:" + ranNumsWidth[3] + "vh;");

  document
    .getElementById("ManitSriwanichpoom-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[14] + "vh;" + "left:" + ranNumsLeft[14] + "vw;"
    );
  document
    .getElementById("ManitSriwanichpoom-01-div")
    .appendChild(imgGroup01[14]);
  imgGroup01[14].setAttribute("style", "height:" + ranNumsWidth[4] + "vh;");

  document
    .getElementById("Mayco-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[15] + "vh;" + "left:" + ranNumsLeft[15] + "vw;"
    );
  document.getElementById("Mayco-01-div").appendChild(imgGroup01[15]);
  imgGroup01[15].setAttribute("style", "height:" + ranNumsWidth[5] + "vh;");

  document
    .getElementById("MitJaiInn-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[16] + "vh;" + "left:" + ranNumsLeft[16] + "vw;"
    );
  document.getElementById("MitJaiInn-01-div").appendChild(imgGroup01[16]);
  imgGroup01[16].setAttribute("style", "height:" + ranNumsWidth[6] + "vh;");

  document
    .getElementById("NguyenQuocDzung-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[17] + "vh;" + "left:" + ranNumsLeft[17] + "vw;"
    );
  document.getElementById("NguyenQuocDzung-01-div").appendChild(imgGroup01[17]);
  imgGroup01[17].setAttribute("style", "height:" + ranNumsWidth[7] + "vh;");

  document
    .getElementById("NguyenVanDu-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[18] + "vh;" + "left:" + ranNumsLeft[18] + "vw;"
    );
  document.getElementById("NguyenVanDu-01-div").appendChild(imgGroup01[18]);
  imgGroup01[18].setAttribute("style", "height:" + ranNumsWidth[8] + "vh;");

  document
    .getElementById("PheSophon-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[19] + "vh;" + "left:" + ranNumsLeft[19] + "vw;"
    );
  document.getElementById("PheSophon-01-div").appendChild(imgGroup01[19]);
  imgGroup01[19].setAttribute("style", "height:" + ranNumsWidth[9] + "vh;");

  document
    .getElementById("PhuongDuc-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[20] + "vh;" + "left:" + ranNumsLeft[02] + "vw;"
    );
  document.getElementById("PhuongDuc-01-div").appendChild(imgGroup01[20]);
  imgGroup01[20].setAttribute("style", "height:" + ranNumsWidth[0] + "vh;");

  document
    .getElementById("PichaiPongsasaovapark-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[21] + "vh;" + "left:" + ranNumsLeft[21] + "vw;"
    );
  document
    .getElementById("PichaiPongsasaovapark-01-div")
    .appendChild(imgGroup01[21]);
  imgGroup01[21].setAttribute("style", "height:" + ranNumsWidth[1] + "vh;");

  document
    .getElementById("PipatraBanpabutr-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[22] + "vh;" + "left:" + ranNumsLeft[22] + "vw;"
    );
  document
    .getElementById("PipatraBanpabutr-01-div")
    .appendChild(imgGroup01[22]);
  imgGroup01[22].setAttribute("style", "height:" + ranNumsWidth[2] + "vh;");

  document
    .getElementById("PiyaratPiyapongwiwat-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[23] + "vh;" + "left:" + ranNumsLeft[23] + "vw;"
    );
  document
    .getElementById("PiyaratPiyapongwiwat-01-div")
    .appendChild(imgGroup01[23]);
  imgGroup01[23].setAttribute("style", "height:" + ranNumsWidth[3] + "vh;");

  document
    .getElementById("PoPo-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[24] + "vh;" + "left:" + ranNumsLeft[24] + "vw;"
    );
  document.getElementById("PoPo-01-div").appendChild(imgGroup01[24]);
  imgGroup01[24].setAttribute("style", "height:" + ranNumsWidth[4] + "vh;");

  document
    .getElementById("PornchaiChaima-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[25] + "vh;" + "left:" + ranNumsLeft[25] + "vw;"
    );
  document.getElementById("PornchaiChaima-01-div").appendChild(imgGroup01[25]);
  imgGroup01[25].setAttribute("style", "height:" + ranNumsWidth[5] + "vh;");

  document
    .getElementById("SaiHtinLinnHtet-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[26] + "vh;" + "left:" + ranNumsLeft[26] + "vw;"
    );
  document.getElementById("SaiHtinLinnHtet-01-div").appendChild(imgGroup01[26]);
  imgGroup01[26].setAttribute("style", "height:" + ranNumsWidth[6] + "vh;");

  document
    .getElementById("SanMinn-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[27] + "vh;" + "left:" + ranNumsLeft[27] + "vw;"
    );
  document.getElementById("SanMinn-01-div").appendChild(imgGroup01[27]);
  imgGroup01[27].setAttribute("style", "height:" + ranNumsWidth[7] + "vh;");

  document
    .getElementById("SreyMao-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[28] + "vh;" + "left:" + ranNumsLeft[28] + "vw;"
    );
  document.getElementById("SreyMao-01-div").appendChild(imgGroup01[28]);
  imgGroup01[28].setAttribute("style", "height:" + ranNumsWidth[9] + "vh;");

  document
    .getElementById("ThasnaiSethaseree-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[0] + "vh;" + "left:" + ranNumsLeft[0] + "vw;"
    );
  document
    .getElementById("ThasnaiSethaseree-01-div")
    .appendChild(imgGroup01[29]);
  imgGroup01[29].setAttribute("style", "height:" + ranNumsWidth[0] + "vh;");

  document
    .getElementById("ThitibodeeRungteerawattananon-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[1] + "vh;" + "left:" + ranNumsLeft[1] + "vw;"
    );
  document
    .getElementById("ThitibodeeRungteerawattananon-01-div")
    .appendChild(imgGroup01[30]);
  imgGroup01[30].setAttribute("style", "height:" + ranNumsWidth[1] + "vh;");

  document
    .getElementById("TheetatThunkijjanukij-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[2] + "vh;" + "left:" + ranNumsLeft[2] + "vw;"
    );
  document
    .getElementById("TheetatThunkijjanukij-01-div")
    .appendChild(imgGroup01[31]);
  imgGroup01[31].setAttribute("style", "height:" + ranNumsWidth[2] + "vh;");

  document
    .getElementById("TienVeGroup-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[3] + "vh;" + "left:" + ranNumsLeft[3] + "vw;"
    );
  document.getElementById("TienVeGroup-01-div").appendChild(imgGroup01[32]);
  imgGroup01[32].setAttribute("style", "height:" + ranNumsWidth[3] + "vh;");

  document
    .getElementById("TunWinAungAndWahNu-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[4] + "vh;" + "left:" + ranNumsLeft[4] + "vw;"
    );
  document
    .getElementById("TunWinAungAndWahNu-01-div")
    .appendChild(imgGroup01[33]);
  imgGroup01[33].setAttribute("style", "height:" + ranNumsWidth[4] + "vh;");

  document
    .getElementById("UdomsakKrisanamis-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[5] + "vh;" + "left:" + ranNumsLeft[5] + "vw;"
    );
  document
    .getElementById("UdomsakKrisanamis-01-div")
    .appendChild(imgGroup01[34]);
  imgGroup01[34].setAttribute("style", "height:" + ranNumsWidth[5] + "vh;");

  document
    .getElementById("UuDamTranNguyen-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[6] + "vh;" + "left:" + ranNumsLeft[6] + "vw;"
    );
  document.getElementById("UuDamTranNguyen-01-div").appendChild(imgGroup01[35]);
  imgGroup01[35].setAttribute("style", "height:" + ranNumsWidth[6] + "vh;");

  document
    .getElementById("VinaiDithajohn-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[7] + "vh;" + "left:" + ranNumsLeft[7] + "vw;"
    );
  document.getElementById("VinaiDithajohn-01-div").appendChild(imgGroup01[36]);
  imgGroup01[36].setAttribute("style", "height:" + ranNumsWidth[7] + "vh;");

  document
    .getElementById("YuYuMyintThan-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[8] + "vh;" + "left:" + ranNumsLeft[8] + "vw;"
    );
  document.getElementById("YuYuMyintThan-01-div").appendChild(imgGroup01[37]);
  imgGroup01[37].setAttribute("style", "height:" + ranNumsWidth[8] + "vh;");

  document
    .getElementById("ZarMinHtike-01")
    .setAttribute(
      "style",
      "top:" + ranNumsTop[9] + "vh;" + "left:" + ranNumsLeft[9] + "vw;"
    );
  document.getElementById("ZarMinHtike-01-div").appendChild(imgGroup01[38]);
  imgGroup01[38].setAttribute("style", "height:" + ranNumsWidth[9] + "vh;");

  /* Click to bring to front */
  $(".img-box").click(function() {
    this.parentNode.appendChild(this);
  });

  /* Drag to bring to front */
  $(".img-box").on("dragstart", function() {
    this.parentNode.appendChild(this);
  });

  //// Scroll for entire window
  /*
  var WIDTH_LIMIT = 650;
  var windowWidth = window.innerWidth;

  if (windowWidth >= WIDTH_LIMIT) {
    $(".container-atlas").mCustomScrollbar({
      axis: "y",
      mouseWheel: { axis: "y" },
      scrollInertia: 200,
      live: true
    });
  }
  */

  //// Alternative View
  $(".alt-view-line-button").click(function() {
    $(".img-box").css("position", "static");
    $(".img-box").css("display", "inline-block");
    $("#all-box div img").css("position", "inherit");
    $("#all-box div img").css("transition", "transform 1s ease");
    $(".artist-name").css("display", "block");
    $(".container-atlas .row .col").css("height", "auto");
    $(".alt-view-line-button").css("display", "none");
    $(".alt-view-random-button").css("display", "block");

    $(".img-box div img").css("height", "15vh");
  });
  $(".alt-view-random-button").click(function() {
    $(".img-box").css("position", "absolute");
    $(".img-box").css("display", "inherit");
    $("#all-box div img").css("position", "absolute");
    $(".artist-name").css("display", "");
    $(".container-atlas .row .col").css("height", "150vh");
    $(".alt-view-random-button").css("display", "none");
    $(".alt-view-line-button").css("display", "block");

    $(".img-box div img").css("height", "");
  });
  //// link to artists in index section
  $(".name-ArachaCholitgul").click(function() {
    window.location.href = "index.html#ArachaCholitgul";
  });
  $(".name-AyeKo").click(function() {
    window.location.href = "index.html#AyeKo";
  });
  $(".name-BartWasNotHere").click(function() {
    window.location.href = "index.html#BartWasNotHere";
  });
  $(".name-BunthengBat").click(function() {
    window.location.href = "index.html#BunthengBat";
  });
  $(".name-DatVu").click(function() {
    window.location.href = "index.html#DatVu";
  });
  $(".name-DuHoang").click(function() {
    window.location.href = "index.html#DuHoang";
  });
  $(".name-EijiSumi").click(function() {
    window.location.href = "index.html#EijiSumi";
  });
  $(".name-HuyAn").click(function() {
    window.location.href = "index.html#HuyAn";
  });
  $(".name-JedsadaTangtrakulwong").click(function() {
    window.location.href = "index.html#JedsadaTangtrakulwong";
  });
  $(".name-KaminLertchaiprasert").click(function() {
    window.location.href = "index.html#KaminLertchaiprasert";
  });
  $(".name-KanithaTith").click(function() {
    window.location.href = "index.html#KanithaTith";
  });
  $(".name-KhievKanel").click(function() {
    window.location.href = "index.html#KhievKanel";
  });
  $(".name-LeBrothers").click(function() {
    window.location.href = "index.html#LeBrothers";
  });
  $(".name-LeopoldFranckowiak").click(function() {
    window.location.href = "index.html#LeopoldFranckowiak";
  });
  $(".name-LeQuyTong").click(function() {
    window.location.href = "index.html#LeQuyTong";
  });
  $(".name-MaiNguyenAnh").click(function() {
    window.location.href = "index.html#MaiNguyenAnh";
  });
  $(".name-ManitSriwanichpoom").click(function() {
    window.location.href = "index.html#ManitSriwanichpoom";
  });
  $(".name-Mayco").click(function() {
    window.location.href = "index.html#Mayco";
  });
  $(".name-MitJaiInn").click(function() {
    window.location.href = "index.html#MitJaiInn";
  });
  $(".name-NguyenQuocDzung").click(function() {
    window.location.href = "index.html#NguyenQuocDzung";
  });
  $(".name-NguyenVanDu").click(function() {
    window.location.href = "index.html#NguyenVanDu";
  });
  $(".name-PheSophon").click(function() {
    window.location.href = "index.html#PheSophon";
  });
  $(".name-PhuongDuc").click(function() {
    window.location.href = "index.html#PhuongDuc";
  });
  $(".name-PichaiPongsasaovapark").click(function() {
    window.location.href = "index.html#PichaiPongsasaovapark";
  });
  $(".name-PipatraBanpabutr").click(function() {
    window.location.href = "index.html#PipatraBanpabutr";
  });
  $(".name-PiyaratPiyapongwiwat").click(function() {
    window.location.href = "index.html#PiyaratPiyapongwiwat";
  });
  $(".name-PoPo").click(function() {
    window.location.href = "index.html#PoPo";
  });
  $(".name-PornchaiChaima").click(function() {
    window.location.href = "index.html#PornchaiChaima";
  });
  $(".name-SaiHtinLinnHtet").click(function() {
    window.location.href = "index.html#SaiHtinLinnHtet";
  });
  $(".name-SamakKosem").click(function() {
    window.location.href = "index.html#SamakKosem";
  });
  $(".name-SanMinn").click(function() {
    window.location.href = "index.html#SanMinn";
  });
  $(".name-SreyMao").click(function() {
    window.location.href = "index.html#SreyMao";
  });
  $(".name-ThasnaiSethaseree").click(function() {
    window.location.href = "index.html#ThasnaiSethaseree";
  });
  $(".name-ThitibodeeRungteerawattananon").click(function() {
    window.location.href = "index.html#ThitibodeeRungteerawattananon";
  });
  $(".name-TheetatThunkijjanukij").click(function() {
    window.location.href = "index.html#TheetatThunkijjanukij";
  });
  $(".name-TienVeGroup").click(function() {
    window.location.href = "index.html#TienVeGroup";
  });
  $(".name-TunWinAungAndWahNu").click(function() {
    window.location.href = "index.html#TunWinAungAndWahNu";
  });
  $(".name-UdomsakKrisanamis").click(function() {
    window.location.href = "index.html#UdomsakKrisanamis";
  });
  $(".name-UuDamTranNguyen").click(function() {
    window.location.href = "index.html#UuDamTranNguyen";
  });
  $(".name-VinaiDithajohn").click(function() {
    window.location.href = "index.html#VinaiDithajohn";
  });
  $(".name-YuYuMyintThan").click(function() {
    window.location.href = "index.html#YuYuMyintThan";
  });
  $(".name-ZarMinHtike").click(function() {
    window.location.href = "index.html#ZarMinHtike";
  });
});
