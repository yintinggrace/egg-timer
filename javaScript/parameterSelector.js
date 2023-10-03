/*TO DO:
    Trdje akten:
    - Is opens sans a good font?
    - Yellow button color
*/

let parameters = {
    size: "",
    cookingDirection: "",
}

function renderStep1(){
    let size = "medium";
    let scrollDistanceNum;

    let header = document.querySelector("header");
    header.classList.add("navigationHeader");

    header.innerHTML = `
        <nav id="navigation">
            <a class="step1 selected" href"#">STEP 1</a>
            <a class="step2" href"#">STEP 2</a>
            <a class="step3" href"#">STEP 3</a>
            <div class="animation start-home"></div>
        </nav>
    `;

    header.querySelector(".step2").addEventListener("click", renderStep2);
    header.querySelector(".step3").addEventListener("click", renderStep3);

    let main = document.querySelector("main");
    main.className = '';
    main.classList.add("parameterSelectorMain");

    main.innerHTML = `
        <div class="wrapper">
            <h1>What size are your eggs?</h1>
            <div class="eggSize">
                <div class="eggSizeSlider">
                    <div class="egg small">
                        <img src="./images/egg-size.png">
                    </div>
                    <div class="egg medium selected">
                        <img src="./images/egg-size.png">
                    </div>
                    <div class="egg large">
                        <img src="./images/egg-size.png">
                    </div>
                </div>
                <h4>Medium</h4>
            </div>
            <button class="buttonNext">Next</button>
        </div>
    `;

    let eggSizeSlider = main.querySelector(".eggSizeSlider");
    eggSizeSlider.addEventListener("scroll", sizeSelector);
    eggSizeSlider.addEventListener("scroll", scrollHandler);

    setTimeout(() =>{
        eggSizeSlider.scrollTo({
            top:0,
            left: 155,
            behavior: "smooth",
        })
    }, 200);

    //Select egg size based on scroll position
    function sizeSelector(event){
        let scrollDistance = eggSizeSlider.scrollLeft;
        scrollDistanceNum = Number(scrollDistance);

        if(scrollDistanceNum === 0 || scrollDistanceNum < 85){
            size = "Small";
        }else if(scrollDistanceNum >= 85 && scrollDistance < 220){
            size = "Medium";
        }else{
            size = "Large";
        }

        main.querySelector("h4").textContent = size;
    }

    //Fade egg images based on scroll position
    function scrollHandler(){
        var smallEgg = document.querySelector(".small");
        var mediumEgg = document.querySelector(".medium");
        var largeEgg = document.querySelector(".large");

        fadeOnScrollLeft(smallEgg);
        fadeOnScrollRight(largeEgg);

        if(scrollDistanceNum < 120){
            fadeOnScrollRight(mediumEgg);
        }else{
            fadeOnScrollLeft(mediumEgg);
        }
    }

    //Fade on left side
    function fadeOnScrollLeft(egg){
        let distanceToLeft = window.pageXOffset + egg.getBoundingClientRect().left;
        let elementWidth = egg.offsetWidth;
        let scrollLeft = document.documentElement.scrollLeft;

        let opacity = 1;
        if(scrollLeft > (distanceToLeft - 400)){
            opacity = .1 - (scrollLeft - distanceToLeft) / elementWidth;
        }

        if(opacity >= 0){
            egg.style.opacity = opacity;
        }
    }

    //Fade on right side
    function fadeOnScrollRight(egg){
        let distanceToRight = window.innerWidth - (egg.getBoundingClientRect().left + egg.offsetWidth);
        let elementWidth = egg.offsetWidth;
        let scrollLeft = document.documentElement.scrollLeft;

        let opacity = 1;
        if(scrollLeft > (distanceToRight - 200)){
            opacity = .4 - (scrollLeft - distanceToRight) / elementWidth;
        }

        if(opacity >= 0){
            egg.style.opacity = opacity;
        }
    }

    document.querySelector(".parameterSelectorMain .buttonNext").addEventListener("click", saveData);
    function saveData(){
        parameters.size = size;
        renderStep2();
    }
}

