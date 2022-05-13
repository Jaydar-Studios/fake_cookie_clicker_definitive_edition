            strokeWeight(3);
            var statX = 140;
            var statY = 1;
            fill(179, 118, 6);
            rect(statX, statY, 255, height - 1);
            fill(255, 255, 255);
            //title
            textSize(25);
            text("Stats", statX + 30, statY + 30);
            //actual stats text
            textSize(10);
            text(cookies + " cookie(s) in bank", statX + 10, statY + 72); //cookies in bank
            text(allTimeCookies + " cookie(s) baked (all time)", statX + 10, statY + 97); //all time cookie(s)
            text("CpS: " + CpS, statX + 10, statY + 118);  //CpS
            text("Buildings: " + buildings, statX + 10, statY + 139); //buildings
            text("Achievements (" + Achieves.length + "/" + (Object.keys(Achieved).length - 1) + "): " + Achieves, statX + 10, statY + 160); //I use all of these .length functions so that I can easily track how many Achievements you have to how many total are in the game. Also thanks to KA user "Kopter Coding" for the help with the total achievement count (with the Object.keys() part.) 
