// JavaScript Document
//--------------- :: PreLoad Images :: ---------------//
this.addEventListener("DOMContentLoaded", preloadImages, true);
var loadedImages = 0;
var imageArray = new Array("Regranex_spritesheet.png");

function preloadImages(e) {
  for (var i = 0; i < imageArray.length; i++) {
    var tempImage = new Image();
    tempImage.addEventListener("load", trackProgress, true);
    tempImage.src = imageArray[i];
  }
}

function trackProgress() {
  loadedImages++;
  if (loadedImages == imageArray.length) {
    imagesLoaded();
  }
}

//--------------- :: Set up variables :: ---------------//
var btnCTA;
var piExit;
var FDA_ISI_Exit;
var PI_ISI_Exit;
var medGuide_ISI_Exit;
var companySite_ISI_Exit;

//--------------- :: Initialize :: ---------------//
init_standard = function() {

  document.getElementById("logo_brand_standard").style.backgroundImage = "url(Regranex_spritesheet.png)";
  document.getElementById("company_logo_standard").style.backgroundImage = "url(Regranex_spritesheet.png)";
  document.getElementById("btn_cta_standard_text_carrot").style.backgroundImage = "url(Regranex_spritesheet.png)";
  document.getElementById("foot").style.backgroundImage = "url(Regranex_spritesheet.png)";
  document.getElementById("wound_halftone").style.backgroundImage = "url(Regranex_spritesheet.png)";
  document.getElementById("scn5_graphic").style.backgroundImage = "url(Regranex_spritesheet.png)";
  document.getElementsByClassName("wound")[0].style.backgroundImage = "url(Regranex_spritesheet.png)";
  document.getElementsByClassName("wound")[1].style.backgroundImage = "url(Regranex_spritesheet.png)";
  document.getElementsByClassName("wound")[2].style.backgroundImage = "url(Regranex_spritesheet.png)";
  // Add other images here -->

  btnCTA = document.getElementById('btn_exit');
  piExit = document.getElementById('isi_PI_standard');
  FDA_ISI_Exit = document.getElementById('isi_body_link_FDA');
  PI_ISI_Exit = document.getElementById('isi_body_link_PI');
  medGuide_ISI_Exit = document.getElementById('isi_body_link_medGuide');
  companySite_ISI_Exit = document.getElementById('isi_body_link_site');
  //piScrollExit = document.getElementById('isi_hyperlink');
  addListeners_standard();
  tl_main.play();
};

//--------------- :: Interactivity :: ---------------//
addListeners_standard = function() {
  btnCTA.addEventListener('click', ctaExitHandler, false);
  piExit.addEventListener('click', piExitHandler, false);
  // PI_ISI_Exit.addEventListener('click', piExitHandler, false);
  // medGuide_ISI_Exit.addEventListener('click', medGuideExitHandler, false);
  companySite_ISI_Exit.addEventListener('click', companyExitHandler, false);
};
ctaExitHandler = function(e) {
  //Call Exits
  console.log("clickTag1");
  Enabler.exit('clickTag1');
  // http://regranex.com/mechanism-of-actionhttp://regranex.com/mechanism-of-action
  turnOffTimeline();
};
piExitHandler = function(e) {
  //Call Exits
  console.log("clickTag2");
  Enabler.exit('clickTag2');
  //https://regranex.com/pdf/PI_Full_Version.pdf
  turnOffTimeline();
};
FDAExitHandler = function(e) {
  //Call Exits
  console.log("clickTag3");
  Enabler.exit('clickTag3');
  //https://www.fda.gov/Safety/MedWatch/default.htm
  turnOffTimeline();
};
medGuideExitHandler = function(e) {
  //Call Exits
  console.log("clickTag4");
  Enabler.exit('clickTag4');
  //https://regranex.com/pdf/PI_Full_Version.pdf
  turnOffTimeline();
};
companyExitHandler = function(e) {
  //Call Exits
  console.log("clickTag5");
  Enabler.exit('clickTag5');
  //http://www.smith-nephew.com/
  turnOffTimeline();
};
//--------------- :: Loop Animation + counter :: ---------------//

