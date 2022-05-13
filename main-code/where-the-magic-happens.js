//where the true magic happens
var draw = function() {
    strokeWeight(1);
    stroke(0, 0, 0);
    background(120, 194, 255);
    frameRate(30);
     if (mouseIsPressed && mouseX > cookieHitboxX1 && mouseX < cookieHitboxX2 && mouseY > cookieHitboxY1 && mouseY < cookieHitboxY2 && mouseButton === LEFT){ //detects when you click on the cookie's hitbox
        cookieSize = 75; // makes the cookie smaller
        //changing stuff with the chips
        chipRad = 65;
        chipX = 18;
        chipY = 26;
    } else {
        cookieSize = 135; //makes the cookie its normal size
        //setting stuff with the chips to normal
        chipRad = 120;
        chipX = 30;
        chipY = 35;
    }
    
    
    //buy icon
    fill(61, 155, 255);
    rect(buyX, buyY, 204, buyH);
    fill(255, 255, 255);
    
    //price text
    textFont(font1);
    text(cursorPrice + " Cookies", buyX + 15, buyY + 65);
    
    //title for the buy icon
    textFont(font1);
    text("Cursor", buyX + 31, buyY + 14.3);
    
    //cursor count text
    textSize(28);
    text(cursors, buyX + 9, buyY + 36);
    
    //calls the function to draw the cursor (see way earlier in the code)
    drawCrsr(550, 315, 255, 255, 255);
    
    fill(61, 155, 255);
    rect(buyX, buy2Y, 204, buyH);
    fill(255, 255, 255);
    
    //price text
    textFont(font1);
    text(gMaPrice + " Cookies", buyX + 15, buy2Y + 65);
    
    //title for the buy icon
    textFont(font1);
    text("Grandma", buyX + 31, buy2Y + 14.3);
    
    //cursor count text
    textSize(28);
    text(gMas, buyX + 9, buy2Y + 36);
    
    //calls the function to draw grandma 
    drawGMa(550, 380, 255, 0, 239);
    
    //shhhhhhhhhhh don't look or change, it's debug text
    fill(130, 193, 255);
    text(CrsrTime, 200, 200);
    
    //cookie count text
    fill(255, 255, 255);
    textFont(font2);
    textAlign(CENTER);
    text("Cookies: " + cookies, cookieX, 45);
    
    //nothing special
    textAlign(LEFT);
    
    //sets the framerate to the fps cap
    frameRate(fpsCap);
    
    //draws the cursors below the big cookie
    var crsrY2 = 417;
    for (var rep = 0; rep < cursors && rep < 5; rep++) {
        drawCrsr(cookieX, crsrY2, 255, 255, 255);
        crsrY2 += 75;
    }
    
    //the base of the cookie
    fill(173, 151, 26);
    ellipse(cookieX, cookieY, cookieSize, cookieSize);
    
    //sets the CpS
    CpS = ((round(cursors * crsrLvl) / 10) + gMas);
    
    //the chips in the cookie
    fill(135, 76, 10);
    ellipse(cookieX - chipX, cookieY - chipY, cookieSize - chipRad, cookieSize - chipRad);
    ellipse(cookieX, cookieY, cookieSize - (chipRad - 21), cookieSize - (chipRad - 21));
    ellipse(cookieX + chipX, cookieY - 25, cookieSize - (chipRad - 4.25), cookieSize - (chipRad - 4.25));
        
        
        
        
        //how cookies are gained
        mouseClicked = function(){
        if (mouseX > cookieHitboxX1 && mouseX < cookieHitboxX2 && mouseY > cookieHitboxY1 && mouseY < cookieHitboxY2 && mouseButton === LEFT){
            cookies += 1 * clickLvl;
            allTimeCookies += 1 * clickLvl;
        } else if(mouseX > cookieHitboxX1 && mouseX < cookieHitboxX2 && mouseY > cookieHitboxY1 && mouseY < cookieHitboxY2 && mouseButton === RIGHT && Achieved.nicetry === "false"){ //"Nice Try" Achieveement
                gameFunctions.inGameStuff.unlocknicetry();
        } else if(mouseX > cookieHitboxX1 && mouseX < cookieHitboxX2 && mouseY > cookieHitboxY1 && mouseY < cookieHitboxY2 && mouseButton === CENTER && Achieved.nicetry === "true" && Achieved.wontbudge === "false") { //"Won't Budge!" Achieveement
                gameFunctions.inGameStuff.unlockwontbudge();
            //how cursors are gained
            } else if (mouseX > buyHBX1 && mouseX < buyHBX2 && mouseY > buyHBY1 && mouseY < buyHBY2 && cookies >= cursorPrice){
                cursors += 1;
                cookies -= cursorPrice; //takes away cookies
                cursorPrice = 15 + (cursors * 2); //changes the price
                buildings += 1;
            } else if (mouseX > buy2HBX1 && mouseX < buy2HBX2 && mouseY > buy2HBY1 && mouseY < buy2HBY2 && cookies >= gMaPrice) {
                gMas += 1;
                cookies -= gMaPrice;
                gMaPrice = 100 + (gMas * 15);
                buildings += 1;
            }
        };
        
        
            //grandma timer
            if (gmaTime >= 1) {
                if (gMas >= 1) {
                    cookies += 1;
                    allTimeCookies += 1;
                }
                gmaTime = 0;
            } else {
                gmaTime += 0.04 * gMas;
            }
        
        
            //the timer for the cursor I worked so hard on (this is the main reason I'm making my own site)
            if (CrsrTime >= (10 / cursors)){
                if (cursors >= 1){
                    cookies += crsrLvl;
                    allTimeCookies += crsrLvl;
                }
                CrsrTime = 0;
            } else {
                CrsrTime += (1 / fpsCap);
            }
