//enough boring stuff, here comes the code:

//this sets the fps cap to 30 (like in OG cookie clicker)
var fpsCap = 30;

//variables for the cookie's location
var cookieSize = 135;
var cookieX = 70;
var cookieY = 300;
    
    //variables for the cookie's (currently slightly janky) hitbox
    var cookieHitboxX1 = cookieX - 45;
    var cookieHitboxX2 = cookieHitboxX1 + cookieSize;
    var cookieHitboxY1 = cookieY - (cookieSize / 2);
    var cookieHitboxY2 = cookieY + (cookieSize / 2);
    
    //cookie count setup
    var cookies = 0;
    
    //all time cookies setup
    var allTimeCookies = 0;
    
    //cookies per second setup
    var CpS = 0;
    
    //variables for the chips
    var chipX = 30;
    var chipY = 35;
    var chipRad = 120;

//variables for the building buy icon
var buyX = 395;
var buyY = 265;
var buyW = 205;
var buyH = 75;

//variables for the cursor
var cursors = 0;
var cursorPrice = 15 + (cursors * 2);

//variables for the building buy icon's hitbox
var buyHBX1 = buyX;
var buyHBX2 = buyHBX1 + buyW;
var buyHBY1 = buyY;
var buyHBY2 = buyHBY1 + buyH;

//buy things font
var font1 = createFont("monospace", 18);

//cookie count font
var font2 = createFont("sans-serif", 10);

//this function draws the cursor
var drawCrsr = function(crsrX, crsrY, crsrHue1, crsrHue2, crsrHue3) {
    strokeWeight(1);
    fill(crsrHue1, crsrHue2, crsrHue3);
    //base of the cursor
    ellipse(crsrX, crsrY, 72, 45); 
    //the fingers (YES I KNOW THERE'S ONLY 4 FINGERS I'M JUST TOO LAZY TO ADD ANOTHER)
    rect((crsrX + 13) - 45, (crsrY + 48) - (45 * 2), 20, 32);
    rect((crsrX + 33) - 45, (crsrY + 39) - (45 * 2), 20, 32);
    rect((crsrX + 51) - 45, (crsrY + 45) - (45 * 2), 20, 32);
    rect((crsrX + 65) - 45, (crsrY + 53) - (45 * 2), 20, 32);
};

//Timer for the cursor
var CrsrTime = 0;

//grandma stuff

//pos
var buy2Y = buyY + 75;

//price
var gMaPrice = 100;

//# owned
var gMas = 0;

//draw grandma
var drawGMa = function(gMaX, gMaY, gMaH1, gMaH2, gMaH3) {
    fill(gMaH1, gMaH2, gMaH3);
    ellipse(gMaX, gMaY, 65, 65);
    fill(191, 242, 239);
    ellipse(gMaX - 13, gMaY - 11.5, 15, 15);
    ellipse(gMaX + 13, gMaY - 11.5, 15, 15);
    fill(0, 0, 0);
    arc(gMaX, gMaY - 10, 15, 0, 0, 180);
};

//hitboxes
var buy2HBX1 = buyX;
var buy2HBX2 = buyX + buyW;
var buy2HBY1 = buy2Y;
var buy2HBY2 = buy2Y + buyH;

var gmaTime = 0;


//Tracks the upgrade level of clicking the cookie
var clickLvl = 1;

//tracks the price of the click upgrade
var clickUpPrice = 100;

//Tracks the pos of the click upgrade's triangle
var clickX = 424;
var clickY = 97;

//tracks the upgrade level of the cursor
var crsrLvl = 1;

//variables for the click upgrade's hitbox
var clickUpHBX1 = clickX - 25;
var clickUpHBX2 = clickUpHBX1 + 72;
var clickUpHBY1 = clickY - 10;
var clickUpHBY2 = clickUpHBY1 + 101;

//tracks the price of the cursor uprade
var crsrUpPrice = 250;

//tracks the x pos of the cursor upgrade
var crsrUpX = clickX + 51;

