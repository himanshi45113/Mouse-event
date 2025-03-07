const containerE1 = document.querySelector(".container");



window.addEventListener("mousemove", (event) =>{
       containerE1.innerHTML = `
            <div class="mouse-event">
            ${event.clientX}
            
                <h3>Mouse X Prosition(px)</h3>
            </div>

           <div class="mouse-event">
           ${event.clientY}
              <h3>Mouse Y Prosition(px)</h3>
          </div>
       
       
       `
})

    

