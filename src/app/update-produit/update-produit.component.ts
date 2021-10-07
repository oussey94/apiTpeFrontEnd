import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

  currentProduit  = new Produit();

  constructor(private activatedRoute: ActivatedRoute, private router:Router , private produitService: ProduitService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    //this.currentProduit=this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id);
    //console.log(this.currentProduit);
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id)
    .subscribe(prod => {this.currentProduit = prod});

  }

  updateProduit(){
    console.log(this.currentProduit);
   /* //console.log(this.currentProduit);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(["produits"]);*/
    this.produitService.updateProduit(this.activatedRoute.snapshot.params.id,this.currentProduit).subscribe(prod => {
      this.router.navigate(["/produits"]);
    },
    (error) => { alert("Probléme lors de la modification !"); }
    );

  }

}
