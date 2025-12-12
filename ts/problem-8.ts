{
    //


    class Car {

        brand: string;
        model: string;
        year: number;

        constructor(brand: string, model: string, year: number) {
            this.brand = brand;
            this.model = model;
            this.year = year;

        };

        carInfo(): string {
            const returnMessage = `Your car model is: ${this.brand} ${this.model} (${this.year})`;
            console.log(returnMessage);
            return returnMessage;
        }
    }

    const myCar = new Car("Toyota", "Camry", 2023);
    const PHCar = new Car("Honda", "Camry", 2023);
    myCar.carInfo();
    PHCar.carInfo();
}