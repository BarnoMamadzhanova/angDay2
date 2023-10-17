
 interface ICars{
  type: string;
  fuel: string;
  initialPrice: number;
  leaseTerm: number;
  image?: string;
  seats?: number;
  calcPrice: Function;
}

export let carsArray : ICars[] = [];

class Cars {
    type: string;
    fuel: string;
    initialPrice: number;
    image: string;
    leaseTerm: number;

    constructor(type: string, fuel: string, initialPrice: number, image: string, leaseTerm: number){
        this.type = type;
        this.fuel = fuel;
        this.initialPrice = initialPrice;
        this.image = image;
        this.leaseTerm = leaseTerm;
        carsArray.push(this);
    }

    calcPrice(): number {
        return this.initialPrice 
    }

}



let car1 = new Cars("Economy", "Petrol", 50, "https://inv.assets.ansira.net/RTT/Chevrolet/2022/5611453/default/ext_G5J_deg01.jpg", 1);
let car2 = new Cars("Mid-segment",  "Petrol", 70, "https://cdn.pixabay.com/photo/2018/04/09/22/07/car-3305699_1280.jpg", 1);
let car3 = new Cars("Business", "Petrol AI-95", 100, "https://cdn.pixabay.com/photo/2018/05/20/23/36/mercedes-3417100_1280.jpg", 1);
let car4 = new Cars("Truck", "Diesel", 120, "https://i.pinimg.com/originals/e9/96/fa/e996fab651efcf82c38902eaa7611de1.jpg", 1);


// console.log(carsArray);

// class SUV extends Cars{
//     seats: number;
//     constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string, seats: number){
//         super(name, model, year, fuel, initialPrice, mileage, image)
//         this.seats = seats;
//     }

// }

// class Sport extends Cars{
//     seats: number;
//     constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string, seats: number){
//         super(name, model, year, fuel, initialPrice, mileage, image)
//         this.seats = seats;
//     }


// }

// class Motorbikes extends Cars{
//     seats: number;
//     constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string, seats: number){
//         super(name, model, year, fuel, initialPrice, mileage, image)
//         this.seats = seats;
//     }


// }

// class Trucks extends Cars{
//     seats: number;
//     weight: number; 

//     constructor(name: string, model: string, year: number, fuel: string, initialPrice: number, mileage: number, image: string, seats: number, weight: number){
//         super(name, model, year, fuel, initialPrice, mileage, image)
//         this.seats = seats;
//         this.weight = weight
//     }

// }

// carsArray.forEach((car)=> {
//     let print = document.getElementById('print') as HTMLElement;
//     print.innerHTML += `
//     <div>
//         <div class="card card-fix">
//             <img src="${car.image}" class="card-img-top img" alt="${car.name}">
//             <div class="card-body">
//                 <h4 class="card-title">${car.name} ${car.model}</h4>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item">Year: ${car.year}</li>
//                     <li class="list-group-item">Fuel: ${car.fuel}</li>
//                     <li class="list-group-item">Mileage: ${car.mileage}</li>
//                     <li class="list-group-item">Number of seats: ${car.seats}</li>
//                     <li class="list-group-item">Weight: ${car.weight}</li>
//                 </ul>
//                 <a class="btn btn-dark" data-bs-toggle="collapse" href="#${car.name}" role="button" aria-expanded="false" aria-controls="collapseExample"">Check the price</a>
//                 <div class="collapse my-2" id="${car.name}">
//                     <div class="card card-body">
//                        ${car.calcPrice()}$
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
// })

