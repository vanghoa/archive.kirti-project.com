document.addEventListener('DOMContentLoaded', function () {

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

  // TunWin Aung
  var ranNumsTunWinAung = shuffle([0, 1, 2, 3]);

  var imgArrayTunWinAung = new Array();
  imgArrayTunWinAung[0] = "img/YANGON/_Tun%20Win%20Aung%20&%20Wah%20Nu/_SELECTS/1%20of%203.jpg";
  imgArrayTunWinAung[1] = "img/YANGON/_Tun%20Win%20Aung%20&%20Wah%20Nu/_SELECTS/2%20of%203.jpg";
  imgArrayTunWinAung[2] = "img/YANGON/_Tun%20Win%20Aung%20&%20Wah%20Nu/_SELECTS/3%20of%203.jpg";
  imgArrayTunWinAung[3] = "img/YANGON/_Tun%20Win%20Aung%20&%20Wah%20Nu/_SELECTS/additional%20one,%20seprate.jpg";

  var imggTunWinAung01 = document.createElement("img");
  imggTunWinAung01.setAttribute("src", imgArrayTunWinAung[ranNumsTunWinAung[0]]);
  var imggTunWinAung02 = document.createElement("img");
  imggTunWinAung02.setAttribute("src", imgArrayTunWinAung[ranNumsTunWinAung[1]]);
  var imggTunWinAung03 = document.createElement("img");
  imggTunWinAung03.setAttribute("src", imgArrayTunWinAung[ranNumsTunWinAung[2]]);
  var imggTunWinAung04 = document.createElement("img");
  imggTunWinAung04.setAttribute("src", imgArrayTunWinAung[ranNumsTunWinAung[3]]);

  // Sai Htin Linn Htet 
  var ranNumsSaiHtinLinnHtet = shuffle([0, 1, 2, 3, 4, 5, 6, 7 , 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

  var imgArraySaiHtinLinnHtet = new Array();
  imgArraySaiHtinLinnHtet[0] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_1.jpg";
  imgArraySaiHtinLinnHtet[1] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_2.jpg";
  imgArraySaiHtinLinnHtet[2] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_3.jpg";
  imgArraySaiHtinLinnHtet[3] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_4.jpg";
  imgArraySaiHtinLinnHtet[4] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_5.jpg";
  imgArraySaiHtinLinnHtet[5] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_6.jpg";
  imgArraySaiHtinLinnHtet[6] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_7.jpg";
  imgArraySaiHtinLinnHtet[7] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_8.jpg";
  imgArraySaiHtinLinnHtet[8] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_9.jpg";
  imgArraySaiHtinLinnHtet[9] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_10.jpg";
  imgArraySaiHtinLinnHtet[10] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_11.jpg";
  imgArraySaiHtinLinnHtet[11] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_12.jpg";
  imgArraySaiHtinLinnHtet[12] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_13.jpg";
  imgArraySaiHtinLinnHtet[13] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_14.jpg";
  imgArraySaiHtinLinnHtet[14] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_15.jpg";
  imgArraySaiHtinLinnHtet[15] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_16.jpg";
  imgArraySaiHtinLinnHtet[16] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_17.jpg";
  imgArraySaiHtinLinnHtet[17] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_18.jpg";
  imgArraySaiHtinLinnHtet[18] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_19.jpg";
  imgArraySaiHtinLinnHtet[19] = "img/YANGON/_Sai%20Htin%20Linn%20Htet/_SELECTS%20(In%20order)/MAYA_SHLH_20.jpg";

  var imggSaiHtinLinnHtet01 = document.createElement("img");
  imggSaiHtinLinnHtet01.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[0]]);
  var imggSaiHtinLinnHtet02 = document.createElement("img");
  imggSaiHtinLinnHtet02.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[1]]);
  var imggSaiHtinLinnHtet03 = document.createElement("img");
  imggSaiHtinLinnHtet03.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[2]]);
  var imggSaiHtinLinnHtet04 = document.createElement("img");
  imggSaiHtinLinnHtet04.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[3]]);
  var imggSaiHtinLinnHtet05 = document.createElement("img");
  imggSaiHtinLinnHtet05.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[4]]);
  var imggSaiHtinLinnHtet06 = document.createElement("img");
  imggSaiHtinLinnHtet06.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[5]]);
  var imggSaiHtinLinnHtet07 = document.createElement("img");
  imggSaiHtinLinnHtet07.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[6]]);
  var imggSaiHtinLinnHtet08 = document.createElement("img");
  imggSaiHtinLinnHtet08.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[7]]);
  var imggSaiHtinLinnHtet09 = document.createElement("img");
  imggSaiHtinLinnHtet09.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[8]]);
  var imggSaiHtinLinnHtet10 = document.createElement("img");
  imggSaiHtinLinnHtet10.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[9]]);
  var imggSaiHtinLinnHtet11 = document.createElement("img");
  imggSaiHtinLinnHtet11.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[10]]);
  var imggSaiHtinLinnHtet12 = document.createElement("img");
  imggSaiHtinLinnHtet12.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[11]]);
  var imggSaiHtinLinnHtet13 = document.createElement("img");
  imggSaiHtinLinnHtet13.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[12]]);
  var imggSaiHtinLinnHtet14 = document.createElement("img");
  imggSaiHtinLinnHtet14.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[13]]);
  var imggSaiHtinLinnHtet15 = document.createElement("img");
  imggSaiHtinLinnHtet15.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[14]]);
  var imggSaiHtinLinnHtet16 = document.createElement("img");
  imggSaiHtinLinnHtet16.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[15]]);
  var imggSaiHtinLinnHtet17 = document.createElement("img");
  imggSaiHtinLinnHtet17.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[16]]);
  var imggSaiHtinLinnHtet18 = document.createElement("img");
  imggSaiHtinLinnHtet18.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[17]]);
  var imggSaiHtinLinnHtet19 = document.createElement("img");
  imggSaiHtinLinnHtet19.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[18]]);
  var imggSaiHtinLinnHtet20 = document.createElement("img");
  imggSaiHtinLinnHtet20.setAttribute("src", imgArraySaiHtinLinnHtet[ranNumsSaiHtinLinnHtet[19]]);

  // Zar Min Htike
  var ranNumsZarMinHtike = shuffle([0, 1, 2, 3, 4, 5, 6, 7 , 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]);

  var imgArrayZarMinHtike = new Array();
  imgArrayZarMinHtike[0] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001777.jpg";
  imgArrayZarMinHtike[1] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001804.jpg";
  imgArrayZarMinHtike[2] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001807.jpg";
  imgArrayZarMinHtike[3] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001809.jpg";
  imgArrayZarMinHtike[4] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001811.jpg";
  imgArrayZarMinHtike[5] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001812.jpg";
  imgArrayZarMinHtike[6] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001816.jpg";
  imgArrayZarMinHtike[7] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001817.jpg";
  imgArrayZarMinHtike[8] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001818.jpg";
  imgArrayZarMinHtike[9] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001819.jpg";
  imgArrayZarMinHtike[10] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001820.jpg";
  imgArrayZarMinHtike[11] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001821.jpg";
  imgArrayZarMinHtike[12] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001823.jpg";
  imgArrayZarMinHtike[13] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001824.jpg";
  imgArrayZarMinHtike[14] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001825.jpg";
  imgArrayZarMinHtike[15] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001826.jpg";
  imgArrayZarMinHtike[16] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001827.jpg";
  imgArrayZarMinHtike[17] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001828.jpg";
  imgArrayZarMinHtike[18] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001829.jpg";
  imgArrayZarMinHtike[19] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001830.jpg";
  imgArrayZarMinHtike[20] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001835.jpg";
  imgArrayZarMinHtike[21] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001837.jpg";
  imgArrayZarMinHtike[22] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001838.jpg";
  imgArrayZarMinHtike[23] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001840.jpg";
  imgArrayZarMinHtike[24] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001843.jpg";
  imgArrayZarMinHtike[25] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001845.jpg";
  imgArrayZarMinHtike[26] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001850.jpg";
  imgArrayZarMinHtike[27] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001852.jpg";
  imgArrayZarMinHtike[28] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001861.jpg";
  imgArrayZarMinHtike[29] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001887.jpg";
  imgArrayZarMinHtike[30] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001891.jpg";
  imgArrayZarMinHtike[31] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001893.jpg";
  imgArrayZarMinHtike[32] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001897.jpg";
  imgArrayZarMinHtike[33] = "img/YANGON/_Zar%20Min%20Htike/_SELECTS/_Studio%20visit/Sculptures/L1001907.jpg";

  var imggZarMinHtike01 = document.createElement("img");
  imggZarMinHtike01.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[0]]);
  var imggZarMinHtike02 = document.createElement("img");
  imggZarMinHtike02.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[1]]);
  var imggZarMinHtike03 = document.createElement("img");
  imggZarMinHtike03.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[2]]);
  var imggZarMinHtike04 = document.createElement("img");
  imggZarMinHtike04.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[3]]);
  var imggZarMinHtike05 = document.createElement("img");
  imggZarMinHtike05.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[4]]);
  var imggZarMinHtike06 = document.createElement("img");
  imggZarMinHtike06.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[5]]);
  var imggZarMinHtike07 = document.createElement("img");
  imggZarMinHtike07.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[6]]);
  var imggZarMinHtike08 = document.createElement("img");
  imggZarMinHtike08.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[7]]);
  var imggZarMinHtike09 = document.createElement("img");
  imggZarMinHtike09.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[8]]);
  var imggZarMinHtike10 = document.createElement("img");
  imggZarMinHtike10.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[9]]);
  var imggZarMinHtike11 = document.createElement("img");
  imggZarMinHtike11.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[10]]);
  var imggZarMinHtike12 = document.createElement("img");
  imggZarMinHtike12.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[11]]);
  var imggZarMinHtike13 = document.createElement("img");
  imggZarMinHtike13.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[12]]);
  var imggZarMinHtike14 = document.createElement("img");
  imggZarMinHtike14.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[13]]);
  var imggZarMinHtike15 = document.createElement("img");
  imggZarMinHtike15.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[14]]);
  var imggZarMinHtike16 = document.createElement("img");
  imggZarMinHtike16.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[15]]);
  var imggZarMinHtike17 = document.createElement("img");
  imggZarMinHtike17.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[16]]);
  var imggZarMinHtike18 = document.createElement("img");
  imggZarMinHtike18.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[17]]);
  var imggZarMinHtike19 = document.createElement("img");
  imggZarMinHtike19.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[18]]);
  var imggZarMinHtike20 = document.createElement("img");
  imggZarMinHtike20.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[19]]);
  var imggZarMinHtike21 = document.createElement("img");
  imggZarMinHtike21.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[20]]);
  var imggZarMinHtike22 = document.createElement("img");
  imggZarMinHtike22.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[21]]);
  var imggZarMinHtike23 = document.createElement("img");
  imggZarMinHtike23.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[22]]);
  var imggZarMinHtike24 = document.createElement("img");
  imggZarMinHtike24.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[23]]);
  var imggZarMinHtike25 = document.createElement("img");
  imggZarMinHtike25.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[24]]);
  var imggZarMinHtike26 = document.createElement("img");
  imggZarMinHtike26.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[25]]);
  var imggZarMinHtike27 = document.createElement("img");
  imggZarMinHtike27.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[26]]);
  var imggZarMinHtike28 = document.createElement("img");
  imggZarMinHtike28.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[27]]);
  var imggZarMinHtike29 = document.createElement("img");
  imggZarMinHtike29.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[28]]);
  var imggZarMinHtike30 = document.createElement("img");
  imggZarMinHtike30.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[29]]);
  var imggZarMinHtike31 = document.createElement("img");
  imggZarMinHtike31.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[30]]);
  var imggZarMinHtike32 = document.createElement("img");
  imggZarMinHtike32.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[31]]);
  var imggZarMinHtike33 = document.createElement("img");
  imggZarMinHtike33.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[32]]);
  var imggZarMinHtike34 = document.createElement("img");
  imggZarMinHtike34.setAttribute("src", imgArrayZarMinHtike[ranNumsZarMinHtike[33]]);

  // Aye Ko
  var ranNumsAyeKo = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);

  var imgArrayAyeKo = new Array();
  imgArrayAyeKo[0] = "img/YANGON/_Aye%20Ko/_SELECTS/P%20(16).jpg";
  imgArrayAyeKo[1] = "img/YANGON/_Aye%20Ko/_SELECTS/P%20(21).jpg";
  imgArrayAyeKo[2] = "img/YANGON/_Aye%20Ko/_SELECTS/P%20(30).jpg";
  imgArrayAyeKo[3] = "img/YANGON/_Aye%20Ko/_SELECTS/P%20(31).jpg";
  imgArrayAyeKo[4] = "img/YANGON/_Aye%20Ko/_SELECTS/P%20(32).jpg";
  imgArrayAyeKo[5] = "img/YANGON/_Aye%20Ko/_SELECTS/P%20(40).jpg";
  imgArrayAyeKo[6] = "img/YANGON/_Aye%20Ko/_SELECTS/P%20(47).jpg";
  imgArrayAyeKo[7] = "img/YANGON/_Aye%20Ko/_SELECTS/P%20(69).jpg";

  var imggAyeKo01 = document.createElement("img");
  imggAyeKo01.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[0]]);
  var imggAyeKo02 = document.createElement("img");
  imggAyeKo02.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[1]]);
  var imggAyeKo03 = document.createElement("img");
  imggAyeKo03.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[2]]);
  var imggAyeKo04 = document.createElement("img");
  imggAyeKo04.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[3]]);
  var imggAyeKo05 = document.createElement("img");
  imggAyeKo05.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[4]]);
  var imggAyeKo06 = document.createElement("img");
  imggAyeKo06.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[5]]);
  var imggAyeKo07 = document.createElement("img");
  imggAyeKo07.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[6]]);
  var imggAyeKo08 = document.createElement("img");
  imggAyeKo08.setAttribute("src", imgArrayAyeKo[ranNumsAyeKo[7]]);

  // Mayco
  var ranNumsMayco = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

  var imgArrayMayco = new Array();
  imgArrayMayco[0] = "img/YANGON/_Mayco/_SELECTS/MAY_0024-3.jpg";
  imgArrayMayco[1] = "img/YANGON/_Mayco/_SELECTS/MAY_0053-13.jpg";
  imgArrayMayco[2] = "img/YANGON/_Mayco/_SELECTS/MAY_3519-16.jpg";
  imgArrayMayco[3] = "img/YANGON/_Mayco/_SELECTS/MAY_3528-19.jpg";
  imgArrayMayco[4] = "img/YANGON/_Mayco/_SELECTS/MAY_3537-22.jpg";
  imgArrayMayco[5] = "img/YANGON/_Mayco/_SELECTS/MAY_3541-24.jpg";
  imgArrayMayco[6] = "img/YANGON/_Mayco/_SELECTS/MAY_3543-25.jpg";
  imgArrayMayco[7] = "img/YANGON/_Mayco/_SELECTS/MAY_3554-29.jpg";
  imgArrayMayco[8] = "img/YANGON/_Mayco/_SELECTS/MAY_3556-30.jpg";
  imgArrayMayco[9] = "img/YANGON/_Mayco/_SELECTS/MAY_3566-32.jpg";
  imgArrayMayco[10] = "img/YANGON/_Mayco/_SELECTS/MAY_3701-81.jpg";
  imgArrayMayco[11] = "img/YANGON/_Mayco/_SELECTS/MAY_3818-108.jpg";
  imgArrayMayco[12] = "img/YANGON/_Mayco/_SELECTS/MAY_3823-109.jpg";
  imgArrayMayco[13] = "img/YANGON/_Mayco/_SELECTS/MAY_3833-111.jpg";

  var imggMayco01 = document.createElement("img");
  imggMayco01.setAttribute("src", imgArrayMayco[ranNumsMayco[0]]);
  var imggMayco02 = document.createElement("img");
  imggMayco02.setAttribute("src", imgArrayMayco[ranNumsMayco[1]]);
  var imggMayco03 = document.createElement("img");
  imggMayco03.setAttribute("src", imgArrayMayco[ranNumsMayco[2]]);
  var imggMayco04 = document.createElement("img");
  imggMayco04.setAttribute("src", imgArrayMayco[ranNumsMayco[3]]);
  var imggMayco05 = document.createElement("img");
  imggMayco05.setAttribute("src", imgArrayMayco[ranNumsMayco[4]]);
  var imggMayco06 = document.createElement("img");
  imggMayco06.setAttribute("src", imgArrayMayco[ranNumsMayco[5]]);
  var imggMayco07 = document.createElement("img");
  imggMayco07.setAttribute("src", imgArrayMayco[ranNumsMayco[6]]);
  var imggMayco08 = document.createElement("img");
  imggMayco08.setAttribute("src", imgArrayMayco[ranNumsMayco[7]]);
  var imggMayco09 = document.createElement("img");
  imggMayco09.setAttribute("src", imgArrayMayco[ranNumsMayco[8]]);
  var imggMayco10 = document.createElement("img");
  imggMayco10.setAttribute("src", imgArrayMayco[ranNumsMayco[9]]);
  var imggMayco11 = document.createElement("img");
  imggMayco11.setAttribute("src", imgArrayMayco[ranNumsMayco[10]]);
  var imggMayco12 = document.createElement("img");
  imggMayco12.setAttribute("src", imgArrayMayco[ranNumsMayco[11]]);
  var imggMayco13 = document.createElement("img");
  imggMayco13.setAttribute("src", imgArrayMayco[ranNumsMayco[12]]);
  var imggMayco14 = document.createElement("img");
  imggMayco14.setAttribute("src", imgArrayMayco[ranNumsMayco[13]]);

  // San Minn
  var ranNumsSanMinn = shuffle([0, 1, 2, 3, 4, 5, 6, 7 , 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]);

  var imgArraySanMinn = new Array();
  imgArraySanMinn[0] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5715.jpeg";
  imgArraySanMinn[1] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5721.jpeg";
  imgArraySanMinn[2] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5722.jpeg";
  imgArraySanMinn[3] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5723.jpeg";
  imgArraySanMinn[4] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5724.jpeg";
  imgArraySanMinn[5] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5733.jpeg";
  imgArraySanMinn[6] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5735.jpeg";
  imgArraySanMinn[7] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5737.jpeg";
  imgArraySanMinn[8] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5745.jpeg";
  imgArraySanMinn[9] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5748.jpeg";
  imgArraySanMinn[10] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5749.jpeg";
  imgArraySanMinn[11] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5750.jpeg";
  imgArraySanMinn[12] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5756.jpeg";
  imgArraySanMinn[13] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5764.jpeg";
  imgArraySanMinn[14] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5767.jpeg";
  imgArraySanMinn[15] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5768.jpeg";
  imgArraySanMinn[16] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5778.jpeg";
  imgArraySanMinn[17] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5786.jpeg";
  imgArraySanMinn[18] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5788.jpeg";
  imgArraySanMinn[19] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5796.jpeg";
  imgArraySanMinn[20] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5799.jpeg";
  imgArraySanMinn[21] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5812.jpeg";
  imgArraySanMinn[22] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5818.jpeg";
  imgArraySanMinn[23] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5824.jpeg";
  imgArraySanMinn[24] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5829.jpeg";
  imgArraySanMinn[25] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5830.jpeg";
  imgArraySanMinn[26] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5831.jpeg";
  imgArraySanMinn[27] = "img/YANGON/_San%20Minn/_SELECTS/IMG_5847.jpeg";

  var imggSanMinn01 = document.createElement("img");
  imggSanMinn01.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[0]]);
  var imggSanMinn02 = document.createElement("img");
  imggSanMinn02.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[1]]);
  var imggSanMinn03 = document.createElement("img");
  imggSanMinn03.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[2]]);
  var imggSanMinn04 = document.createElement("img");
  imggSanMinn04.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[3]]);
  var imggSanMinn05 = document.createElement("img");
  imggSanMinn05.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[4]]);
  var imggSanMinn06 = document.createElement("img");
  imggSanMinn06.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[5]]);
  var imggSanMinn07 = document.createElement("img");
  imggSanMinn07.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[6]]);
  var imggSanMinn08 = document.createElement("img");
  imggSanMinn08.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[7]]);
  var imggSanMinn09 = document.createElement("img");
  imggSanMinn09.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[8]]);
  var imggSanMinn10 = document.createElement("img");
  imggSanMinn10.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[9]]);
  var imggSanMinn11 = document.createElement("img");
  imggSanMinn11.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[10]]);
  var imggSanMinn12 = document.createElement("img");
  imggSanMinn12.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[11]]);
  var imggSanMinn13 = document.createElement("img");
  imggSanMinn13.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[12]]);
  var imggSanMinn14 = document.createElement("img");
  imggSanMinn14.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[13]]);
  var imggSanMinn15 = document.createElement("img");
  imggSanMinn15.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[14]]);
  var imggSanMinn16 = document.createElement("img");
  imggSanMinn16.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[15]]);
  var imggSanMinn17 = document.createElement("img");
  imggSanMinn17.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[16]]);
  var imggSanMinn18 = document.createElement("img");
  imggSanMinn18.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[17]]);
  var imggSanMinn19 = document.createElement("img");
  imggSanMinn19.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[18]]);
  var imggSanMinn20 = document.createElement("img");
  imggSanMinn20.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[19]]);
  var imggSanMinn21 = document.createElement("img");
  imggSanMinn21.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[20]]);
  var imggSanMinn22 = document.createElement("img");
  imggSanMinn22.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[21]]);
  var imggSanMinn23 = document.createElement("img");
  imggSanMinn23.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[22]]);
  var imggSanMinn24 = document.createElement("img");
  imggSanMinn24.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[23]]);
  var imggSanMinn25 = document.createElement("img");
  imggSanMinn25.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[24]]);
  var imggSanMinn26 = document.createElement("img");
  imggSanMinn26.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[25]]);
  var imggSanMinn27 = document.createElement("img");
  imggSanMinn27.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[26]]);
  var imggSanMinn28 = document.createElement("img");
  imggSanMinn28.setAttribute("src", imgArraySanMinn[ranNumsSanMinn[27]]);

  // Po Po
  var ranNumsPoPo = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  var imgArrayPoPo = new Array();
  imgArrayPoPo[0] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%201.jpeg";
  imgArrayPoPo[1] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%202.jpeg";
  imgArrayPoPo[2] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%203.jpeg";
  imgArrayPoPo[3] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%20lower%20res/1%20copy%201.jpeg";
  imgArrayPoPo[4] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%20lower%20res/1.jpeg";
  imgArrayPoPo[5] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%20lower%20res/2.jpeg";
  imgArrayPoPo[6] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%20lower%20res/4.jpeg";
  imgArrayPoPo[7] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%20lower%20res/5.jpeg";
  imgArrayPoPo[8] = "img/YANGON/_Po%20Po/_SELECTS/Homage%20to%20Buddha%20lower%20res/6.jpeg";
  imgArrayPoPo[9] = "img/YANGON/_Po%20Po/_SELECTS/Narcissus%201.jpeg";
  imgArrayPoPo[10] = "img/YANGON/_Po%20Po/_SELECTS/Narcissus%202.jpeg";
  imgArrayPoPo[11] = "img/YANGON/_Po%20Po/_SELECTS/Narcissus%203.jpeg";
  imgArrayPoPo[12] = "img/YANGON/_Po%20Po/_SELECTS/Narcissus%204.jpeg";

  var imggPoPo01 = document.createElement("img");
  imggPoPo01.setAttribute("src", imgArrayPoPo[ranNumsPoPo[0]]);
  var imggPoPo02 = document.createElement("img");
  imggPoPo02.setAttribute("src", imgArrayPoPo[ranNumsPoPo[1]]);
  var imggPoPo03 = document.createElement("img");
  imggPoPo03.setAttribute("src", imgArrayPoPo[ranNumsPoPo[2]]);
  var imggPoPo04 = document.createElement("img");
  imggPoPo04.setAttribute("src", imgArrayPoPo[ranNumsPoPo[3]]);
  var imggPoPo05 = document.createElement("img");
  imggPoPo05.setAttribute("src", imgArrayPoPo[ranNumsPoPo[4]]);
  var imggPoPo06 = document.createElement("img");
  imggPoPo06.setAttribute("src", imgArrayPoPo[ranNumsPoPo[5]]);
  var imggPoPo07 = document.createElement("img");
  imggPoPo07.setAttribute("src", imgArrayPoPo[ranNumsPoPo[6]]);
  var imggPoPo08 = document.createElement("img");
  imggPoPo08.setAttribute("src", imgArrayPoPo[ranNumsPoPo[7]]);
  var imggPoPo09 = document.createElement("img");
  imggPoPo09.setAttribute("src", imgArrayPoPo[ranNumsPoPo[8]]);
  var imggPoPo10 = document.createElement("img");
  imggPoPo10.setAttribute("src", imgArrayPoPo[ranNumsPoPo[9]]);
  var imggPoPo11 = document.createElement("img");
  imggPoPo11.setAttribute("src", imgArrayPoPo[ranNumsPoPo[10]]);
  var imggPoPo12 = document.createElement("img");
  imggPoPo12.setAttribute("src", imgArrayPoPo[ranNumsPoPo[11]]);
  var imggPoPo13 = document.createElement("img");
  imggPoPo13.setAttribute("src", imgArrayPoPo[ranNumsPoPo[12]]);
  var imggPoPo14 = document.createElement("img");
  imggPoPo14.setAttribute("src", imgArrayPoPo[ranNumsPoPo[13]]);

  // Yu Yu Myint Than
  var ranNumsYuYuMyintThan = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

  var imgArrayYuYuMyintThan = new Array();
  imgArrayYuYuMyintThan[0] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than001.jpg";
  imgArrayYuYuMyintThan[1] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than002.jpg";
  imgArrayYuYuMyintThan[2] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than003.jpg";
  imgArrayYuYuMyintThan[3] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than004.jpg";
  imgArrayYuYuMyintThan[4] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than005.jpg";
  imgArrayYuYuMyintThan[5] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than006.jpg";
  imgArrayYuYuMyintThan[6] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than007.jpg";
  imgArrayYuYuMyintThan[7] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than008.jpg";
  imgArrayYuYuMyintThan[8] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than009.jpg";
  imgArrayYuYuMyintThan[9] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than010.jpg";
  imgArrayYuYuMyintThan[10] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than011.jpg";
  imgArrayYuYuMyintThan[11] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than012.jpg";
  imgArrayYuYuMyintThan[12] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than013.jpg";
  imgArrayYuYuMyintThan[13] = "img/YANGON/_Yu%20Yu%20Myint%20Than/_SELECTS%20(in%20order)/Jigsaw-Yu%20Yu%20Myint%20Than014.jpg";

  var imggYuYuMyintThan01 = document.createElement("img");
  imggYuYuMyintThan01.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[0]]);
  var imggYuYuMyintThan02 = document.createElement("img");
  imggYuYuMyintThan02.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[1]]);
  var imggYuYuMyintThan03 = document.createElement("img");
  imggYuYuMyintThan03.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[2]]);
  var imggYuYuMyintThan04 = document.createElement("img");
  imggYuYuMyintThan04.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[3]]);
  var imggYuYuMyintThan05 = document.createElement("img");
  imggYuYuMyintThan05.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[4]]);
  var imggYuYuMyintThan06 = document.createElement("img");
  imggYuYuMyintThan06.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[5]]);
  var imggYuYuMyintThan07 = document.createElement("img");
  imggYuYuMyintThan07.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[6]]);
  var imggYuYuMyintThan08 = document.createElement("img");
  imggYuYuMyintThan08.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[7]]);
  var imggYuYuMyintThan09 = document.createElement("img");
  imggYuYuMyintThan09.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[8]]);
  var imggYuYuMyintThan10 = document.createElement("img");
  imggYuYuMyintThan10.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[9]]);
  var imggYuYuMyintThan11 = document.createElement("img");
  imggYuYuMyintThan11.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[10]]);
  var imggYuYuMyintThan12 = document.createElement("img");
  imggYuYuMyintThan12.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[11]]);
  var imggYuYuMyintThan13 = document.createElement("img");
  imggYuYuMyintThan13.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[12]]);
  var imggYuYuMyintThan14 = document.createElement("img");
  imggYuYuMyintThan14.setAttribute("src", imgArrayYuYuMyintThan[ranNumsYuYuMyintThan[13]]);

  // shuffle 
  var ranNums01 = shuffle(["01", "02", "03", "04", "05", "06", "07", "08"]);
  var ranNums02 = shuffle(["09", "10", "11", "12", "13", "14", "15", "16"]);
  var ranNums03 = shuffle(["17", "18", "19", "20", "21", "22", "23", "24"]);
  var ranNums04 = shuffle(["25", "26", "27", "28", "29", "30", "31", "32"]);
  var ranNums05 = shuffle(["33", "34", "35", "36", "37", "38", "39", "40"]);
  var ranNums06 = shuffle(["41", "42", "43", "44", "45", "46", "47", "48"]);
  var ranNums07 = shuffle(["49", "50", "51", "52", "53", "54", "55", "56"]);

  var ranNums = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);

  var imgGroup01 = new Array();
  imgGroup01[0] = imggTunWinAung01;
  imgGroup01[1] = imggAyeKo01;
  imgGroup01[2] = imggMayco01;
  imgGroup01[3] = imggPoPo01;
  imgGroup01[4] = imggSanMinn01;
  imgGroup01[5] = imggZarMinHtike01;
  imgGroup01[6] = imggYuYuMyintThan01;
  imgGroup01[7] = imggSaiHtinLinnHtet01;

  var imgGroup02 = new Array();
  imgGroup02[0] = imggTunWinAung02;
  imgGroup02[1] = imggAyeKo02;
  imgGroup02[2] = imggMayco02;
  imgGroup02[3] = imggPoPo02;
  imgGroup02[4] = imggSanMinn02;
  imgGroup02[5] = imggZarMinHtike02;
  imgGroup02[6] = imggYuYuMyintThan02;
  imgGroup02[7] = imggSaiHtinLinnHtet02;

  var imgGroup03 = new Array();
  imgGroup03[0] = imggTunWinAung03;
  imgGroup03[1] = imggAyeKo03;
  imgGroup03[2] = imggMayco03;
  imgGroup03[3] = imggPoPo03;
  imgGroup03[4] = imggSanMinn03;
  imgGroup03[5] = imggZarMinHtike03;
  imgGroup03[6] = imggYuYuMyintThan03;
  imgGroup03[7] = imggSaiHtinLinnHtet03;

  var imgGroup04 = new Array();
  imgGroup04[0] = imggTunWinAung04;
  imgGroup04[1] = imggAyeKo04;
  imgGroup04[2] = imggMayco04;
  imgGroup04[3] = imggPoPo04;
  imgGroup04[4] = imggSanMinn04;
  imgGroup04[5] = imggZarMinHtike04;
  imgGroup04[6] = imggYuYuMyintThan04;
  imgGroup04[7] = imggSaiHtinLinnHtet04;

  var imgGroup05 = new Array();
  imgGroup05[0] = imggZarMinHtike06;
  imgGroup05[1] = imggAyeKo05;
  imgGroup05[2] = imggMayco05;
  imgGroup05[3] = imggPoPo05;
  imgGroup05[4] = imggSanMinn05;
  imgGroup05[5] = imggZarMinHtike05;
  imgGroup05[6] = imggYuYuMyintThan05;
  imgGroup05[7] = imggSaiHtinLinnHtet05;

  var imgGroup06 = new Array();
  imgGroup06[0] = imggZarMinHtike07;
  imgGroup06[1] = imggAyeKo06;
  imgGroup06[2] = imggMayco06;
  imgGroup06[3] = imggPoPo06;
  imgGroup06[4] = imggSanMinn06;
  imgGroup06[5] = imggZarMinHtike08;
  imgGroup06[6] = imggYuYuMyintThan06;
  imgGroup06[7] = imggSaiHtinLinnHtet06;

  var imgGroup07 = new Array();
  imgGroup07[0] = imggZarMinHtike09;
  imgGroup07[1] = imggAyeKo07;
  imgGroup07[2] = imggMayco07;
  imgGroup07[3] = imggPoPo07;
  imgGroup07[4] = imggSanMinn07;
  imgGroup07[5] = imggZarMinHtike10;
  imgGroup07[6] = imggYuYuMyintThan07;
  imgGroup07[7] = imggSaiHtinLinnHtet07;

  document.getElementById("no-" + ranNums01[0]).appendChild(imgGroup01[ranNums[0]]);
  document.getElementById("no-" + ranNums01[0]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums01[1]).appendChild(imgGroup01[ranNums[1]]);
  document.getElementById("no-" + ranNums01[1]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums01[2]).appendChild(imgGroup01[ranNums[2]]);
  document.getElementById("no-" + ranNums01[2]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums01[3]).appendChild(imgGroup01[ranNums[3]]);
  document.getElementById("no-" + ranNums01[3]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums01[4]).appendChild(imgGroup01[ranNums[4]]);
  document.getElementById("no-" + ranNums01[4]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums01[5]).appendChild(imgGroup01[ranNums[5]]);
  document.getElementById("no-" + ranNums01[5]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums01[6]).appendChild(imgGroup01[ranNums[6]]);
  document.getElementById("no-" + ranNums01[6]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums01[7]).appendChild(imgGroup01[ranNums[7]]);
  document.getElementById("no-" + ranNums01[7]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");

  document.getElementById("no-" + ranNums02[0]).appendChild(imgGroup02[ranNums[0]]);
  document.getElementById("no-" + ranNums02[0]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums02[1]).appendChild(imgGroup02[ranNums[1]]);
  document.getElementById("no-" + ranNums02[1]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums02[2]).appendChild(imgGroup02[ranNums[2]]);
  document.getElementById("no-" + ranNums02[2]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums02[3]).appendChild(imgGroup02[ranNums[3]]);
  document.getElementById("no-" + ranNums02[3]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums02[4]).appendChild(imgGroup02[ranNums[4]]);
  document.getElementById("no-" + ranNums02[4]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums02[5]).appendChild(imgGroup02[ranNums[5]]);
  document.getElementById("no-" + ranNums02[5]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums02[6]).appendChild(imgGroup02[ranNums[6]]);
  document.getElementById("no-" + ranNums02[6]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums02[7]).appendChild(imgGroup02[ranNums[7]]);
  document.getElementById("no-" + ranNums02[7]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");

  document.getElementById("no-" + ranNums03[0]).appendChild(imgGroup03[ranNums[0]]);
  document.getElementById("no-" + ranNums03[0]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums03[1]).appendChild(imgGroup03[ranNums[1]]);
  document.getElementById("no-" + ranNums03[1]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums03[2]).appendChild(imgGroup03[ranNums[2]]);
  document.getElementById("no-" + ranNums03[2]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums03[3]).appendChild(imgGroup03[ranNums[3]]);
  document.getElementById("no-" + ranNums03[3]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums03[4]).appendChild(imgGroup03[ranNums[4]]);
  document.getElementById("no-" + ranNums03[4]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums03[5]).appendChild(imgGroup03[ranNums[5]]);
  document.getElementById("no-" + ranNums03[5]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums03[6]).appendChild(imgGroup03[ranNums[6]]);
  document.getElementById("no-" + ranNums03[6]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums03[7]).appendChild(imgGroup03[ranNums[7]]);
  document.getElementById("no-" + ranNums03[7]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");

  document.getElementById("no-" + ranNums04[0]).appendChild(imgGroup04[ranNums[0]]);
  document.getElementById("no-" + ranNums04[0]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums04[1]).appendChild(imgGroup04[ranNums[1]]);
  document.getElementById("no-" + ranNums04[1]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums04[2]).appendChild(imgGroup04[ranNums[2]]);
  document.getElementById("no-" + ranNums04[2]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums04[3]).appendChild(imgGroup04[ranNums[3]]);
  document.getElementById("no-" + ranNums04[3]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums04[4]).appendChild(imgGroup04[ranNums[4]]);
  document.getElementById("no-" + ranNums04[4]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums04[5]).appendChild(imgGroup04[ranNums[5]]);
  document.getElementById("no-" + ranNums04[5]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums04[6]).appendChild(imgGroup04[ranNums[6]]);
  document.getElementById("no-" + ranNums04[6]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums04[7]).appendChild(imgGroup04[ranNums[7]]);
  document.getElementById("no-" + ranNums04[7]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");

  document.getElementById("no-" + ranNums05[0]).appendChild(imgGroup05[ranNums[0]]);
  document.getElementById("no-" + ranNums05[0]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums05[1]).appendChild(imgGroup05[ranNums[1]]);
  document.getElementById("no-" + ranNums05[1]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums05[2]).appendChild(imgGroup05[ranNums[2]]);
  document.getElementById("no-" + ranNums05[2]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums05[3]).appendChild(imgGroup05[ranNums[3]]);
  document.getElementById("no-" + ranNums05[3]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums05[4]).appendChild(imgGroup05[ranNums[4]]);
  document.getElementById("no-" + ranNums05[4]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums05[5]).appendChild(imgGroup05[ranNums[5]]);
  document.getElementById("no-" + ranNums05[5]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums05[6]).appendChild(imgGroup05[ranNums[6]]);
  document.getElementById("no-" + ranNums05[6]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums05[7]).appendChild(imgGroup05[ranNums[7]]);
  document.getElementById("no-" + ranNums05[7]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");

  document.getElementById("no-" + ranNums06[0]).appendChild(imgGroup06[ranNums[0]]);
  document.getElementById("no-" + ranNums06[0]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums06[1]).appendChild(imgGroup06[ranNums[1]]);
  document.getElementById("no-" + ranNums06[1]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums06[2]).appendChild(imgGroup06[ranNums[2]]);
  document.getElementById("no-" + ranNums06[2]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums06[3]).appendChild(imgGroup06[ranNums[3]]);
  document.getElementById("no-" + ranNums06[3]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums06[4]).appendChild(imgGroup06[ranNums[4]]);
  document.getElementById("no-" + ranNums06[4]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums06[5]).appendChild(imgGroup06[ranNums[5]]);
  document.getElementById("no-" + ranNums06[5]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums06[6]).appendChild(imgGroup06[ranNums[6]]);
  document.getElementById("no-" + ranNums06[6]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums06[7]).appendChild(imgGroup06[ranNums[7]]);
  document.getElementById("no-" + ranNums06[7]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");

  document.getElementById("no-" + ranNums07[0]).appendChild(imgGroup07[ranNums[0]]);
  document.getElementById("no-" + ranNums07[0]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums07[1]).appendChild(imgGroup07[ranNums[1]]);
  document.getElementById("no-" + ranNums07[1]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums07[2]).appendChild(imgGroup07[ranNums[2]]);
  document.getElementById("no-" + ranNums07[2]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums07[3]).appendChild(imgGroup07[ranNums[3]]);
  document.getElementById("no-" + ranNums07[3]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums07[4]).appendChild(imgGroup07[ranNums[4]]);
  document.getElementById("no-" + ranNums07[4]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums07[5]).appendChild(imgGroup07[ranNums[5]]);
  document.getElementById("no-" + ranNums07[5]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums07[6]).appendChild(imgGroup07[ranNums[6]]);
  document.getElementById("no-" + ranNums07[6]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");
  document.getElementById("no-" + ranNums07[7]).appendChild(imgGroup07[ranNums[7]]);
  document.getElementById("no-" + ranNums07[7]).setAttribute("style", "padding-top:" + Math.floor(Math.random(30) * 80) + "px");

});
function newFunction(imgArrayTunWinAung, ranNumsTunWinAung) {
  var imggTunWinAung01 = document.createElement("img");
  imggTunWinAung01.setAttribute("src", imgArrayTunWinAung[ranNumsTunWinAung[0]]);
  var imggTunWinAung02 = document.createElement("img");
  imggTunWinAung02.setAttribute("src", imgArrayTunWinAung[ranNumsTunWinAung[1]]);
  var imggTunWinAung03 = document.createElement("img");
  imggTunWinAung03.setAttribute("src", imgArrayTunWinAung[ranNumsTunWinAung[2]]);
  var imggTunWinAung04 = document.createElement("img");
  imggTunWinAung04.setAttribute("src", imgArrayTunWinAung[ranNumsTunWinAung[3]]);
  return { imggTunWinAung04, imggTunWinAung01, imggTunWinAung02, imggTunWinAung03 };
}

