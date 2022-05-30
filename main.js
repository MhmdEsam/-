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
	 name: "سورة الفاتحة",
	 path: "https://quran.islamway.net/quran3/4873/17440/128/001.mp3",
	 img: "imgs/الفاتحة.png",
	 singer: "1"
   },
   {
	 name: "سورة البقرة",
	 path: "https://quran.islamway.net/quran3/4873/17440/128/002.mp3",
	 img: "imgs/البقرة.png",
	 singer: "2"
   },
   {
     name: "سورة الانسان",
     path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/076.mp3",
     img: "imgs/الانسان.png",
     singer: "3"
   },
   {
     name: "سورة الجن",
     path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/072.mp3",
     img: "imgs/الجن.png",
     singer: "4"
   },
   {
     name: "سورة التغابن",
     path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/064.mp3",
     img: "imgs/التغابن.png",
     singer: "5"
   },
   {
	name: "سورة الرعد",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/013.mp3",
	img: "imgs/الرعد.png",
	singer: "6"
  },
  {
	name: "سورة الاسراء",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/017.mp3",
	img: "imgs/الاسراء.png",
	singer: "7"
  },
  {
	name: "سورة الشعراء",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/026.mp3",
	img: "imgs/الشعراء.png",
	singer: "8"
  },
  {
	name: "سورة لقمان",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/031.mp3",
	img: "imgs/لقمان.png",
	singer: "9"
  },
  {
	name: "سورة السجدة",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/032.mp3",
	img: "imgs/السجدة.png",
	singer: "10"
  },
  {
	name: "سورة فصلت",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/041.mp3",
	img: "imgs/فصلت.png",
	singer: "11"
  },
  {
	name: "سورة الشوري",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/042.mp3",
	img: "imgs/الشوري.png",
	singer: "12"
  },
  {
	name: "سورة الدخان",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/044.mp3",
	img: "imgs/الدخان.png",
	singer: "13"
  },
  {
	name: "سورة ق",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/050.mp3",
	img: "imgs/ق.png",
	singer: "14"
  },
  {
	name: "سورة النجم",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/053.mp3",
	img: "imgs/النجم.png",
	singer: "15"
  },
  {
	name: "سورة القمر",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/054.mp3",
	img: "imgs/القمر.png",
	singer: "16"
  },
  {
	name: "اسورة الغاشية",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/088ء.mp3",
	img: "imgs/الغاشية.png",
	singer: "17"
  },
  {
	name: "سورة الكهف",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/018.mp3",
	img: "imgs/الكهف.png",
	singer: "18"
  },
  {
	name: "سورة المعارج",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/070.mp3",
	img: "imgs/المعارج.png",
	singer: "19"
  },
  {
	name: "سورة القلم",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/068.mp3",
	img: "imgs/القلم.png",
	singer: "20"
  },
  {
	name: "سورة الملك",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/067.mp3",
	img: "imgs/الملك.png",
	singer: "21"
  },
  {
	name: "سورة التحريم",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/066.mp3",
	img: "imgs/التحريم.png",
	singer: "22"
  },
  {
	name: "سورة الحشر",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/059.mp3",
	img: "imgs/الحشر.png",
	singer: "23"
  },
  {
	name: "سورة الواقعة",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/056.mp3",
	img: "imgs/الواقعة.png",
	singer: "24"
  },
  {
	name: "سورة الرحمن",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/055.mp3",
	img: "imgs/الرحمن.png",
	singer: "25"
  },
  {
	name: "سورة البروج",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/085.mp3",
	img: "imgs/البروج.png",
	singer: "26"
  },
  {
	name: "سورة النازعات",
	path: "https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/079.mp3",
	img: "imgs/النازعات.png",
	singer: "27"
  },
  {
	name: "سورة يوسف",
	path: "https://quran.islamway.net/quran3/4873/17440/128/012.mp3",
	img: "imgs/يوسف.png",
	singer: "28"
  },
  {
	name: "سورة ابراهيم",
	path: "https://quran.islamway.net/quran3/4873/17440/128/014.mp3",
	img: "imgs/ابراهيم.png",
	singer: "29"
  },
  {
	name: "سورة الحجر",
	path: "https://quran.islamway.net/quran3/4873/17440/128/015.mp3",
	img: "imgs/الحجر.png",
	singer: "30"
  },
  {
	name: "سورة مريم",
	path: "https://quran.islamway.net/quran3/4873/17440/128/019.mp3",
	img: "imgs/مريم.png",
	singer: "31"
  },
  {
	name: "سورة النمل",
	path: "https://quran.islamway.net/quran3/4873/17440/128/027.mp3",
	img: "imgs/النمل.png",
	singer: "32"
  },
  {
	name: "سورة سبا",
	path: "https://quran.islamway.net/quran3/4873/17440/128/034.mp3",
	img: "imgs/سبا.png",
	singer: "33"
  },
  {
	name: "سورة فاطر",
	path: "https://quran.islamway.net/quran3/4873/17440/128/035.mp3",
	img: "imgs/فاطر.png",
	singer: "34"
  },
  {
	name: "سورة يس",
	path: "https://quran.islamway.net/quran3/4873/17440/128/036.mp3",
	img: "imgs/يس.png",
	singer: "35"
  },
  {
	name: "سورة الاحقاف",
	path: "https://quran.islamway.net/quran3/4873/17440/128/046.mp3",
	img: "imgs/الاحقاف.png",
	singer: "36"
  },
  {
	name: "سورة الذاريات",
	path: "https://quran.islamway.net/quran3/4873/17440/128/051.mp3",
	img: "imgs/الذاريات.png",
	singer: "37"
  },
  {
	name: "سورة المجادلة",
	path: "https://quran.islamway.net/quran3/4873/17440/128/058.mp3",
	img: "imgs/المجادلة.png",
	singer: "38"
  },
  {
	name: "سورة الصف",
	path: "https://quran.islamway.net/quran3/4873/17440/128/061.mp3",
	img: "imgs/الصف.png",
	singer: "39"
  },
  {
	name: "سورة المنافقون",
	path: "https://quran.islamway.net/quran3/4873/17440/128/063.mp3",
	img: "imgs/المنافقون.png",
	singer: "40"
  },
  {
	name: "سورة المزمل",
	path: "https://quran.islamway.net/quran3/4873/17440/128/073.mp3",
	img: "imgs/المزمل.png",
	singer: "41"
  },
  {
	name: "سورة القيامة",
	path: "https://quran.islamway.net/quran3/4873/17440/128/075.mp3",
	img: "imgs/القيامة.png",
	singer: "42"
  },
  {
	name: "سورة النبا",
	path: "https://quran.islamway.net/quran3/4873/17440/128/078.mp3",
	img: "imgs/النبا.png",
	singer: "43"
  },
  {
	name: "سورة عبس",
	path: "https://quran.islamway.net/quran3/4873/17440/128/080.mp3",
	img: "imgs/عبس.png",
	singer: "44"
  },
  {
	name: "سورة التكوير",
	path: "https://quran.islamway.net/quran3/4873/17440/128/081.mp3",
	img: "imgs/التكوير.png",
	singer: "45"
  },
  {
	name: "سورة الانفطار",
	path: "https://quran.islamway.net/quran3/4873/17440/128/082.mp3",
	img: "imgs/الانفطار.png",
	singer: "46"
  },
  {
	name: "سورة المطففين",
	path: "https://quran.islamway.net/quran3/4873/17440/128/083.mp3",
	img: "imgs/المطففين.png",
	singer: "47"
  },
  {
	name: "سورة الانشقاق",
	path: "https://quran.islamway.net/quran3/4873/17440/128/084.mp3",
	img: "imgs/الانشقاق.png",
	singer: "48"
  },
  {
	name: "سورة الطارق",
	path: "https://quran.islamway.net/quran3/4873/17440/128/086.mp3",
	img: "imgs/الطارق.png",
	singer: "49"
  },
  {
	name: "سورة الاعلي",
	path: "https://quran.islamway.net/quran3/4873/17440/128/087.mp3",
	img: "imgs/الاعلي.png",
	singer: "50"
  },
  {
	name: "سورة الفجر",
	path: "https://quran.islamway.net/quran3/4873/17440/128/089.mp3",
	img: "imgs/الفجر.png",
	singer: "51"
  },
  {
	name: "سورة البلد",
	path: "https://quran.islamway.net/quran3/4873/17440/128/090.mp3",
	img: "imgs/البلد.png",
	singer: "52"
  },
  {
	name: "سورة الشمس",
	path: "https://quran.islamway.net/quran3/4873/17440/128/091.mp3",
	img: "imgs/الشمس.png",
	singer: "53"
  },
  {
	name: "سورة الليل",
	path: "https://quran.islamway.net/quran3/4873/17440/128/092.mp3",
	img: "imgs/الليل.png",
	singer: "54"
  },
  {
	name: "سورة الضحي",
	path: "https://quran.islamway.net/quran3/4873/17440/128/093.mp3",
	img: "imgs/الضحي.png",
	singer: "55"
  },
  {
	name: "سورة الشرح",
	path: "https://quran.islamway.net/quran3/4873/17440/128/094.mp3",
	img: "imgs/الشرح.png",
	singer: "56"
  },
  {
	name: "سورة التين",
	path: "https://quran.islamway.net/quran3/4873/17440/128/095.mp3",
	img: "imgs/التين.png",
	singer: "57"
  },
  {
	name: "سورة العلق",
	path: "https://quran.islamway.net/quran3/4873/17440/128/096.mp3",
	img: "imgs/العلق.png",
	singer: "58"
  },
  {
	name: "سورة البينة",
	path: "https://quran.islamway.net/quran3/4873/17440/128/098.mp3",
	img: "imgs/البينة.png",
	singer: "59"
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