/*--------slide-show--------*/
createAdmin();
window.onload = function(){
  document.getElementById('dangnhap').click();
  showCartTable();
  checkLogin();
  CreateProduct();
  showbill();
  document.getElementById('bill').style.display='block';
}

// open user form


function modangnhap(){
  document.getElementById('id01').style.display="block";
   document.getElementById('id02').style.display="none";
  }

  function dongdangnhap(){
  document.getElementById('id01').style.display="none";
  }

  function modangky(){
  document.getElementById('form-DK').style.display="block";
    document.getElementById('dangky').style.display="block";
  document.getElementById('form-DN').style.display="none";
}

function dongdangky(){
  document.getElementById('dangky').style.display="none";

}

// open user form
function openForm(){
  document.getElementById('container').style.display='block';
  document.getElementById('bgden').style.display = 'block';
    document.getElementById('form-DK').style.display="none";
    document.getElementById('form-DN').style.display="block";
    document.getElementById('dangky').style.display="none";
    document.getElementById('dangnhap').style.display="block";
}

function openForm1(){
   document.getElementById('dangky').style.display="block";
    document.getElementById('form-DK').style.display="block";
  document.getElementById('container').style.display='block';
  document.getElementById('bgden').style.display = 'block';
  document.getElementById('form-DN').style.display="none";
  document.getElementById('dangnhap').style.display="none";
}
function Xclose(){
  document.getElementById('container').style.display='none';
  document.getElementById('bgden').style.display = 'none';
  document.getElementById('dangky').style.display="none";
  document.getElementById('form-DK').style.display="none";
    document.getElementById('form-DN').style.display="none";
}

/*---------------form-DN-DK-----------*/
function formColor(dn,maume){
      var i,tablink,tabcontent;
      tablink=document.getElementsByClassName('tablink');
      tabcontent=document.getElementsByClassName('formain');
      for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
      }
      for(i=0;i<tablink.length;i++){
        tablink[i].style.backgroundColor="";
      }
      document.getElementById(dn).style.display="block";
     // maume.style.backgroundColor = "#0071E5";
}



function logOut(link){
  localStorage.removeItem('userlogin');
  location.href = link;
}
function openLogOut(choice){
  var user = JSON.parse(localStorage.getItem('userlogin'));
  switch(user.quyen){
    case 'user':
      if(document.getElementById('dangxuat').style.display == 'none'){
        document.getElementById('dangxuat').style.display = 'block';
        document.getElementById('history').style.display = 'block';
        document.getElementById('tooltiptk').style.display = 'none';
      }else{
        document.getElementById('tooltiptk').style.display = 'block';
        document.getElementById('dangxuat').style.display = 'none';
        document.getElementById('history').style.display = 'none';
      }
      break;
    case 'admin':
      if(document.getElementById('dangxuatadmin').style.display == 'none'){
        document.getElementById('dangxuatadmin').style.display = 'block';
        document.getElementById('tooltiptk').style.display = 'none';
      }else{
        document.getElementById('tooltiptk').style.display = 'block';
        document.getElementById('dangxuatadmin').style.display = 'none';
      }
      openAdmin();
      break;
    default: 
      break;
  }
  
   
  
}
function openAdmin(){
  if(document.getElementById('btnadmin').style.display == 'none'){
    document.getElementById('btnadmin').style.display = 'block';
  }else{
    document.getElementById('btnadmin').style.display = 'none';
   }
}
// function checkLogin(){
//   if (localStorage.getItem('userlogin') != null) {
//     var user = JSON.parse(localStorage.getItem('userlogin'));
//     var s = "";
//     if(user.quyen == 'admin'){
//       s = '<li id="tendangnhapadmin" >'+'<i class="fas fa-user-cog"></i>'+user.username+'</li>'+
//           '<ul><li><a id="btnadmin" onclick="window.location.href=\'./admin/admin.html\'"><i class="fas fa-user-cog" style="margin-right:8px;"></i>admin</a>'+
//           '<li id="dangxuatadmin" onclick="logOut(\'index.html\');"><i class="fas fa-sign-out-alt" ></i>LOG OUT</li></li></ul>'+
//           '<li id="taikhoanadmin" class="tooltip"><a href="#" onclick="openLogOut();" class="hra"><i class="fas fa-caret-down"></i></a><span class="tooltiptext tooltiptk" id="tooltiptk">Tài khoản</span></li>';
//           document.getElementById('shopping-cart').style.display = 'none';
//           document.getElementById('user').style.display = 'none';

