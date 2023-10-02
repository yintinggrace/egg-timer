/*TO DO:
    - Slider fade on sides
    - Selector based on slide position
    - Fonts
    - Font size
    - What data to send to Grace
    - Step 3 image
*/

let size;
let cookingDirection;

function renderStep1(){

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
    main.className='';
    main.classList.add("parameterSelectorMain");

    main.innerHTML = `
    <div class="wrapper">
        <h1>What size are your eggs?</h1>
        <div class="eggSize">
            <div class="eggSizeSlider">
                <div class="small">
                    <img src="./images/egg-size.png"></div>
                <div class="medium selected"><img src="./images/egg-size.png"></div>
                <div class="large"><img src="./images/egg-size.png"></div>
            </div>
            <h4>Medium</h4>
        </div>
        <button>Next</button>
    </div>
    `;

    let eggSizeSlider = main.querySelector(".eggSizeSlider");
    //let scrollDistance = eggSizeSlider.scrollLeft;

    eggSizeSlider.addEventListener("scroll", sizeSelector);
    function sizeSelector(event){
       // let eggSizeSlider = main.querySelector(".eggSizeSlider");
        let scrollDistance = eggSizeSlider.scrollLeft;
        console.log(scrollDistance);
        scrollDistanceNum = Number(scrollDistance);

        if(scrollDistanceNum === 0 || scrollDistanceNum < 90){
            size = "Small";
        }else if(scrollDistanceNum >= 90){
            size = "Medium";
        }

        main.querySelector("h4").textContent = size;
    }


    //Collecting data of egg size
    selected = main.querySelector(".selected");
    let selectedClassName = selected.className;
    if(selectedClassName.includes("medium")){
        size = "medium";
    }else if(selectedClassName.includes("small")){
        size = "small";
    }else if(selectedClassName.includes("large")){
        size = "large";
    }
    

    document.querySelector(".parameterSelectorMain button").addEventListener("click", renderStep2)
}

function renderStep2(){
    let header = document.querySelector("header");
    header.querySelector(".animation").classList.remove("start-home");
    header.querySelector(".animation").classList.add("start-step2");
    header.querySelector(".step1").addEventListener("click", renderStep1);


    let main = document.querySelector("main");
    
    main.innerHTML = `
    <div class="wrapper">
        <h1>How would you like your eggs?</h1>
        <div class="eggCookingInstructions">
            <div class="eggCookSlider">
                <div class="soft">
                    <img src="./images/egg-soft.png"></div>
                <div class="medium selected"><img src="./images/egg-medium.png"></div>
                <div class="hard"><img src="./images/egg-hard.png"></div>
            </div>
            <h4>Medium</h4>
        </div>
        <button>Next</button>
    </div>`


    let eggCookSlider = main.querySelector(".eggCookSlider");
    //let scrollDistance = eggSizeSlider.scrollLeft;

    eggCookSlider.addEventListener("scroll", cookSelector);
    function cookSelector(event){
       // let eggSizeSlider = main.querySelector(".eggSizeSlider");
        let scrollDistance = eggCookSlider.scrollLeft;
        console.log(scrollDistance);
        scrollDistanceNum = Number(scrollDistance);

        if(scrollDistanceNum === 0 || scrollDistanceNum < 90){
            size = "Soft";
        }else if(scrollDistanceNum >= 90){
            size = "Medium";
        }

        main.querySelector("h4").textContent = size;
    }

    
     //Collecting data of cooking instructions
     selected = main.querySelector(".selected");
     let selectedClassName = selected.className;
     if(selectedClassName.includes("medium")){
         cookingDirection = "medium";
     }else if(selectedClassName.includes("soft")){
         cookingDirection = "soft";
     }else if(selectedClassName.includes("hard")){
         cookingDirection = "hard";
     }

    document.querySelector(".parameterSelectorMain button").addEventListener("click", renderStep3)


}

function renderStep3(){
    let header = document.querySelector("header");
    header.querySelector(".animation").classList.remove("start-home");
    header.querySelector(".animation").classList.add("start-step3");
 
    let main = document.querySelector("main");
    
    main.innerHTML = `
    <div class="wrapper">
        <h1>Make sure the water is boling before you start the timer</h1>
        <button>Ready</button>
    </div>`

    let parameters = {
        size: size,
        cookingDirection: cookingDirection,
    }
}


/*
var scrollDistance = function(callback){
    if(!callback || typeof callback !== 'function') return;

    var isScrolling, start, end, distance;

    window.addEventListener('scroll', function (event){
        if (!start) {
			start = window.pageYOffset;
		}

        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(function() {
			
            // Calculate distance
			end = window.pageYOffset;
			distance = end - start;

			// Run the callback
			callback(distance, start, end);

            // Reset calculations
			start = null;
			end = null;
			distance = null;

		}, refresh || 66);

    }, false);
}*/