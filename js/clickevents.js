AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const entity = document.querySelector('#animated-model');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                
                // every click, we make our model grow in size
                entity.setAttribute('scale', scale);
            }
        });
}});



const info = [
    {
        id:"0",
        title: '<strong>Light Maintaince</strong>',
        text: 'It’s basic, but give your car a once-over periodically so you catch anything that looks out of the ordinary. Make sure all your lights are working. Check the air pressure in your tires every month or so (and buy a cheap tire air pressure gauge and keep it in the glove compartment). Doing so is good for your tires, gets you '
    },
        {

        id:"1",
        title: '<strong>Fluid Check</strong>',

        text: 'Learn to check your fluids. Even if you don’t ever learn how to change your antifreeze, power steering, coolant, or even your wiper fluid (although seriously, don’t let someone charge you to change wiper fluid), you should learn how to check those fluid levels. In some cases, you can see the tank level directly, but most have gauges or dipsticks you can pull out to check current l '

    },
    {
        id:"2",
        title: '<strong>Timing Belt</strong>',

        text: 'Inspect and get your timing and serpentine belts replaced when necessary. Many people will tell you to get your timing belt replaced every 60,000 miles or so, and your serpentine belt replaced every 40,000 miles, give or take. Again, your owner’s manual will offer real numbers for your type of vehicle. If you can’t find the manual, look around online.'

    },

    {
        id:"3",
        title: '<strong>Oil Change</strong>',

        text: 'Check your oil and get it changed regularly. Whether your car has a dipstick to check the oil’s color and oil level or the dipstick has been replaced with an electronic gauge, you should know how to check it. Knowing the difference between clean oil and muddy, murky oil will save you a ton on unnecessary changes and gives you a way to tell if something’s wrong with your engine (e.g. the oil looks terrible but you just had it changed). '
    },
    {
        id:"4",
        title: '<strong>Battery Check</strong>',

        text: 'Check your battery and clean the contacts (if necessary). Most batteries these days don’t require much in the way of maintenance, but you should know where it is and check it to make sure it’s not leaking and there’s no mineral or other buildup on the contacts. If there is, clean it off with a battery cleaning brush. It will set you back a couple of bucks at any auto parts or department store.'

    },
    {
        id:"5",
        title: '<strong>Windshield Check</strong>',

        text: 'Replace your windshield wipers when the view gets streak-y. It may seem silly, but I’ve known several people who just ignored their wipers until they got them replaced as part of a bigger job. Wipers are cheap and easy to replace yourself. Don’t wait until you can barely see through your windshield. Your visibility is im'

    },



]

// Component to change to a sequential color on click.
AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var lastIndex = -1;
      var COLORS = ['red', 'green', 'blue'];
      this.el.addEventListener('click', function (evt) {
        lastIndex = (lastIndex + 1) % COLORS.length;
        this.setAttribute('material', 'color', COLORS[lastIndex]);
        console.log('I was clicked at: ', evt.detail.intersection.point);
        let id = evt.target.id

        document.getElementById('info').style.height = '150px'
        document.getElementById('close').style.display = 'inline'

        // document.getElementById('console')
        switch(id) {
            case "0":
                document.getElementById('console').innerHTML = info[0].title + '<br/>' + info[0].text
                break;
            case "1":
            document.getElementById('console').innerHTML = info[1].title + '<br/>' + info[1].text
            break;
            case "2":
            document.getElementById('console').innerHTML = info[2].title + '<br/>' + info[2].text
            break;
            case "3":
            document.getElementById('console').innerHTML = info[3].title + '<br/>' + info[3].text
            break;  
            case "4":
            document.getElementById('console').innerHTML = info[4].title + '<br/>' + info[4].text
            break;
            case "5":
            document.getElementById('console').innerHTML = info[5].title + '<br/>' + info[5].text
            break;   
            default: 
                break;                           
        }

      });
    }
  });