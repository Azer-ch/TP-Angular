import { Injectable } from '@angular/core';
import { Cv } from '../Model/Cv';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  cvEmbauche: Cv[] = [];

  addCvEmbauche(cv: Cv) {
    if (this.cvEmbauche.find((cvItem) => cvItem.id === cv.id)) {
      this.toastr.error('Cv deja embauche');
    } else {
      this.toastr.success('Cv embauche');
      this.cvEmbauche.push(cv);
    }
  }

  getCvsEmbauche(): Cv[] {
    return this.cvEmbauche;
  }

  removeCvsEmbauche(id: string) {
    const idx = this.cvEmbauche.findIndex((cv) => cv.id === id);
    if (idx !== -1) {
      this.cvEmbauche.splice(idx, 1);
    }
  }

  constructor(private toastr: ToastrService) {}
}
