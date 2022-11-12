import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  defaultImage : string = "assets/images/stou.jpg"
  transform(image: string): string {
    if(image.split(".")[0].trim().length == 0 || !["jpeg","png","gif","jpg"].includes(image.split(".")[1]))
      return this.defaultImage
    else
      return image
  }

}