//           //customAlert('Xin chào admin!','success');
//     }else{
//       s = '<li id="dangxuat" onclick="logOut(\'index.html\');"><i class="fas fa-sign-out-alt" style="margin-right:10px;"></i>LOG OUT</li></li></ul>'+
          
//           document.getElementById('user').style.display = 'none';
//           //customAlert('Xin chào '+user.hoten+'','success');
//     }
//     document.getElementById('user-onload').innerHTML = s;

//   }
// }
/*-----------------signUp-----------------*/

function createAdmin(){
  if(localStorage.getItem('user')==null){   
    var userArray = [];
    var admin = {
      username: 'Boss',
      password: 'Boss', 
      hoten:'Nguyên Si',
      address:'273 An Dương Vương, P3, Quận 5, TPHCM',
      phone:'0123456789', 
      quyen:'admin'
    };
    userArray.push(admin);
    localStorage.setItem('user',JSON.stringify(userArray));
  }
}
// customAlert


function customAlert(message,type) {
  if (type=='success') {
    document.getElementById("customalert").style.backgroundColor = '#0362fc';
  }
  if (type=='warning') {
    document.getElementById("customalert").style.backgroundColor = '#f44336';
  }
  document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 1500);
} 
function closeform(){
  var userform = document.getElementById('user');
  userform.style.display = 'none';
}
function showSignup(){
  document.getElementById('form-DK').style.display = 'none';
  document.getElementById('form-DN').style.display = 'block';
}
function showLogin(){
  document.getElementById('form-DK').style.display = 'none';
  document.getElementById('form-DN').style.display = 'block';
}

document.getElementById('signUpform').addEventListener('submit', signUp);
function signUp(){
      // e.preventDefault();
      // var userArray = [];
      var hoten= document.getElementById('hoten').value;
      var username= document.getElementById('ten-dn').value;
      var password= document.getElementById('matkhau').value;
      var rppass = document.getElementById('rp-matkhau').value;
      var phone_number = document.getElementById('phone_number').value;
      var address = document.getElementById('address').value;
      var flag = true;
      if(!hoten){
        document.getElementById('errorhoten').style.display = 'block';
        flag = false;
      }else{
        document.getElementById('errorhoten').style.display = 'none';
      }
      if(!address){
        document.getElementById('erroradress').style.display = 'block';
        flag = false;
      }else{
        document.getElementById('erroradress').style.display = 'none';
      }
      if(!phone_number){
        document.getElementById('errorphone').style.display = 'block';
        flag = false;
      }else{
        if(isNaN(Number(phone_number))){
          document.getElementById('errorphone').style.display = 'block';
          document.getElementById('errorphone').innerHTML = 'Số điện thoại không hợp lệ';
          flag = false;
        }else{
          if(Number(phone_number)<100000000 || Number(phone_number)>999999999){
            document.getElementById('errorphone').style.display = 'block';
            document.getElementById('errorphone').innerHTML = 'Số điện thoại không đúng';
            flag = false;
          }else{
            document.getElementById('errorphone').style.display = 'none';
          }
        }
      }
      if(!username){
        document.getElementById('errortendn').style.display = 'block';
        flag = false;
      }else{
        document.getElementById('errortendn').style.display = 'none';
      }
      if(!password){
        document.getElementById('errormk').style.display = 'block';
        flag = false;
      }else{
        if(password.length<8){
          document.getElementById('errormk').style.display = 'block';
          document.getElementById('errormk').innerHTML = 'Mật khẩu phải trên 8 ký tự';
          flag = false;
        }else {
          document.getElementById('errormk').style.display = 'none';
        }
      }
      if(rppass != password){
        document.getElementById('error-rpmk').style.display = 'block';
        flag = false;
      }else{
        document.getElementById('error-rpmk').style.display = 'none';
      }
      if(flag==false){
        return false;
      }
      var d = new Date();
      var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
      if(localStorage.getItem('user') == null){
          localStorage.setItem('user',JSON.stringify(userArray));
      }
      var user = {hoten: hoten, username: username, password: password, rppassword: rppass,phone:phone_number, address: address, quyen:'user' };
      userArray = JSON.parse(localStorage.getItem('user'));
      for(var i=0;i<userArray.length;i++){
        if(user.username == userArray[i].username){
          document.getElementById('errortendn').style.display = 'block';
          document.getElementById('errortendn').innerHTML = 'Tên đăng nhập đã có người sử dụng';
          // username.focus();
          return false;
        }
      }
      userArray.push(user);
      localStorage.setItem('user',JSON.stringify(userArray));
      customAlert('Bạn đã đăng ký thành công!','success');
             document.getElementById('form-DN').style.display="none";
      document.getElementById('dangnhap').style.display="none";
        document.getElementById('container').style.display='none';
  document.getElementById('bgden').style.display = 'none';
  document.getElementById('dangky').style.display="none";
  document.getElementById('form-DK').style.display="none";
      // document.getElementById('container').style.display = 'none';
      showSignup();
      document.getElementById('dangky').style.backgroundColor = '#f1f1f1';
      document.getElementById('dangnhap').style.backgroundColor = 'rgb(0,113,229)';
}

