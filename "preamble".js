/*
            this effect doesn't work properly on mobile devices, sorry mobile players:

              _______
             /       \
            |  *   *  |
            |    *    |
             \_______/ 
        
        __     ___           __        
       |      /   \    |  / |            
       |__   /     \   | /  |__          
       |    |-------|  | \  |            
       |    |       |  |  \ |__       
       
        __   ___    ___         __ __    __
       |    |   |  |   |  |  /    |     |
       |    |   |  |   |  | /     |     |__
       |    |   |  |   |  | \     |     |
       |__  |___|  |___|  |  \  __|__   |__
       
        __         __ __   __          __    __
       |    |        |    |     |  /  |     |  |
       |    |        |    |     | /   |__   |__|
       |    |        |    |     | \   |     | \
       |__  |____  __|__  |__   |  \  |__   |  \
       
    
    A JAYDAR STUDIOS GAME
    
    FAKE COOKIE CLICKER DEFINITIVE EDITION, COPYRIGHT 2022, JAYDAR STUDIOS, INC.
*/   
/**
    PATCH NOTES:
    
        V0.00054 (Gigantamax Evolve-able Grandmas): I added an upgrade for the Grandma.
    
        V0.000532 (Futureproofing Update): As I'm worried of not being able to see all of the achievements, a way to see them all was added, for futureproofing.
    
        V0.000531 (Summer(-ish) Cleaning Update): Cleaned up a bit of code, more specifically, adding some sub-objects into the GameFunctions object, moving some functions into the same object, and making the first ever officially-named update! (also edited the patch notes for the previous update.)
    
        V0.00053: Added some cheats, and the first ever Shadow Achievement (hint: try a 'le hack'.)
    
        V0.000522: Added a couple achievements.
    
        V0.000521: Fixed a bug with the cursor.
    
        V0.00052: Added a lot more achievements (more specifically 5), along with a bit more clarification to the "Achievs" object.
    
        V0.000513: Added a "Speedrunner's Guide".
    
        V0.000512: Fixed a bug with the "Won't Budge" achievement where you could get it multiple times and fixed a bug where you might not get cookie achievements if you ran the game in the background.
    
        V0.000511: Fixed an extremely small bug with the "Can We Fix It?" Achievement.
    
        V0.00051: Fixed the Grandma (in multiple ways).
    
        V0.0005: Added Grandma and an extra Achieveeement.
    
        V0.00045: Added acheivements.
    
        V0.00044: Added upgrades for cursors.
    
        V0.00043: Added the fist upgrade of many to come, that upgrade being an upgrade to the cookie clicks.
    
        V0.000421: Added graphics for a prototype upgrade for cookie clicks
    
        V0.00042: Added the info board (kinda)
    
        V0.00041: Made cursors appear underneath the big cookie
    
        V0.0004: FINALLY FINISHED THE CURSOR (kinda, I need to add it underneath the cookie and add info when the buy icon is hovered over, but still!)
    
        V0.00031: Added more graphics for when I actually implement the cursor and changed to a version number rather than a prototype number
    
        V0.00030 (prototype 3): Tried to do more work, ended up doing about nothing
    
        V0.00025 (prototype 2.5): Added a rectangle
    
        V0.00020 (prototype 2): Finished the chips
    
        V0.00010 (prototype 1): Original prototype release

*/

/*
    To do (most important to least important):
    
    Add saving
    
    Fix the big cookie's hitbox to make it a circle
    
    Add SFX
    
    Once the info board is added, I need to make sure the cookie count text doesn't overlap with the info board.
    
    Add the news ticker
    
    Add particles
    
    Add bulk buying
    
    Add debug features
    
    Maybe create a seperate website for this game????? (I'm kinda limited in Khan Academy)
*/

/*
    DONE (oldest to latest):
    
    Finish the Cursor    
    
    Add the info board (sorta)
    
    Added an upgrade for clicking the cookie! (HERE COMES THE HYPE TRAIN!!!!!!!!!!!!!!)
    
    Added an upgrade for the cursor (THOMAS THE HYPE TRAIN LEVELS OF HYPE)

*/

/**
    And now, the offical speedrunner's guide to DE speedruns, made by Jaydar:
    
        SPEEDRUN CATEGORIES:
    
    10K cookies (earn 10 thousand cookies all-time w/o messing with the code.)
    
    1M cookies (earn 1 million cookies all-time w/o messing with the code.)
    
    All Achievements (Earn every achievement in the game w/o messing with the code.)
    
        SUBCATEGORIES:
    
    Any% (beating that category in any way, while still obeying the main category's rules)
    
    Low click% (beating that category while clicking the cookie the least amount of times)
    
    
        CATEGORY EXSTENSIONS:
    
    ACE (Messing with the game's code to get to 1 Million cookies. Cookie clicks are NOT ALLOWED!)
    
    short% (An extremely short run where you have to get these achievements: "Bakeginner", "Nice try", and "Won't Budge!")
    
    timetravel% (A run where you have to get 10 cookies in every version of the game.)
    
    
    That's it; enjoy running these categories soon!
    
    NOTE: Speedrun leaderboards on speedrun.com aren't ready yet, but you can still record speedruns in advance.
**/
/**
        FEATURES:
    
    - A big cookie
    
    - Buyable Cursors and Grandmas
    
    - Upgrades
    
    - Stats
    
    - Achievements
    
    - Cookies
    
    - And soon enough, speedrun.com leaderboards(?)! (The future for speedrun leaderboards are uncertain right now.)
    
/**
                CREDITS:
Cookie clicker is by Orteil, I have his thanks for this project, as it's his concept.

Fake Cookie clicker and Fake Cookie Clicker: Definitive Edition by me, copyright 2021 - 2022.

Code is by me, unless I say "This code is by (so and so)."
Graphics are by me.
*/
