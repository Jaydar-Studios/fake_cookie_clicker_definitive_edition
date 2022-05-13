//cookie click upgrade icon code
            //the box around the upgrade's icon
            fill(117, 61, 6);
            stroke(26, 18, 0);
            strokeWeight(4);
            rect(clickX - 25, clickY, 53, 101);
            
            //the upgrade's actual icon
            strokeWeight(1);
            stroke(0, 0, 0);
            fill(44, 232, 242);
            rect(clickX - 10, clickY + 55, 25, 35);
            triangle(clickX - 10, clickY + 10, clickX - 10, clickY + 68, clickX + 16, clickY + 58);
            
            if (mouseX >= clickUpHBX1 && mouseX <= clickUpHBX2 - 15 && mouseY >= clickUpHBY1 && mouseY <= clickUpHBY2) {
                //info about the upgrade
                fill(117, 61, 6);
                stroke(26, 18, 0);
                strokeWeight(4);
                rect(clickX - 27, clickY - 96, 75, 93);
                fill(255, 255, 255);
                text("Clicking upgrade", clickX - 25, clickY - 88);
                text("Clicking upgrade", clickX - 25, clickY - 88);
                text("This makes click\n-ing the cookie\n2X as effective.", clickX - 25, clickY - 72.5);
                text(clickUpPrice + "\ncookies to buy", clickX - 25, clickY - 23.3);
                
                
                    if (cookies >= clickUpPrice && mouseIsPressed) {
                        clickLvl *= 2;
                        cookies -= clickUpPrice;
                        clickUpPrice *= 10;
                    
                    }
            }
            
            if (cursors >= 1) {
            
                //the box around the cursor upgrade icon
                fill(117, 61, 6);
                stroke(26, 18, 0);
                strokeWeight(4);
                rect(crsrUpX - 10, clickY, 84, 101);
            
                //the cursor upgrade icon
                drawCrsr(crsrUpX + 30, clickY + 55, 44, 232, 242);
                if (mouseX >= crsrUpHBX1 && mouseX <= crsrUpHBX2 && mouseY >= crsrUpHBY1 && mouseY <= crsrUpHBY2) {
                    //info about the upgrade
                    fill(117, 61, 6);
                    stroke(26, 18, 0);
                    strokeWeight(4);
                    rect(crsrUpX - 10, clickY - 96, 84, 93);
                    fill(255, 255, 255);
                    text("Cursor upgrade", crsrUpX - 10, clickY - 88);
                    text("Cursor upgrade", crsrUpX - 10, clickY - 88);
                    text("This makes \ncursors 2X \nas effective.", crsrUpX - 10, clickY - 72.5);
                    text(crsrUpPrice + "\ncookies to buy", crsrUpX - 10, clickY - 23.3);
                    if (cookies >= crsrUpPrice && mouseIsPressed) {
                        crsrLvl *= 2;
                        cookies -= crsrUpPrice;
                        crsrUpPrice *= 10;
                        
                    }
                }
            }
