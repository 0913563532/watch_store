'use strict';
/*----------------------Chức năng sản phẩm--------------------*/
window.onload=function(){
	CreateProduct();	
	showThongtinSanPham(0);
}
function currency(num) {

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function CreateProduct(){
  if(localStorage.getItem('product')===null){ 
    var productArray = [

      {productId:1001, brand:'kubba',loai:'CASIO',    img:'1008.jpg', name:'KUBBA-A168W-1_large', price:21010000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1002, brand:'kubba',loai:'CASIO',    img:'1007.jpg', name:'KUBBA-A168WEC-1VT_large', price:35830000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1003, brand:'kubba',loai:'CASIO',    img:'1006.jpg', name:'KUBBA-A168WEGB-1BVT_large', price:9842000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1004, brand:'kubba',loai:'CASIO',    img:'1005.jpg', name:'KUBBA-A1000RBW-1_large', price:63230000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1005, brand:'kubba',loai:'CASIO',    img:'1004.jpg', name:'KUBBA-BA110SC-2A_large', price:13435000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1006, brand:'kubba',loai:'CASIO',    img:'1003.jpg', name:'KUBBA-BA110TM-7A_large', price:19654000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1007, brand:'kubba',loai:'CASIO',    img:'1002.jpg', name:'KUBBA-BA130-1A3_large', price:50225000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1008, brand:'kubba',loai:'CASIO',    img:'1001.jpg', name:'KUBBA-BGD560SC-7_large', price:10586000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1009, brand:'kubba',loai:'CASIO',    img:'1000.jpg', name:'KUBBA-BGD560TG-9_large', price:31970000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},

      {productId:1010, brand:'movado',loai:'MOVADO1',    img:'1042.jpg', name:'40MM MOVADO CONNECT 2.0', price:450000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1011, brand:'movado',loai:'MOVADO1',    img:'1043.jpg', name:'40MM MOVADO CONNECT 2.0-55', price:390000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1012, brand:'movado',loai:'MOVADO1',    img:'1044.jpg', name:'MOVADO MODERN 47', price:549000,detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1013, brand:'movado',loai:'MOVADO1',    img:'1045.jpg', name:'MOVADO BOLD EVOLUTION', price:400000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1014, brand:'movado',loai:'MOVADO1',    img:'1046.jpg', name:'MOVADO BOLD METALS', price:750000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1015, brand:'movado',loai:'MOVADO1',    img:'1047.jpg', name:'MOVADO BOLD THIN', price:690000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1016, brand:'movado',loai:'MOVADO1',    img:'1048.jpg', name:'MOVADO AMIKA', price:560000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1017, brand:'movado',loai:'MOVADO1',    img:'1049.jpg', name:'MOVADO BOLD BANGLE', price:1650000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      
      {productId:1018, brand:'longines',loai:'LONGINES1',    img:'1050.jpg', name:'Longines-conquest_classic-L2.386.3.92.7', price:5300000,detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1019, brand:'longines',loai:'LONGINES1',    img:'1051.jpg', name:'Longines-conquest_classic-L2.387.0.57.6', price:1050000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1020, brand:'longines',loai:'LONGINES1',    img:'1052.jpg', name:'Longines-flagship-L4.984.3.37.7', price:3000000,detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1021, brand:'longines',loai:'LONGINES1',    img:'1053.jpg', name:'Chuột MSI M92 Gaming', price:890000,detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1022, brand:'longines',loai:'LONGINES1',    img:'1054.jpg', name:'Longines-heritage_fake-L2.830.4.93.0 ', price:4250000,detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1023, brand:'longines',loai:'LONGINES1',    img:'1055.jpg', name:'Longines-la_grande_L4.709.4.51.2', price:490000,detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1024, brand:'longines',loai:'LONGINES1',    img:'1056.jpg', name:'Longines-la_grande_classique-L5.709.4.97.2', price:970000,detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1025, brand:'longines',loai:'LONGINES1',    img:'1057.jpg', name:'The Longines 1832-L4.828.4.92.2', price:270000,detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1026, brand:'longines',loai:'LONGINES1',   img:'1058.jpg', name:'The Longines master_collection-L2.893.5.97.7', price:5709000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},

      {productId:1027, brand:'omega',loai:'OMEGA1',   img:'1059.jpg', name:'OMEGA-constellation-13123412103001-l', price:18880000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1028, brand:'omega',loai:'OMEGA1',    img:'1060.jpg', name:'OMEGA-constellation-13123412106001-l', price:52990000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1029, brand:'omega',loai:'OMEGA1',    img:'1061.jpg', name:'OMEGA-constellation-13150392003001-l', price:25900000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1030, brand:'omega',loai:'OMEGA1',    img:'1062.jpg', name:'OMEGA-DU1040TX', price:16790000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1031, brand:'omega',loai:'OMEGA1',    img:'1063.jpg', name:'OMEGA-speedmaster-mark-ii-32710435006001-l', price:9590000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1032, brand:'omega',loai:'OMEGA1',    img:'1064.jpg', name:'OMEGA-speedmaster-moonseiko-31060425099001-l7', price:20900000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1033, brand:'omega',loai:'OMEGA1',    img:'1065.jpg', name:'MEGA-speedmaster-moonseiko-311924430087002-5', price:16490000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1034, brand:'omega',loai:'OMEGA1',    img:'1066.jpg', name:'OMEGA-speedmaster-moonseiko-31192443001002-9', price:38990000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},

      {productId:1035, brand:'citizen',loai:'CITIZEN1',    img:'1067.jpg', name:'8mm | 3ATM Đồng hồ Citizen CT-EW2484-82B - Nữ', price:5750000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1036, brand:'citizen',loai:'CITIZEN1',    img:'1068.jpg', name:'40mm | 5ATM | Sapphire Đồng hồ Citizen CT-NH7510-50E - CITIZEN1', price:34900000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1037, brand:'citizen',loai:'CITIZEN1',    img:'1069.jpg', name:'42.8mm | 5ATM Đồng hồ Citizen CT-BF2024-50L - Đồng hồ CITIZEN1', price:7990000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1038, brand:'citizen',loai:'CITIZEN1',    img:'1070.jpg', name:'39mm | 5ATM Đồng hồ Citizen CT-BE9174-55A - CITIZEN1', price:4190000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1039, brand:'citizen',loai:'CITIZEN1',    img:'1071.jpg', name:'40mm | 5ATM Đồng hồ Citizen CT-NH8352-53P - CITIZEN1', price:5750000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1040, brand:'citizen',loai:'CITIZEN1',    img:'1072.jpg', name:'40mm | 5ATM Đồng hồ Citizen CT-BI1052-85P - CITIZEN1', price:3490000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1041, brand:'citizen',loai:'CITIZEN1',    img:'1073.jpg', name:'M26mm | 5ATM Đồng hồ Citizen CT-ER0203-51E - Nữ', price:7990000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1042, brand:'citizen',loai:'CITIZEN1',    img:'1074.jpg', name:'21.4mm | 5ATM Đồng hồ Citizen CT-EJ6142-51P - Nữ', price:4190000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      
      {productId:1043, brand:'rolex',loai:'ROLEX1',    img:'1075.jpg', name:'ROLEX-CELLINI-DUAL-TIME', price:26090000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1044, brand:'rolex',loai:'ROLEX1',    img:'1076.jpg', name:'ROLEX-CELLINI-MOONPHASE', price:32190000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1045, brand:'rolex',loai:'ROLEX1',    img:'1077.jpg', name:'ROLEX-DAY-DAY 40', price:29400000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1046, brand:'rolex',loai:'ROLEX1',    img:'1078.jpg', name:'ROLEX-CELLINI-TIME', price:13390000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1047, brand:'rolex',loai:'ROLEX1',    img:'1079.jpg', name:'BROLEX-DATEJUST-36', price:3280000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1048, brand:'rolex',loai:'ROLEX1',    img:'1080.jpg', name:'ROLEX-GMT-MASTER II', price:2690000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1049, brand:'rolex',loai:'ROLEX1',    img:'1081.jpg', name:'GROLEX-OYSTER PERPETUAL 41s', price:31290000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1050, brand:'rolex',loai:'ROLEX1',    img:'1082.jpg', name:'GROLEX-OYSTER PERPETUAL 56L', price:2940000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1051, brand:'rolex',loai:'ROLEX1',    img:'1083.jpg', name:'ROLEX-OYSTER-PERPETUAL-31-WOMAN', price:13920000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1052, brand:'rolex',loai:'ROLEX1',    img:'1084.jpg', name:'ROLEX-PEARLMASTER-39', price:3280000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1053, brand:'rolex',loai:'ROLEX1',    img:'1085.jpg', name:'ROLEX-SUBMARINER-6656CV', price:26290000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1054, brand:'rolex',loai:'ROLEX1',    img:'1086.jpg', name:'ROLEX-SEA-DWELLER-87LUO', price:3190000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1055, brand:'rolex',loai:'ROLEX1',    img:'1087.jpg', name:'ROLEX-SUBMARINER-BD76', price:2940000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1056, brand:'rolex',loai:'ROLEX1',    img:'1088.jpg', name:'ROLEX-SUBMARINER', price:13940000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1057, brand:'rolex',loai:'ROLEX1',    img:'1089.jpg', name:'ROLEX-SUBMARINER-4567L', price:32280000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},

      {productId:1058, brand:'tissot',loai:'TISSOT1',    img:'1090.jpg', name:'tissot COUTURIER AUTOMATIC CHRONOGRAPH', price:26390000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1059, brand:'tissot',loai:'TISSOT1',    img:'1091.jpg', name:'tissot EVERYTIME LARGE', price:3190000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1060, brand:'tissot',loai:'TISSOT1',    img:'1092.jpg', name:'tissot EVERYTIME MEDIUM', price:29340000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1061, brand:'tissot',loai:'TISSOT1',    img:'1093.jpg', name:'tissot GENT XL CLASSIC', price:1390000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1062, brand:'tissot',loai:'TISSOT1',    img:'1094.jpg', name:'Btissot GENT XL CLASSIC_2', price:32830000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1063, brand:'tissot',loai:'TISSOT1',    img:'1095.jpg', name:'tissot HERITAGE VISODATE AUTOMATIC', price:2690000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1064, brand:'tissot',loai:'TISSOT1',    img:'1096.jpg', name:'tissot SAVONNETTE', price:31920000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1065, brand:'tissot',loai:'TISSOT1',    img:'1097.jpg', name:'tissot SEASTAR 1000 CHRONOGRAPH', price:2940000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1066, brand:'tissot',loai:'TISSOT1',    img:'1098.jpg', name:'tissot SEASTAR 1000 POWERMATIC 80 SILICIUM', price:1390000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1067, brand:'tissot',loai:'TISSOT1',    img:'1099.jpg', name:'Btissot SEASTAR 1000 POWERMATIC 8', price:3280000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1068, brand:'tissot',loai:'TISSOT1',    img:'1100.jpg', name:'Btissot TRADITION POWERMATIC 80 OPEN HEART', price:29430000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1069, brand:'tissot',loai:'TISSOT1',    img:'1101.jpg', name:'tissot T-TOUCH CONNECT SOLAR', price:13390000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1070, brand:'tissot',loai:'TISSOT1',    img:'1102.jpg', name:'tissot EVERYTIME SMALL', price:32800300, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},

      {productId:1058, brand:'seiko',loai:'NAMNU1',    img:'1103.jpg', name:'Citizen Đôi – Quartz (Pin) – Dây Kim Loại (BI5012-53E – EU6012-58E)', price:26903000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1059, brand:'seiko',loai:'NAMNU1',    img:'1104.jpg', name:'Frederique Constant Đôi – Kính Sapphire – Quartz (Pin) – Dây Kim Loại (FC-220S5S6B – FC-200S1S36B3)', price:31903000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1060, brand:'seiko',loai:'NAMNU1',    img:'1105.jpg', name:'Candino Đôi – Kính Sapphire – Quartz (Pin) – Dây Kim Loại (C4363/2 – C4365/2)', price:29400300, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1061, brand:'seiko',loai:'NAMNU1',    img:'1106.jpg', name:'Bàn Gaming HomeDesk Chữ Z', price:1390500, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1062, brand:'seiko',loai:'NAMNU1',    img:'1107.jpg', name:'tissot Đôi – Kính Sapphire – Quartz (Pin) – Dây Kim Loại (T101.410.22.031.00 – T101.210.22.031.00)', price:32803000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1063, brand:'seiko',loai:'NAMNU1',    img:'1108.jpg', name:'SRseiko Cặp (SG3004.4102CV - SL3004.4102CV) Kính Sapphire -', price:26900300, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1064, brand:'seiko',loai:'NAMNU1',    img:'1109.jpg', name:'casio Cặp (MTP-1374L-1AV - LTP-2085L-1AV) Quartz (Pin) Chính', price:33190000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1065, brand:'seiko',loai:'NAMNU1',    img:'1110.jpg', name:'omanson Cặp (TM1274MCWH - TM1274LCWH) Quartz (Pin) Chín', price:29340000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1066, brand:'seiko',loai:'NAMNU1',    img:'1111.jpg', name:'SRseiko Cặp (SG3004.4102CV - SL3004.4102CV) Kính Sapphire ', price:13930000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1067, brand:'seiko',loai:'NAMNU1',    img:'1112.jpg', name:'SRseiko Cặp (SG584.4102CV - MK584.4102CV) Kính Sapphire -', price:32803000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1068, brand:'seiko',loai:'NAMNU1',    img:'1113.jpg', name:'Le Chateau Cặp (L63.192.01.5.2 - L63.192.01.5.1) Kính Sapphire ', price:2940000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1069, brand:'seiko',loai:'NAMNU1',    img:'1114.jpg', name:'Candino Đôi – Kính Sapphire – Quartz (Pin) – Dây Kim Loại (C4363/2 – C4365/2)', price:13390000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1070, brand:'seiko',loai:'NAMNU1',    img:'1115.jpg', name:'Candino Đôi – Kính Sapphire – Quartz (Pin) – Dây Kim Loại (C4363/2 – C4365/2)', price:32803000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1071, brand:'seiko',loai:'NAMNU1',    img:'1116.jpg', name:'SRseiko Cặp SR80060.4102CF Kính Sapphire - Quartz (Pin)', price:32800700, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1072, brand:'seiko',loai:'NAMNU1',    img:'1117.jpg', name:'Romanson Cặp (TM1274MCWH - TM1274LCWH) Quartz (Pin) Chính', price:29407000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1073, brand:'seiko',loai:'NAMNU1',    img:'1118.jpg', name:'SRseiko Cặp (SG1122.4907 - SL1122.4907) Kính Sapphire', price:13907000, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
      {productId:1074, brand:'seiko',loai:'NAMNU1',    img:'1119.jpg', name:'SRseiko Cặp (SG1122.4102 - SL1122.4102) Kính Sapphire -', price:32800900, detail:'<br> Đồng hồ CASIO-A168W-1_large<br> với mặt số tròn lớn với viền được mạ vàng sang trọng<br>làm nổi bật nền trắng mặt số, kim chỉ và vạch chỉ giờ<br> được làm mỏng với độ chi tiết cao nổi bật.'},
    
    ];

    localStorage.setItem('product',JSON.stringify(productArray));
  }
}
function showThongtinSanPham(index){
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var id = "";
	var img = "";
	var ten = "";
	var loai = "";
	var gia = "";
	var chucnang = "";

	if (index < 0) {
		index = 0;
	}

	var sizeProduct = 8;
	var totalPage = Math.ceil(productArray.length / sizeProduct);
	var start = sizeProduct*index;
	var end = start + sizeProduct;
	if (end > productArray.length) {
		end = productArray.length;
	}

	for(var i = start; i<end;i++){
		id = id + '<div><h1>'+productArray[i].productId+'</h1></div>';
		img = img + '<div class="col_4"><img src="./images/DONGHO/'+productArray[i].img+'"></div>';
		ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
		if(productArray[i].loai=='CASIO')
			loai = loai + '<div><h1>'+'CASIO'+'</h1></div>';
		else if(productArray[i].loai == 'MOVADO1')
			loai = loai + '<div><h1>'+'MOVADO1'+'</h1></div>';
		else if(productArray[i].loai == 'LONGINES1')
			loai = loai + '<div><h1>'+'LONGINES1'+'</h1></div>';
		else if(productArray[i].loai == 'OMEGA1')
			loai = loai + '<div><h1>'+'OMEGA1'+'</h1></div>';
		else if(productArray[i].loai == 'CITIZEN1')
			loai = loai + '<div><h1>'+'CITIZEN1'+'</h1></div>';
		else if(productArray[i].loai == 'ROLEX1')
			loai = loai + '<div><h1>'+'ROLEX1'+'</h1></div>';
		else if(productArray[i].loai == 'TISSOT1')
			loai = loai + '<div><h1>'+'TISSOT1'+'</h1></div>';
		else 
			loai = loai + '<div><h1>'+'NAMNU1'+'</h1></div>';
		gia = gia + '<div><h5>'+ currency(productArray[i].price) +'</h5></div>';
		chucnang = chucnang + '<div class="chucnang"><button onclick="editProduct('+productArray[i].productId+')">'+"SỬA"+'</button><button onclick="deleteProduct('+productArray[i].productId+');">'+"XÓA"+'</button></div>'
	}
	var pagingHtml = '';
	for (var i = 0; i < totalPage; i++) {
		var abc = i + 1;
		pagingHtml += '<div id="phantrang" onclick="nextPage('+ i +');">'+abc+'</div>'
	}
	document.getElementById('phantrang').innerHTML=pagingHtml;
	document.getElementById('idsp').innerHTML=id;
	document.getElementById('imgsp').innerHTML=img;
	document.getElementById('tensp').innerHTML=ten;
	document.getElementById('loaisp').innerHTML=loai;
	document.getElementById('giasp').innerHTML=gia;
	document.getElementById('chucnangsp').innerHTML=chucnang;
}


function nextPage(index){
	showThongtinSanPham(index);
}
function getSanPhamAddValue(id){
	var addValue = document.getElementById(id);
	return addValue.value;
}
function addProduct(){
	var productLocal = localStorage.getItem("product");
	var productArray = JSON.parse(productLocal);
	var ten = getSanPhamAddValue("name-sp");
	var loai = getSanPhamAddValue("loai-sp");
	var gia = getSanPhamAddValue("price-sp");
	var anh = getSanPhamAddValue("img-sp");
	var fileAnh = anh.split("\\");
	var thuonghieu = getSanPhamAddValue("brand-sp");
	var chitiet = getSanPhamAddValue("detail-sp");
	var product = {
		'productId': productArray[productArray.length -1].productId + 1,
		'brand': thuonghieu,
		'loai': loai,
		'img': fileAnh[2],
		'name': ten,
		'detail':chitiet,
		'price': gia
	}
	productArray.push(product);
	localStorage.setItem('product',JSON.stringify(productArray));
	showThongtinSanPham(0);
	document.getElementById('themsanpham').style.display = 'none';
	document.getElementById('bgden').style.display = 'none';
	// document.getElementById('signUpform').reset();
}
// Xóa sản phẩm 
function deleteProduct(id){
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==id)
			if(confirm('Bạn có muốn xóa sản phẩm này?'))
				productArray.splice(i, 1);
	}
	localStorage.setItem('product',JSON.stringify(productArray));
	showThongtinSanPham(0);
	search(0);
}
// Sửa sản phẩm
function editProduct(id){
	document.getElementById('bgden').style.display='block';
	document.getElementById('formsua').style.display='block';
	var productArray = JSON.parse(localStorage.getItem('product'));
	var anh = document.getElementById("imgsua").value;
	var fileAnh = anh.split("\\");
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==id) {
			document.getElementById("namesua").value = productArray[i].name;
			document.getElementById("brandsua").value = productArray[i].brand;
			document.getElementById("pricesua").value = productArray[i].price;
			document.getElementById("loaisua").value = productArray[i].loai;
			document.getElementById("detailsua").value = productArray[i].detail;
			anh = fileAnh[2];
			localStorage.setItem('editId',id);
			break;
		}
	}
}
// Lưu sản phẩm
function saveProduct(){
	var productLocal = localStorage.getItem("product");
	var editId = localStorage.getItem("editId");
	var productArray = JSON.parse(productLocal);
	var ten = document.getElementById("namesua").value;
	var loai = document.getElementById("loaisua").value;
	var gia = document.getElementById("pricesua").value;
	var anh = document.getElementById("imgsua").value;
	var fileAnh = anh.split("\\");
	var thuonghieu = document.getElementById("brandsua").value;
	var chitiet = document.getElementById('detailsua').value;
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==editId){
			productArray[i].name = ten;
			productArray[i].loai = loai;
			productArray[i].brand = thuonghieu;
			productArray[i].price = gia;
			productArray[i].detail = chitiet; 
			productArray[i].img = fileAnh[2];
			break;
		}
	}
	localStorage.setItem('product',JSON.stringify(productArray));
	localStorage.setItem('editId',0);
	showThongtinSanPham(0);
	search(0);
	document.getElementById('formsua').style.display = 'none';
	document.getElementById('bgden').style.display = 'none';
}
function closeAccount(){
	if(document.getElementById('log-out').style.display == 'none'){
		document.getElementById('log-out').style.display = 'block';
	}else{
		document.getElementById('log-out').style.display = 'none';
	}
}

