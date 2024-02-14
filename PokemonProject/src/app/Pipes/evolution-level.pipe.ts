import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evolutionLevel'
})
export class EvolutionLevelPipe implements PipeTransform {

    transform(weightValue: number): string {
      if (weightValue <= 10) {
        return "Basic Stage";
      } if (weightValue > 10 && weightValue < 70) {
        return "Middle Stage";
      }
      if (weightValue >= 70) {
        return "Fully Evolved"
      }
      else {
        return "Invalid";
      }
    }
}
