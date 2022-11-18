const prompt = require("prompt-sync")();

console.log ('PERHITUNGAN NILAI MAHASISWA');
console.log('==========================================');
var inputAbsensi = prompt('Nilai Absensi : ');
var inputTugas = prompt('Nilai Tugas : ');
var inputUts = prompt('Nilai UTS : ');
var inputUas = prompt('Nilai UAS : ');

var absensi = Number(inputAbsensi);
var tugas = Number(inputTugas);
var uts = Number(inputUts);
var uas = Number(inputUas);
var PerhitunganNilai = validasi(PerhitunganNilai);

function validasi(PerhitunganNilai) {
    console.log('==========================================');

    function hitungAbsensi(absensi) {
      return ((absensi / 14) * 0.1) * 100;
    }

    function hitungTugas(tugas) {
      return tugas * 0.2;
    }

    function hitungUts(uts) {
      return uts * 0.3;
    }

    function hitungUas(uas) {
      return uas * 0.4;
    }

    var nilaiAbsensi = Number(hitungAbsensi(absensi).toFixed(2));
    var nilaiTugas = Number(hitungTugas(tugas).toFixed(2));
    var nilaiUts = Number(hitungUts(uts).toFixed(2));
    var nilaiUas = Number(hitungUas(uas).toFixed(2));

    function hitungTotal() {
      return nilaiAbsensi + nilaiTugas + nilaiUts + nilaiUas;
    }


    var nilaiTotal = hitungTotal();

    function grade() {

      if (nilaiTotal >= 80 && nilaiTotal <= 100) {
        hasil = 'A';
      } else if (nilaiTotal >= 60 && nilaiTotal < 80) {
        hasil = 'B';
      } else if (nilaiTotal >= 40 && nilaiTotal < 60) {
        hasil = 'C';
      } else if (nilaiTotal >= 20 && nilaiTotal < 40) {
        hasil = 'D';
      } else {
        hasil = 'E';
      }
      return hasil;
    }

    var gradeAkhir = grade();
    var nilaiAkhir = [
      [PerhitunganNilai, nilaiAbsensi, nilaiTugas, nilaiUts, nilaiUas, nilaiTotal, gradeAkhir]
    ];

    function hasilAkhir(nilaiAkhir) {
      for (var i = 0; i < hasil.length; i++) {
        console.log('Absensi : '+absensi+' || Setelah Dikali 10% Nilai Absensi Menjadi: '+nilaiAkhir[i][1]);
        console.log('Tugas : '+tugas+' || Setelah Dikali 20% Nilai Tugas Menjadi: '+nilaiAkhir[i][2]);
        console.log('UTS : '+uts+' || Setelah Dikali 30% Nilai UTS Menjadi: '+nilaiAkhir[i][3]);
        console.log('UAS : '+uas+' || Setelah Dikali 40% Nilai UAS Menjadi: '+nilaiAkhir[i][4]);
        console.log('Total Nilai : '+nilaiAkhir[i][5]);
        console.log('Mendapatkan Grade : '+nilaiAkhir[i][6]);
      }
    }
    hasilAkhir(nilaiAkhir);
}








