import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit.model';
import {ProduitService} from '../services/produit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit= new Produit();
  message: string;

  constructor(private produitService: ProduitService, private router: Router) { }
 /* addProduit(){
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message="Produit "+this.newProduit.nomProduit+" ajouté avec succès !";
  }*/

  addProduit(){
    this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
      console.log(prod);
    });
    this.router.navigate(["produits"]).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
  }

}