function renderStep2(){
    let cookingDirection = "medium";
    let scrollDistanceNum;

    //Select step 2 in navigation menu
    let header = document.querySelector("header");
    header.querySelector(".animation").classList.remove("start-home");
    header.querySelector(".animation").classList.remove("start-step3");
    header.querySelector(".animation").classList.add("start-step2");
    header.querySelector(".step1").addEventListener("click", renderStep1);

    header.querySelector(".step2").classList.add("selected");
    header.querySelector(".step1").classList.remove("selected");
    header.querySelector(".step3").classList.remove("selected");

    let main = document.querySelector("main");

    main.innerHTML = `
        <div class="wrapper">
            <h1>How would you like your eggs?</h1>
            <div class="eggCookingInstructions">
                <div class="eggCookSlider">
                    <div class="soft">
                        <img src="./images/egg-soft.png">
                    </div>
                    <div class="medium selected">
                        <img src="./images/egg-medium.png">
                    </div>
                    <div class="hard">
                        <img src="./images/egg-hard.png">
                    </div>
                </div>
                <h4>Medium</h4>
            </div>
            <button class="buttonNext">Next</button>
        </div>
    `;


    let eggCookSlider = main.querySelector(".eggCookSlider");
    eggCookSlider.addEventListener("scroll", cookSelector);
    eggCookSlider.addEventListener("scroll", scrollHandler);

    setTimeout(() =>{
        eggCookSlider.scrollTo({
            top:0,
            left: 180,
            behavior: "smooth",
        })
    }, 100)

    function cookSelector(event){
        let scrollDistance = eggCookSlider.scrollLeft;
        scrollDistanceNum = Number(scrollDistance);

        if(scrollDistanceNum === 0 || scrollDistanceNum < 90){
            cookingDirection = "Soft";
        }else if(scrollDistanceNum >= 90 && scrollDistanceNum < 250 ){
            cookingDirection = "Medium";
        }else{
            cookingDirection = "Hard";
        }

        main.querySelector("h4").textContent = cookingDirection;
    }

    //Fade egg images based on scroll position
    function scrollHandler(){
        var softEgg = document.querySelector(".soft");
        var mediumEgg = document.querySelector(".medium");
        var hardEgg = document.querySelector(".hard");

        fadeOnScrollLeft(softEgg);
        fadeOnScrollRight(hardEgg);

        if(scrollDistanceNum < 120){
            fadeOnScrollRight(mediumEgg);
        }else{
            fadeOnScrollLeft(mediumEgg);
        }
    }

    //Fade on left side
    function fadeOnScrollLeft(egg){
        let distanceToLeft = window.pageXOffset + egg.getBoundingClientRect().left;
        let elementWidth = egg.offsetWidth;
        let scrollLeft = document.documentElement.scrollLeft;

        let opacity = 1;
        if(scrollLeft > (distanceToLeft - 100)){
            opacity = .9 - (scrollLeft - distanceToLeft) / elementWidth;
        }

        if(opacity >= 0){
            egg.style.opacity = opacity;
        }
    }

    //Fade on right side
    function fadeOnScrollRight(egg){
        let distanceToRight = window.innerWidth - (egg.getBoundingClientRect().left + egg.offsetWidth);
        let elementWidth = egg.offsetWidth;
        let scrollLeft = document.documentElement.scrollLeft;

        let opacity = 1;
        if(scrollLeft > (distanceToRight - 100)){
            opacity = .9 - (scrollLeft - distanceToRight) / elementWidth;
        }

        if(opacity >= 0){
            egg.style.opacity = opacity;
        }
    }

    document.querySelector(".parameterSelectorMain .buttonNext").addEventListener("click", saveData);
    function saveData(){
        parameters.cookingDirection = cookingDirection;
        renderStep3();
    }
}

function renderStep3(){
    //Select step 3 in header
    let header = document.querySelector("header");
    header.querySelector(".animation").classList.remove("start-home");
    header.querySelector(".animation").classList.add("start-step3");
    header.classList.add("navigationHeader");

    header.querySelector(".step3").classList.add("selected");
    header.querySelector(".step2").classList.remove("selected");
    header.querySelector(".step1").classList.remove("selected");

    let main = document.querySelector("main");

    main.innerHTML = `
        <div class="wrapper">
            <h1 class="longHeading">Make sure the water is boiling before you start the timer</h1>
            <div class="cookingPotImg"></div>
            <button class="buttonReady">Ready</button>
        </div>
    `;

    let readyButton = document.querySelector(".wrapper .buttonReady");
    readyButton.addEventListener("click", () => renderTimer(parameters));
}

