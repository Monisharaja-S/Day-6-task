class person{
    constructor(name,place,qualification,percent,year)
    {
             this.name = name;
             this.place = place;
             this.qualification = qualification;
             this.percent = percent;
             this.year = year;
    }
    getdetail()
   {
  return `Hello, I am ${this.name} from ${this.place}. I had competed ${this.qualification} with ${this.percent} percentage in ${this.year}.`
   }
}
var detail=new person("Raja","Cuddalore","Engineering","85","2021");
console.log(detail.getdetail());