var loopInt_standard = 0; // This variable tracks how many times the ad has played
var currSecond = 0; // This variable tracks seconds

loopAnimation = function() {
  loopInt_standard++;
  if (loopInt_standard == 1) {
    tl1_isi.play();
  }
  if (loopInt_standard < 3) {
    tl_main.play('start_animation');
    currSecond = 0;
  }
};

function runCounter() {
  currSecond++;
  //console.log(Math.round(currSecond/60)); // turn off after QA. consider removing onUpdate event
}
var splitText_Frame1 = new SplitText("#scn1_text", {type:"words"});
var splitText_Frame2 = new SplitText("#scn2_text", {type:"words"});
var splitText_Frame3 = new SplitText("#scn3_text", {type:"words"});
var splitText_Frame4 = new SplitText("#scn4_text", {type:"words"});
var splitText_Frame5 = new SplitText("#scn5_text", {type:"words"});

//--------------- :: ISI Animations :: ---------------//
var tl1_isi = new TimelineLite({paused:true});
tl1_isi
	.to('#isi_scroll', 120, {scrollTo:{y:"max"}, ease:Linear.easeNone})
	.to('#isi_scroll', 2, {scrollTo:{y:0}, ease: Power4.easeInOut},'+=1')
;

//--------------- :: SCENE Animations :: ---------------//
var tl_main = new TimelineLite({onUpdate:runCounter,paused:true});
tl_main
	.add('load_ad')
	//.set([container_standard], {opacity:0})
	.to('#container_standard', 0.5, {autoAlpha:1})
	.add('start_animation')
	.staggerFrom(splitText_Frame1.words, 0.5, {autoAlpha: 0}, 0.2, 0.5)

  .to([scn1_text, scn1_wound], 0.5, {autoAlpha:0}, 2.75)
  .to("#wound_halftone", 0.1,{autoAlpha:0.6},3)
	.from('#scn2_wound', 0.5, {autoAlpha:0},3)
	.staggerFrom(splitText_Frame2.words, 0.5, {autoAlpha: 0}, 0.2, 3)

  .to([scn2_text, scn2_wound], 0.5, {autoAlpha:0},5)
  .to("#wound_halftone", 0.1,{autoAlpha:0.3},5)
	.from('#scn3_wound', 0.5, {autoAlpha:0},5)
	.staggerFrom(splitText_Frame3.words, 0.5, {autoAlpha: 0}, 0.2, 5)

  .to([scn3_text, scn3_wound], 0.5, {autoAlpha:0},7)
	.staggerFrom(splitText_Frame4.words, 0.5, {autoAlpha: 0}, 0.2, 7)
  .to("#wound_halftone", 0.1,{autoAlpha:0},7)

	.to('#scn4_text', 0.5, {autoAlpha:0},10)
	.to('#foot', 0.5, {autoAlpha: 0}, 10)
	.from('#scn5_graphic', 1, {autoAlpha:0},10)
	.staggerFrom(splitText_Frame5.words, 0.9, {autoAlpha: 0}, 0.05, 10)
	.from('#btn_cta_standard', 0.5, {autoAlpha:0},10)
  //.fromTo("#wound_halftone", 9,{autoAlpha:1},{autoAlpha:0, ease: Power1.easeIn}, 0.5)
	.add('stopLastFrame')
  // loop
	.add( function(){ console.log('loopAnimation = '+loopInt_standard);}, 15)
  .add( function(){ loopAnimation();})
	.add( function(){ console.log('Banner Completed');})
;
//--------------- :: Stop All Animation :: ---------------//
turnOffTimeline = function () {
	TweenLite.set('#isi_scroll', {scrollTo:{y:0}});
	tl_main.pause('stopLastFrame');
};

//--------------- :: Preloader function :: ---------------//
function imagesLoaded() {
  // do something
  init_standard();
}
