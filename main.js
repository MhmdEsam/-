let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
	 name: "سُورَةُ الفَاتِحَة",
	 path: "https://server8.mp3quran.net/afs/001.mp3",
	 img: "imgspng/1.png",
	 singer: "صوت الشيخ مشاري العفاسي"
   },
   {
	 name: "سُورَةُ البَقَرَة",
	 path: "https://server8.mp3quran.net/afs/002.mp3",
	 img: "imgspng/2.png",
	 singer: "صوت الشيخ مشاري العفاسي"
   },
   {
     name: "سُورَةُ آل عِمرَان",
     path: "https://server8.mp3quran.net/afs/003.mp3",
	 img: "imgspng/3.png",
     singer: "صوت الشيخ مشاري العفاسي"
   },
   {
     name: "سُورَةُ النِّسَاء",
     path: "https://server8.mp3quran.net/afs/004.mp3",
	 img: "imgspng/4.png",
     singer: "صوت الشيخ مشاري العفاسي"
   },
   {
     name: "سُورَةُ المَائدة",
     path: "https://server8.mp3quran.net/afs/005.mp3",
	 img: "imgspng/5.png",
     singer: "صوت الشيخ مشاري العفاسي"
   },
   {
	name: "سُورَةُ الأنعَام",
	path: "https://server8.mp3quran.net/afs/006.mp3",
	img: "imgspng/6.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الأعرَاف",
	path: "https://server8.mp3quran.net/afs/007.mp3",
	img: "imgspng/7.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الأنفَال",
	path: "https://server8.mp3quran.net/afs/008.mp3",
	img: "imgspng/8.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ التوبَة",
	path: "https://server8.mp3quran.net/afs/009.mp3",
	img: "imgspng/9.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ يُونس",
	path: "https://server8.mp3quran.net/afs/010.mp3",
	img: "imgspng/10.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ هُود",
	path: "https://server8.mp3quran.net/afs/011.mp3",
	img: "imgspng/11.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ يُوسُف",
	path: "https://server8.mp3quran.net/afs/012.mp3",
	img: "imgspng/12.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الرَّعْد",
	path: "https://server8.mp3quran.net/afs/013.mp3",
	img: "imgspng/13.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ إبراهِيم",
	path: "https://server8.mp3quran.net/afs/014.mp3",
	img: "imgspng/14.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الحِجْر",
	path: "https://server8.mp3quran.net/afs/015.mp3",
	img: "imgspng/15.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ النَّحْل",
	path: "https://server8.mp3quran.net/afs/016.mp3",
	img: "imgspng/16.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الإسْرَاء",
	path: "https://server8.mp3quran.net/afs/017.mp3",
	img: "imgspng/17.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الكهْف",
	path: "https://server8.mp3quran.net/afs/018.mp3",
	img: "imgspng/18.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ مَريَم",
	path: "https://server8.mp3quran.net/afs/019.mp3",
	img: "imgspng/19.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ طه",
	path: "https://server8.mp3quran.net/afs/020.mp3",
	img: "imgspng/20.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الأنبيَاء",
	path: "https://server8.mp3quran.net/afs/021.mp3",
	img: "imgspng/21.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
    {
	name: "سُورَةُ الحَج",
	path: "https://server8.mp3quran.net/afs/022.mp3",
	img: "imgspng/22.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُؤمنون",
	path: "https://server8.mp3quran.net/afs/023.mp3",
	img: "imgspng/23.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ النُّور",
	path: "https://server8.mp3quran.net/afs/024.mp3",
	img: "imgspng/24.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
    {
	name: "سُورَةُ الفُرْقان",
	path: "https://server8.mp3quran.net/afs/025.mp3",
	img: "imgspng/25.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الشُّعَرَاء",
	path: "https://server8.mp3quran.net/afs/026.mp3",
	img: "imgspng/26.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ النَّمْل",
	path: "https://server8.mp3quran.net/afs/027.mp3",
	img: "imgspng/27.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ القَصَص",
	path: "https://server8.mp3quran.net/afs/028.mp3",
	img: "imgspng/28.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
    {
	name: "سُورَةُ العَنكبوت",
	path: "https://server8.mp3quran.net/afs/029.mp3",
	img: "imgspng/29.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
    {
	name: "سُورَةُ الرُّوم",
	path: "https://server8.mp3quran.net/afs/030.mp3",
	img: "imgspng/30.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
    {
	name: "سُورَةُ لقمَان",
	path: "https://server8.mp3quran.net/afs/031.mp3",
	img: "imgspng/31.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ السَّجدَة",
	path: "https://server8.mp3quran.net/afs/032.mp3",
	img: "imgspng/32.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الأحزَاب",
	path: "https://server8.mp3quran.net/afs/033.mp3",
	img: "imgspng/33.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ سَبَأ",
	path: "https://server8.mp3quran.net/afs/034.mp3",
	img: "imgspng/34.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ فَاطِر",
	path: "https://server8.mp3quran.net/afs/035.mp3",
	img: "imgspng/35.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ يس",
	path: "https://server8.mp3quran.net/afs/036.mp3",
	img: "imgspng/36.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الصَّافات",
	path: "https://server8.mp3quran.net/afs/037.mp3",
	img: "imgspng/37.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ ص",
	path: "https://server8.mp3quran.net/afs/038.mp3",
	img: "imgspng/38.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الزُّمَر",
	path: "https://server8.mp3quran.net/afs/039.mp3",
	img: "imgspng/39.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ غَافِر",
	path: "https://server8.mp3quran.net/afs/040.mp3",
	img: "imgspng/40.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ فُصِّلَتْ",
	path: "https://server8.mp3quran.net/afs/041.mp3",
	img: "imgspng/41.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الشُّورَى",
	path: "https://server8.mp3quran.net/afs/042.mp3",
	img: "imgspng/42.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الزُّخْرُف",
	path: "https://server8.mp3quran.net/afs/043.mp3",
	img: "imgspng/43.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الدُّخان",
	path: "https://server8.mp3quran.net/afs/044.mp3",
	img: "imgspng/44.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الجاثِية",
	path: "https://server8.mp3quran.net/afs/045.mp3",
	img: "imgspng/45.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الأحقاف",
	path: "https://server8.mp3quran.net/afs/046.mp3",
	img: "imgspng/46.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ مُحَمّد",
	path: "https://server8.mp3quran.net/afs/047.mp3",
	img: "imgspng/47.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
    {
	name: "سُورَةُ الفَتْح",
	path: "https://server8.mp3quran.net/afs/048.mp3",
	img: "imgspng/48.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الحُجُرات",
	path: "https://server8.mp3quran.net/afs/049.mp3",
	img: "imgspng/49.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ ق",
	path: "https://server8.mp3quran.net/afs/050.mp3",
	img: "imgspng/50.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الذَّاريَات",
	path: "https://server8.mp3quran.net/afs/051.mp3",
	img: "imgspng/51.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الطُّور	",
	path: "https://server8.mp3quran.net/afs/052.mp3",
	img: "imgspng/52.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ النَّجْم",
	path: "https://server8.mp3quran.net/afs/053.mp3",
	img: "imgspng/53.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ القَمَر",
	path: "https://server8.mp3quran.net/afs/054.mp3",
	img: "imgspng/54.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الرَّحمن",
	path: "https://server8.mp3quran.net/afs/055.mp3",
	img: "imgspng/55.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الواقِعَة",
	path: "https://server8.mp3quran.net/afs/056.mp3",
	img: "imgspng/56.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الحَديد",
	path: "https://server8.mp3quran.net/afs/057.mp3",
	img: "imgspng/57.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُجادَلة",
	path: "https://server8.mp3quran.net/afs/058.mp3",
	img: "imgspng/58.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الحَشْر",
	path: "https://server8.mp3quran.net/afs/059.mp3",
	img: "imgspng/59.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُمتَحَنة",
	path: "https://server8.mp3quran.net/afs/060.mp3",
	img: "imgspng/60.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الصَّف",
	path: "https://server8.mp3quran.net/afs/061.mp3",
	img: "imgspng/61.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الجُّمُعة",
	path: "https://server8.mp3quran.net/afs/062.mp3",
	img: "imgspng/62.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُنافِقُون",
	path: "https://server8.mp3quran.net/afs/063.mp3",
	img: "imgspng/63.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ التَّغابُن",
	path: "https://server8.mp3quran.net/afs/064.mp3",
	img: "imgspng/64.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
    {
	name: "سُورَةُ الطَّلاق",
	path: "https://server8.mp3quran.net/afs/065.mp3",
	img: "imgspng/65.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ التَّحْريم",
	path: "https://server8.mp3quran.net/afs/066.mp3",
	img: "imgspng/66.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُلْك",
	path: "https://server8.mp3quran.net/afs/067.mp3",
	img: "imgspng/67.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ القَلـََم",
	path: "https://server8.mp3quran.net/afs/068.mp3",
	img: "imgspng/68.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الحَاقّـَة",
	path: "https://server8.mp3quran.net/afs/069.mp3",
	img: "imgspng/69.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المَعارِج",
	path: "https://server8.mp3quran.net/afs/070.mp3",
	img: "imgspng/70.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ نُوح",
	path: "https://server8.mp3quran.net/afs/071.mp3",
	img: "imgspng/71.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الجِنّ",
	path: "https://server8.mp3quran.net/afs/072.mp3",
	img: "imgspng/72.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُزَّمّـِل",
	path: "https://server8.mp3quran.net/afs/073.mp3",
	img: "imgspng/73.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُدَّثــِّر",
	path: "https://server8.mp3quran.net/afs/074.mp3",
	img: "imgspng/74.png",
	singer: "صوت الشيخ مشاري العفاسي"
  }, 
  {
	name: "سُورَةُ القِيامَة",
	path: "https://server8.mp3quran.net/afs/075.mp3",
	img: "imgspng/75.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الإنسان",
	path: "https://server8.mp3quran.net/afs/076.mp3",
	img: "imgspng/76.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُرسَلات",
	path: "https://server8.mp3quran.net/afs/077.mp3",
	img: "imgspng/77.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ النـَّبأ",
	path: "https://server8.mp3quran.net/afs/078.mp3",
	img: "imgspng/78.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ النـّازِعات",
	path: "https://server8.mp3quran.net/afs/079.mp3",
	img: "imgspng/79.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ عَبَس",
	path: "https://server8.mp3quran.net/afs/080.mp3",
	img: "imgspng/80.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ التـَّكْوير",
	path: "https://server8.mp3quran.net/afs/081.mp3",
	img: "imgspng/81.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الإنفِطار",
	path: "https://server8.mp3quran.net/afs/082.mp3",
	img: "imgspng/82.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المُطـَفِّفين",
	path: "https://server8.mp3quran.net/afs/083.mp3",
	img: "imgspng/83.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الإنشِقاق",
	path: "https://server8.mp3quran.net/afs/084.mp3",
	img: "imgspng/84.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ البُروج",
	path: "https://server8.mp3quran.net/afs/085.mp3",
	img: "imgspng/85.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الطّارق",
	path: "https://server8.mp3quran.net/afs/086.mp3",
	img: "imgspng/86.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الأعلی",
	path: "https://server8.mp3quran.net/afs/087.mp3",
	img: "imgspng/87.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الغاشِيَة",
	path: "https://server8.mp3quran.net/afs/088.mp3",
	img: "imgspng/88.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الفَجْر",
	path: "https://server8.mp3quran.net/afs/089.mp3",
	img: "imgspng/89.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ البَـلـَد",
	path: "https://server8.mp3quran.net/afs/090.mp3",
	img: "imgspng/90.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الشــَّمْس",
	path: "https://server8.mp3quran.net/afs/091.mp3",
	img: "imgspng/91.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ اللـَّيل",
	path: "https://server8.mp3quran.net/afs/092.mp3",
	img: "imgspng/92.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الضُّحی",
	path: "https://server8.mp3quran.net/afs/093.mp3",
	img: "imgspng/93.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الشَّرْح",
	path: "https://server8.mp3quran.net/afs/094.mp3",
	img: "imgspng/94.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ التـِّين",
	path: "https://server8.mp3quran.net/afs/095.mp3",
	img: "imgspng/95.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ العَلـَق",
	path: "https://server8.mp3quran.net/afs/096.mp3",
	img: "imgspng/96.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ القـَدر",
	path: "https://server8.mp3quran.net/afs/097.mp3",
	img: "imgspng/97.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ البَيِّنَة",
	path: "https://server8.mp3quran.net/afs/098.mp3",
	img: "imgspng/98.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الزلزَلة",
	path: "https://server8.mp3quran.net/afs/099.mp3",
	img: "imgspng/99.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ العَادِيات",
	path: "https://server8.mp3quran.net/afs/100.mp3",
	img: "imgspng/100.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ القارِعَة",
	path: "https://server8.mp3quran.net/afs/101.mp3",
	img: "imgspng/101.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ التَكاثـُر",
	path: "https://server8.mp3quran.net/afs/102.mp3",
	img: "imgspng/102.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ العَصْر",
	path: "https://server8.mp3quran.net/afs/103.mp3",
	img: "imgspng/103.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الهُمَزَة",
	path: "https://server8.mp3quran.net/afs/104.mp3",
	img: "imgspng/104.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الفِيل",
	path: "https://server8.mp3quran.net/afs/105.mp3",
	img: "imgspng/105.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ قـُرَيْش",
	path: "https://server8.mp3quran.net/afs/106.mp3",
	img: "imgspng/106.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المَاعُون",
	path: "https://server8.mp3quran.net/afs/107.mp3",
	img: "imgspng/107.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الكَوْثَر",
	path: "https://server8.mp3quran.net/afs/108.mp3",
	img: "imgspng/108.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الكَافِرُون",
	path: "https://server8.mp3quran.net/afs/109.mp3",
	img: "imgspng/109.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ النـَّصر",
	path: "https://server8.mp3quran.net/afs/110.mp3",
	img: "imgspng/110.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ المَسَد",
	path: "https://server8.mp3quran.net/afs/111.mp3",
	img: "imgspng/111.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الإخْلَاص",
	path: "https://server8.mp3quran.net/afs/112.mp3",
	img: "imgspng/112.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ الفَلَق",
	path: "https://server8.mp3quran.net/afs/113.mp3",
	img: "imgspng/113.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  {
	name: "سُورَةُ النَّاس",
	path: "https://server8.mp3quran.net/afs/114.mp3",
	img: "imgspng/114.png",
	singer: "صوت الشيخ مشاري العفاسي"
  },
  
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}




// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