function search(){
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var id = "";
	var img = "";
	var ten = "";
	var loai = "";
	var gia = "";
	var chucnang = "";
	var giatritim = document.getElementById('value-sp').value.toLowerCase();
	// if (index < 0) {
	// 	index = 0;
	// }

	// var sizeProduct = 8;
	// var totalPage = Math.ceil(productArray.length / sizeProduct);
	// var start = sizeProduct*index;
	// var end = start + sizeProduct;
	// if (end > productArray.length) {
	// 	end = productArray.length;
	// }

	for(var i = 0; i<productArray.length;i++){
		if(productArray[i].name.toLowerCase().search(giatritim) != -1 || giatritim == productArray[i].productId || giatritim == productArray[i].loai){
			id = id + '<div><h1 style="">'+productArray[i].productId+'</h1></div>';
			img = img + '<div class="col_4"><img src="./images/DONGHO/'+productArray[i].img+'"></div>';
			ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
			gia = gia + '<div><h5>'+ currency(productArray[i].price) +'</h5></div>';
			loai = loai + '<div><h1>'+productArray[i].loai+'</h1></div>';
			chucnang = chucnang + '<div class="chucnang"><button onclick="editProduct('+productArray[i].productId+')">'+"SỬA"+'</button><button onclick="deleteProduct('+productArray[i].productId+');">'+"XÓA"+'</button></div>';
		}
	}
	// var pagingHtml = '';
	// for (var i = 0; i < totalPage; i++) {
	// 	var abc = i + 1;
	// 	pagingHtml += '<div id="phantrangtk" onclick="nextPage('+ i +');">'+abc+'</div>'
	// }
	// document.getElementById('phantrangtk').innerHTML=pagingHtml;
	document.getElementById('idsptk').innerHTML=id;
	document.getElementById('imgsptk').innerHTML=img;
	document.getElementById('tensptk').innerHTML=ten;
	document.getElementById('loaisptk').innerHTML=loai;
	document.getElementById('giasptk').innerHTML=gia;
	document.getElementById('chucnangsptk').innerHTML=chucnang;

}
/*----------------------Chức năng sản phẩm--------------------*/


function closeForm(){
	document.getElementById('formsua').style.display = 'none';
	document.getElementById('bgden').style.display = 'none';
}
function closeFormAdd(){
	document.getElementById('themsanpham').style.display = 'none';
	document.getElementById('bgden').style.display = 'none';
}

function openAddForm(){
	document.getElementById('themsanpham').style.display='block';
	document.getElementById('bgden').style.display = 'block';
}