function resetForm(){
  document.getElementById('signUpform').reset();
  document.getElementById('errorhoten').style.display = 'none';
  document.getElementById('errortendn').style.display = 'none';
  document.getElementById('errormk').style.display = 'none';
  document.getElementById('error-rpmk').style.display = 'none'; 
  document.getElementById('errorphone').style.display = 'none';
  document.getElementById('erroradress').style.display = 'none';
}
/*------------------login----------------*/

function setHTML(id,html){
  var element = document.getElementById(id);
  element.innerHTML = html;  
}
// function logIn(){
//   var username=document.getElementById('username').value;
//   var password=document.getElementById('password').value;
//   var userArray = JSON.parse(localStorage.getItem('user'));
//   for(var i=0;i<userArray.length;i++){
//     if(userArray[i].username==username && userArray[i].password==password){
//       if(userArray[i].username=="admin" && userArray[i].password=="admin"){
//         window.location="admin/admin.html"; // dieu huong sang trang admin  
//         alert('Xin chào admin!');
//         return true;
//       }
//       else{
//         document.getElementById('container').style.display = 'block';
//         localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
//         window.location.reload(true);
//         return true;
//         //window.location="admin.html";
//       }
//     }
//   }   
//   return false;
// } 

document.getElementById('logInform').addEventListener('submit', logIn);
function logIn(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var flag=true;
  if(!username){
    document.getElementById('usernameerror').style.display = 'block';
    flag = false;
  }else {
    document.getElementById('usernameerror').style.display = 'none';
  }
  if(!password){
    document.getElementById('passwordloginerror').style.display = 'block';
    flag = false;
  }else {
    document.getElementById('passwordloginerror').style.display = 'none';
  }
  if(flag==false){
    return false;
  }
  if(localStorage.getItem('user') == null){
          localStorage.setItem('user',JSON.stringify(userArray));
      }
  var userArray = JSON.parse(localStorage.getItem('user'));
  for(var i=0;i<userArray.length;i++){
    if(username==userArray[i].username){
      if(password==userArray[i].password){
        closeform();
        localStorage.setItem('userlogin',JSON.stringify(userArray[i]));

        window.location.reload(true);
        return true;
      }
    }
  }
  document.getElementById('usernameerror').style.display = 'block';
  document.getElementById('usernameerror').innerHTML = 'Tài khoản không hợp lệ';

  return false;
}
/*----------------------------------*/
// Product

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
function phantrang(){
  var productArray = JSON.parse(localStorage.getItem('product'));
  var s='';
  var temp = 0;
  temp = Math.ceil(productArray.length/12) ;  
  for(var i=1;i<=temp;i++)  
    s=s+'<div>'+i+'</div>';
  document.getElementById("phantrang").innerHTML=s;
}
// function phantrang1(){
//  var productArray = JSON.parse(localStorage.getItem('Product'));
//  var s="";
//  var temp = 0;
//  temp = Math.ceil(productArray.length/12) ;  
//  for(var i=1;i<=temp;i++)  
//    s=s+'<div>'+i+'</div>';
//   document.getElementById("phantrang").innerHTML=s;
// }  
function showFull(index){
  if(localStorage.getItem('product')===null){
    return false;
  }
  var productArray = JSON.parse(localStorage.getItem('product'));
  var s = '';
  if (index <0) {
    index = 0;
  }
  var sizeProduct = 8;
  var totalPage = Math.ceil(productArray.length / sizeProduct);
  var start = sizeProduct*index;
  var end = start + sizeProduct;
  if (end > productArray.length){
    end = productArray.length;
  }
  for(var i = start;i < end; i++){
    s = s + '<div class="col_4"><img src="'+productArray[i].img+' "><h4 id="ten">'+
    productArray[i].name+'</h4>'+
    '<p id="gia">'+currency(productArray[i].price)+'</p>'+
    '<p class="chitiet" onclick="showProductInfo('+productArray[i].productId+');">'
    +"Xem chi tiết"+'</p></div>';
  }
  var pagingHtml = '';
  for (var j = 0; j < totalPage; j++) {
    var abc = j + 1;
    pagingHtml += '<div id="phantrang" onclick="nextPage('+ j +');">'+abc+'</div>'
  }
  document.getElementById('gow').innerHTML+=s;
  document.getElementById('phantrang').innerHTML=pagingHtml;
  document.getElementById('gow').innerHTML=s;
}
function nextPage(index){
  showFull(index);
}


