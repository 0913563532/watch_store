function quydoi(x) {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
window.onload=function(){
	showThongtinHoaDon(0);
}
function showThongtinHoaDon(index){
	if(localStorage.getItem('bill')===null){
		return false;
	}
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var bill = "";
	var khachhang = "";
	var ngaydathang = "";
	var tongtien = "";
	var tinhtrang = "";
	var chitiet = "";

	if (index < 0) {
		index = 0;
	}

	var sizeBill = 8;
	var totalPage = Math.ceil(billArray.length / sizeBill);
	var start = sizeBill*index;
	var end = start + sizeBill;
	if (end > billArray.length) {
		end = billArray.length;
	}

	for(var i = start; i<end;i++){
		bill = bill + '<div><h6>'+billArray[i].id+'</h6></div>';
		khachhang= khachhang + '<div><h6>'+billArray[i].idkh+'</h6></div>';
		ngaydathang = ngaydathang + '<div><h4>'+billArray[i].date+'</h4></div>';
		tongtien = tongtien + '<div><h4>'+quydoi(billArray[i].totalprice)+'</h4></div>';
		if(billArray[i].status=='Chưa xử lý')
			tinhtrang = tinhtrang + '<div><h6 style="color: white">'+"Chưa xử lý"+'</h6></div>';
		else
			tinhtrang = tinhtrang + '<div><h6 style="color: ưhite">'+"Đã xử lý"+'</h6></div>';
		chitiet = chitiet + '<div class="chucnangbill"><h6><button style="width:115px;" onclick="showBill('+billArray[i].id+')">'+"Xem chi tiết"+'</button></h6></div>';
	}
	var pagingHtml = '';
	for (var j = 0; j < totalPage; j++) {
		var abc = i + 1;
		pagingHtml += '<div id="phantrangbill" onclick="nextPage('+ i +');">'+abc+'</div>'
	}
	document.getElementById('phantrangbill').innerHTML=pagingHtml;
	document.getElementById('idbill').innerHTML=bill;
	document.getElementById('idkhachhang').innerHTML=khachhang;
	document.getElementById('ngaydathang').innerHTML=ngaydathang;
	document.getElementById('tongtien').innerHTML=tongtien;
	document.getElementById('tinhtrangbill').innerHTML=tinhtrang;
	document.getElementById('chitietbill').innerHTML=chitiet;
}
function nextPage(index){
	showThongtinHoaDon(index);
}
function showBill(id){
	document.getElementById('bgden').style.display='block';
	document.getElementById('formchitiet').style.display="block";
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var userArray = JSON.parse(localStorage.getItem('user'));
	// var user = "";
	// var hoten = "";
	// var email = "";
	// var ngaysinh = "";
	// var hotennguoinhan = "";
	// var diachi = "";
	// var sdt = "";
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for(var i=0;i<billArray.length;i++){
		if(billArray[i].id==id){
			
			var a=billArray[i].userId;
			var b=quydoi(billArray[i].totalprice);
			document.getElementById('tensanpham').innerHTML = billArray[i].tensp;
			document.getElementById('hotennguoinhan').innerHTML = billArray[i].hoten;
			document.getElementById('diachinhan').innerHTML = billArray[i].diachi;
			document.getElementById('sodienthoainhan').innerHTML = billArray[i].sdt;
			document.getElementById('ngaydat').innerHTML = billArray[i].date;
			document.getElementById('totalprice').innerHTML = b;
			localStorage.setItem('editId',id);
			break;
		}
	}
//	for(var i=0;i<userArray.length;i++){
//		if(userArray[i].userId==a){
//			document.getElementById('user').innerHTML = userArray[i].username;
//			document.getElementById('hoten').innerHTML = userArray[i].fullname;
//			document.getElementById('email').innerHTML = userArray[i].email;
//			localStorage.setItem('editId',id);
//			break;
//		}
//	}
}
function changeTinhtrang(){
	var check=0;
	var editId = localStorage.getItem("editId");
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var tinhtrang=document.getElementById('tinhtrang').value;
	for(var i=0;i<billArray.length;i++){
		if(billArray[i].id==editId){
			
			billArray[i].status=tinhtrang;
			if(billArray[i].status=="Đã xử lý")
				{
					check+=1;
				}
			break;
		}
	}
	localStorage.setItem('bill',JSON.stringify(billArray));
	localStorage.setItem('editId',0);
	showThongtinHoaDon(0);
	document.getElementById('formchitiet').style.display="none";
	document.getElementById('bgden').style.display = 'none';
	
}
function closeAccount(){
	if(document.getElementById('log-out').style.display == 'none'){
		document.getElementById('log-out').style.display = 'block';
	}else{
		document.getElementById('log-out').style.display = 'none';
	}
}

function closeForm(){
	document.getElementById('formchitiet').style.display = 'none';
	document.getElementById('bgden').style.display = 'none';
}