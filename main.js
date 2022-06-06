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
	 img: "imgs/سورة الفاتحة.png",
	 singer: "1"
   },
   {
	 name: "سُورَةُ البَقَرَة",
	 path: "https://server8.mp3quran.net/afs/002.mp3",
	 img: "imgs/سورة البقرة.png",
	 singer: "2"
   },
   {
     name: "سُورَةُ آل عِمرَان",
     path: "https://server8.mp3quran.net/afs/003.mp3",
     img: "imgs/سورة ال عمران.png",
     singer: "3"
   },
   {
     name: "سُورَةُ النِّسَاء",
     path: "https://server8.mp3quran.net/afs/004.mp3",
     img: "imgs/سورة النساء.png",
     singer: "4"
   },
   {
     name: "سُورَةُ المَائدة",
     path: "https://server8.mp3quran.net/afs/005.mp3",
     img: "imgs/سورة المائدة.png",
     singer: "5"
   },
   {
	name: "سُورَةُ الأنعَام",
	path: "https://server8.mp3quran.net/afs/006.mp3",
	img: "imgs/سورة الانعام.png",
	singer: "6"
  },
  {
	name: "سُورَةُ الأعرَاف",
	path: "https://server8.mp3quran.net/afs/007.mp3",
	img: "imgs/سورة الاعراف.png",
	singer: "7"
  },
  {
	name: "سُورَةُ الأنفَال",
	path: "https://server8.mp3quran.net/afs/008.mp3",
	img: "imgs/سورة الانفال.png",
	singer: "8"
  },
  {
	name: "سُورَةُ التوبَة",
	path: "https://server8.mp3quran.net/afs/009.mp3",
	img: "imgs/سورة التوبة.png",
	singer: "9"
  },
  {
	name: "سُورَةُ يُونس",
	path: "https://server8.mp3quran.net/afs/010.mp3",
	img: "imgs/سورة يونس.png",
	singer: "10"
  },
  {
	name: "سُورَةُ هُود",
	path: "https://server8.mp3quran.net/afs/011.mp3",
	img: "imgs/سورة هود.png",
	singer: "11"
  },
  {
	name: "سُورَةُ يُوسُف",
	path: "https://server8.mp3quran.net/afs/012.mp3",
	img: "imgs/سورة يوسف.png",
	singer: "12"
  },
  {
	name: "سُورَةُ الرَّعْد",
	path: "https://server8.mp3quran.net/afs/013.mp3",
	img: "imgs/سورة الرعد.png",
	singer: "13"
  },
  {
	name: "سُورَةُ إبراهِيم",
	path: "https://server8.mp3quran.net/afs/014.mp3",
	img: "imgs/سورة ابراهيم.png",
	singer: "14"
  },
  {
	name: "سُورَةُ الحِجْر",
	path: "https://server8.mp3quran.net/afs/015.mp3",
	img: "imgs/سورة الحجر.png",
	singer: "15"
  },
  {
	name: "سُورَةُ النَّحْل",
	path: "https://server8.mp3quran.net/afs/016.mp3",
	img: "imgs/سورة النحل.png",
	singer: "16"
  },
  {
	name: "سُورَةُ الإسْرَاء",
	path: "https://server8.mp3quran.net/afs/017.mp3",
	img: "imgs/سورة الاسراء.png",
	singer: "17"
  },
  {
	name: "سُورَةُ الكهْف",
	path: "https://server8.mp3quran.net/afs/018.mp3",
	img: "imgs/سورة الكهف.png",
	singer: "18"
  },
  {
	name: "سُورَةُ مَريَم",
	path: "https://server8.mp3quran.net/afs/019.mp3",
	img: "imgs/سورة مريم.png",
	singer: "19"
  },
  {
	name: "سُورَةُ طه",
	path: "https://server8.mp3quran.net/afs/020.mp3",
	img: "imgs/سورة طه.png",
	singer: "20"
  },
  {
	name: "سُورَةُ الأنبيَاء",
	path: "https://server8.mp3quran.net/afs/021.mp3",
	img: "imgs/سورة الانبياء.png",
	singer: "21"
  },
    {
	name: "سُورَةُ الحَج",
	path: "https://server8.mp3quran.net/afs/022.mp3",
	img: "imgs/سورة الحج.png",
	singer: "22"
  },
  {
	name: "سُورَةُ المُؤمنون",
	path: "https://server8.mp3quran.net/afs/023.mp3",
	img: "imgs/سورة المؤمنون.png",
	singer: "23"
  },
  {
	name: "سُورَةُ النُّور",
	path: "https://server8.mp3quran.net/afs/024.mp3",
	img: "imgs/سورة النور.png",
	singer: "24"
  },
    {
	name: "سُورَةُ الفُرْقان",
	path: "https://server8.mp3quran.net/afs/025.mp3",
	img: "imgs/سورة الفرقان.png",
	singer: "25"
  },
  {
	name: "سُورَةُ الشُّعَرَاء",
	path: "https://server8.mp3quran.net/afs/026.mp3",
	img: "imgs/سورة الشعراء.png",
	singer: "26"
  },
  {
	name: "سُورَةُ النَّمْل",
	path: "https://server8.mp3quran.net/afs/027.mp3",
	img: "imgs/سورة النمل.png",
	singer: "27"
  },
  {
	name: "سُورَةُ القَصَص",
	path: "https://server8.mp3quran.net/afs/028.mp3",
	img: "imgs/سورة القصص.png",
	singer: "28"
  },
    {
	name: "سُورَةُ العَنكبوت",
	path: "https://server8.mp3quran.net/afs/029.mp3",
	img: "imgs/سورة العنكبوت.png",
	singer: "29"
  },
    {
	name: "سُورَةُ الرُّوم",
	path: "https://server8.mp3quran.net/afs/030.mp3",
	img: "imgs/سورة الروم.png",
	singer: "30"
  },
    {
	name: "سُورَةُ لقمَان",
	path: "https://server8.mp3quran.net/afs/031.mp3",
	img: "imgs/سورة لقمان.png",
	singer: "31"
  },
  {
	name: "سُورَةُ السَّجدَة",
	path: "https://server8.mp3quran.net/afs/032.mp3",
	img: "imgs/سورة السجدة.png",
	singer: "32"
  },
  {
	name: "سُورَةُ الأحزَاب",
	path: "https://server8.mp3quran.net/afs/033.mp3",
	img: "imgs/سورة الاحزاب.png",
	singer: "33"
  },
  {
	name: "سُورَةُ سَبَأ",
	path: "https://server8.mp3quran.net/afs/034.mp3",
	img: "imgs/سورة سبا.png",
	singer: "34"
  },
  {
	name: "سُورَةُ فَاطِر",
	path: "https://server8.mp3quran.net/afs/035.mp3",
	img: "imgs/سورة فاطر.png",
	singer: "35"
  },
  {
	name: "سُورَةُ يس",
	path: "https://server8.mp3quran.net/afs/036.mp3",
	img: "imgs/سورة يس.png",
	singer: "36"
  },
  {
	name: "سُورَةُ الصَّافات",
	path: "https://server8.mp3quran.net/afs/037.mp3",
	img: "imgs/سورة الصافات.png",
	singer: "37"
  },
  {
	name: "سُورَةُ ص",
	path: "https://server8.mp3quran.net/afs/038.mp3",
	img: "imgs/سورة ص.png",
	singer: "38"
  },
  {
	name: "سُورَةُ الزُّمَر",
	path: "https://server8.mp3quran.net/afs/039.mp3",
	img: "imgs/سورة الزمر.png",
	singer: "39"
  },
  {
	name: "سُورَةُ غَافِر",
	path: "https://server8.mp3quran.net/afs/040.mp3",
	img: "imgs/سورة غافر.png",
	singer: "40"
  },
  {
	name: "سُورَةُ فُصِّلَتْ",
	path: "https://server8.mp3quran.net/afs/041.mp3",
	img: "imgs/سورة فصلت.png",
	singer: "41"
  },
  {
	name: "سُورَةُ الشُّورَى",
	path: "https://server8.mp3quran.net/afs/042.mp3",
	img: "imgs/سورة الشوري.png",
	singer: "42"
  },
  {
	name: "سُورَةُ الزُّخْرُف",
	path: "https://server8.mp3quran.net/afs/043.mp3",
	img: "imgs/سورة الزخرف.png",
	singer: "43"
  },
  {
	name: "سُورَةُ الدُّخان",
	path: "https://server8.mp3quran.net/afs/044.mp3",
	img: "imgs/سورة الدخان.png",
	singer: "44"
  },
  {
	name: "سُورَةُ الجاثِية",
	path: "https://server8.mp3quran.net/afs/045.mp3",
	img: "imgs/سورة الجاثية.png",
	singer: "45"
  },
  {
	name: "سُورَةُ الأحقاف",
	path: "https://server8.mp3quran.net/afs/046.mp3",
	img: "imgs/سورة الاحقاف.png",
	singer: "46"
  },
  {
	name: "سُورَةُ مُحَمّد",
	path: "https://server8.mp3quran.net/afs/047.mp3",
	img: "imgs/سورة محمد.png",
	singer: "47"
  },
    {
	name: "سُورَةُ الفَتْح",
	path: "https://server8.mp3quran.net/afs/048.mp3",
	img: "imgs/سورة الفتح.png",
	singer: "48"
  },
  {
	name: "سُورَةُ الحُجُرات",
	path: "https://server8.mp3quran.net/afs/049.mp3",
	img: "imgs/سورة الحجرات.png",
	singer: "49"
  },
  {
	name: "سُورَةُ ق",
	path: "https://server8.mp3quran.net/afs/050.mp3",
	img: "imgs/سورة ق.png",
	singer: "50"
  },
  {
	name: "سُورَةُ الذَّاريَات",
	path: "https://server8.mp3quran.net/afs/051.mp3",
	img: "imgs/سورة الذاريات.png",
	singer: "51"
  },
  {
	name: "سُورَةُ الطُّور	",
	path: "https://server8.mp3quran.net/afs/052.mp3",
	img: "imgs/سورة الطور.png",
	singer: "52"
  },
  {
	name: "سُورَةُ النَّجْم",
	path: "https://server8.mp3quran.net/afs/053.mp3",
	img: "imgs/سورة النجم.png",
	singer: "53"
  },
  {
	name: "سُورَةُ القَمَر",
	path: "https://server8.mp3quran.net/afs/054.mp3",
	img: "imgs/سورة القمر.png",
	singer: "54"
  },
  {
	name: "سُورَةُ الرَّحمن",
	path: "https://server8.mp3quran.net/afs/055.mp3",
	img: "imgs/سورة الرحمن.png",
	singer: "55"
  },
  {
	name: "سُورَةُ الواقِعَة",
	path: "https://server8.mp3quran.net/afs/056.mp3",
	img: "imgs/سورة الواقعة.png",
	singer: "56"
  },
  {
	name: "سُورَةُ الحَديد",
	path: "https://server8.mp3quran.net/afs/057.mp3",
	img: "imgs/سورة الحديد.png",
	singer: "57"
  },
  {
	name: "سُورَةُ المُجادَلة",
	path: "https://server8.mp3quran.net/afs/058.mp3",
	img: "imgs/سورة المجادلة.png",
	singer: "58"
  },
  {
	name: "سُورَةُ الحَشْر",
	path: "https://server8.mp3quran.net/afs/059.mp3",
	img: "imgs/سورة الحشر.png",
	singer: "59"
  },
  {
	name: "سُورَةُ المُمتَحَنة",
	path: "https://server8.mp3quran.net/afs/060.mp3",
	img: "imgs/سورة الممتحنة.png",
	singer: "60"
  },
  {
	name: "سُورَةُ الصَّف",
	path: "https://server8.mp3quran.net/afs/061.mp3",
	img: "imgs/سورة الصف.png",
	singer: "61"
  },
  {
	name: "سُورَةُ الجُّمُعة",
	path: "https://server8.mp3quran.net/afs/062.mp3",
	img: "https://media.discordapp.net/attachments/681368572345188424/983302873913892904/images_10.jpeg",
	singer: "62"
  },
  {
	name: "سُورَةُ المُنافِقُون",
	path: "https://server8.mp3quran.net/afs/063.mp3",
	img: "",
	singer: "63"
  },
  {
	name: "سُورَةُ التَّغابُن",
	path: "https://server8.mp3quran.net/afs/064.mp3",
	img: "",
	singer: "64"
  },
    {
	name: "سُورَةُ الطَّلاق",
	path: "https://server8.mp3quran.net/afs/065.mp3",
	img: "",
	singer: "65"
  },
  {
	name: "سُورَةُ التَّحْريم",
	path: "https://server8.mp3quran.net/afs/066.mp3",
	img: "",
	singer: "66"
  },
  {
	name: "سُورَةُ المُلْك",
	path: "https://server8.mp3quran.net/afs/067.mp3",
	img: "",
	singer: "67"
  },
  {
	name: "سُورَةُ القَلـََم",
	path: "https://server8.mp3quran.net/afs/068.mp3",
	img: "",
	singer: "68"
  },
  {
	name: "سُورَةُ الحَاقّـَة",
	path: "https://server8.mp3quran.net/afs/069.mp3",
	img: "",
	singer: "69"
  },
  {
	name: "سُورَةُ المَعارِج",
	path: "https://server8.mp3quran.net/afs/070.mp3",
	img: "",
	singer: "70"
  },
  {
	name: "سُورَةُ نُوح",
	path: "https://server8.mp3quran.net/afs/071.mp3",
	img: "",
	singer: "71"
  },
  {
	name: "سُورَةُ الجِنّ",
	path: "https://server8.mp3quran.net/afs/072.mp3",
	img: "",
	singer: "72"
  },
  {
	name: "سُورَةُ المُزَّمّـِل",
	path: "https://server8.mp3quran.net/afs/073.mp3",
	img: "",
	singer: "73"
  },
  {
	name: "سُورَةُ المُدَّثــِّر",
	path: "https://server8.mp3quran.net/afs/074.mp3",
	img: "",
	singer: "74"
  }, 
  {
	name: "سُورَةُ القِيامَة",
	path: "https://server8.mp3quran.net/afs/075.mp3",
	img: "",
	singer: "75"
  },
  {
	name: "سُورَةُ الإنسان",
	path: "https://server8.mp3quran.net/afs/076.mp3",
	img: "",
	singer: "76"
  },
  {
	name: "سُورَةُ المُرسَلات",
	path: "https://server8.mp3quran.net/afs/077.mp3",
	img: "",
	singer: "77"
  },
  {
	name: "سُورَةُ النـَّبأ",
	path: "https://server8.mp3quran.net/afs/078.mp3",
	img: "",
	singer: "78"
  },
  {
	name: "سُورَةُ النـّازِعات",
	path: "https://server8.mp3quran.net/afs/079.mp3",
	img: "",
	singer: "79"
  },
  {
	name: "سُورَةُ عَبَس",
	path: "https://server8.mp3quran.net/afs/080.mp3",
	img: "",
	singer: "80"
  },
  {
	name: "سُورَةُ التـَّكْوير",
	path: "https://server8.mp3quran.net/afs/081.mp3",
	img: "",
	singer: "81"
  },
  {
	name: "سُورَةُ الإنفِطار",
	path: "https://server8.mp3quran.net/afs/082.mp3",
	img: "",
	singer: "82"
  },
  {
	name: "سُورَةُ المُطـَفِّفين",
	path: "https://server8.mp3quran.net/afs/083.mp3",
	img: "",
	singer: "83"
  },
  {
	name: "سُورَةُ الإنشِقاق",
	path: "https://server8.mp3quran.net/afs/084.mp3",
	img: "",
	singer: "84"
  },
  {
	name: "سُورَةُ البُروج",
	path: "https://server8.mp3quran.net/afs/085.mp3",
	img: "",
	singer: "85"
  },
  {
	name: "سُورَةُ الطّارق",
	path: "https://server8.mp3quran.net/afs/086.mp3",
	img: "",
	singer: "86"
  },
  {
	name: "سُورَةُ الأعلی",
	path: "https://server8.mp3quran.net/afs/087.mp3",
	img: "",
	singer: "87"
  },
  {
	name: "سُورَةُ الغاشِيَة",
	path: "https://server8.mp3quran.net/afs/088.mp3",
	img: "",
	singer: "88"
  },
  {
	name: "سُورَةُ الفَجْر",
	path: "https://server8.mp3quran.net/afs/089.mp3",
	img: "",
	singer: "89"
  },
  {
	name: "سُورَةُ البَـلـَد",
	path: "https://server8.mp3quran.net/afs/090.mp3",
	img: "",
	singer: "90"
  },
  {
	name: "سُورَةُ الشــَّمْس",
	path: "https://server8.mp3quran.net/afs/091.mp3",
	img: "",
	singer: "91"
  },
  {
	name: "سُورَةُ اللـَّيل",
	path: "https://server8.mp3quran.net/afs/092.mp3",
	img: "",
	singer: "92"
  },
  {
	name: "سُورَةُ الضُّحی",
	path: "https://server8.mp3quran.net/afs/093.mp3",
	img: "",
	singer: "93"
  },
  {
	name: "سُورَةُ الشَّرْح",
	path: "https://server8.mp3quran.net/afs/094.mp3",
	img: "",
	singer: "94"
  },
  {
	name: "سُورَةُ التـِّين",
	path: "https://server8.mp3quran.net/afs/095.mp3",
	img: "",
	singer: "95"
  },
  {
	name: "سُورَةُ العَلـَق",
	path: "https://server8.mp3quran.net/afs/096.mp3",
	img: "",
	singer: "96"
  },
  {
	name: "سُورَةُ القـَدر",
	path: "https://server8.mp3quran.net/afs/097.mp3",
	img: "",
	singer: "97"
  },
  {
	name: "سُورَةُ البَيِّنَة",
	path: "https://server8.mp3quran.net/afs/098.mp3",
	img: "",
	singer: "98"
  },
  {
	name: "سُورَةُ الزلزَلة",
	path: "https://server8.mp3quran.net/afs/099.mp3",
	img: "",
	singer: "99"
  },
  {
	name: "سُورَةُ العَادِيات",
	path: "https://server8.mp3quran.net/afs/100.mp3",
	img: "",
	singer: "100"
  },
  {
	name: "سُورَةُ القارِعَة",
	path: "https://server8.mp3quran.net/afs/101.mp3",
	img: "",
	singer: "101"
  },
  {
	name: "سُورَةُ التَكاثـُر",
	path: "https://server8.mp3quran.net/afs/102.mp3",
	img: "",
	singer: "102"
  },
  {
	name: "سُورَةُ العَصْر",
	path: "https://server8.mp3quran.net/afs/103.mp3",
	img: "",
	singer: "103"
  },
  {
	name: "سُورَةُ الهُمَزَة",
	path: "https://server8.mp3quran.net/afs/104.mp3",
	img: "",
	singer: "104"
  },
  {
	name: "سُورَةُ الفِيل",
	path: "https://server8.mp3quran.net/afs/105.mp3",
	img: "",
	singer: "105"
  },
  {
	name: "سُورَةُ قـُرَيْش",
	path: "https://server8.mp3quran.net/afs/106.mp3",
	img: "",
	singer: "106"
  },
  {
	name: "سُورَةُ المَاعُون",
	path: "https://server8.mp3quran.net/afs/107.mp3",
	img: "",
	singer: "107"
  },
  {
	name: "سُورَةُ الكَوْثَر",
	path: "https://server8.mp3quran.net/afs/108.mp3",
	img: "",
	singer: "108"
  },
  {
	name: "سُورَةُ الكَافِرُون",
	path: "https://server8.mp3quran.net/afs/109.mp3",
	img: "",
	singer: "109"
  },
  {
	name: "سُورَةُ النـَّصر",
	path: "https://server8.mp3quran.net/afs/110.mp3",
	img: "",
	singer: "110"
  },
  {
	name: "سُورَةُ المَسَد",
	path: "https://server8.mp3quran.net/afs/111.mp3",
	img: "",
	singer: "111"
  },
  {
	name: "سُورَةُ الإخْلَاص",
	path: "https://server8.mp3quran.net/afs/112.mp3",
	img: "",
	singer: "112"
  },
  {
	name: "سُورَةُ الفَلَق",
	path: "https://server8.mp3quran.net/afs/113.mp3",
	img: "",
	singer: "113"
  },
  {
	name: "سُورَةُ النَّاس",
	path: "https://server8.mp3quran.net/afs/114.mp3",
	img: "",
	singer: "114"
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
