function currency(num) {

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') ;
}
function thongke(){
	var tr='';
	var total=0;
	var sl=0;
	var sp = document.getElementById('thongke-sp').value;
	var nam = document.getElementById('thongke-nam').value;
	var thang = document.getElementById('thongke-thang').value;
	console.log(nam);
	console.log(thang);
	if(localStorage.getItem('bill')==null){
		tr+='<div class="showthongke"><span>Sản phẩm</span><span>Số Lượng</span><span>Tổng Tiền</span><br>'
	if(nam==="Năm 2020" && thang ==="Tháng 12"){
	tr+='<div id="sanpham">'+sp+'</div><div id="soluong">'+parseInt(sl)+'</div><div id="tongtien">'+currency(total)+' VNĐ</div>'
}
	else{
		tr+='<div class="">Chưa Có Thông Tin</div>'
	}
	document.getElementById('showthongke').innerHTML=tr;
	}
	else{
	var bill = JSON.parse(localStorage.getItem('bill'));
	for(var i=0 ; i<bill.length ; i++){
		if(bill[i].status=="Đã xử lý" && sp==="Tất Cả Sản Phẩm" ){
			total+=bill[i].totalprice;
			sl+=parseInt(bill[i].casio)+parseInt(bill[i].movado)+parseInt(bill[i].seiko)+parseInt(bill[i].longines)+parseInt(bill[i].omega)+parseInt(bill[i].citizen)+parseInt(bill[i].rolex)+parseInt(bill[i].tissot);
		}
		if(bill[i].status=="Đã xử lý" && sp=="KUBBA" ){
			total+=bill[i].prcasio;
			sl+=parseInt(bill[i].casio);
			console.log(sl);
		}
		if(bill[i].status=="Đã xử lý" && sp=="MOVADO"){
			total+=bill[i].prmovado;
			sl+=parseInt(bill[i].movado);
		}
		if(bill[i].status=="Đã xử lý" && sp=="LONGINES"){
			total+=bill[i].prlongines;
			sl+=parseInt(bill[i].longines);
		}
		if(bill[i].status=="Đã xử lý" && sp=="OMEGA"){
			total+=bill[i].promega;
			sl+=parseInt(bill[i].omega);
		}
		if(bill[i].status=="Đã xử lý" && sp=="CITIZEN"){
			total+=bill[i].prcitizen;
			sl+=parseInt(bill[i].citizen);
		}
		if(bill[i].status=="Đã xử lý" && sp=="ROLEX"){
			total+=bill[i].prrolex;
			sl+=parseInt(bill[i].rolex);
		}
		if(bill[i].status=="Đã xử lý" && sp=="TISSOT" ){
			total+=bill[i].prtissot;
			sl+=parseInt(bill[i].tissot);
		}
		if(bill[i].status=="Đã xử lý" && sp=="SEIKO" ){
			total+=bill[i].prseiko;
			sl+=parseInt(bill[i].seiko);
		}
	}
	tr+='<div class="showthongke"><span>Sản phẩm</span><span>Số Lượng</span><span>Tổng Tiền</span><br>'
	if(nam==="Năm 2020" && thang ==="Tháng 12"){
	tr+='<div id="sanpham">'+sp+'</div><div id="soluong">'+parseInt(sl)+'</div><div id="tongtien">'+currency(total)+' VNĐ</div>'
}
	else{
		tr+='<div style="margin-top:50px;margin-left:400px;font-size:30px">Chưa Có Thông Tin</div>'
	}
	tr+='</div>'
	document.getElementById('showthongke').innerHTML=tr;
}
}
function thongke1(){
	if(localStorage.getItem('bill')===null){
      return false}
      else{
      	var tongdon = 0;
      	var total=0;
      	var bill = JSON.parse(localStorage.getItem('bill'));
      	tongdon=bill.length;
      	var don = 0;
      	for(var i=0 ; i<bill.length ; i++){
      		if(bill[i].status=="Đã xử lý"){
      			don++;
      			total += bill[i].totalprice;
      		}
      	}
      	document.getElementById('total').innerHTML=''+currency(total)+' VNĐ'
      	document.getElementById('tongsodonhang').innerHTML='<i class="fas fa-check-circle" style="margin-right:72% "></i>'+don+'/'+tongdon+''
      }
}