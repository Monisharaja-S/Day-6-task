// write a class to calculate the uber price.

class uber {
    constructor(customerName,location,date,price)
    {
        this.customerName=customerName;
        this.location=location;
        this.date=date;
        this.price=price;
    }
    getuberbooking()
    {
        var location = this.location;
        var distancetraveledKM=0;
        var costPerKM = 50;
        var GST=2;
        if(location == "Salem")
        {
            distancetraveledKM = 80;
        }
        else if(location == "Trichy")
        {
            distancetraveledKM = 300;
        }
        this.price= (GST+(costPerKM*distancetraveledKM));
        return `Dear ${this.customerName}, 
        Your booking to reach "${this.location}" on ${this.date} will cost you RS. ${this.price}`

    }
}
var cab=new uber("Varunvijay","Salem","Nov 28,2023","");
console.log(cab.getuberbooking());