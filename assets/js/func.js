const toIdn = function(date){
	let returnDate = [];
	returnDate['tahun'] = date.getFullYear();
	returnDate['nomorbulan'] = date.getMonth();
	returnDate['tanggal'] = date.getDate();
	returnDate['nomorhari'] = date.getDay();
	returnDate['jam'] = date.getHours();
	returnDate['menit'] = date.getMinutes();
	returnDate['detik'] = date.getSeconds();
	
	let daysNameIndonesia = [
		"Minggu",
		"Senin",
		"Selasa",
		"Rabu",
		"Kamis",
		"Jum'at",
		"Sabtu"
	];
	
	returnDate['hari'] = daysNameIndonesia[returnDate['nomorhari']];
	
	let monthsNameIndonesia = [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember"
	];
	
	returnDate['bulan'] = monthsNameIndonesia[returnDate['nomorbulan']];
	
	return returnDate;
}

function ymdDate(theDate){
  theDate.toISOString().split('T')[0];
  const offset = theDate.getTimezoneOffset();
  theDate = new Date(theDate.getTime() - (offset*60*1000));
  return theDate.toISOString().split('T')[0];
}