/* show info */
function showProductInfo(productid){
  document.getElementById('product-info').style.display = 'block';
  var productArray = JSON.parse(localStorage.getItem('Product'));
  for(var i=0;i<productArray.length;i++){
    if(productArray[i].productId==productid){
      document.getElementById('productname').innerHTML = productArray[i].name;
      document.getElementById('productprice').innerHTML = 'Giá: '+ currency(productArray[i].price);
      document.getElementById('imgbig').src=productArray[i].img;
      document.getElementById('quantity').value = 1;
      document.querySelector('#info-detail .right button.addtocart').setAttribute('onClick', 'addToCart('+productid+')');
    }
  }
}
function closeProductInfo(){

  document.getElementById('product-info').style.display = 'none';
}
function quantitydown(){
  if(document.getElementById('quantity').value > 1){
    document.getElementById('quantity').value--;
  }
}
function quantityup(){

  document.getElementById('quantity').value++;
}
/* cart */
function addToCart(productid1){
  var quantity = document.getElementById('quantity').value;
  var productArray = JSON.parse(localStorage.getItem('product'));
  var producttemp;
  for(var i=0; i<productArray.length;i++){
    if(productArray[i].productId==productid1){
      producttemp = productArray[i];
    }
  }
  if(localStorage.getItem('cart')===null){
    var cartArray = [];
    producttemp.quantity = quantity;
    producttemp.totalprice = quantity*producttemp.price;
    cartArray.unshift(producttemp);
    localStorage.setItem('cart',JSON.stringify(cartArray));
  }else{
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    producttemp.quantity = quantity;
    producttemp.totalprice = quantity*producttemp.price;
    cartArray.unshift(producttemp);
    localStorage.setItem('cart',JSON.stringify(cartArray));   
  }
  closeProductInfo();
}
function showCartTable(){
  if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
    var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
    document.getElementById('carttable').innerHTML=s;
    document.getElementById('totalprice').innerHTML=0;
  }else {
    var cartArray = JSON.parse(localStorage.getItem('cart'));
    var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th>Hủy</th></tr>';
    var totalprice=0;
    for (var i = 0; i < cartArray.length; i++){
      s+=  '<tr>'+
          '<td><img src="./images/'+cartArray[i].img+'"></td>'+
          '<td>'+
            '<div>'+cartArray[i].name+'</div>'+
            
          '</td>'+
          '<td>'+currency(cartArray[i].price)+'</td>'+
          '<td>'+
            '<button onClick="quantitydown2('+i+')">-</button>'+
            '<input id="quantity" type="text" disabled value="'+cartArray[i].quantity+'" onchange="updateCart(this.value,'+cartArray[i].productId+')">'+
            '<button onClick="quantityup2('+i+')">+</button>'+
          '</td>'+
          '<td>'+currency(cartArray[i].price*cartArray[i].quantity)+'</td>'+
          '<td><button onClick="deletecartitem('+cartArray[i].productId+')">&times;</buttom></td>'+
        '</tr>';
      totalprice+=cartArray[i].price*cartArray[i].quantity;
    }
    document.getElementById('carttable').innerHTML=s;
    document.getElementById('totalprice').innerHTML=currency(totalprice);
  } 
}
function deletecartitem(id){
  var cartArray = JSON.parse(localStorage.getItem('cart'));
  
  for (var i = 0; i < cartArray.length; i++) {
    if(cartArray[i].productId==id){
      if(confirm('Bạn có muốn xóa sản phẩm này không? ')){
        cartArray.splice(i, 1);
      }
    }
  }
  localStorage.setItem('cart',JSON.stringify(cartArray));
  showCartTable();
}
function deletecart(){
  if(confirm('Bạn có chắc chắn muốn xóa tất cả sản phẩm không?')){
    localStorage.removeItem('cart');
  }
  showCartTable();
}
function updateCart(quantity,id){
  var cartArray = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < cartArray.length; i++) {
    if(cartArray[i].productId==id){
      cartArray[i].quantity=quantity;
    }
  }
  localStorage.setItem('cart',JSON.stringify(cartArray));
  showCartTable();
}
function quantitydown(){
  if(document.getElementById('quantity').value > 1){
    document.getElementById('quantity').value--;
  }
}
function quantityup(){

  document.getElementById('quantity').value++;
}
function quantitydown2(i){
  var cartArray = JSON.parse(localStorage.getItem('cart'));
      if(cartArray[i].quantity>1){
        cartArray[i].quantity--;
      }
  localStorage.setItem('cart',JSON.stringify(cartArray));
  showCartTable();
}
function quantityup2(i){
  var cartArray = JSON.parse(localStorage.getItem('cart'));
        cartArray[i].quantity++;
  localStorage.setItem('cart',JSON.stringify(cartArray));
  showCartTable();
}
function buy(){
  var casio=0;
  var movado=0;
  var longines=0;
  var omega=0;
  var citizen=0;
  var rolex=0;
  var tissot=0;
  var seiko=0;
  var prcasio=0;
  var prmovado=0;
  var prlongines=0;
  var promega=0;
  var prcitizen=0;
  var prrolex=0;
  var prtissot=0;
  var prseiko=0;
  if(localStorage.getItem('userlogin')===null){
   customAlert('Bạn phải đăng nhập để mua sản phẩm!','warning');
   document.getElementById('container').style.display = 'block';
   document.getElementById('bgden').style.display = 'block';
   return false;
 }
//  var info = '';
  var cartArray = JSON.parse(localStorage.getItem('cart'));
  var userloginArray = JSON.parse(localStorage.getItem('userlogin'));
  var productArray = JSON.parse(localStorage.getItem('product'));
  var bill='';
  var totalprice = 0;
  var info='';
  if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
    return false;
  }
  for (var i = 0; i < cartArray.length; i++) {
      
      info+=cartArray[i].quantity+' x '+cartArray[i].name+ '<br>' ;
      totalprice+=cartArray[i].quantity*cartArray[i].price;
      if(cartArray[i].brand=="kubba"||cartArray[i].brand=="KUBBA"){
        casio+=parseInt(cartArray[i].quantity);
        prcasio+=parseInt(cartArray[i].quantity*cartArray[i].price);
      }
      if(cartArray[i].brand=="movado"||cartArray[i].brand=="MOVADO"){
        movado+=parseInt(cartArray[i].quantity);
        prmovado+=parseInt(cartArray[i].quantity*cartArray[i].price);
      }
      if(cartArray[i].brand=="longines"||cartArray[i].brand=="LONGINES"){
        longines+=parseInt(cartArray[i].quantity);
        prlongines+=parseInt(cartArray[i].quantity*cartArray[i].price);
      }
      if(cartArray[i].brand=="omega"||cartArray[i].brand=="OMEGA"){
        omega+=parseInt(cartArray[i].quantity);
        promega+=parseInt(cartArray[i].quantity*cartArray[i].price);
      }
      if(cartArray[i].brand=="citizen"||cartArray[i].brand=="CITIZEN"){
        citizen+=parseInt(cartArray[i].quantity);
        prcitizen+=parseInt(cartArray[i].quantity*cartArray[i].price);
      }
      if(cartArray[i].brand=="rolex"||cartArray[i].brand=="ROLEX"){
        rolex+=parseInt(cartArray[i].quantity);
        prrolex+=parseInt(cartArray[i].quantity*cartArray[i].price);
      }
      if(cartArray[i].brand=="tissot"||cartArray[i].brand=="TISSOT"){
        tissot+=parseInt(cartArray[i].quantity);
        prtissot+=parseInt(cartArray[i].quantity*cartArray[i].price);
      }
      if(cartArray[i].brand=="seiko"||cartArray[i].brand=="SEIKO"){
        seiko+=parseInt(cartArray[i].quantity);
        prseiko+=parseInt(cartArray[i].quantity*cartArray[i].price);
      }
  }
  var date = new Date();
  var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
  if(localStorage.getItem('bill')===null){
    var billArray = [];
    bill = {tensp:info,hoten:userloginArray.hoten,idkh:userloginArray.username,id:(billArray.length+1), totalprice: totalprice , date: d, status: 'Chưa xử lý',diachi:userloginArray.address,sdt:userloginArray.phone,casio,movado,longines,omega,citizen,rolex,tissot,seiko,prcasio,prmovado,prlongines,promega,prcitizen,prrolex,prtissot,prseiko};
    billArray.unshift(bill);
    localStorage.setItem('bill', JSON.stringify(billArray));
  }
  else{
    var billArray = JSON.parse(localStorage.getItem('bill'));
    bill = {tensp:info,hoten:userloginArray.hoten,idkh:userloginArray.username,id: (billArray.length+1), totalprice: totalprice , date: d, status: 'Chưa xử lý',diachi:userloginArray.address,sdt:userloginArray.phone,casio,movado,longines,omega,citizen,rolex,tissot,seiko,prcasio,prmovado,prlongines,promega,prcitizen,prrolex,prtissot,prseiko};
    billArray.unshift(bill);
    localStorage.setItem('bill', JSON.stringify(billArray));
  }

  localStorage.removeItem('cart');
  showCartTable();
  customAlert('Đơn hàng đã được đặt','success');
  // addToCart();
  // showbill();
}
function showbill(){
  var userhistory = document.getElementById('userhistory').value;
    var userloginArray = JSON.parse(localStorage.getItem('userlogin'));
  if (localStorage.getItem('bill')===null){
    document.getElementById('bill').style.display = 'block';
  }
  else{
    var billArray = JSON.parse(localStorage.getItem('bill'));
    var s='<h2>Đơn hàng đã đặt</h2>';
    for (var i = 0; i < billArray.length; i++) {
      if(userhistory==billArray[i].sdt){
        document.getElementById('bill').style.display = 'block';
        s+='<div class="billcontent">'+
          '<div>'+billArray[i].id+'</div>'+
          '<div>'+billArray[i].tensp+'</div>'+
          '<div>'+billArray[i].date+'</div>'+
        '<div>'+currency(billArray[i].totalprice)+'</div>'+
        '<div>'+billArray[i].status+'</div>'+
          
        '</div>';
      }
      if(userhistory!=billArray[i].sdt){
        s='<h2>Không Có Kết Quả</h2>';
        document.getElementById('bill').style.display='block';
      }
    }
    document.getElementById('bill').innerHTML = s;
    // document.getElementById('carttable').style.display='none';
    // document.getElementById('total').style.display='none';
  
  }
}


