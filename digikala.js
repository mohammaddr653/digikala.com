document.querySelector('div.headersearch form input').addEventListener('focus',searchColorChange);
function searchColorChange(){
    document.querySelector('div.headersearch div').style.backgroundColor="white";
    document.querySelector('div.headersearch form').style.boxShadow= '0px 0px 10px 1px #949494' ;
    document.querySelector('div.headersearch form div#results').style.display= "block";
    document.querySelector('div.headersearch form input').style.borderRadius = '10px 10px 0 0' ;

};
document.querySelector('div.headersearch form input').addEventListener('blur',searchColorChangeBack);
function searchColorChangeBack(){
    document.querySelector('div.headersearch div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.headersearch form').style.boxShadow= 'none' ;
    document.querySelector('div.headersearch form div#results').style.display= "none";
    document.querySelector('div.headersearch form input').style.borderRadius = '10px' ;
}
var borderBottom=document.getElementsByClassName("borderbottom")[0].style;
function borderBottom1(){
    borderBottom.right="49px"
    borderBottomAnim()
}
function borderBottom2(){
    borderBottom.right="160px"
    borderBottomAnim()
}
function borderBottom3(){
    borderBottom.right="265px"
    borderBottomAnim()
}
function borderBottom4(){
    borderBottom.right="375px"
    borderBottomAnim()
}
function borderBottom5(){
    borderBottom.right="485px"
    borderBottomAnim()
}
function borderBottom6(){
    borderBottom.right="600px"
    borderBottomAnim()
}
function borderBottom7(){
    borderBottom.right="710px"
    borderBottomAnim()
}
function borderBottomAnim(){
    // borderBottom.backgroundColor="red";
    borderBottom.visibility="visible"
    borderBottom.transform="scaleX(645%)";
    // borderBottom.transitionDuration=".4s";
}
function borderBottomclose(){
    borderBottom.transform="scaleX(1%)";
    borderBottom.visibility="hidden"
}
function showDigital(){
    document.querySelector('div#products').style.display="block"
    showDig()
}
function showDig(){
    document.querySelector('div#products ul li div.digital>div').style.display="block";
    document.querySelector('div.digital a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.digital a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.digital a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.digital a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showCar(){
    document.querySelector('div#products ul li div.car>div').style.display="block";
    document.querySelector('div.car a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.car a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.car a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.car a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showWea(){
    document.querySelector('div#products ul li div.wear>div').style.display="block";
    document.querySelector('div.wear a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.wear a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.wear a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.wear a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showToy(){
    document.querySelector('div#products ul li div.toy>div').style.display="block";
    document.querySelector('div.toy a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.toy a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.toy a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.toy a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showSup(){
    document.querySelector('div#products ul li div.super>div').style.display="block";
    document.querySelector('div.super a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.super a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.super a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.super a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showHea(){
    document.querySelector('div#products ul li div.health>div').style.display="block";
    document.querySelector('div.health a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.health a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.health a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.health a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showHom(){
    document.querySelector('div#products ul li div.home>div').style.display="block";
    document.querySelector('div.home a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.home a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.home a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.home a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showBoo(){
    document.querySelector('div#products ul li div.book>div').style.display="block";
    document.querySelector('div.book a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.book a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.book a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.book a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showSpo(){
    document.querySelector('div#products ul li div.sport>div').style.display="block";
    document.querySelector('div.sport a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.sport a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.sport a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.sport a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}
function showSou(){
    document.querySelector('div#products ul li div.souvenir>div').style.display="block";
    document.querySelector('div.souvenir a:nth-child(1) div').style.backgroundColor="#f0f0f1";
    document.querySelector('div.souvenir a:nth-child(1) div h2').style.color="rgb(255, 62, 62)";
    document.querySelector('div.souvenir a:nth-child(1) div').style.borderTop="1px #dbdbdb solid";
    document.querySelector('div.souvenir a:nth-child(1) div').style.borderBottom="1px #dbdbdb solid";
}

function closeProducts(){
    document.querySelector('div#products').style.display="none";
    closeThings();
}
function closeThings(){
    var display=document.querySelectorAll('div#products ul li div.things>div')
    for(var i=0 ; i < display.length ; i++){
        display[i].style.display="none";
    }
    var backgroundColor=document.querySelectorAll('div.things a:nth-child(1) div')
    for(var i=0 ; i < backgroundColor.length ; i++){
        backgroundColor[i].style.backgroundColor="rgb(252, 252, 252)";
    };
    var color = document.querySelectorAll('div.things a:nth-child(1) div h2')
    for(var i=0 ; i < color.length ; i++){
        color[i].style.color="rgb(71, 71, 71)";
    };
    var borderTop=document.querySelectorAll('div.things a:nth-child(1) div')
    for(var i=0 ; i < borderTop.length ; i++){
        borderTop[i].style.borderTop="1px rgb(252, 252, 252) solid";
    }
    var borderBottom=document.querySelectorAll('div.things a:nth-child(1) div') 
    for(var i=0 ; i < borderBottom.length ; i++){
        borderBottom[i].style.borderBottom="1px rgb(252, 252, 252) solid";
    }
}
var supContainer= document.getElementById('supermarketcontainer').style;
function showSuperMarket(){
    supContainer.display="block"
}
function closeSuperMarket(){
    supContainer.display="none"
}
var offContainer= document.getElementById('offcontainer').style;
function showOff(){
    offContainer.display="block"
}
function closeOff(){
    offContainer.display="none"
}
var DigiPlusContainer= document.getElementById('digipluscontainer').style;
function showDigiPlus(){
    DigiPlusContainer.display="block"
}
function closeDigiPlus(){
    DigiPlusContainer.display="none"
}
var DigiClubContainer= document.getElementById('digiclubcontainer').style;
function showDigiClub(){
    DigiClubContainer.display="block"
}
function closeDigiClub(){
    DigiClubContainer.display="none"
}
var DigiPayContainer= document.getElementById('digipaycontainer').style;
function showDigiPay(){
    DigiPayContainer.display="block"
}
function closeDigiPay(){
    DigiPayContainer.display="none"
}

d=setInterval(time,1000)
function time(){
    var Timer=new Date();
    document.getElementsByClassName("clubtimer")[0].innerHTML=Timer.toLocaleTimeString();
}
