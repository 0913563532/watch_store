window.onload=function(){
	showThongtinKhachHang(0);
}
function showThongtinKhachHang(index){
	if(localStorage.getItem('user')===null){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	var idkh = "";
	var hotenkh = "";
	var userkh = "";
	var phonekh = "";
	var tinhtrangkh = "";
	var chucnangkh = "";

	if (index < 0) {
		index = 0;
	}

	var sizeUser = 5;
	var totalPage = Math.ceil(userArray.length / sizeUser);
	var start = sizeUser*index;
	var end = start + sizeUser;
	if (end > userArray.length) {
		end = userArray.length;
	}

	for(var i = start; i<end;i++){
		idkh = idkh + '<div><h1>'+i+'</h1></div>';
		hotenkh = hotenkh + '<div><h5>'+userArray[i].hoten+'</h5></div>';
		userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
		phonekh = phonekh + '<div><h5>'+userArray[i].phone+'</h5></div>';
		tinhtrangkh = tinhtrangkh + '<div><h5>'+userArray[i].quyen+'</h5></div>';
		chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="editUser('+i+')">'+"Sửa"+'</button>'
		if(userArray[i].quyen!="admin"){
		chucnangkh = chucnangkh + '<button onclick="deleteUser('+i+')">'+"Xóa"+'</button>';}
		chucnangkh = chucnangkh +'</div>';
	}
	var pagingHtml = '';
	for (var i = 0; i < totalPage; i++) {
		var abc = i + 1;
		pagingHtml += '<div id="phantrangkh" onclick="nextPage('+ i +');">'+abc+'</div>'
	}
	document.getElementById('phantrangkh').innerHTML=pagingHtml;
	document.getElementById('idkh').innerHTML=idkh;
	document.getElementById('hotenkh').innerHTML=hotenkh;
	document.getElementById('userkh').innerHTML=userkh;
	document.getElementById('phonekh').innerHTML=phonekh;
	document.getElementById('tinhtrangkh').innerHTML=tinhtrangkh;
	document.getElementById('chucnangkh').innerHTML=chucnangkh;
}
function nextPage(index){
	showThongtinKhachHang(index);
}
function TatForm(){
	document.getElementById('formsua').style.display='none';
	document.getElementById('bgden').style.display='none';
}
function deleteUser(id){
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(i==id)
			if(confirm('Bạn có muốn xóa tài khoản này?'))
				userArray.splice(i, 1);
	}
	localStorage.setItem('user',JSON.stringify(userArray));
	showThongtinKhachHang(0)
}

function editUser(id){
	document.getElementById('formsua').style.display='block';
	document.getElementById('bgden').style.display='block';
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(i==id) {
			document.getElementById("hoten").value = userArray[i].hoten;
			document.getElementById("usr").value = userArray[i].username;
			document.getElementById("phone").value = userArray[i].phone;
			document.getElementById("dc").value = userArray[i].address;
			document.getElementById("quyen").value = userArray[i].quyen;
			localStorage.setItem('editId',id);
			break;
		}
	}
}

function saveUser(){
	var userLocal = localStorage.getItem("user");
	var editId = localStorage.getItem("editId");
	var userArray = JSON.parse(userLocal);
	var hoten = document.getElementById('hoten').value;
	var tendn = document.getElementById('usr').value;
	var sdt = document.getElementById('phone').value;
	var dc = document.getElementById('dc').value;
	var quyen = document.getElementById("quyen").value;
	for(var i=0;i<userArray.length;i++){
		if(i==editId){
			userArray[i].hoten=hoten;
			userArray[i].username=tendn;
			userArray[i].phone=sdt;
			userArray[i].address=dc;
			userArray[i].quyen = quyen;
			break;
		}
	}
	localStorage.setItem('user',JSON.stringify(userArray));
	localStorage.setItem('editId',0);
	showThongtinKhachHang(0)
	var i = 0;
	if(userArray[i].quyen = 'admin'){
		if(confirm('Bạn có muốn thay đổi quyền tài khoản này?'))
			userArray.splice(i, 1);
	}
	TatForm();
}

function closeAccount(){
	if(document.getElementById('log-out').style.display == 'none'){
		document.getElementById('log-out').style.display = 'block';
	}else{
		document.getElementById('log-out').style.display = 'none';
	}
}