/* tìm kiếm */
function closesearch(){
  var khungsearch = document.getElementById('khungsearch').style.display = 'none';
  document.getElementById('searchnangcao').style.display = 'none';
}

function closesearch1(){
  var khungsearch = document.getElementById('khungsearch1').style.display = 'none';
}
function mosearch(){
  var khungsearch = document.getElementById('khungsearch').style.display = 'block';
  document.getElementById('khungsearch').style.width = '100%';
  document.getElementById('khungsearch').style.left = '0px';
}

function mosearch1(){
  var khungsearch = document.getElementById('khungsearch1').style.display = 'block';
}




function search(){
  var productsearch = document.getElementById('timkiem').value.toLowerCase();
  var productArray = JSON.parse(localStorage.getItem('product'));
  var s='';
      for(var i = 0; i<productArray.length; i++){
        if ((productArray[i].name.toLowerCase().search(productsearch) != -1 || productArray[i].name.toLowerCase().search(productsearch) != -1) && productsearch != '') {
          s = s + '<div class="card"><img src="./images/'+productArray[i].img+' "><h4 id="ten">'+
          productArray[i].name+'</h4>'+'<p id="gia">'+'</p>'+
          '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
          +"Xem chi tiết"+'</p></div>';
        }
      }
  var loaisearch = document.getElementById('loaisanpham').value;
  var priceform = document.getElementById('priceform').value;
  var priceto = document.getElementById('priceto').value; 
      if (loaisearch=='all') { 
        for(var i = 0; i<productArray.length; i++){       
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card"><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
            +"Xem chi tiết"+'</p></div>';
        }
        }
      }

      else if(loaisearch =='CASIO'){
        for(var i = 0; i<productArray.length; i++){
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='CASIO1' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card"><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch()">'
            +"Xem chi tiết"+'</p></div>';
          }
        }

      }
      
      else if(loaisearch =='ROLEX'){
        for(var i = 0; i<productArray.length; i++){
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='ROLEX1' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card"><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
            +"Xem chi tiết"+'</p></div>';
          }
        }
      }
      else if(loaisearch =='MOVADO'){
        for(var i = 0; i<productArray.length; i++){
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='MOVADO1' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
            +"Xem chi tiết"+'</p></div>';
          }
        }
      }
      else if(loaisearch =='LONGINES'){
        for(var i = 0; i<productArray.length; i++){
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='LONGINES1' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
            +"Xem chi tiết"+'</p></div>';
          }
        }
      }
      else if(loaisearch =='OMEGA'){
        for(var i = 0; i<productArray.length; i++){
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='OMEGA1' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
            +"Xem chi tiết"+'</p></div>';
          }
        }
      }
      else if(loaisearch =='CITIZEN'){
        for(var i = 0; i<productArray.length; i++){
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='CITIZEN1' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
            +"Xem chi tiết"+'</p></div>';
          }
        }
      }
      else if(loaisearch =='SEIKO'){
        for(var i = 0; i<productArray.length; i++){
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='NAMNU1' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
            +"Xem chi tiết"+'</p></div>';
          }
        }
      }
        else if(loaisearch =='TISSOT'){
        for(var i = 0; i<productArray.length; i++){
          if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='TISSOT1' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
            s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
            productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
            '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
            +"Xem chi tiết"+'</p></div>';
          }
        }
      }

      else
        s = '';

      if(priceform == "" && priceto == ""){
        if(loaisearch =='CASIO'){
          for(var i = 0; i<productArray.length; i++){
            if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='CASIO1') {
              s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
              productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
              '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
              +"Xem chi tiết"+'</p></div>';
            }
          }
        }
        else if(loaisearch =='MOVADO'){
          for(var i = 0; i<productArray.length; i++){
            if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='MOVADO1' ) {
              s = s + '<div class="card"><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
              productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
              '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
              +"Xem chi tiết"+'</p></div>';
            }
          }
        }
        else if(loaisearch =='OMEGA'){
          for(var i = 0; i<productArray.length; i++){
            if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='OMEGA1' ) {
              s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
              productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
              '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
              +"Xem chi tiết"+'</p></div>';
            }
          }
      }
        else if(loaisearch =='LONGINES'){
          for(var i = 0; i<productArray.length; i++){
            if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='LONGINES1' ) {
              s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
              productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
              '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
              +"Xem chi tiết"+'</p></div>';
            }
          }
      }
        else if(loaisearch =='ROLEX'){
          for(var i = 0; i<productArray.length; i++){
            if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='ROLEX1' ) {
              s = s + '<div class="card" ><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
              productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
              '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
              +"Xem chi tiết"+'</p></div>';
            }
          }
      }
        else if(loaisearch =='TISSOT'){
          for(var i = 0; i<productArray.length; i++){
            if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='TISSOT1') {
              s = s + '<div class="card"><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
              productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
              '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
              +"Xem chi tiết"+'</p></div>';
            }
          }

      }
      else if(loaisearch =='SEIKO'){
          for(var i = 0; i<productArray.length; i++){
            if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='NAMNU1') {
              s = s + '<div class="card"><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
              productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
              '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
              +"Xem chi tiết"+'</p></div>';
            }
          }

      }

         else if(loaisearch =='CITIZEN'){
          for(var i = 0; i<productArray.length; i++){
            if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='CITIZEN1') {
              s = s + '<div class="card"><img src="./images/'+productArray[i].img+'"><h4 id="ten">'+
              productArray[i].name+'</h4>'+'<p id="gia">'+currency(productArray[i].price)+'</p>'+
              '<p class="chitietsearch" onclick="showProductInfoSearch('+productArray[i].productId+');closesearch();">'
              +"Xem chi tiết"+'</p></div>';
            }
          }

      }


      }

  document.getElementById('searchresult').innerHTML = s;  
}

