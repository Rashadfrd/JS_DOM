let section = document.createElement("section");
section.id = "boxes"

let container = document.createElement("div");
container.className = "container"
container.setAttribute("style","display:flex; flex-wrap:wrap; padding: 3% 0")

let box_1 = document.createElement("div");
box_1.className = "box_1";
box_1.classList.add("col-lg-12");
box_1.classList.add("bg-dark");
box_1.classList.add("d-flex");
box_1.classList.add("align-items-center");
box_1.classList.add("justify-content-center");
box_1.classList.add("mb-5");
box_1.setAttribute("style","height:300px")

let box_2 = document.createElement("div");
box_2.className = "box_2";
box_2.classList.add("col-lg-4");
box_2.classList.add("d-flex");
box_2.classList.add("align-items-center");
box_2.classList.add("justify-content-center");
box_2.classList.add("flex-column")
box_2.setAttribute("style","height:38vh")

let box_3 = document.createElement("div");
box_3.className = "box_3";
box_3.classList.add("col-lg-4");
box_3.classList.add("d-flex");
box_3.classList.add("align-items-center");
box_3.classList.add("justify-content-center");
box_3.classList.add("flex-column")
box_3.setAttribute("style","height:38vh")

let box_4 = document.createElement("div");
box_4.className = "box_4";
box_4.classList.add("col-lg-4");
box_4.classList.add("d-flex");
box_4.classList.add("align-items-center");
box_4.classList.add("justify-content-center");
box_4.classList.add("flex-column")
box_4.setAttribute("style","height:38vh")

let inside_box_1 = document.createElement("div");
inside_box_1.className = "inside-box-1";
inside_box_1.classList.add("d-flex");
inside_box_1.classList.add("align-items-center");
inside_box_1.classList.add("justify-content-center");
inside_box_1.classList.add("text-white");
inside_box_1.innerHTML = "<span>960 x 360px</span>";
inside_box_1.setAttribute("style","font-size:50px")

let inside_box_2 = document.createElement("div");
inside_box_2.className = "inside-box-2";
inside_box_2.classList.add("d-flex");
inside_box_2.classList.add("align-items-center");
inside_box_2.classList.add("justify-content-center");
inside_box_2.classList.add("flex-column");
inside_box_2.classList.add("bg-dark");
inside_box_2.classList.add("text-white");
inside_box_2.setAttribute("style","font-size:40px; width:95%; height:60%");
inside_box_2.innerHTML = "<span>290 x 180px</span>"


let inside_box_3 = document.createElement("div");
inside_box_3.className = "inside-box-3";
inside_box_3.classList.add("d-flex");
inside_box_3.classList.add("align-items-center");
inside_box_3.classList.add("justify-content-center");
inside_box_3.classList.add("bg-dark");
inside_box_3.classList.add("text-white");
inside_box_3.setAttribute("style","font-size:40px; width:95%; height:60%");
inside_box_3.innerHTML = "<span>290 x 180px</span>"

let inside_box_4 = document.createElement("div");
inside_box_4.className = "inside-box-4";
inside_box_4.classList.add("d-flex");
inside_box_4.classList.add("align-items-center");
inside_box_4.classList.add("justify-content-center");
inside_box_4.classList.add("bg-dark");
inside_box_4.classList.add("text-white");
inside_box_4.setAttribute("style","font-size:40px; width:95%; height:60%");
inside_box_4.innerHTML = "<span>290 x 180px</span>"


let second_inside_box_2 = document.createElement("div");
second_inside_box_2.className = "second_inside-box-2";
second_inside_box_2.classList.add("pt-4");
second_inside_box_2.classList.add("text-secondary");
second_inside_box_2.setAttribute("style","width:95%;height: 40%")
second_inside_box_2.innerHTML = "<h5>Lorem ipsum dolor molor asadasda</h5><p>Lorem ipsum dolor molor asadasda orem ipsum dolor molor asadasda orem ipsum dolor molor asadasda orem ipsum dolor molor asadasda</p>"
let second_inside_box_3 = document.createElement("div");
second_inside_box_3.className = "second_inside-box-3";
second_inside_box_3.classList.add("pt-4");
second_inside_box_3.classList.add("text-secondary");
second_inside_box_3.setAttribute("style","width:95%;height: 40%")
second_inside_box_3.innerHTML = "<h5>Lorem ipsum dolor molor asadasda</h5><p>Lorem ipsum dolor molor asadasda orem ipsum dolor molor asadasda orem ipsum dolor molor asadasda orem ipsum dolor molor asadasda</p>"

let second_inside_box_4 = document.createElement("div");
second_inside_box_4.className = "second_inside-box-4";
second_inside_box_4.classList.add("pt-4");
second_inside_box_4.classList.add("text-secondary");
second_inside_box_4.setAttribute("style","width:95%;height: 40%")
second_inside_box_4.innerHTML = "<h5>Lorem ipsum dolor molor asadasda</h5><p>Lorem ipsum dolor molor asadasda orem ipsum dolor molor asadasda orem ipsum dolor molor asadasda orem ipsum dolor molor asadasda</p>"

document.body.append(section);
section.appendChild(container);

container.appendChild(box_1);
container.appendChild(box_2);
container.appendChild(box_3);
container.appendChild(box_4);

box_1.appendChild(inside_box_1);
box_2.appendChild(inside_box_2);
box_3.appendChild(inside_box_3);
box_4.appendChild(inside_box_4);

box_2.appendChild(second_inside_box_2);
box_3.appendChild(second_inside_box_3);
box_4.appendChild(second_inside_box_4);

console.log(section);