window.addEventListener('DOMContentLoaded', function () {
      let dropZone = document.querySelector('#dropZone');
      let objects = document.querySelectorAll('#objectsZone > .objects');
      let box__1__item = document.querySelectorAll("#objectsZone .box__1__item");
      let box__2__item = document.querySelectorAll("#objectsZone .box__2__item");
      let box__3__item = document.querySelectorAll("#objectsZone .box__3__item");
      let box__4__item = document.querySelectorAll("#objectsZone .box__4__item");
      let box__5__item = document.querySelectorAll("#objectsZone .box__5__item");
      let box__6__item = document.querySelectorAll("#objectsZone .box__6__item");
      let box__7__item = document.querySelectorAll("#objectsZone .box__7__item");
      let box__8__item = document.querySelectorAll("#objectsZone .box__8__item");
      let box__9__item = document.querySelectorAll("#objectsZone .box__9__item");
      let box__10__item = document.querySelectorAll("#objectsZone .box__10__item");

      let infoLength = () => {
          let counter__one = box__1__item.length;
          let box__1_counter = document.querySelector(".box__1_counter");
          box__1_counter.innerHTML = `
          ${counter__one}
          `;
          let counter__two = box__2__item.length;
          let box__2_counter = document.querySelector(".box__2_counter");
          box__2_counter.innerHTML = `
          ${counter__two}
          `;
          let counter__three = box__3__item.length;
          let box__3_counter = document.querySelector(".box__3_counter");
          box__3_counter.innerHTML = `
          ${counter__three}
          `;
          let counter__four = box__4__item.length;
          let box__4_counter = document.querySelector(".box__4_counter");
          box__4_counter.innerHTML = `
          ${counter__four}
          `;
          let counter__five = box__5__item.length;
          let box__5_counter = document.querySelector(".box__5_counter");
          box__5_counter.innerHTML = `
          ${counter__five}
          `;
          let counter__six = box__6__item.length;
          let box__6_counter = document.querySelector(".box__6_counter");
          box__6_counter.innerHTML = `
          ${counter__six}
          `;
          let counter__seven = box__7__item.length;
          let box__7_counter = document.querySelector(".box__7_counter");
          box__7_counter.innerHTML = `
          ${counter__seven}
          `;
          let counter__eight = box__8__item.length;
          let box__8_counter = document.querySelector(".box__8_counter");
          box__8_counter.innerHTML = `
          ${counter__eight}
          `;
          let counter__nine = box__9__item.length;
          let box__9_counter = document.querySelector(".box__9_counter");
          box__9_counter.innerHTML = `
          ${counter__nine}
          `;
          let counter__ten = box__10__item.length;
          let box__10_counter = document.querySelector(".box__10_counter");
          box__10_counter.innerHTML = `
          ${counter__ten}
          `;
      }

  infoLength();


      // OBJECTS FUNCTIONS

      function dragStart (event) {
          event.dataTransfer.dropEffect = 'move';
          event.dataTransfer.setData('text', event.target.getAttribute('id'));
      }


      // DROP ZONE FUNCTIONS

      function dragOver (event) {
        event.preventDefault();
      }

      function ErrorDrop(el) {
        return el.scrollWidth > el.offsetWidth ||
          el.scrollHeight > el.offsetHeight;
      }

      function dragDrop (event) {
          event.preventDefault();
          let dropZone = document.querySelector('#dropZone');
          let elementID = event.dataTransfer.getData('text');
          let element = document.getElementById(elementID);
          dropZone.appendChild(element);
          //let dropZonee = document.querySelector("#dropZone");
          let objectsZone = document.querySelector("#objectsZone");

          if(ErrorDrop(event.target) == false) {

          }
          else if(ErrorDrop(event.target) == true){
            dropZone.removeChild(element);
            objectsZone.appendChild(element)
            alert("error");
            return false;
          }

          let offElement = () => {
            let objects = document.querySelectorAll("#dropZone  .objects");
            let objectsText = objects[objects.length - 1].textContent;
          
            objects[objects.length - 1].innerHTML = `
            ${objectsText}
            <span class="object__off">&times;</span>
            `;
          }
          offElement();

          let deletElemOne = () => {
            let box__1__item = document.querySelectorAll("#objectsZone  .box__1__item");
            let counter__one = box__1__item.length;
            let box__1_counter = document.querySelector(".box__1_counter");
            box__1_counter.innerHTML = `
            ${counter__one++}
            `;
          }
          let deletElemtwo = () => {
            let box__2__item = document.querySelectorAll("#objectsZone .box__2__item");
            let counter__two = box__2__item.length;
            let box__2_counter = document.querySelector(".box__2_counter");
            box__2_counter.innerHTML = `
            ${counter__two++}
            `;
          }

          let deletElemThree = () => {
            let box__3__item = document.querySelectorAll("#objectsZone  .box__3__item");
            let counter__three = box__3__item.length;
            let box__3_counter = document.querySelector(".box__3_counter");
            box__3_counter.innerHTML = `
            ${counter__three++}
            `;
          }
          let deletElemfour = () => {
            let box__4__item = document.querySelectorAll("#objectsZone .box__4__item");
            let counter__four = box__4__item.length;
            let box__4_counter = document.querySelector(".box__4_counter");
            box__4_counter.innerHTML = `
            ${counter__four++}
            `;
          }

          let deletElemFive = () => {
            let box__5__item = document.querySelectorAll("#objectsZone  .box__5__item");
            let counter__five = box__5__item.length;
            let box__5_counter = document.querySelector(".box__5_counter");
            box__5_counter.innerHTML = `
            ${counter__five++}
            `;
          }
          let deletElemSix = () => {
            let box__6__item = document.querySelectorAll("#objectsZone .box__6__item");
            let counter__six = box__6__item.length;
            let box__6_counter = document.querySelector(".box__6_counter");
            box__6_counter.innerHTML = `
            ${counter__six++}
            `;
          }

          let deletElemSeven = () => {
            let box__7__item = document.querySelectorAll("#objectsZone .box__7__item");
            let counter__seven = box__7__item.length;
            let box__7_counter = document.querySelector(".box__7_counter");
            box__7_counter.innerHTML = `
            ${counter__seven++}
            `;
          }
          let deletElemEight = () => {
            let box__8__item = document.querySelectorAll("#objectsZone  .box__8__item");
            let counter__eight = box__8__item.length;
            let box__8_counter = document.querySelector(".box__8_counter");
            box__8_counter.innerHTML = `
            ${counter__eight++}
            `;
          }

          let deletElemNine = () => {
            let box__9__item = document.querySelectorAll("#objectsZone .box__9__item");
            let counter__nine = box__9__item.length;
            let box__9_counter = document.querySelector(".box__9_counter");
            box__9_counter.innerHTML = `
            ${counter__nine++}
            `;
          }
          let deletElemTen = () => {
            let box__10__item = document.querySelectorAll("#objectsZone  .box__10__item");
            let counter__ten = box__10__item.length;
            let box__10_counter = document.querySelector(".box__10_counter");
            box__10_counter.innerHTML = `
            ${counter__ten++}
            `;
          }


          let deletedElement = () => {
            let object__off = document.querySelectorAll(".object__off");
            object__off.forEach((el) => {
              el.addEventListener("click", () => {
                let objectsZone = document.querySelector("#objectsZone");
                objectsZone.appendChild(el.parentNode);

                let objectsZoneObjects = document.querySelectorAll("#objectsZone .objects");
                let objectsZoneOff = document.querySelector("#objectsZone .object__off");
                objectsZoneObjects[objectsZoneObjects.length - 1].removeChild(objectsZoneOff);

                deletElemOne();
                deletElemtwo();
                deletElemThree();
                deletElemfour();
                deletElemFive();
                deletElemSix();
                deletElemSeven();
                deletElemEight();
                deletElemNine();
                deletElemTen();

                let countDropZone = document.querySelector(".count__elements");
                countDropZone.textContent--;
              })
            })
          }
          deletedElement();


          let countDropZoneEnlarge = () => {
              let countDropZone = document.querySelector(".count__elements");
              countDropZone.textContent++
          }
          countDropZoneEnlarge();



          let objectsZoneElementReduce = () => {
            let box__1__item = document.querySelectorAll("#objectsZone .box__1__item");
            let box__2__item = document.querySelectorAll("#objectsZone .box__2__item");
            let box__3__item = document.querySelectorAll("#objectsZone .box__3__item");
            let box__4__item = document.querySelectorAll("#objectsZone .box__4__item");
            let box__5__item = document.querySelectorAll("#objectsZone .box__5__item");
            let box__6__item = document.querySelectorAll("#objectsZone .box__6__item");
            let box__7__item = document.querySelectorAll("#objectsZone .box__7__item");
            let box__8__item = document.querySelectorAll("#objectsZone .box__8__item");
            let box__9__item = document.querySelectorAll("#objectsZone .box__9__item");
            let box__10__item = document.querySelectorAll("#objectsZone .box__10__item");

            let counter__one = box__1__item.length;
            let box__1_counter = document.querySelector(".box__1_counter");
            box__1_counter.innerHTML = `
            ${counter__one--}
            `;
  
            let counter__two = box__2__item.length;
            let box__2_counter = document.querySelector(".box__2_counter");
            box__2_counter.innerHTML = `
            ${counter__two--}
            `;

            let counter__three = box__3__item.length;
            let box__3_counter = document.querySelector(".box__3_counter");
            box__3_counter.innerHTML = `
            ${counter__three--}
            `;
            
    
            let counter__four = box__4__item.length;
            let box__4_counter = document.querySelector(".box__4_counter");
            box__4_counter.innerHTML = `
            ${counter__four--}
            `;
            
    
            let counter__five = box__5__item.length;
            let box__5_counter = document.querySelector(".box__5_counter");
            box__5_counter.innerHTML = `
            ${counter__five--}
            `;
            
    
            let counter__six = box__6__item.length;
            let box__6_counter = document.querySelector(".box__6_counter");
            box__6_counter.innerHTML = `
            ${counter__six--}
            `;
            
    
            let counter__seven = box__7__item.length;
            let box__7_counter = document.querySelector(".box__7_counter");
            box__7_counter.innerHTML = `
            ${counter__seven--}
            `;
            
    
            let counter__eight = box__8__item.length;
            let box__8_counter = document.querySelector(".box__8_counter");
            box__8_counter.innerHTML = `
            ${counter__eight--}
            `;
            
    
            let counter__nine = box__9__item.length;
            let box__9_counter = document.querySelector(".box__9_counter");
            box__9_counter.innerHTML = `
            ${counter__nine--}
            `;
            
    
            let counter__ten = box__10__item.length;
            let box__10_counter = document.querySelector(".box__10_counter");
            box__10_counter.innerHTML = `
            ${counter__ten--}
            `;
          }
          objectsZoneElementReduce();

        }
      // LISTENERS

      if ( objects ) {
          [].forEach.call(objects, function (el) {
              el.setAttribute('draggable', 'true');
              el.addEventListener('dragstart', dragStart, false);
          });
      }

      if ( dropZone ) {
          dropZone.addEventListener('dragover', dragOver);
          dropZone.addEventListener('drop',dragDrop);
      }

},false);