function showsearchnangcao(){
  if(document.getElementById('loaisanpham').style.display=="inline-block"&&document.getElementById('priceform').style.display=="inline-block"&&document.getElementById('priceto').style.display=="inline-block"&&document.getElementById('khoangcachsearch').style.display=="inline-block"&&document.getElementById('searchnangcao').style.display=="block"){
    document.getElementById('loaisanpham').style.display="none";
    document.getElementById('priceform').style.display="none";
    document.getElementById('priceto').style.display="none";
    document.getElementById('khoangcachsearch').style.display="none";
    document.getElementById('searchnangcao').style.display="none";
    // document.getElementById('timkiem1').style.display="none";
    document.getElementById('timkiem').style.display="block";
    document.getElementById('timkiem').value = "";
    document.getElementById('searchresult').innerHTML = "";
    document.getElementById('timkiem').disabled = false;  
  }
  else{
    document.getElementById('timkiem').value = "";
    document.getElementById('searchresult').innerHTML = "";
    document.getElementById('timkiem').disabled = false; 
    document.getElementById('loaisanpham').value = "all";
    document.getElementById('priceform').value = "";
    document.getElementById('priceto').value = "";
    // document.getElementById('timkiem').style.display="none";
    // document.getElementById('timkiem1').style.display="inline-block";
    document.getElementById('loaisanpham').style.display="inline-block";
    document.getElementById('priceform').style.display="inline-block";
    document.getElementById('priceto').style.display="inline-block";
    document.getElementById('khoangcachsearch').style.display="inline-block";
    document.getElementById('searchnangcao').style.display="block"; 
  }
}