//variables for the cursor upgrade hitbox
var crsrUpHBX1 = crsrUpX;
var crsrUpHBX2 = crsrUpHBX1 + 84;
var crsrUpHBY1 = clickY;
var crsrUpHBY2 = crsrUpHBY1 + 101;

//tracks the upgrade level of the grandma
var gmaLvl = 1;

var gmaUpX = clickX - 25;
var gmaUpY = clickY + 420;

//grandma upgrade hitbox
var gmaUpHBX1 = gmaUpX;
var gmaUpHBX2 = gmaUpHBX1 + 79;
var gmaUpHBY1 = gmaUpY;
var gmaUpHBY2 = gmaUpHBY1 + 81;

var gmaUpPrice = 500;


//Building count
var buildings = 0;

//Achievement handling (part 1)

//array that displays Achievements on the stats screen, as names and requirements are added to the array.
var Achieves = [];

//an object that stores Achievements. I abbreviated the names in the code, but I'll use comments to display the achievement's actual name for you fellow nosy nerds. (You're welcome, by the way!)
var Achieved = {
    consPrize: "false", // This is for "Consolation Prize"
    bakeginner: "false", // This is for "Bakeginner"
    overnine: "false", // This is for "It's over NINE!"
    approach: "false", // This is for "Oh? You're approaching my cookies?"
    rollDough: "false", // This is for "Rolling In The DOUGH"
    toFeed: "false", // This is for "Enough To Feed A Highschool"
    fixIt: "false", // This is for "Can We Fix It?"
    squeakSqueak: "false", // This is for "Squeak, Squeak"
    muchClick: "false",
    okBoomer: "false", // This is for "Ok Boomer"
    famBuis: "false",
    nicetry: "false", // This is for "Nice Try"
    wontbudge: "false", // This is for "Won't Budge"
    rotDough: "false"
};



//This one is full of cheats and other misc. functions for screwing around.
var gameFunctions = {
    inGameStuff: {
        Rot_The_Dough: function(ruinTxt) {
            if (Achieved.rotDough === "false") {
                Achieved.rotDough = "true";
                var sndPly = function() {
                    var snd2 = getSound("retro/coin");
                    snd2.audio.volume = 1;
                    snd2.audio.preservesPitch = false;
                    snd2.audio.playbackRate = 0.5;
                    playSound(snd2);
                };
                sndPly();
                Achieves.push("\nRotten Dough (Shadow Achievement)");
            }
            if (ruinTxt === true) {
                println("Great job, you frickin idiot. You ruined any and all fun you could've had.\nFor your dastardly deeds, take this special Shadow Achievement as a badge that will \nwarn everyone to stay away from you. \nSorry, I got off on a tangent there. I'm just saying, you're missing out. \nAnyways, I gotta go. Once again, sorry for the tangent. Keep on clicking, and enjoy this stupid game! - Jaydar");
            }
        },
        //this just plays the SFX for Achievements
        playChiev: function() {
            var snd = getSound("retro/coin");
            snd.audio.volume = 0.095;
            snd.audio.playbackRate = 1;
            playSound(snd);
        },
        
        //This unlocks "Nice Try!"
        unlocknicetry: function() {
            Achieved.nicetry = "true";
            Achieves.push("\nNice Try (Right-click the cookie)");
            gameFunctions.inGameStuff.playChiev();
        },
        
        //This function unlocks "Won't Budge!"
        unlockwontbudge: function() {
            Achieved.wontbudge = "true";
            Achieves.push("\nWon't budge! (Middle-click the cookie after right-clicki\n-ng it)");
            gameFunctions.inGameStuff.playChiev();
        }
    },
    properCheats: {
        Spill_The_Milk: function() {
            cursors += 500000000;
            gMas += 50000000;
            cookies = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
            gameFunctions.inGameStuff.Rot_The_Dough(true);
            allTimeCookies = cookies;
        }
    },
    
    other: {
        Blast_To_The_Past: function() {
            Program.restart();
        }
    }
};
