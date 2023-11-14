import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  classOptions = [
    {
      value: 335,
      label: "Freshman",
    },
    {
      value: 305,
      label: "Sophomore/Junior",
    },
    {
      value: 225,
      label: "Senior",
    },
  ];
  // We will add in the code to use these functions.
  // swipesPerWeek = () => {
  //   let finalDate = new Date("12/10/2023");
  //   let startDate = new Date(); // return today's date
  //   let diff = finalDate.getTime() - startDate.getTime();
  //   let diffWeeks = diff / (1000 * 60 * 60 * 24 * 7);
  //   return Math.floor((this.numClassStanding - this.swipesUsed) / diffWeeks);
  // };

  // calculateExpectedMealsUsed = () => {
  //   let currDate = new Date();
  //   let startDate = new Date("08/19/2023");
  //   let diff = currDate.getTime() - startDate.getTime();
  //   let elapsedDays = diff / (1000 * 24 * 60 * 60);
  //   // note: there are 113 days per semester.
  //   return Math.floor((elapsedDays / 113.0) * this.numClassStanding);
  // };

}
