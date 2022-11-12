import {Injectable} from '@angular/core';
import {Cv} from "../Model/Cv";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  cvEmbauche: Cv[] = []

  addCvEmbauche(cv: Cv) {
    if (this.cvEmbauche.indexOf(cv) != -1) {
      this.toastr.error("Cv deja embauche")
    }
    else {
      this.toastr.success("Cv embauche")
      this.cvEmbauche.push(cv)
    }
  }

  getCvsEmbauche(): Cv[] {
    return this.cvEmbauche
  }

  constructor(private toastr : ToastrService) {
  }
}
